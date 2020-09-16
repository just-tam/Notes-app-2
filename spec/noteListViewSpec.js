function testingReturningHtml() {
    var noteView = new NoteListView();
    noteView.noteList.storeNote("testing out a big fat tester of a note")
    expect.toEqual(noteView.showList()[0] === "<ul><li><div>testing out a big fa</div></li></ul>")
}

testingReturningHtml()