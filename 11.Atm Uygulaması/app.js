let bakiye = 1000;
let yeniSatir = "\r\n"

let metin = "1- Bakiye görüntüleme " + yeniSatir 
+ "2- Para çekme" + yeniSatir
+ "3- Para yatırma" + yeniSatir
+ "4- Çıkış" + yeniSatir
+ "Lütfen bir değer seçiniz.";

// alert(metin);

let secim = prompt(metin);
switch(secim) {
    case "1": 
        alert("Bakiyeniz: " + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz."));
        if(cekilecekTutar < bakiye) {
            //başarılı  
            bakiye = (bakiye - cekilecekTutar);  
            alert("Bakiyeniz: " + bakiye);
        } else {
            alert("Bakiyenizden fazla para çekemezsiniz" + yeniSatir
            + "Bakiyeniz : " + bakiye + " " + "Çekilecek tutar : " + cekilecekTutar);
        }   
        break; 
    
    case "3":
        let yatirilacakTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz."));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel bakiyeniz : "  +bakiye);
        break;    
    
    case "4" :
        console.log("Sistemden çıkış yapılmıştır...");
    
    default:
        console.log("Lütfen 1 - 4 arasında bir değer giriniz!");
        break;        
} 
