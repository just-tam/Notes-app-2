class NoteList {

    constructor() {
        this.noteList = []
    };

    allNotes() {
        for (var n = 0; n < this.noteList.length; n++) {
            return this.noteList[n];
        }
    };

    createNote(text) {
        return this.noteList.push(new Note(text).text)
    };
  
}