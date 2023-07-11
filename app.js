let count = 0;

document.getElementById('plus').onclick = Plus;
document.getElementById('minus').onclick = Minus;

function Plus() {
    document.getElementById('number').innerHTML = count + 1;
}

function Minus() {
    document.getElementById('minus').innerHTML = count - 1;
}