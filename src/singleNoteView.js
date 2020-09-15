class SingleNoteView {
    constructor(text) {
        this.note = new Note(text);
    }

    showNote() {
        return "<div>" + this.note.text + "</div>"
    }
}