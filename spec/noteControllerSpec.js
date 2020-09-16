function controllerDisplayNotesList() {
    var testnote = new NoteController();
    testnote.createNewNote("Favourite drink: seltzer")
    expect.toEqual(testnote.show()[0] === "<ul><li><div>Favourite drink: sel</div></li></ul>")
}
controllerDisplayNotesList()

function controllerDisplayNotesListWithLinks() {
    var testnote = new NoteController();
    testnote.createNewNote("Favourite drink: seltzer")
    expect.toEqual(testnote.link() === "<a id='notes/0' href='#notes/0'>")
}

controllerDisplayNotesListWithLinks()