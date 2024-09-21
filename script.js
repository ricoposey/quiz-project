const questions = {
    niveau1: [
        {
            question: "Quel est le pays voisin à l'est du Bénin ?",
            choices: ["Togo", "Ghana", "Nigeria"],
            answer: "Nigeria"
        },
        {
            question: "Quel est le nom du roi fon qui a fondé la ville de Porto-Novo ?",
            choices: ["Gbézo", "Toffo", "Adandozan"],
            answer: "Adandozan"
        },
        {
            question: "Quel est le principal produit d'exportation du Bénin ?",
            choices: ["Coton", "Café", "Huile de palme"],
            answer: "Coton"
        },
        {
            question: "En quelle année le Bénin a-t-il connu un tournant démocratique avec la Conférence nationale ?",
            choices: ["1989", "1990", "1991"],
            answer: "1990"
        },
        {
            question: "Quel est le nom de la langue nationale la plus parlée au Bénin ?",
            choices: ["Français", "Fon", "Yoruba"],
            answer: "Fon"
        }
    ],
    niveau2: [
        {
            question: "Quel pays africain est considéré comme le leader en matière de technologie mobile ?",
            choices: ["Kenya", "Nigéria", "Afrique du Sud"],
            answer: "Kenya"
        },
        {
            question: "Quel événement sportif majeur a été organisé en Afrique en 2010 ?",
            choices: ["Coupe d'Afrique des Nations", "Coupe du Monde de la FIFA", "Jeux Africains"],
            answer: "Coupe du Monde de la FIFA"
        },
        {
            question: "Quel pays du Sahel est le plus touché par la crise sécuritaire actuelle ?",
            choices: ["Mali", "Burkina Faso", "Niger"],
            answer: "Mali"
        },
        {
            question: "Qui est considéré comme le père de l'indépendance de l'Afrique du Sud ?",
            choices: ["Nelson Mandela", "Desmond Tutu", "Julius Nyerere"],
            answer: "Nelson Mandela"
        },
        {
            question: "Quel pays a récemment lancé une initiative de santé publique pour éradiquer le paludisme d'ici 2030 ?",
            choices: ["Ghana", "Rwanda", "Ouganda"],
            answer: "Rwanda"
        },
        {
            question: "Quel est le principal produit d'exportation du Nigéria ?",
            choices: ["Cacao", "Pétrole", "Coton"],
            answer: "Pétrole"
        },
        {
            question: "Quel pays a été le premier en Afrique à adopter une nouvelle constitution en 2010 ?",
            choices: ["Côte d'Ivoire", "Burkina Faso", "Tunisie"],
            answer: "Tunisie"
        },
        {
            question: "Quel est le principal sport pratiqué au Sénégal ?",
            choices: ["Football", "Basketball", "Rugby"],
            answer: "Football"
        },
        {
            question: "Qui a été le premier président du Ghana ?",
            choices: ["Kwame Nkrumah", "Jerry Rawlings", "John Mahama"],
            answer: "Kwame Nkrumah"
        },
        {
            question: "Quel pays d'Afrique a réussi à réduire son taux de mortalité infantile grâce à des programmes de vaccination ?",
            choices: ["Éthiopie", "Madagascar", "Mozambique"],
            answer: "Éthiopie"
        }
    ],
    
    niveau3: [
        {
            question: "Quel pays a remporté la Coupe du Monde de la FIFA 2018 ?",
            choices: ["Allemagne", "France", "Brésil"],
            answer: "France"
        },
        {
            question: "Qui est considéré comme le meilleur joueur de basket de tous les temps ?",
            choices: ["Kobe Bryant", "Michael Jordan", "LeBron James"],
            answer: "Michael Jordan"
        },
        {
            question: "Quel boxeur est surnommé 'The Greatest' ?",
            choices: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather"],
            answer: "Muhammad Ali"
        },
        {
            question: "Quel conflit a débuté en 1914 et a duré jusqu'en 1918 ?",
            choices: ["Seconde Guerre mondiale", "Première Guerre mondiale", "Guerre de Corée"],
            answer: "Première Guerre mondiale"
        },
        {
            question: "Quel président américain a été assassiné en 1963 ?",
            choices: ["Franklin D. Roosevelt", "John F. Kennedy", "Richard Nixon"],
            answer: "John F. Kennedy"
        },
        {
            question: "Quel pays est le leader mondial en matière de technologie numérique ?",
            choices: ["Chine", "États-Unis", "Japon"],
            answer: "États-Unis"
        },
        {
            question: "Quel médicament a été largement utilisé pour traiter le paludisme dans le monde ?",
            choices: ["Aspirine", "Chloroquine", "Ibuprofène"],
            answer: "Chloroquine"
        },
        {
            question: "Quel animal est souvent appelé le 'roi de la jungle' ?",
            choices: ["Tigre", "Éléphant", "Lion"],
            answer: "Lion"
        },
        {
            question: "Qui est connu comme le héros de la lutte contre l'apartheid en Afrique du Sud ?",
            choices: ["Desmond Tutu", "Nelson Mandela", "Walter Sisulu"],
            answer: "Nelson Mandela"
        },
        {
            question: "Quel pays a été le premier à envoyer un homme dans l'espace ?",
            choices: ["États-Unis", "URSS", "Chine"],
            answer: "URSS"
        },
        {
            question: "Quel est le nom du tournoi de football interclubs le plus prestigieux en Europe ?",
            choices: ["Ligue des champions", "Ligue Europa", "Copa Libertadores"],
            answer: "Ligue des champions"
        },
        {
            question: "Qui a remporté le prix Nobel de la paix en 2009 ?",
            choices: ["Nelson Mandela", "Barack Obama", "Malala Yousafzai"],
            answer: "Barack Obama"
        },
        {
            question: "Quel est le nom du célèbre lion dans le film 'Le Roi Lion' ?",
            choices: ["Mufasa", "Simba", "Scar"],
            answer: "Simba"
        },
        {
            question: "Quel pays a récemment fait l'objet de tensions militaires en mer de Chine méridionale ?",
            choices: ["Vietnam", "Philippines", "Chine"],
            answer: "Chine"
        },
        {
            question: "Quel virus a provoqué la pandémie mondiale en 2020 ?",
            choices: ["Ebola", "VIH/SIDA", "COVID-19"],
            answer: "COVID-19"
        },
        {
            question: "Quel joueur de football a le plus de Ballons d'Or ?",
            choices: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini"],
            answer: "Lionel Messi"
        },
        {
            question: "Quel animal est connu pour sa mémoire exceptionnelle et son intelligence ?",
            choices: ["Chimpanzé", "Éléphant", "Dauphin"],
            answer: "Éléphant"
        },
        {
            question: "Qui est considéré comme le père de la médecine moderne ?",
            choices: ["Hippocrate", "Galien", "Avicenne"],
            answer: "Hippocrate"
        },
        {
            question: "Quel est le principal gaz à effet de serre responsable du changement climatique ?",
            choices: ["Oxyde nitreux", "Dioxyde de carbone", "Méthane"],
            answer: "Dioxyde de carbone"
        },
        {
            question: "Quel héros de la mythologie grecque a accompli douze travaux ?",
            choices: ["Achille", "Hercule", "Persée"],
            answer: "Hercule"
        }
    ]
    
};

let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;

const backgroundColors = [
    "#f4f4f4", // Niveau 1
    "#d4edda", // Niveau 2
    "#cce5ff"  // Niveau 3
];

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");

    document.body.style.backgroundColor = backgroundColors[currentLevel - 1];

    const currentQuestions = questions[`niveau${currentLevel}`];
    const currentQuestion = currentQuestions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = "";
    scoreElement.innerText = `Score: ${score}`;

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => selectAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function selectAnswer(choice) {
    const currentQuestions = questions[`niveau${currentLevel}`];
    if (choice === currentQuestions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        evaluateLevel();
    }
}

function evaluateLevel() {
    if (currentLevel === 1 && score >= 3) {
        showLevelScore();
        currentLevel++;
        currentQuestionIndex = 0;
        score = 0;
        alert("Passage au niveau 2 !");
        displayQuestion();
    } else if (currentLevel === 2 && score >= 5) {
        showLevelScore();
        currentLevel++;
        currentQuestionIndex = 0;
        score = 0;
        alert("Passage au niveau 3 !");
        displayQuestion();
    } else if (currentLevel === 3) {
        alert("Fin du jeu !");
        showFinalScore(); // Afficher le score final
        document.getElementById('score-section').style.display = 'block'; // Afficher la section score
    } else {
        alert("Désolé, vous ne pouvez pas accéder au prochain niveau.");
        showFinalScore();
    }
}




function showFinalScore() {
    // Cache le quiz
    document.getElementById("quiz-container").style.display = "none";
    
    // Affiche le score actuel
    const finalScore = document.getElementById("final-score");
    finalScore.innerText = `Votre score est ${score} sur ${questions[`niveau${currentLevel}`].length}.`;
    
    // Affiche la section du score final
    const scoreContainer = document.getElementById("score-section");
    scoreContainer.style.display = "block";

    // Vérifie et met à jour le meilleur score dans localStorage
    const bestScore = localStorage.getItem("bestScore") || 0;
    if (score > bestScore) {
        localStorage.setItem("bestScore", score);
        alert("Nouveau meilleur score !");
    }
}



function retryGame() {
    currentLevel = 1;
    currentQuestionIndex = 0;
    document.getElementById("score-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
}

function showQuiz() {
    hideAllSections(); // Masque toutes les sections
    document.getElementById("quiz-container").style.display = "block"; // Affiche le quiz
    displayQuestion();
}


function showAbout() {
    hideAllSections(); // Masque toutes les sections
    document.getElementById("about-container").style.display = "block"; // Affiche la section à propos
    window.scrollTo(0, 0);
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then((response) => {
        alert("Votre message a été envoyé avec succès !");
        document.getElementById("contact-form").reset();
    }, (error) => {
        alert("Erreur lors de l'envoi : " + error);
    });
});

function showContact() {
    hideAllSections(); // Masque toutes les sections
    document.getElementById("contact-container").style.display = "block"; // Affiche la section contact
}

function hideAllSections() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "none";
    document.getElementById("about-container").style.display = "none";
    document.getElementById("contact-container").style.display = "none";
}

// Ajoute un événement pour chaque bouton de navigation
document.getElementById("quiz-button").addEventListener("click", showQuiz);
document.getElementById("about-button").addEventListener("click", showAbout);
document.getElementById("contact-button").addEventListener("click", showContact);

function showLevelScore() {
    alert(`Votre score au niveau ${currentLevel} est ${score} sur ${questions[`niveau${currentLevel}`].length}.`);
}


function showScore() {
    hideAllSections(); // Masque toutes les sections
    document.getElementById("score-container").style.display = "block"; // Affiche la section score

    const totalQuestions = questions[`niveau${currentLevel}`].length; // Obtient le nombre total de questions
    const finalScore = document.getElementById("final-score");
    
    if (currentQuestionIndex < totalQuestions) {
        finalScore.innerText = `Votre score actuel est : ${score} / ${totalQuestions}`; // Affiche le score et le total
    } else {
        finalScore.innerText = `Votre score actuel est : ${score}`; // Affiche seulement le score si le quiz est terminé
    }
}

function restartGame() {
    currentLevel = 1;
    currentQuestionIndex = 0;
    totalScore = 0; // Réinitialiser le score total
    score = 0;
    document.getElementById('score-section').style.display = 'none'; // Masquer la section score
    alert("Rejouons depuis le début !");
    displayQuestion(); // Relancer le jeu
}



// Commence le quiz
displayQuestion();