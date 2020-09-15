function testingNoteCreation() {
    var note = new Note("test text");
    expect.toEqual(note.text === "test text")
}
testingNoteCreation()


