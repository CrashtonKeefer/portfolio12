function enterSite() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("main").style.display = "block";
}

/* simple typing effect */
const texts = [
  "Discord Developer",
  "Roblox Systems Engineer",
  "ERLC Integrations",
  "Backend Builder"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = texts[i];

  if (!isDeleting) {
    document.getElementById("type").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("type").innerHTML = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
