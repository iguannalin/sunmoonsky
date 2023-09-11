window.addEventListener("load", () => {
  function getRandomIntNotCenter(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const wOffset = (window.innerWidth/15);
  const w = window.innerWidth - wOffset;
  const hOffset = (window.innerHeight/20);
  const h = window.innerHeight - hOffset;
  console.log({w,wOffset,h,hOffset})

  function display(ch) {
    const span = document.createElement("span");
    span.innerText = ch;
    span.style.left = `${getRandomIntNotCenter(wOffset,w)}px`;
    span.style.top = `${getRandomIntNotCenter(hOffset,h)}px`;
    container.appendChild(span);
  }

  fetch("radicals.json").then((r) => r.json()).then((d) => {
    Array.from(d).forEach((radical) => display(radical));
    alphabet.forEach((letter) => display(letter));
  });
});