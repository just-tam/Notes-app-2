class NoteList {

    constructor() {
        this.noteList = []
    };

    addNoteToList() {
        this.noteList.push(this.note)
    };

    allNotes() {
        this.noteList.forEach(function(notes) {
            console.log(notes)
        });
    };

    createNote(text) {
        return this.noteList.push(new Note(text).text)
    };
  
}