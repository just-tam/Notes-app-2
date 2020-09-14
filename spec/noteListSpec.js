function testingNewNotesAddedToList() {
    var noteList = new NoteList();
    noteList.createNote("test text")
    assert.toEqual(noteList.noteList[0] === "test text")
}
testingNewNotesAddedToList()



