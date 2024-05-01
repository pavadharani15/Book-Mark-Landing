interface Bookmark {
    name: string;
    url: string;
}

class BookmarkManager {
    private bookmarks: Bookmark[];


    constructor() {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    }

    addBookmark(name: string, url: string) {
        const bookmark: Bookmark = { name, url };
        this.bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        this.fetchBookmarks();
    }

    deleteBookmark(url: string) {
        this.bookmarks = this.bookmarks.filter(bookmark => bookmark.url !== url);
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        this.fetchBookmarks();
    }

    fetchBookmarks() {
        const bookmarksResults = document.getElementById('bookmarksResults');
        if (!bookmarksResults) return;

        bookmarksResults.innerHTML = '';
        this.bookmarks.forEach(bookmark => {
            bookmarksResults.innerHTML += `
                <div class="well">
                    <h3>${bookmark.name} 
                        <a class="btn btn-default" target="_blank" href="${bookmark.url}">Visit</a>
                        <a onclick="bookmarkManager.deleteBookmark('${bookmark.url}')" class="btn btn-danger" href="#">Delete</a>
                    </h3>
                </div>`;
        });
    }
}
class FormHandler {
    private form: HTMLFormElement;
    private siteNameInput: HTMLInputElement;
    private siteUrlInput: HTMLInputElement;

    constructor() {
        this.form = document.getElementById('myForm') as HTMLFormElement;
        this.siteNameInput = document.getElementById('siteName') as HTMLInputElement;
        this.siteUrlInput = document.getElementById('siteUrl') as HTMLInputElement;
        this.form.addEventListener('submit', this.saveBookmark.bind(this));
    }

    private validateForm(siteName: string, siteUrl: string): boolean {
        if (!siteName || !siteUrl) {
            alert('Please fill in the form');
            return false;
        }

        const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);

        if (!siteUrl.match(regex)) {
            alert('Please use a valid URL');
            return false;
        }

        return true;
    }

    private saveBookmark(e: Event) {
        e.preventDefault();
        const siteName = this.siteNameInput.value;
        const siteUrl = this.siteUrlInput.value;
        if (!this.validateForm(siteName, siteUrl)) {
            return;
        }
        bookmarkManager.addBookmark(siteName, siteUrl);
        this.form.reset();
    }
}

const bookmarkManager = new BookmarkManager();
const formHandler = new FormHandler();
