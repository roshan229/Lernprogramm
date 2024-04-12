// beleg.js

function showContent(category) {
    // Alle Inhaltsbereiche ausblenden
    let allContents = document.querySelectorAll('.content');
    allContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Den ausgewählten Inhaltsbereich anzeigen
    let selectedContent = document.getElementById(category + 'Content');
    selectedContent.style.display = 'block';

    // Alle Optionen zurücksetzen
    let allOptions = document.querySelectorAll('.option');
    allOptions.forEach(function(option) {
        option.classList.remove('selected');
    });

    // Die ausgewählte Option markieren
    let selectedOption = document.getElementById(category + 'Option');
    selectedOption.classList.add('selected');

    // Hier können die Aufgaben für die ausgewählte Kategorie geladen und angezeigt werden
    if (category === 'math') {
        loadAndDisplayAufgaben('teil-mathe', 'mathAufgabe');
    } else if (category === 'english') {
        // Lade und zeige Aufgaben für Englisch
    } else if (category === 'general') {
        // Lade und zeige Aufgaben für General
    }
}

// Event-Listener für Klicks auf die Optionen
document.getElementById('mathOption').addEventListener('click', function() {
    showContent('math');
});

document.getElementById('englishOption').addEventListener('click', function() {
    showContent('english');
});

document.getElementById('generalOption').addEventListener('click', function() {
    showContent('general');
});

// Funktion zum Laden und Anzeigen von Aufgaben
function loadAndDisplayAufgaben(aufgabenKey, containerId) {
    let aufgabenContainer = document.getElementById(containerId);
    aufgabenContainer.innerHTML = ''; // Clear previous content

    // Lade die Aufgaben aus aufgabe.json
    fetch('aufgabe.json')
        .then(response => response.json())
        .then(data => {
            let aufgaben = data[aufgabenKey]; 
            let ersteAufgabe = aufgaben[0]; // Erste Aufgabe auswählen
            let ersteAufgabeElement = document.createElement('div');

            // Erzeuge ein neues span-Element für die Aufgabe
            let aufgabeSpan = document.createElement('span');
            aufgabeSpan.textContent = 'Aufgabe: ';
            ersteAufgabeElement.appendChild(aufgabeSpan);

            // Erzeuge ein neues span-Element für die mathematische Ausdrucke der Aufgabe
            let mathExpressionSpan = document.createElement('span');
            katex.render(ersteAufgabe.a, mathExpressionSpan); // Render the mathematical expression
            ersteAufgabeElement.appendChild(mathExpressionSpan);

            // Füge den Text "Lösungen:" hinzu
            ersteAufgabeElement.appendChild(document.createTextNode(', Lösungen: '));

            // Erzeuge ein neues Button-Element für die Lösungen
            let solutionsButton = document.createElement('button');
            solutionsButton.textContent = 'Lösungen anzeigen';
            ersteAufgabeElement.appendChild(solutionsButton);

            // Erzeuge ein neues div-Element für die Lösungen (initial versteckt)
            let solutionsDiv = document.createElement('div');
            solutionsDiv.style.display = 'none';

            // Erzeuge ein neues span-Element für jede Lösung und füge sie zum Lösungen-Element hinzu
            ersteAufgabe.l.forEach((solution, index) => {
                let solutionSpan = document.createElement('span');
                if (index !== 0) {
                    solutionsDiv.appendChild(document.createTextNode(', ')); // Add comma separator
                }
                katex.render(solution, solutionSpan); // Render the solution
                solutionsDiv.appendChild(solutionSpan); // Append the solution span to the solutions div
            });

            // Füge das Lösungen-Element zum Hauptcontainer hinzu
            ersteAufgabeElement.appendChild(solutionsDiv);

            // Event-Listener für den Button, um die Lösungen anzuzeigen
            solutionsButton.addEventListener('click', function() {
                solutionsDiv.style.display = 'block'; // Lösungen anzeigen
                solutionsButton.style.display = 'none'; // Button ausblenden, nachdem er geklickt wurde
            });

            // Füge das Element zur Aufgabenliste hinzu
            aufgabenContainer.appendChild(ersteAufgabeElement);
        })
        .catch(error => console.error('Error loading aufgaben:', error));
}

