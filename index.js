var noteController = new NoteController();

window.onload = function() {

    var form = document.getElementById('text');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var noteinput = document.getElementById('newnote').value;
        noteController.createNewNote(noteinput);
        noteController.updateList();

        document.getElementById("app").classList.remove("hide");
        document.getElementById('newnote').value = "";


    });

    // makeUrlChangeNoteForCurrentPage();

    // function makeUrlChangeNoteForCurrentPage() {
    //     window.addEventListener("hashchange", showNoteForCurrentPage);
    // };

    // function showNoteForCurrentPage() {
    //     showNote(getNoteFromUrl(window.location));
    // };

    // function getNoteFromUrl(location) {
    //     return location.hash.split("#")[1][6];
    // };

    // function showNote(note) {
    //     for (var i = 0; i < notes.noteList.noteArray.length; i++) {
    //         if (notes.noteList.noteArray[i].id == getNoteFromUrl(location)) {
    //             note = notes.noteList.noteArray[i].note
    //         }
    //     }
    //     document
    //         .getElementById("singlenote")
    //         .innerHTML = note;
    // };

};