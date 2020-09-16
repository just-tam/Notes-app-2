function testingNewNotesAddedToList() {
    var noteList = new NoteList();
    noteList.storeNote("test text")
    expect.toEqual(noteList.noteArray[0].note === "test text")
}
testingNewNotesAddedToList()


function testingReturnsAllNotes() {
    var noteList = new NoteList();
    noteList.storeNote("test text")
    expect.toEqual(noteList.allNotes() === "test text")
}

testingReturnsAllNotes()