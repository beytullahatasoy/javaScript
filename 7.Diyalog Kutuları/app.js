/*  - Alert
    - Prompt
    - Confirm
*/

alert("Bu bir uyari mesajidir");

// kullanıcıdan alınan degerler hep string tipiyle alınır
let isim = prompt("isminizi giriniz: ");
console.log(isim);

let sonuc = confirm("Silmek istediğinize emin misiniz?");
console.log(sonuc); // tamama basılırsa true, iptale basılırsa false döner
