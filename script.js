function solve() {
    let equation = document.getElementById("equation").value;

    var answer = eval(equation);

    document.getElementById("answer").innerText =  answer;
}

var thing = "";

function one() {
  thing = thing + "1"
  document.getElementById("current").innerHTML = thing
}

function two() {
  thing = thing + "2"
  document.getElementById("current").innerHTML = thing
}

function three() {
  thing = thing + "3"
  document.getElementById("current").innerHTML = thing
}

function four() {
  thing = thing + "4"
  document.getElementById("current").innerHTML = thing
}

function five() {
  thing = thing + "5"
  document.getElementById("current").innerHTML = thing
}

function six() {
  thing = thing + "6"
  document.getElementById("current").innerHTML = thing
}

function seven() {
  thing = thing + "7"
  document.getElementById("current").innerHTML = thing
}
function eight() {
  thing = thing + "8"
  document.getElementById("current").innerHTML = thing
}
function nine() {
  thing = thing + "9"
  document.getElementById("current").innerHTML = thing
}
function times() {
  thing = thing + "*"
  document.getElementById("current").innerHTML = thing
}
function div() {
  thing = thing + "/"
  document.getElementById("current").innerHTML = thing
}
function add() {
  thing = thing + "+"
  document.getElementById("current").innerHTML = thing
}
function sub() {
  thing = thing + "-"
  document.getElementById("current").innerHTML = thing
}

function solve() {
  var term = document.getElementById("current").innerText;
  var answer = eval(term)

  document.getElementById("current").innerHTML = answer;

  //onClear();
}

//Work on this
function onClear() {
  thing = "";
  document.getElementById("current").innerHTML = thing;
}

function del() {
  var del = thing.split("");
  var len = del.length;
  del.pop(len);
  thing = del.join("");
  document.getElementById("current").innerHTML = thing
}

function sqr() {
  thing = thing*thing;
  document.getElementById("current").innerHTML = thing;
}
