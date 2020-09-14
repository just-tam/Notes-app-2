class Note {

    constructor() {
      this.noteList = []
      this.text
    }

    createNote(text) {
       this.text = text
       return this.noteList.push(text)
    }
    
}