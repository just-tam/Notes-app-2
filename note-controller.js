//document.getElementById("app").innerHTML = "howdy"

class NoteController {

    constructor() {
        this.noteList = new NoteListView()
    }

    updateList() {
        return document.getElementById("app").innerHTML = this.show();
    }

    createNewNote(note) {
        this.noteList.noteList.createNote(note);
    }

    getSingleNote(id) {
        return this.noteList.noteArray[id].note;
    }

    show() {
        return this.noteList.showList();
    }

}

var notes = new NoteController();
notes.createNewNote("This is a note");
notes.updateList();