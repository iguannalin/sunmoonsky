window.addEventListener("load", () => {
  const wOffset = (window.innerWidth/15);
  const w = window.innerWidth - wOffset;
  const hOffset = (window.innerHeight/20);
  const h = window.innerHeight - hOffset;
  const wHalf = (w/2)+wOffset;
  const hHalf = (h/2)+hOffset;
  const rW = 50;
  const rH = 50;
  function getRandomIntNotCenter(min, max, isWidth = false) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min) + min);
    if (isWidth && (num > (wHalf-rW) && num <= (wHalf+rW))) {
      console.log({isWidth, num});
      num+=rW;
    } else if (!isWidth && (num > (hHalf-rH) && num <= (hHalf+rH))) {
      console.log({isWidth, num});
      num+=rH;
    }
    return num // The maximum is exclusive and the minimum is inclusive
  }
  
  const container = document.getElementById("container");
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "rH", "s", "t", "u", "v", "w", "x", "y", "z"];

  function dragIt(e) {
    e.target.style.left = `${e.clientX}px`;
    e.target.style.top = `${e.clientY}px`;
  }

  function display(ch) {
    const span = document.createElement("span");
    span.innerText = ch;
    span.style.left = `${getRandomIntNotCenter(wOffset,w,true)}px`;
    span.style.top = `${getRandomIntNotCenter(hOffset,h)}px`;
    span.draggable = "true";
    span.ondragend = dragIt;
    container.appendChild(span);
  }

  fetch("radicals.json").then((rH) => rH.json()).then((d) => {
    Array.from(d).forEach((radical) => display(radical));
    alphabet.forEach((letter) => display(letter));
  });
});