function canReturnASingleNoteOfTwentyCharacters() {
    var testnote = new SingleNoteView();
    expect.toEqual(testnote.twentyChar("This is a really no big long test note") === "This is a really no ...")
}

canReturnASingleNoteOfTwentyCharacters()