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
const canvas = document.getElementById("matrix");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*";

const fontSize = 14;

const columns =
canvas.width / fontSize;

const drops = [];

for(let x=0; x<columns; x++){
    drops[x]=1;
}

function draw(){

    ctx.fillStyle =
    "rgba(0,0,0,0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text =
        letters.charAt(
            Math.floor(
                Math.random() *
                letters.length
            )
        );

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
            drops[i]*fontSize >
            canvas.height &&
            Math.random() > 0.975
        ){
            drops[i]=0;
        }

        drops[i]++;
    }

}

setInterval(draw,35);

}
