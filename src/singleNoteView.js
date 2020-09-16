class SingleNoteView {
    constructor(singleNote) {
        this.singleNote = singleNote;
    }

    showNote() {
        return "<div>" + this.note.text + "</div>"
    }

    htmlNote() {
        var note = this.singleNote;
        return "<a id='notes/" + note.id + "' href='#notes/" + note.id + "'>" + note.note + "</a>";
    }
}