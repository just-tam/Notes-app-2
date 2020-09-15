function controllerDisplayNotesList() {
    var testnote = new NoteController();
    expect.toEqual(testnote.show === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
}
controllerDisplayNotesList()