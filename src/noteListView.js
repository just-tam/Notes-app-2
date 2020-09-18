class NoteListView {

    constructor(noteList) {
        this.noteList = noteList;
    }

    listElementHtml() {
        return this.noteList.noteArray.map(function(element) {
            var singleNote = new SingleNoteView(element);
            return ("<li>") +
                singleNote.htmlNote() + ("</li>");
        }).join("");
    }

    listHtml() {
        return ("<ul id='list'>" + this.listElementHtml() + "</ul>");
    }

}