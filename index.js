window.addEventListener("load", () => {
  const wOffset = (window.innerWidth/15);
  const w = window.innerWidth - wOffset;
  const hOffset = (window.innerHeight/20);
  const h = window.innerHeight - hOffset;
  const wHalf = (w/2)+wOffset;
  const hHalf = (h/2)+hOffset;
  const r = 50;
  function getRandomIntNotCenter(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min) + min);
    if ((num > (wHalf-r) && num <= (wHalf+r)) || (num > (hHalf-r) && num <= (hHalf+r))) {
      num+=(r+(Math.random()*2));
    }
    return num // The maximum is exclusive and the minimum is inclusive
  }
  
  const container = document.getElementById("container");
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function dragIt(e) {
    e.target.style.left = `${e.clientX}px`;
    e.target.style.top = `${e.clientY}px`;
  }

  function display(ch) {
    const span = document.createElement("span");
    span.innerText = ch;
    span.style.left = `${getRandomIntNotCenter(wOffset,w)}px`;
    span.style.top = `${getRandomIntNotCenter(hOffset,h)}px`;
    span.draggable = "true";
    span.ondragend = dragIt;
    container.appendChild(span);
  }

  fetch("radicals.json").then((r) => r.json()).then((d) => {
    Array.from(d).forEach((radical) => display(radical));
    alphabet.forEach((letter) => display(letter));
  });
});