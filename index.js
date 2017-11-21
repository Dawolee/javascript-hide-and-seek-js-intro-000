function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").children[0];
}

function increaseRankBy(n) {
  var list = document.getElementsByClassName("ranked-list");
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list[i].length; j++) {
      list[i][j]++;
    }
  }
}

function deepestChild() {
  var children = document.getElementById("grand-node").querySelectorAll("div");
  return children[3];
}
