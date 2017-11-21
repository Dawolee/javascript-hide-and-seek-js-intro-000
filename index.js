function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").children[0];
}

function increaseRankBy(n) {
  var list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < list.length; i++) {
    parseInt(list[i]);
    list[i]++;
  }
}

function deepestChild() {
  var children = document.getElementById("grand-node").querySelectorAll("div");
  return children[3];
}
