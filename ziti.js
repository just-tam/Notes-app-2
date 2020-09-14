var assert = {
    toEqual: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Test failed: " + assertionToCheck + " is not equal.");
        }
    }
};

