interface Bookmark {
    title: string;
    description: string;
    link: string;
}

const bookmarks: Bookmark[] = [
    {
        title: "OpenAI",
        description: "An artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc.",
        link: "https://en.wikipedia.org/wiki/OpenAI"
    },
    {
        title: "ChatGPT",
        description: "ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on large language models, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language. Successive user prompts and replies are considered at each conversation stage as context.",
        link: "https://chat.openai.com/"
    }
];


function renderBookmarks(bookmarks: Bookmark[]) {
    const bookmarkContainer = document.querySelector('.bookmark-container');
    if (bookmarkContainer) {
        bookmarks.forEach(bookmark => {
            const bookmarkElement = document.createElement('div');
            bookmarkElement.classList.add('bookmark');

            const titleElement = document.createElement('h2');
            titleElement.textContent = bookmark.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = bookmark.description;

            const linkElement = document.createElement('a');
            linkElement.textContent = 'Visit ' + bookmark.title;
            linkElement.href = book
