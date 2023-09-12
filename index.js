window.addEventListener("load", () => {
  const wOffset = (window.innerWidth/10);
  const w = window.innerWidth - wOffset;
  const hOffset = (window.innerHeight/15);
  const h = window.innerHeight - hOffset;
  const wHalf = (w/2);
  const hHalf = (h/2);
  const r = 50;
  function getRandomIntNotCenter(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min) + min);
    // if ((num > (wHalf-r) && num <= (wHalf+r)) || (num > (hHalf-r) && num <= (hHalf+r))) {
    //   num+=(r+(Math.random()*2));
    // }
    return num // The maximum is exclusive and the minimum is inclusive
  }
  
  const container = document.getElementById("container");
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function handleClick(e) {
    e.target.addEventListener('mousemove', dragIt, true);
    e.target.addEventListener('touchmove', dragIt, true);
  }

  function dragIt(e) {
    e.preventDefault();
    e.target.style.left = `${e.clientX-10}px`;
    e.target.style.top = `${e.clientY-10}px`;
    e.target.addEventListener('mouseup', () => {
      e.target.removeEventListener('mousemove', dragIt);
    });
    e.target.addEventListener('touchend', () => {
      e.target.removeEventListener('touchmove', dragIt);
    });
  }

  let isDown = false;

  function display(ch) {
    if (Math.random() > 0.5) return; // only show some
    const span = document.createElement("span");
    span.innerText = ch;
    span.style.left = `${getRandomIntNotCenter(wOffset,w)}px`;
    span.style.top = `${getRandomIntNotCenter(hOffset,h)}px`;
    // span.draggable = "true";
    span.addEventListener('mousedown', handleClick);
    span.addEventListener('touchstart', handleClick);
    container.appendChild(span);
  }

  fetch("radicals.json").then((r) => r.json()).then((d) => {
    Array.from(d).forEach((radical) => display(radical));
    alphabet.forEach((letter) => display(letter));
  });
});