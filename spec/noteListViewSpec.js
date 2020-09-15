
function canReturnATextNoteWithHtml() {
    var noteView = new NoteListView();
    noteView.noteList.createNote("test text")
    expect.toEqual(noteView.showList() === "<ul><li><div>test text</div></li></ul>")
}

canReturnATextNoteWithHtml()
