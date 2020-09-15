class NoteListView {

    constructor() {
        this.noteList = new NoteList();
        this.noteArray = this.noteList.noteList;
    }

    showList() {
        for (var n = 0; n < this.noteArray.length; n++) {
            return "<ul><li><div>" + this.noteArray[n] + "</div></li></ul>"
        }
        
    }

}