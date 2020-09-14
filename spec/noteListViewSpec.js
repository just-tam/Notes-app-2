
function testingNotesHtml() {
    var view = new NoteListView();
    view.noteList.createNote("test text")
    assert.toEqual(view.showList() === "<div>test text</div>")
}
testingNotesHtml()



