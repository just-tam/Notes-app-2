//document.getElementById("app").innerHTML = "howdy"

class NoteController {

    constructor() {
        this.noteList = new NoteListView()
        this.noteList.noteList.createNote("Favourite drink: seltzer")
        this.show = this.noteList.showList()
    }

    updateList() {
       return document.getElementById("app").innerHTML = this.show;
    }

}

var notes = new NoteController()
notes.updateList()


