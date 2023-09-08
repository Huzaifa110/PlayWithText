document.addEventListener('DOMContentLoaded', function () {
    let textbox = document.getElementById("textbox");
    let wordCount = document.getElementById("word");
    let charCount = document.getElementById("char");
    let uppercaseBtn = document.getElementById("uppercaseBtn");
    let lowercaseBtn = document.getElementById("lowercaseBtn");
    let restoreOriginalBtn = document.getElementById("restoreOriginalBtn");

    // Store the original text without extra whitespace
    let originalText = '';

    textbox.addEventListener('input', function () {
        var text = this.value;
        let ch = text.length;
        charCount.innerHTML = ch;

        // Remove extra whitespace and store the original text
        originalText = text.trim();

        text = originalText.toLowerCase(); // Convert to lowercase for word count
        let words = text.split(/\s+/);
        let cleanList = words.filter(function (e) {
            return e != 0;
        });
        wordCount.innerHTML = cleanList.length;
    });

    uppercaseBtn.addEventListener('click', function () {
        textbox.value = textbox.value.toUpperCase();
    });

    lowercaseBtn.addEventListener('click', function () {
        textbox.value = textbox.value.toLowerCase();
    });

    // Clear Text
    document.getElementById("clearBtn").addEventListener('click', function () {
        document.getElementById("textbox").value = '';
        originalText = "";
        updateCount(originalText) // Update the count after clearing the text
    });

    // Restore Original Text
    restoreOriginalBtn.addEventListener('click', function () {
        textbox.value = originalText;
        updateCount(originalText); // Update the counts with original text
    });

    // Function to update the word and character count
    function updateCount(text) {
        let ch = text.length;
        charCount.innerHTML = ch;

        text = text.toLowerCase(); // Convert to lowercase for word count
        let words = text.split(/\s+/);
        let cleanList = words.filter(function (e) {
            return e != 0;
        });
        wordCount.innerHTML = cleanList.length;
    }

    // Add an initial call to updateCount to set the initial counts
    updateCount(originalText);
});
