function controllerDisplayNotesList() {
    var testnote = new NoteController();
    expect.toEqual(testnote.show[0] === "<ul><li><div>Favourite drink: sel</div></li></ul>")
}
controllerDisplayNotesList()