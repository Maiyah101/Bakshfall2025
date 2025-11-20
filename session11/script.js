function dragElement(el) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  el.onpointerdown = startDrag;

  function startDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = drag;
    document.onpointerup = stopDrag;
  }

  function drag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.style.position = "absolute";
    el.style.left = (el.offsetLeft - pos1) + "px";
    el.style.top = (el.offsetTop - pos2) + "px";
  }

  function stopDrag() {
    document.onpointermove = null;
    document.onpointerup = null;
  }
}

// Apply drag to ALL .plant elements
document.querySelectorAll(".plant").forEach(p => dragElement(p));
