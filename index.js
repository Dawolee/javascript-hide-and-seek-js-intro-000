function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").children[0];
}

function deepestChild() {
  document.getElementById("grand-node").querySelectorAll("div");
}
