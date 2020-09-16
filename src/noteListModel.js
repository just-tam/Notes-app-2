class NoteList {

    constructor() {
        this.noteList = []
        this.id = 0;
    };

    allNotes() {
        for (var n = 0; n < this.noteList.length; n++) {
            return this.noteList[n].note;
        }
    };

    createNote(text) {
        var note = { note: new Note(text).text, id: this.id++ }
        return this.noteList.push(note)
    };

}