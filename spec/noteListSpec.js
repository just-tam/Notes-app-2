function testingNewNotesAddedToList() {
    var noteList = new NoteList();
    noteList.createNote("test text")
    expect.toEqual(noteList.noteList[0] === "test text")
}
testingNewNotesAddedToList()


function testingReturnsAllNotes() {
    var noteList = new NoteList();
    noteList.createNote("test text")
    expect.toEqual(noteList.allNotes() === "test text")
}

testingReturnsAllNotes()




