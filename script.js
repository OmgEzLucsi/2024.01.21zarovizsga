function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        };
    };
    return osztok;
};
function parosDarab(szamTomb) {
    var parosSzamokSzama = 0;
    for (var i = 0; i < szamTomb.length; i++) {
        var aktSzam = szamTomb[i];
        if (aktSzam % 2 === 0) {
            parosSzamokSzama++;
        };
    };
    return parosSzamokSzama;
};
function fuggvenyhivasPalindrom(fuggveny) {
    var eredetiSzoveg = fuggveny().toLowerCase().replace(/\s/g, '');
    var forditottSzoveg = eredetiSzoveg.split('').reverse().join('');
    return eredetiSzoveg === forditottSzoveg;
};
// Teszt
function tesztFuggveny() {
    return "indul a gorog aludni";
};
var eredmeny = fuggvenyhivasPalindrom(tesztFuggveny);
console.log("A függvény által visszaadott szöveg palindrom: ".concat(eredmeny));
