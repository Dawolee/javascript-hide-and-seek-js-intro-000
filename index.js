function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").children[0];
}

function increaseRankBy(n) {
  var list = document.getElementsByClassName("ranked-list");
  for (var i = 0; i < list.length; i++) {
    parseInt(list[i].children);
    list[i].children++;
  }
}

function deepestChild() {
  var children = document.getElementById("grand-node").querySelectorAll("div");
  return children[3];
}
