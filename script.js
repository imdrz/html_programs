function solve() {
    let equation = document.getElementById("equation").value;

    var answer = eval(equation);

    document.getElementById("answer").innerText =  answer;
}