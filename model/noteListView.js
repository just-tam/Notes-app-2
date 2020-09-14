class NoteListView {

    constructor(noteList) {
        this.noteList = typeof noteList !== 'undefined' ? noteList : new NoteList();
    }

    showList() {
        var arrayList = this.noteList.noteList.join(", ")
        return "<div>" + arrayList + "</div>"
    }

    // this.noteList.noteList.forEach(function(notes) {
    //     console.log("<ul><li><div>" + notes + "</div></li></ul>")
    //  });

}