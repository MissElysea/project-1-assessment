let count = 0;

document.getElementById('plus').onclick = Plus;
document.getElementById('minus').onclick = Minus;

function Plus() {
    count = count + 1;
    document.getElementById('number').value = count;
    document.getElementById('count-value').innerHTML = count;
}

function Minus() {
    count = count - 1;
    document.getElementById('number').value = count;
    document.getElementById('count-value').innerHTML = count;
}
