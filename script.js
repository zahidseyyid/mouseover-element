document.addEventListener('DOMContentLoaded', function () {

// Ekran genişliğini kontrol et başlangıç
function isMobile() {
    return window.innerWidth < 768; 
}
// Ekran genişliğini kontrol et bitiş


// Mobilde 6 daire, masaüstünde 18 daire başlangıç
var circleCount = isMobile() ? 6 : 18;
// Mobilde 6 daire, masaüstünde 18 daire bitiş


// random daire boyutu listesi başlangıç
circleSize = [];
for (let i = 5; i <= 24; i++) {
    circleSize.push(i * 10);
}
// random daire boyutu listesi bitiş


// Random renk oluşturma başlangıç
var colorChar = ['F', 'E', 'D', 'C', 'B', 'A', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function generateRandomColor() {
    var color = "#";
    for (let i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * colorChar.length);
        color += colorChar[randomIndex];
    }
    return color;
}

var colorListMain = [];

for (let i = 0; i < 18; i++) {
    colorListMain.push(generateRandomColor());
}
// Random renk oluşturma bitiş

// Html ve css circle oluşturma başlangıç
for (let i = 1; i <= 18; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.id = 'circle' + i; 
    document.body.appendChild(circle);
}
// Html ve css circle oluşturma bitiş

// Circle boyutunu ve rengini ayarla başlangıç
for (let i = 0; i < circleCount; i++) {
    var geciciBoyut = circleSize[Math.floor(Math.random() * circleSize.length)] + "px";
    var circle = document.getElementById("circle" + (i + 1));
    circle.style.backgroundColor = colorListMain[i];
    circle.style.borderRadius = "50%";
    circle.style.position = "flex";
    circle.style.width = geciciBoyut;
    circle.style.height = geciciBoyut;;
}
// Circle boyutunu ve rengini ayarla bitiş

// Circle'ları rastgele konumlara yerleştir başlangıç

var maxX = window.innerWidth - 100; 
var maxY = window.innerHeight - 100; 

for (let i = 0; i <  circleCount; i++) {
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    var element = document.getElementById("circle" + (i + 1)); 
    element.style.position = "absolute";
    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

// Circle'ları rastgele konumlara yerleştir bitiş


// Mouse imleci üzerine geldiğinde daireyi büyüt başlangıç
document.addEventListener('mouseover', function (event) {
    var target = event.target;

    if (target.classList.contains('circle')) {
        target.style.transform = 'scale(1.3)';  
    }
});

document.addEventListener('mouseout', function (event) {
    var target = event.target;

    if (target.classList.contains('circle')) {
        target.style.transform = 'scale(1)'; 
    }
});
// Mouse imleci üzerine geldiğinde daireyi büyüt bitiş

});
