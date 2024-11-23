// alert("Merhaba alaert"); // Ekrana yazdırma
// let conf = confirm("Emin misiniz"); //ok yada kapat uyarı
// let prom = prompt(); // kullanıcıdan veri alma

// console.log("Merhabalar");

// DEĞİŞKENLER

// let sayi1 = prompt("1.sayıyı giriniz");
// const sayi2 = prompt("2.sayıyı giriniz.");
// var sayi3 = prompt("3.sayıyı giriniz");

// Nambur değişkene atanmış

//  let sayi1 = 5;
//  const sayi2 = 10
//  var sayi3 = 20

//  sayi1 = 10;
//  sayi3 = 15;

// console.log("Sayı 1", sayi1);
// console.log("Sayı 2",  sayi2);
// console.log("Sayı 3",  sayi3);

// DEĞİŞKENLER Streng değerler 

// let str;
// let array =[];
// let num   = 1

// str = "Merhaba";
// console.log("Str", str);
// console.log("Array", array);

console.log("Ben app.js den geldim");

// const dersler = [];
// console.log("Dersler"),dersler,"Dersler uzunluğu:",dersler.length;


//  dersler.push("PHP","HTML","CSS"); // Arrayın sonundan ekler.
//  dersler.unshift("C#","F#",".NET CORE");

// console.log("Dersler"),dersler,"Dersler uzunluğu:",dersler.length;

// dersler.pop(); // Son elemanı sil
// dersler.shift(); // İlk Elamanı sil

// console.log("Dersler"),dersler,"Dersler uzunluğu:",dersler.length;

//  dersler.push("Java", "Python");

// console.log("Dersler", dersler,"Dersler uzunluğu:", dersler.length);

// let cSharpIndex = dersler.findIndex((ders) => {
//     console.log("Taranan Ders:", ders);
//     if (ders == "C#") return true;
// });

// if (cSharpIndex != -1) {
//     console.log("Java Dersi Bulundu:", cSharpIndex);
// }else{
//     console.log("Java Dersi bulunamadı!");
// }

//  BURADA YAŞ KONTROLU YAPIYORUZ
// const yas = 26;
// if (yas <=18) {
//     console.log("Yaşınız 18 veya 18'den küçüktür.");
// }else if(yas <=35){
//     console.log("Yaşınız 18 veya 35 arasındadır.");
// } else {
//     console.log("Yaşınız 35'den büyüktür");
// }


// DÖNGÜLER

// for (let i = 0; i < dersler.length; i++) {
//     console.log("Ders:", dersler[i]);
// }


// Döngüler forEach ilede değişken atıyarak verilere döndürür

// dersler.forEach(function (ders,index,array) {
//    console.log("Ders", ders, "( Ders Index", index,") Diziler",array); 
// });

// let sayi1 = 1;
// sayi1++;
// console.log(sayi++); // Burada önce Sayıyı yazar sonra artırır
// console.log(++sayi); // Burada sayıyı önce artırır yazıyı yazar
// sayi1 = ++sayi + sayi1++;
// console.log(sayi1); // toplam sonuç 7

// while(i <=dersler.length){
//     console.log("Ders",dersler);
//     i++;
// }


// onclick İŞLEM YAPILACAK BURADA BUTTONA TIKLANDIĞINDA İSTEĞİMİZ İŞLEM YAPILACAK 

// function ButtonTiklama() {
//     console.log("Button Tıklandı");
// }
