import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT_DIR = path.resolve('src', 'imgs', 'photography');
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        entries.map(async (entry) => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) return walk(fullPath);
            return [fullPath];
        }),
    );
    return files.flat();
}

function isSupportedImage(filePath) {
    return IMAGE_EXTS.has(path.extname(filePath).toLowerCase());
}

async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const original = await fs.readFile(filePath);
    let pipeline = sharp(original, { failOn: 'none' }).rotate();

    if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true, progressive: true });
    } else if (ext === '.png') {
        pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 80 });
    } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 80, effort: 5 });
    } else {
        return { changed: false, before: original.length, after: original.length };
    }

    const optimized = await pipeline.toBuffer();
    if (optimized.length >= original.length) {
        return { changed: false, before: original.length, after: original.length };
    }

    await fs.writeFile(filePath, optimized);
    return { changed: true, before: original.length, after: optimized.length };
}

function bytesToMB(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2);
}

async function main() {
    const allPaths = await walk(ROOT_DIR);
    const imagePaths = allPaths.filter(isSupportedImage);

    if (imagePaths.length === 0) {
        console.log('No supported images found.');
        return;
    }

    let changedCount = 0;
    let totalBefore = 0;
    let totalAfter = 0;

    for (const imagePath of imagePaths) {
        const { changed, before, after } = await optimizeImage(imagePath);
        totalBefore += before;
        totalAfter += after;
        if (changed) {
            changedCount += 1;
            console.log(`optimized: ${path.relative(ROOT_DIR, imagePath)} (${bytesToMB(before)}MB -> ${bytesToMB(after)}MB)`);
        }
    }

    console.log('');
    console.log(`Processed ${imagePaths.length} images.`);
    console.log(`Optimized ${changedCount} images.`);
    console.log(`Total size: ${bytesToMB(totalBefore)}MB -> ${bytesToMB(totalAfter)}MB`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
