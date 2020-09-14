function testingNoteCreation() {
    var note = new Note("test text");
    assert.toEqual(note.text === "test text")
}
testingNoteCreation()


