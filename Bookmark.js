var BookmarkManager = /** @class */ (function () {
    function BookmarkManager() {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    }
    BookmarkManager.prototype.addBookmark = function (name, url) {
        var bookmark = { name: name, url: url };
        this.bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        this.fetchBookmarks();
    };
    BookmarkManager.prototype.deleteBookmark = function (url) {
        this.bookmarks = this.bookmarks.filter(function (bookmark) { return bookmark.url !== url; });
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        this.fetchBookmarks();
    };
    BookmarkManager.prototype.fetchBookmarks = function () {
        var bookmarksResults = document.getElementById('bookmarksResults');
        if (!bookmarksResults)
            return;
        bookmarksResults.innerHTML = '';
        this.bookmarks.forEach(function (bookmark) {
            bookmarksResults.innerHTML += "\n                <div class=\"well\">\n                    <h3>".concat(bookmark.name, " \n                        <a class=\"btn btn-default\" target=\"_blank\" href=\"").concat(bookmark.url, "\">Visit</a>\n                        <a onclick=\"bookmarkManager.deleteBookmark('").concat(bookmark.url, "')\" class=\"btn btn-danger\" href=\"#\">Delete</a>\n                    </h3>\n                </div>");
        });
    };
    return BookmarkManager;
}());
var FormHandler = /** @class */ (function () {
    function FormHandler() {
        this.form = document.getElementById('myForm');
        this.siteNameInput = document.getElementById('siteName');
        this.siteUrlInput = document.getElementById('siteUrl');
        this.form.addEventListener('submit', this.saveBookmark.bind(this));
    }
    FormHandler.prototype.validateForm = function (siteName, siteUrl) {
        if (!siteName || !siteUrl) {
            alert('Please fill in the form');
            return false;
        }
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        if (!siteUrl.match(regex)) {
            alert('Please use a valid URL');
            return false;
        }
        return true;
    };
    FormHandler.prototype.saveBookmark = function (e) {
        e.preventDefault();
        var siteName = this.siteNameInput.value;
        var siteUrl = this.siteUrlInput.value;
        if (!this.validateForm(siteName, siteUrl)) {
            return;
        }
        bookmarkManager.addBookmark(siteName, siteUrl);
        this.form.reset();
    };
    return FormHandler;
}());
var bookmarkManager = new BookmarkManager();
var formHandler = new FormHandler();
