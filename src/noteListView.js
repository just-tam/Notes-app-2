class NoteListView {

    constructor() {
        this.noteList = new NoteList();
        this.noteArray = this.noteList.noteList;
    }

    showList() {

        var arrlist = this.noteArray.map(note => "<ul><li><div>" + note.substring(0, 20) + "</div></li></ul>");
        return arrlist

    }

}