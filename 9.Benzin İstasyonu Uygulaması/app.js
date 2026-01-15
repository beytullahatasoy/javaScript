// Benzin istasyonu

let dizel = 55.8, benzin = 54.25, lpg = 28.7;
const yeniSatir = "\r\n";   // yeni satira geçelim diye buna atadik

const yakitMetni = "1-Dizel" + yeniSatir
+ "2-Benzin" + yeniSatir
+ "3-LPG" + yeniSatir
+ "Yakit türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);
let yakitLitresi = prompt("Yakıt litresini giriniz");
let bakiye = Number(prompt("Bakiyenizi giriniz"));

if(yakitTipi=="1"){
    //Dizel
    let odenecekTutar = dizel*yakitLitresi;
    if(odenecekTutar < bakiye){
        //bakiyeniz yeterli 
        bakiye = (bakiye - odenecekTutar);
        alert("Yakıt alma işlemi başarılı" + yeniSatir
        + "Kalan bakiye : " + bakiye);
    } else{
        //bakiyeniz yeterli değil
        alert("Bakiyeniz yeterli değildir" + yeniSatir
        + "ödenecek tutar : " + odenecekTutar + yeniSatir
        + "Bakiye : " + bakiye + yeniSatir
        + "Eksik Tutar" + (odenecekTutar-bakiye));
    }
} else if(yakitTipi=="2"){
    //Benzin
    let odenecekTutar = benzin*yakitLitresi;
    if(odenecekTutar < bakiye){
        //bakiyeniz yeterli 
        bakiye = (bakiye - odenecekTutar);
        alert("Yakıt alma işlemi başarılı" + yeniSatir
        + "Kalan bakiye : " + bakiye);
    } else{
        //bakiyeniz yeterli değil
        alert("Bakiyeniz yeterli değildir" + yeniSatir
        + "ödenecek tutar : " + odenecekTutar + yeniSatir
        + "Bakiye : " + bakiye + yeniSatir
        + "Eksik Tutar" + (odenecekTutar-bakiye));
    }
} else if(yakitTipi=="3"){
    //LPG
    let odenecekTutar = lpg*yakitLitresi;
    if(odenecekTutar < bakiye){
        //bakiyeniz yeterli 
        bakiye = (bakiye - odenecekTutar);
        alert("Yakıt alma işlemi başarılı" + yeniSatir
        + "Kalan bakiye : " + bakiye);
    } else{
        //bakiyeniz yeterli değil
        alert("Bakiyeniz yeterli değildir" + yeniSatir
        + "ödenecek tutar : " + odenecekTutar + yeniSatir
        + "Bakiye : " + bakiye + yeniSatir
        + "Eksik Tutar" + (odenecekTutar-bakiye));
    }
} else{
    alert("Lütfen geçerli bir yakıt türü giriniz!")
}
