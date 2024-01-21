function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        };
    };
    return osztok;
};

function parosDarab(szamTomb: number[]): number {
    let parosSzamokSzama = 0;
  
    for (let i = 0; i < szamTomb.length; i++) {
      const aktSzam = szamTomb[i];
  
      if (aktSzam % 2 === 0) {
        parosSzamokSzama++;
      };
    };
  
    return parosSzamokSzama;
  };

  function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    
    const eredetiSzoveg = fuggveny().toLowerCase().replace(/\s/g, '');
  
    
    const forditottSzoveg = eredetiSzoveg.split('').reverse().join('');
  
    
    return eredetiSzoveg === forditottSzoveg;
  };
  
  // Teszt
  function tesztFuggveny(): string {
    return "indul a gorog aludni";
  };
  
  const eredmeny = fuggvenyhivasPalindrom(tesztFuggveny);
  console.log(`A függvény által visszaadott szöveg palindrom: ${eredmeny}`);
  