function buttonDisplay(value){
    document.getElementById("result").value += value;
}
function buttonClear(){
    document.getElementById("result").value = '';
}
function calculate(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}