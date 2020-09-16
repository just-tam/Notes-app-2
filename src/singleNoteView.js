class SingleNoteView {
    constructor(singleNote) {
        this.singleNote = singleNote;
    }

    twentyChar(text) {
        var dots = text.length > 20 ? "..." : "";
        return (text.substring(0, 20) + dots);
    }

    htmlNote() {
        var note = this.singleNote;
        // return "<a id='notes/" + note.id + "' href='#notes/" + note.id + "'>" + this.twentyChar(note.note) + "</a>";
        return "<a onclick='noteController.getSingleNote(" + note.id + ")' id='notes/" +
            note.id + "' href='#notes/" + note.id + "'>" +
            this.twentyChar(note.note) + "</a>";
    }
}