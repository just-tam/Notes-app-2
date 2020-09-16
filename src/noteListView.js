class NoteListView {

    constructor(noteList) {
        this.noteList = noteList;
    }

    // showList() {
    //     var arrlist = this.noteList.noteArray.map(note => "<ul><li><div>" + note.note.substring(0, 20) + "</div></li></ul>");
    //     return arrlist

    // }

    listElementHtml() {
        return this.noteList.noteArray.map(function(element) {
            var singleNote = new SingleNoteView(element);
            return ("<li>") +
                singleNote.htmlNote() + ("</li>");
        }).join("");
    }

    listHtml() {
        return ("<ul id='myUL'>" + this.listElementHtml() + "</ul>");
    }

    // htmlNote() {
    //     var singlenote = this.noteList.noteList;
    //     for (var i = 0; i < singlenote.length; i++) {
    //         return "<a id='notes/" + singlenote[i].id + "' href='#notes/" + singlenote[i].id + "'>"
    //     }
    // }

}