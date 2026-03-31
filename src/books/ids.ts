/**
 * Stable keys for every book. Shelf layout uses `book(id)`; order for `bookList` / OpenBook lookup is `BOOK_ORDER`.
 */
export const BOOK_ORDER = [
    'wheatonCollege',
    'python',
    'java',
    'cLanguage',
    'typescript',
    'javascript',
    'sql',
    'gitGithub',
    'firebase',
    'supabase',
    'react',
    'tailwind',
    'bulletin',
    'flippy',
    'portfolioWebsite',
    'csHub',
    'proxyWebServer',
    'discreteMathTa',
    'labAssistant',
    'littleProfessor',
    'diakonoi',
    'csClubCabinet',
    'contact',
] as const;

export type BookId = (typeof BOOK_ORDER)[number];
