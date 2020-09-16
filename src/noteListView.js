class NoteListView {

    constructor() {
        this.noteList = new NoteList();
        this.noteArray = this.noteList.noteList;
    }

    showList() {

        var arrlist = this.noteArray.map(note => "<ul><li><div>" + note.note.substring(0, 20) + "</div></li></ul>");
        return arrlist

    }

    htmlNote() {
        var singlenote = this.noteList.noteList;
        for (var i = 0; i < singlenote.length; i++) {
            return "<a id='notes/" + singlenote[i].id + "' href='#notes/" + singlenote[i].id + "'>"
        }
    }

}