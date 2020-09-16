//document.getElementById("app").innerHTML = "howdy"

class NoteController {

    constructor() {
        this.noteList = new NoteListView()
    }

    updateList() {
        return document.getElementById("app").innerHTML = this.link() + this.show() + "</a>";
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

    link() {
        return this.noteList.htmlNote();
    }

}

var notes = new NoteController();
notes.createNewNote("This is a note");
notes.updateList();