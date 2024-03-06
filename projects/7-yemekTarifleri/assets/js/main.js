document.addEventListener("DOMContentLoaded", function () {

    let btnUrunEkle = document.getElementById("btnUrunEkle");
    //let urunler = [];// array olarak tutabilmek için buraya button altına veriyorum


    btnUrunEkle.addEventListener("click", function () {

        let urunAdi = document.getElementById("urunAdi").value;
        let isAdded = urunler.includes(urunAdi);

        if (isAdded) {
            alert("Bu ürün daha önce eklenmiştir");
        }else{
            urunler.unshift(urunAdi);
            localStorage.setItem("Urunlerimiz", JSON.stringify(urunler));
        }

    });

});


















