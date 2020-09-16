class NoteList {

    constructor() {
        this.noteArray = []
        this.id = 0;
    };

    allNotes() {
        for (var n = 0; n < this.noteArray.length; n++) {
            return this.noteArray[n].note;
        }
    };

    storeNote(text) {
        var note = { note: text, id: this.id++ }
        this.noteArray.push(note)
        return note;
    };

}