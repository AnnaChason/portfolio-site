import { useMemo, useState } from 'react';

type View = 'landing' | 'about' | 'projects' | string;
type FolderName = 'documentary' | 'landscapes' | 'portraits' | 'TakeMyLifeAndLetItBe' | 'TheFlowerFades';

type Project = {
    slug: string;
    folder: FolderName;
    title: string;
    description: string;
    images: PhotoAsset[];
    coverImage: string;
};

type PhotoAsset = {
    url: string;
    fileName: string;
};

const photoModules = import.meta.glob(
    [
        '../imgs/photography/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}',
        '!../imgs/photography/**/*-extra*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}',
    ],
    {
        eager: true,
        import: 'default',
    },
) as Record<string, string>;

const titleMap: Record<FolderName, string> = {
    documentary: 'Documentary',
    landscapes: 'Landscapes',
    portraits: 'Portraits',
    TakeMyLifeAndLetItBe: 'Take My Life and Let It Be',
    TheFlowerFades: 'The Flower Fades',
};

const descriptionMap: Record<FolderName, string> = {
    documentary:
        'This documentary focuses on 1 South, the floor where I live in Smith Traber residence halls. I sought to capture various facets of life and community in a dorm and the joys of doing even simple things like studying together.',
    landscapes:
        'For this project, I took pictures in 3 different locations: the suburbs of Wheaton, Illinois, Downtown Chicago, and Blackwell Forest Preserve. In the suburbs I focused on the blooming beauty and colors of spring. In Chicago, I wanted to emphasize the enormity of the city and how small a person feels looking out at the sea of skyscrapers. At Blackwell, my focus was on the human traces found in a place that is meant to be so natural.',
    portraits: "Through this project, I attempted to capture various aspects of my friend's and my personalities and interests.",
    TakeMyLifeAndLetItBe:
        'For this project, I was inspired by the hymn "Take My Life and Let it Be Consecrated," which is about dedicating our whole lives to Christ. This means even small chores like washing dishes, folding laundry, or doing homework can be a form of worship.',
    TheFlowerFades:
        'In this project, I sought to capture the fleetingness of beauty: no matter how hard we may try to freeze time, the grass withers and the flower fades (Isaiah 40:8).',
};

const folderOrder: FolderName[] = [
    'portraits',
    'landscapes',
    'documentary',
    'TakeMyLifeAndLetItBe',
    'TheFlowerFades',
];

const groupedByFolder = Object.entries(photoModules).reduce<Record<string, PhotoAsset[]>>((acc, [path, url]) => {
    const normalized = path.replace(/\\/g, '/');
    if (normalized.toLowerCase().includes('-extra')) {
        return acc;
    }
    const match = normalized.match(/\/photography\/([^/]+)\//);
    if (!match) {
        return acc;
    }
    const folder = match[1];
    const fileName = normalized.split('/').pop() ?? '';
    acc[folder] ??= [];
    acc[folder].push({ url, fileName });
    return acc;
}, {});

for (const folder in groupedByFolder) {
    groupedByFolder[folder].sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true }));
}

const miscImages = (groupedByFolder.misc ?? []).map((image) => image.url);
const portraitImages = (groupedByFolder.portraits ?? []).map((image) => image.url);

function findPhotoUrl(filenamePart: string): string | undefined {
    const needle = filenamePart.toLowerCase();
    return Object.entries(photoModules).find(([path]) => path.replace(/\\/g, '/').toLowerCase().includes(needle))?.[1];
}

/** Home landing: large hero = DSCF3500; top banner bg = DSCF4974; collage favors newer misc images. */
const landingFeatureImage = findPhotoUrl('DSCF4525');
const landingHeroImage = landingFeatureImage ?? findPhotoUrl('DSCF3500') ?? miscImages[0];
const topBannerBgImage = findPhotoUrl('DSCF4974');
const preferredLandingCollage = ['Chicago-7', '20260302-DSCF4460', 'DSCF3500', 'DSCF6267', 'DSCF6224', 'DSCF4986'];
const curatedLandingCollage = preferredLandingCollage
    .map((name) => findPhotoUrl(name))
    .filter((url): url is string => Boolean(url));
const landingCollageImages: string[] = [...new Set([...curatedLandingCollage, ...miscImages.filter((u) => u !== landingHeroImage && u !== landingFeatureImage)])].slice(0, 6);
const preferredAboutPortrait = Object.entries(photoModules).find(([path]) =>
    path.replace(/\\/g, '/').includes('/photography/portraits/ACSDOF.jpg'),
)?.[1];
const preferredProjectCovers: Partial<Record<FolderName, string>> = {
    portraits: findPhotoUrl('/photography/portraits/ACMB.jpg'),
    TakeMyLifeAndLetItBe: findPhotoUrl('/photography/TakeMyLifeAndLetItBe/Wiggins_WIP1-3259.jpg'),
    TheFlowerFades: findPhotoUrl('/photography/TheFlowerFades/Wiggins_WIP1-2939.jpg'),
    landscapes: findPhotoUrl('/photography/landscapes/Blackwell-3.jpg'),
    documentary: findPhotoUrl('/photography/documentary/10-OnTheHall.jpg'),
};

const photoProjects: Project[] = folderOrder
    .filter((folder) => (groupedByFolder[folder] ?? []).length > 0)
    .map((folder) => {
        const images = groupedByFolder[folder] ?? [];

        const orderedImages =
            folder === 'documentary'
                ? [...images].sort((a, b) => {
                      const aNum = Number(a.fileName.match(/^(\d+)/)?.[1] ?? Number.MAX_SAFE_INTEGER);
                      const bNum = Number(b.fileName.match(/^(\d+)/)?.[1] ?? Number.MAX_SAFE_INTEGER);
                      if (aNum !== bNum) return aNum - bNum;
                      return a.fileName.localeCompare(b.fileName, undefined, { numeric: true });
                  })
                : images;

        const coverImage =
            orderedImages.find((image) => {
                const lower = image.fileName.toLowerCase();
                // Best-effort "landscape-like" cover choice based on naming hints.
                return /(chicago|landscape|1south|dscf6|dscf59|dscf60|dscf65)/.test(lower);
            }) ?? orderedImages[0];

        return {
            slug: folder,
            folder,
            title: titleMap[folder],
            description: descriptionMap[folder],
            images: orderedImages,
            coverImage: preferredProjectCovers[folder] ?? coverImage?.url ?? '',
        };
    });

const landscapeSections = ['Chicago', 'Blackwell', 'SpringSuburbs'] as const;
const portraitSections = ['Abby', 'Chason', 'Lauren'] as const;

function getSectionLabel(project: Project, fileName: string): string {
    if (project.slug === 'landscapes') {
        return landscapeSections.find((section) => fileName.startsWith(section)) ?? 'Other';
    }
    if (project.slug === 'portraits') {
        if (fileName.toLowerCase().startsWith('sewing')) {
            return 'AC';
        }
        return portraitSections.find((section) => fileName.toLowerCase().startsWith(section.toLowerCase())) ?? 'Other';
    }
    return 'Gallery';
}

function orderSectionImages(project: Project, section: string, images: PhotoAsset[]): PhotoAsset[] {
    if (project.slug !== 'landscapes') {
        return images;
    }

    if (section === 'SpringSuburbs') {
        const order = ['SpringSuburbs-4', 'SpringSuburbs-2', 'SpringSuburbs-1', 'SpringSuburbs-3'];
        return [...images].sort((a, b) => {
            const aIdx = order.findIndex((prefix) => a.fileName.startsWith(prefix));
            const bIdx = order.findIndex((prefix) => b.fileName.startsWith(prefix));
            const aRank = aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx;
            const bRank = bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx;
            if (aRank !== bRank) return aRank - bRank;
            return a.fileName.localeCompare(b.fileName, undefined, { numeric: true });
        });
    }

    return images;
}

function AboutPage({ portraitImage }: { portraitImage?: string }) {
    return (
        <section className="mx-auto max-w-6xl px-2">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#4F6846]">About</p>
                        <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-6xl">Anna Chason Wiggins</h1>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-slate-800">Artist Statement</h2>
                        <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
                            Hi! My name is Anna Chason Wiggins, and I am a student at Wheaton College taking a Digital
                            Photography course. I am also a Christian, and my goal in my art is to always reflect Christ and show
                            the beauty of his creation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-slate-800">Contact</h2>
                        <p className="mt-3 text-lg text-slate-700">
                            Email:{' '}
                            <a className="text-[#4F6846] underline" href="mailto:chasonwiggins@gmail.com">
                                chasonwiggins@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <aside>
                    {portraitImage ? (
                        <img
                            src={portraitImage}
                            alt="Anna Chason Wiggins portrait"
                            className="h-auto w-full max-w-sm object-contain"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                    ) : (
                        <div className="flex h-72 w-full max-w-sm items-center justify-center bg-[#f4f7ef] text-sm text-slate-700">
                            Add a portrait image
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
}

function ProjectsHub({ projects, onOpen }: { projects: Project[]; onOpen: (slug: string) => void }) {
    return (
        <section className="mx-auto max-w-6xl -mx-2.5 px-2">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Projects</h2>
            <p className="mt-2 max-w-3xl text-slate-700">Select a project to open its dedicated page.</p>

            <div className="mt-8 space-y-10">
                {projects.map((project) => (
                    <button
                        key={project.slug}
                        className="mx-auto w-full max-w-4xl border-0 bg-transparent p-0 text-left transition hover:opacity-95"
                        onClick={() => onOpen(project.slug)}
                    >
                        <div className="w-full bg-[#E6EEDF] p-3 pb-16">
                            <img
                                src={project.coverImage}
                                alt={`${project.title} cover`}
                                className="h-[19rem] w-full object-contain md:h-[26rem]"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="mt-4">
                                <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#4F6846]">
                                    {project.images.length} image{project.images.length === 1 ? '' : 's'}
                                </p>
                            </div>
                        </div>
                        <div className="sr-only">
                            <p>
                                {project.images.length} image{project.images.length === 1 ? '' : 's'}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

function ProjectPage({ project, onBack }: { project: Project; onBack: () => void }) {
    const useSquareGrid = (project.slug === 'TakeMyLifeAndLetItBe' || project.slug === 'TheFlowerFades') && project.images.length === 4;
    const groupedSections =
        project.slug === 'landscapes' || project.slug === 'portraits'
            ? project.images.reduce<Record<string, PhotoAsset[]>>((acc, image) => {
                  const section = getSectionLabel(project, image.fileName);
                  acc[section] ??= [];
                  acc[section].push(image);
                  return acc;
              }, {})
            : null;
    const sectionOrder =
        project.slug === 'landscapes'
            ? [...landscapeSections, 'Other']
            : project.slug === 'portraits'
              ? [...portraitSections, 'Other']
              : [];

    return (
        <div className="py-2 pb-16">
            <section className="mx-auto max-w-6xl px-2">
            <div className="bg-[#E6EEDF] p-4 md:p-6">
            <button
                className="border-0 bg-transparent p-0 text-sm uppercase tracking-[0.2em] text-[#4F6846] underline"
                onClick={onBack}
            >
                Back to Projects
            </button>

            <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#4F6846]">
                    {project.images.length} image{project.images.length === 1 ? '' : 's'}
                </p>
                <h1 className="mt-2 text-4xl font-semibold text-slate-900 md:text-6xl">{project.title}</h1>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">{project.description}</p>
            </div>
            </div>

            {groupedSections ? (
                <div className="mt-8 space-y-8">
                    {sectionOrder
                        .filter((section) => (groupedSections[section] ?? []).length > 0)
                        .map((section) => {
                            const sectionImages = orderSectionImages(project, section, groupedSections[section]);
                            const useBlackwellGrid = project.slug === 'landscapes' && section === 'Blackwell' && sectionImages.length === 4;

                            return (
                                <div key={section} className="bg-[#E6EEDF] p-4 md:p-6">
                                    <h2 className="mb-4 text-xl font-semibold text-slate-900">{section}</h2>
                                    {useBlackwellGrid ? (
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            {sectionImages.map((image, idx) => (
                                                <figure key={`${project.slug}-${section}-${idx}`}>
                                                    <img
                                                        src={image.url}
                                                        alt={`${project.title} photo ${idx + 1}`}
                                                        className="h-auto w-full object-contain"
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </figure>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
                                            {sectionImages.map((image, idx) => (
                                                <figure key={`${project.slug}-${section}-${idx}`} className="mb-3 break-inside-avoid">
                                                    <img
                                                        src={image.url}
                                                        alt={`${project.title} photo ${idx + 1}`}
                                                        className="h-auto w-full object-contain"
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </figure>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                </div>
            ) : useSquareGrid ? (
                <div className="mt-8 bg-[#E6EEDF] p-4 md:p-6">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.images.map((image, idx) => (
                        <figure key={`${project.slug}-${idx}`}>
                            <img
                                src={image.url}
                                alt={`${project.title} photo ${idx + 1}`}
                                className="h-auto w-full"
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                    ))}
                    </div>
                </div>
            ) : (
                <div className="mt-8 bg-[#E6EEDF] p-4 md:p-6">
                    <div className={project.slug === 'documentary' ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3' : 'columns-1 gap-5 sm:columns-2 lg:columns-3'}>
                    {project.images.map((image, idx) => (
                        <figure key={`${project.slug}-${idx}`} className={project.slug === 'documentary' ? '' : 'mb-5 break-inside-avoid'}>
                            <img
                                src={image.url}
                                alt={`${project.title} photo ${idx + 1}`}
                                className="h-auto w-full object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                    ))}
                    </div>
                </div>
            )}
            </section>
        </div>
    );
}

function LandingPage({ heroImage, collage }: { heroImage?: string; collage: string[] }) {
    return (
        <section className="mx-auto max-w-6xl px-2">
            <div className="space-y-6 bg-[#E6EEDF] p-4 md:p-6">
                {heroImage ? (
                    <img
                        src={heroImage}
                        alt="Photography hero"
                        className="max-h-[38rem] w-full object-contain grayscale"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                    />
                ) : (
                    <div className="flex h-80 w-full items-center justify-center bg-[#CFE0C6]/60 text-slate-700">Add a hero image in misc</div>
                )}
                <p className="max-w-2xl text-lg text-slate-800">
                    A collection of portraits, landscapes, documentary work, and themed visual projects.
                </p>

                {collage.length > 0 && (
                    <div className="columns-1 gap-5 md:columns-2">
                        {collage.map((image, idx) => (
                            <figure key={`misc-${idx}`} className="mb-5 break-inside-avoid">
                                <img
                                    src={image}
                                    alt={`Portfolio highlight ${idx + 1}`}
                                    className="h-auto w-full object-contain"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function PhotographyPage() {
    const [view, setView] = useState<View>('landing');
    const [projectsOpen, setProjectsOpen] = useState(false);

    const activeProject = useMemo(() => photoProjects.find((project) => project.slug === view), [view]);
    const aboutPortrait = preferredAboutPortrait ?? portraitImages[0];

    return (
        <main className="min-h-screen w-screen bg-[#f4f7ef] px-6 py-16 md:px-10">
            <section className="mb-10 w-full overflow-hidden">
                <div className="relative min-h-[18rem] w-full overflow-hidden md:min-h-[24rem]">
                    {topBannerBgImage ? (
                        <>
                            <div
                                className="absolute inset-0 bg-center"
                                style={{
                                    backgroundImage: `url(${topBannerBgImage})`,
                                    backgroundSize: 'cover',
                                }}
                                aria-hidden
                            />
                            <div className="absolute inset-0 bg-[#CFE0C6]/85" aria-hidden />
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-[#f4f7ef]" />
                    )}
                    <div className="relative z-10 px-8 py-10 md:px-14 md:py-16">
                        <p className="text-xs uppercase tracking-[0.4em] text-[#465C3F]">Photography Portfolio</p>
                        <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-slate-900 drop-shadow-sm md:text-6xl">
                            Anna Chason Wiggins
                        </h1>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                <nav className="h-fit space-y-3 lg:sticky lg:top-10">
                    <button
                        onClick={() => {
                            setView('landing');
                            setProjectsOpen(false);
                        }}
                        className={`w-full border-0 bg-transparent px-1 py-1 text-left text-sm font-semibold uppercase tracking-[0.2em] ${
                            view === 'landing' ? 'text-slate-900 underline underline-offset-4' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => {
                            setView('about');
                            setProjectsOpen(false);
                        }}
                        className={`w-full border-0 bg-transparent px-1 py-1 text-left text-sm font-semibold uppercase tracking-[0.2em] ${
                            view === 'about' ? 'text-slate-900 underline underline-offset-4' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        About
                    </button>
                    <div
                        className="space-y-1"
                        onMouseEnter={() => setProjectsOpen(true)}
                        onMouseLeave={() => setProjectsOpen(false)}
                        onFocus={() => setProjectsOpen(true)}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                                setProjectsOpen(false);
                            }
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => {
                                if (activeProject) {
                                    setView('projects');
                                    setProjectsOpen(true);
                                    return;
                                }
                                if (view === 'projects' && !activeProject) {
                                    setProjectsOpen((prev) => !prev);
                                    return;
                                }
                                setView('projects');
                                setProjectsOpen(true);
                            }}
                            className={`w-full border-0 bg-transparent px-1 py-1 text-left text-sm font-semibold uppercase tracking-[0.2em] ${
                                view === 'projects' || activeProject || projectsOpen
                                    ? 'text-slate-900 underline underline-offset-4'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Projects {projectsOpen ? '▾' : '▸'}
                        </button>
                        {projectsOpen && (
                            <div className="space-y-1 pl-2">
                                {photoProjects.map((project) => (
                                    <button
                                        key={project.slug}
                                        type="button"
                                        onClick={() => setView(project.slug)}
                                        className={`w-full border-0 bg-transparent px-2 py-1 text-left text-sm ${
                                            view === project.slug ? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        {project.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                <div>
                    {!activeProject && view === 'landing' && (
                        <LandingPage heroImage={landingHeroImage} collage={landingCollageImages} />
                    )}
                    {!activeProject && view === 'about' && <AboutPage portraitImage={aboutPortrait} />}
                    {!activeProject && view === 'projects' && <ProjectsHub projects={photoProjects} onOpen={(slug) => setView(slug)} />}
                    {activeProject && <ProjectPage project={activeProject} onBack={() => setView('projects')} />}
                </div>
            </section>
        </main>
    );
}

export default PhotographyPage;
