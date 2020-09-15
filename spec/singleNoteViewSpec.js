function canReturnASingleNote() {
    var testnote = new SingleNoteView("test");
    expect.toEqual(testnote.showNote() === "<div>test</div>")
}

canReturnASingleNote()