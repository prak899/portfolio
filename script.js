const boot = document.getElementById("boot");
const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const bootLines = [
  "Booting BravoOS v1.0...",
  "Loading modules...",
  "Initializing portfolio engine...",
  "Welcome."
];

const ascii = `
██████╗ ██████╗  █████╗ ██╗   ██╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗██║   ██║██╔═══██╗
██████╔╝██████╔╝███████║██║   ██║██║   ██║
██╔══██╗██╔══██╗██╔══██║╚██╗ ██╔╝██║   ██║
██████╔╝██║  ██║██║  ██║ ╚████╔╝ ╚██████╔╝
`;

const commands = {
  help: `
Commands:
about
skills
projects
contact
clear
  `,
  about: `
Android Developer from India.
Building scalable apps & digital tools.
5+ years experience.
  `,
  skills: `
Kotlin
Android SDK
Jetpack
REST APIs
UI/UX
  `,
  projects: `
Mor Bijli App
Health Scheme System
Terminal Portfolio

GitHub: https://github.com/yourusername
  `,
  contact: `
Email: you@email.com
Instagram: @yourhandle
LinkedIn: linkedin.com/in/yourname
  `
};

function typeLine(text, delay = 40) {
  return new Promise(resolve => {
    let i = 0;
    const span = document.createElement("div");
    boot.appendChild(span);

    function type() {
      if (i < text.length) {
        span.textContent += text[i];
        i++;
        setTimeout(type, delay);
      } else {
        resolve();
      }
    }
    type();
  });
}

async function bootSequence() {
  for (let line of bootLines) {
    await typeLine(line);
  }
  await typeLine(ascii, 2);
  boot.innerHTML += "\nType 'help' to begin.\n\n";
}

bootSequence();

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    if (cmd === "clear") {
      output.innerHTML = "";
    } else if (commands[cmd]) {
      output.innerHTML += `visitor@bravo:~$ ${cmd}\n${commands[cmd]}\n`;
    } else {
      output.innerHTML += `visitor@bravo:~$ ${cmd}\nCommand not found\n`;
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});