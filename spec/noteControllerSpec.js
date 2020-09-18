function controllerDisplayNotesList() {
    var controller = new NoteController();
    controller.createNewNote("My test note")
    expect.toEqual(controller.updateHtml() === "<ul id='list'><li><a onclick='noteController.getSingleNote(0)' id='notes/0' href='#notes/0'>My test note</a></li></ul>")
}
controllerDisplayNotesList()