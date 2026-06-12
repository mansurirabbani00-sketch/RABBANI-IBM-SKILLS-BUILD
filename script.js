// =========================
// RABBANI IBM SKILL BUILD
// Cyber Security Project
// =========================

// Welcome Message
window.onload = function () {

    console.log("RABBANI IBM SKILL BUILD Loaded Successfully");

};

// Digital Clock
function updateClock() {

    let now = new Date();

    let time =
        now.getHours() + ":" +
        now.getMinutes() + ":" +
        now.getSeconds();

    console.log("Current Time: " + time);

}

setInterval(updateClock, 1000);

// Random Cyber Security Facts
const facts = [

    "Use strong passwords.",
    "Enable Two-Factor Authentication.",
    "Never click unknown links.",
    "Update software regularly.",
    "Backup important files.",
    "Use antivirus protection."

];

function showFact() {

    let random =
        Math.floor(Math.random() * facts.length);

    console.log("Cyber Fact: " + facts[random]);

}

setInterval(showFact, 5000);

// Scanner Demo Effect
function fakeScan() {

    console.log("Scanning for threats...");

    setTimeout(function () {

        console.log("Scan Complete");

    }, 3000);

}

// Password Strength Helper
function passwordHint() {

    console.log(
        "Hint: Use uppercase, lowercase, numbers and symbols."
    );

}

// Project Information
const projectInfo = {

    name: "RABBANI IBM SKILL BUILD",

    subject: "Cyber Security Awareness",

    year: "2026"

};

console.log(projectInfo);

// Cybersecurity Threat List
const threats = [

    "Phishing",

    "Malware",

    "Ransomware",

    "Spyware",

    "DDoS Attack"

];

for (let i = 0; i < threats.length; i++) {

    console.log("Threat: " + threats[i]);

}

// Footer Message
console.log(
    "Thank you for visiting RABBANI IBM SKILL BUILD"
);
