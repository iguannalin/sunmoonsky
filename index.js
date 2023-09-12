window.addEventListener("load", () => {
  const wOffset = (window.innerWidth/10);
  const w = window.innerWidth - wOffset;
  const hOffset = (window.innerHeight/15);
  const h = window.innerHeight - hOffset;
  const wHalf = (w/2);
  const hHalf = (h/2);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const container = document.getElementById("container");
  const maker = document.getElementById("maker");
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function handleClick(e) {
    const div = document.createElement("div");
    div.style.fontSize = `${getRandomInt(12,24)}px`;
    div.style.transform = `scale(${getRandomInt(5,15)/10},${getRandomInt(10,13)/10})`;
    div.innerHTML = e.target.innerText;
    e.target.parentElement.removeChild(e.target);
    maker.appendChild(div);
  }

  function display(ch) {
    if (Math.random() > 0.5) return; // only show some
    const span = document.createElement("button");
    span.classList = "bit";
    span.innerText = ch;
    span.style.left = `${getRandomInt(wOffset,w)}px`;
    span.style.top = `${getRandomInt(hHalf+(h/6),h)}px`;
    span.onclick = handleClick;
    container.appendChild(span);
  }

  fetch("radicals.json").then((r) => r.json()).then((d) => {
    Array.from(d).forEach((radical) => display(radical));
    alphabet.forEach((letter) => display(letter));
  });
});