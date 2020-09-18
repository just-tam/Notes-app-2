function testingReturningHtmlElements() {
    var note = new NoteList();
    note.storeNote("hello world");
    var noteView = new NoteListView(note);
    expect.toEqual(noteView.listElementHtml() === "<li><a onclick='noteController.getSingleNote(0)' id='notes/0' href='#notes/0'>hello world</a></li>")
}

testingReturningHtmlElements()