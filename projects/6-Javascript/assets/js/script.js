/*
değişkenler veri tutucullar ve scope özellikleri
değişkenleri verileri geçici olarak tutmamızı sağlayan yapılardır

alt tire ile değişken tanımlamaya başlarsak geçici değişken anlamındadır
 */
var name = "Emre";
var age = 25; // integer
var isimSoyisim = "alyadua naga"
console.log(name);
console.log(age);
console.log(isimSoyisim);

/* var ile değşken tanımlama
* var ile tanımlanan değişkene her yerden ulaşabiliriz
*  buna functiona scope adı verilir
* var ile tanımlama yapınca tekrar tanımlama yapabiliriz
* ve değerini güncelleyebiliriz
*
* */

var firstName = "Emre";
console.log(firstName);
firstName = "ahmet";
console.log(firstName);

/*  firstName'yi 2 değeride verir */


/*
*let ile değşiken tanımlama
* let ile tanımlanan değişken yanlızca tanımlandığı
* süslü parantezlerin arasında erişilir
* var ile arasındaki fark  var her yerde dahildir
* sadece parantezler içinde ulaşabilme özelliğine
* block scope   denir
* let ile tanımlama yaptığınızda tekrardan tanımlanamaz
* ama değerlerini güncelleyebiliriz
* */

let lastName = "Yaman";
lastName = "özer"

// let lastName = "bunu yapamayız";  tekrardan let diyerek  değiştiremeyiz
// yaptığımız zamanda bu değeri verir
// ncaught SyntaxError: Identifier 'lastName' has already been declared (at script.js:43:5)


/*
* const Sabiti
* tonst ile tanımlanan değişkene
* değişkenin tamamı büyük harflerden oluşması önerilir
* block scope özelliği yanzlıca tanımlandığı süslü paratenzlerin
* arasında erişilir
* tekrar tanımlanamaz
* değeri güncellenemez
*
*
*
*
* */
const AD = "Emre";
console.log(AD);

/*
*  var yerine genellikle let'i kullanmayı seçeceğiz
* sabitlerde const kullanacağız
* */




/*----------------------------*/


/* Primitive  sıfat - ilkel veri türleri
* string
* BigInt
* number(Int,Float)
* Boolean
* undefined
* */
/*
* Değerler doğrudan değişkenin kendisinde saklanır
* Değerler değişkenden değişkene değer olarak aktarılır/kopyalanır
* Ilkel veri türlerinin kendilerine ait metotları yoktur  JS içinde ilkel wraaper kapsayıcı olarak cağırılmasına izin veriyor
*
* */

let sayi1 = 10;
let sayi2 = sayi1;
console.clear(); // öncden yazılan kodları görmemmize sağlar
console.log(sayi1);
console.log(sayi2); // değerler değişkenden değişkene koypalanabilir
console.log(sayi1, sayi2); // console log'ta yan yana yazılabilir


let sayi3 = 15.50;
let status = true;
let status1 = false;
console.log(sayi3);
console.log(status);
console.log(status1);

/*Referans Veri türü - Object
*   array   - dizi
*   Null    - boş değer ataması
*   Date    - Tarih
*   Object  - Nesne
*
* özellikleri
* 1 Değerler hafızada bir referans olarak (adres) olarak saklanır
*
* 2 Değişlenden değişkene aktarım referanslar üzerinden gerçekleşir.
* yani aslında saklanan verinin kendisi değil  verinin hafızadaki
* adresi aktaralır yada kopyalanır.
* 3 Bu nedenle bir referans türündeki değeri değiştirdiğimizde
* bu değişiklik o veriye referans olan tüm değişkenler tarafından
* görülebilir.
*
* */

let dizi1 = [1, 2, 3, 4, 5];
let dizi2 = dizi1;
console.log(dizi1);
console.log(dizi2);

dizi1.push(6); // dizi içine en sona eklemek için yazılan kod
console.log(dizi1);

dizi2.pop();
console.log(dizi2);// dizi1'i dizi' ye eşitlediğimiz için pop yaparak bir diziyi çıkart dediğimiz zaman 2sindende bir dizi çıkarır
console.log(dizi1);
// dizi 2den çıkartırken dizi1 den çıkarmamak için  bunun için 3 yöntem var

//  1. yöntem spread opreatörü
let dizi3 = [1, 2, 3];
let dizi4 = [...dizi3]; // 3 nokta koyaarak devamında bunu alıyorum demek oluyor böyle yaparak dizi 4 ten veri silmek istersek dizi 3 ten veri silinmeyecek yada tam tersi
console.log(dizi3);
console.log(dizi4);
dizi4.pop(); // dizi4 1 veri sildik
console.log(dizi3);
console.log(dizi4);


//2. yöntem  slice ()

dizi5 = [1, 2, 3, 4, 5, 6, 7];
dizi6 = dizi5.slice(); // dizi6 üzerinden dizi 5i slice olarak referans aldık böylelikle dizi6.pop yaparsak sadece 6 dan veri eksilir
console.log(dizi5);
console.log(dizi6);
dizi6.pop();
console.log(dizi5);
console.log(dizi6);

// 3. yöntem  array.from ()
dizi7 = [1, 2, 3, 4, 5, 6,7,8,9];
dizi8 = Array.from(dizi7);// dizi 7 üzerinden referans alarak  dizi8 oluşur dizi8.pop() yaptığımızda sadece dizi8 den veri eksilir
console.log(dizi7);
console.log(dizi8);
dizi8.pop();
console.log(dizi7);
console.log(dizi8);



console.clear()
/*----------------------------*/
/*Obje tenımlama Nesne Tanımlama
*
* arraylar aynı zamanda bizim için bir objedir*/

var person = {
    ismi: "Emre",
    soyisim: "Yaman",
    dogumYeri: "Edirne",
    dogumTarihi: 1987,
    email: "alya@asd.com",
    address: {
        sehir: "edirne",
        ilce: "merkez",
        adres: "123456"
    },
    sehirler:["Edirne","İstanbul"]
}
// verileri çekmek için alttaki gibi yapcağız
console.log(person.ismi);
console.log(person.soyisim);
console.log(person.dogumYeri);
console.log(person.dogumTarihi);
console.log(person.address.sehir);
console.log(person.address.ilce);
console.log(person.sehirler[0],person.sehirler[1]);
console.log(typeof isimSoyisim); // tipini öğrenmek için
/*----------------------*/


/*Foksinyon tanımlama
*
* 1 fonksiyon deklarsyonu*/
function funNameWrite() {
    console.log("Emre yaman");
    console.log(person.soyisim+" "+person.ismi)
}
funNameWrite() // functionu yazarsak içindekini yazdırır


// function experession yöntemi

let fullNameYaz = function () {
    console.log("Alyadua naga"); // direk function adını yazınca yazdırır
    return "Alyadua NAGA"; //dersek console log içinde fullNameYaz demek gerek
}
fullNameYaz();
console.log(fullNameYaz());// return ile yazdırdığımız yazdırlabilir



function toplama() {
    return 1 + 5;
}
console.log(toplama());



function cikarma(sayi1,sayi2){
    return sayi1-sayi2;
}

console.log(cikarma(15,5));


let sayi = 100;
let cikan = 20;
function cikarma(sayi ,cikan) {
    return sayi - cikan;
}
console.log(cikarma(sayi,cikan));



// let sayi8 = prompt("1.sayi"); // ekrana soru yazdırmak için 1. sayiyi yazin diye alert gelicek
// let sayi9 = prompt("2.sayi");

// alert(cikarma(sayi, cikan));
//
//
// let sayi1 = "100";
// let sayi2 = "20";

console.log(typeof sayi1);
sayi1 = parseFloat(sayi1); // sayi 1 i float değere çevirmek için
sayi1 = Number(sayi1); // direk sayiya çevirmek için
console.log(cikarma(sayi,cikan));

// misal sayi = "20"; diyerek strig içinde rakkam verdiğimiz zamanda
sayi = "20";
console.log(typeof sayi); // string olrak gösterir çevirmek için
sayi = Number(sayi); // yaparak  integere çeviriyoruz
sayi = sayi1.toString();// stringe çevirmek için ve parseInt integere çevirir
console.log(typeof sayi);


let Sayi1 = 14.3;
let Sayi2 = 20.9;
let result = Math.round(Sayi1); // en yakın olduğu sayıya yuvarlar
console.log(result);

let result2 = Math.floor(Sayi2); // alta doğru yuvarlar 20.9 olsa bile 20 yapar
console.log(result2);

let result3 = Math.ceil(Sayi2); // büyük yuvarlar 20.9 olsa bile 21 yapar
console.log(result3);


/*

 Operatörler
 + -  * /
 % mod alma
 ++ --
 
 += topla eşitle 
 *= çarp ve eiştle 
 /=böl ve eşitle 
 -= çıkar ve eşitle

 ==  esittir
 === eşit ve denk
 != eşit değil
 !== eşit değil

 <  küçük
 >  büyük
 <= küçük ve büyük
 >= küçük ve büyük

 */

let SAyi1 = 15;
let SAyi2 = 5;

let result0 = SAyi1 / SAyi2;
console.log(result0);
result0 = SAyi1 % 2;
console.log(result0);

console.log(++SAyi1); // önce arttir sonra göster yani 16 olarak gösterecek 


SAyi1 = SAyi1 + SAyi2;
console.log(SAyi1);
// yukarıdaki ile aynı
SAyi1 +=SAyi2 ;
console.log(SAyi1);

let a = 15;
let b = "15";
let c = 19;
console.log(a == b);// true döndürür
console.log(a === b); //false döndürür çünkü a integer b string tür olarak denk değiller

console.log(a < c); // küçüktür c den true döncek
console.log(a > c); // a büyüktür c den false dönecek

/* if esle if */
let puan = 85;
if (puan >= 90) {
    console.log("A");
}else if (puan >= 80) {
    console.log("B");
}else if (puan >= 70) {
    console.log("C");
}else if (puan >= 60) {
    console.log("D");
} // B puanı aldığımzı gösterir


let department = "mis";
if (puan > 80 && department === "mis") { // && ve kullanma   || veya kullanımı
    console.log("A");
}
let tarih = new Date();
console.log(tarih);  // date içini boş bırakırsak şuan ki zamanı gösterir
console.log(tarih.getDay());
console.log(tarih.getFullYear());
console.log(tarih.getMinutes());
console.log(tarih.getSeconds());

switch (tarih.getDay()) {
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let Sehirler = ["Edirne", "istanbul", "ankara"];
for (let i = 0; i <= Sehirler.length-1; i++) { //sehirlerin sayısının -1 kadarını alırsak o kadar array olduğunu gösterir -1 yapıyoruz çünkü  arraylar Sıfırdan başlar
    console.log(Sehirler[i]);
}

var kisi = {
    isim:"emre",
    soyisim:"yaman",
    yas:30
};
for (var ozellik in kisi) { // in içine girme özellik diye değişken verdik özellik dediğimizde ilk parametreler yazar
    console.log(ozellik);// dersek  isim soy isim yas yazar
    console.log(kisi[ozellik]);// dersek emre yaman 30 yazar
    console.log(ozellik + ":" + kisi[ozellik]);
}


/*
while döngüsü
*/


let SAYİ = 11;
while (SAYİ < 20) {
    console.log(SAYİ++);
}

/*
 try catch
 içinde hata varsa try ile catch arasındaysa durdur diyor
 */

try {

    let Sehirler2 = ["Edirne", "istanbul", "ankara"];

} catch (exception){
    console.log(exception.message);// hatanın mesajını almak için
    console.log(exception.name);// hatanın ismini almak için
    console.log(exception.stack);// hatanın stackını almak için
    console.error(exception.message);// hatayı kırımızı yazı ile consolda verir

}


/*
String işlemleri

birleştrime örneği
*/
let adi = "emre";
let soy = "yaman";
let adSoy = adi + " " + soy;
console.log(adSoy);

tammAd = adi.concat([soy,23,1988]);
console.log(tammAd);
console.log(adSoy.length);// boşlukla beraber karkater sayısını toplar

console.log(adSoy.substring(0,8));// sıfırdan yani ilk harften başlayarak 8. harfe kadar yazar
console.log(adSoy.indexOf("y"));//y harfi baştan 5. harf olarak gösterir
console.log(adSoy.lastIndexOf("y")); //y harfi sondan 5. harf olarka gösterir


adSoy = adSoy.replace("yaman", "naga");// replace yaman'ı bul naga olarak değiştir
console.log(adSoy);

//sıralı ifadeleri bölme işlemi

let metin = "elma,armut,ayva,incir";
let meyveler = metin.split(",");// virgüldden olan kısımlardan ayırarak array yap dedi
console.log(meyveler);


let tumIsim = " Emre yaman ";
console.log(tumIsim.trim());// başta sonda boşlukları siler
console.log(tumIsim.trimStart()); //baştaki boşlukları siler
console.log(tumIsim.trimEnd()); // sondaki boşlukları siler


/*
*
* Diziler
* 2 diziyi birleştirme
* */
let sinif1 = ["emre", "naga", "alya", "naga"];
let sinif2 = ["muhammet", "emin", "ahmet", "ibrahim"];
let sinif3 = ["asdasd", "asdasd", "ahbddzxcvmet", "ibraxcvxcvhim"];

let Resultt = sinif1.concat(sinif2,sinif3); // 2 arrayi birleştirdik
console.log(Resultt);
Resultt.shift(); // diziden ilk elemanı çıkarır
Resultt.pop();// diziden son elemanı çıkarır
Resultt.push(); // diziye ekle

let cikanlar = Resultt.splice(0,2)// sıfırdan yani ilk arraydan başlayarak 2 tane sil

// Diziye eleman ekleme
cikanlar.forEach(function (value, index, array) {
    Resultt.push(value);
    console.log(value);
});
console.log(Resultt);

Resultt.unshift("emre");// Arrayın en başına ekler
console.log(Resultt);
console.log(Resultt.reverse());// diziyi tersten yazma işlemi
console.log(Resultt.sort());// dizide sıralamaayı alfabetik olarak sıralar



/*
.map() metodu  bir dizi üzerinde döngü yapmanızı her bir eleman
üzerinde bir işlem gerçekleştirdikten sonra sonuçları yeni diziye
aktarmayı sağlar
* */

let sayilarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let kareleri= sayilarr.map(function (say) {
    return say * say;
});
console.log(kareleri);
console.log(sayilarr);

/*
* Filter
* bir dizinin elmanları belirli bir korşula göre filitrelenmesi
*
*
* */
// function 3 parametre alır value number ve array olarak alır
let filitrelenmisSayilar = sayilarr.filter(function (sayi) {
    return sayi > 2;

});
console.log(filitrelenmisSayilar);// 2 den büyük sayıları getir dedik



/*
/**
 * Local Storage ve Session Storage, web uygulamalarında veri saklamak için kullanılan iki önemli mekanizmadır.
 * Her ikisi de Web Storage API'nin bir parçasıdır ve tarayıcı tarafında anahtar-değer çiftleri şeklinde veri saklamanıza olanak tanır.
 * Fakat aralarında bazı farklar vardır:
 *
 * Local Storage
 * Tarayıcıyı kapatsanız bile veriler saklanır. Yani, veriler kalıcıdır.
 *     Aynı kökenden (origin) gelen tüm pencereler ve sekmeleler arasında paylaşılabilir.
 *     Local Storage, genellikle 5-10 MB arasında bir depolama limitine sahiptir (tarayıcıya bağlı olarak değişir).
 *
 * Session Storage
 * Bir sekme veya pencere kapatıldığında veriler silinir. Yani, veriler geçicidir.
 *     Yalnızca o sekme veya pencere içinde erişilebilir; farklı sekmeler veya pencereler arasında paylaşılamaz, hatta aynı kökenden gelseler bile.
 *     Depolama limiti genellikle Local Storage ile aynıdır.
 */


let NamE = "emre";
localStorage.setItem("fullname",NamE);
NamE = "Alyadua naga";
localStorage.setItem("fullname",)









