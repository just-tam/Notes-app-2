//document.getElementById("app").innerHTML = "howdy"

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
        return note;
    }

}

var notes = new NoteController();
notes.createNewNote("This is a note");
notes.createNewNote("This is a note 2");
notes.createNewNote("This is a note 3");
notes.updateHtml();
notes.updateList();