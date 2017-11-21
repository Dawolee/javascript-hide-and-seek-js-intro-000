function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").children[0];
}

function increaseRankBy(n) {
  document.getElementsByClassName("ranked-list")
}

function deepestChild() {
  var children = document.getElementById("grand-node").querySelectorAll("div");
  return children[3];
}
