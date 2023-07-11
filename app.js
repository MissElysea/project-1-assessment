let count = 0;

document.getElementById('plus').onclick = Plus;
document.getElementById('minus').onclick = Minus;

function Plus() {
    count = count + parseInt(document.getElementById('number').value, 10)
    document.getElementById('count-value').innerHTML = count;
}

function Minus() {
    count = count - parseInt(document.getElementById('number').value, 10);
    document.getElementById('number').value = "";
    document.getElementById('count-value').innerHTML = count;
}
