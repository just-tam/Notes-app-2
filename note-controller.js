document.getElementById("app").innerHTML = "howdy"

class NoteController {
    constructor() {
        this.noteList = new NoteList()
        this.noteList.createNote("Favourite drink: seltzer")
        this.noteList.notesList.showList()
    }
}