function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").children[0];
}

function increaseRankBy(n) {
  var list = parseInt(document.getElementsByClassName("ranked-list").children);
  for (var i = 0; i < list.length; i++) {
    list[i]++;
  }
}

function deepestChild() {
  var children = document.getElementById("grand-node").querySelectorAll("div");
  return children[3];
}
