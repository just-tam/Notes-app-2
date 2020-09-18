class NoteController {

    constructor(noteList, noteListView) {
        this.noteList = new NoteList();
        this.noteListView = new NoteListView(this.noteList);
    }

    updateHtml() {
        var joiner = this.noteListView.listHtml();
        return joiner;
    }

    updateList() {
        return document.getElementById("app").innerHTML = this.updateHtml();
    }

    createNewNote(note) {
        this.noteList.storeNote(note);
    }

    getSingleNote(id) {
        var note = this.noteList.noteArray[id].note;
        var textNote = document.getElementById('singlenote');
        textNote.classList.remove("hide");
        textNote.innerHTML = note;
    }

    deleteAllNotes() {
        var allnotes = document.getElementById('list');
        allnotes.remove();
        //textNote.parentNode.removeChild(textNote);
    }

}

// var notes = new NoteController();
// notes.createNewNote("This is a note");
// notes.createNewNote("This is a note 2");
// notes.createNewNote("This is a note much longer 3");
// notes.updateHtml();
// notes.updateList();