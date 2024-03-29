document.addEventListener("DOMContentLoaded", function () {

    let btnUrunEkle = document.getElementById("btnUrunEkle");
    //let urunler = [];// array olarak tutabilmek için buraya button altına veriyorum

    let urunler = JSON.parse(localStorage.getItem("urunler")); //localStorageden urunlerimiz keyli veriyi kontrol edebilmemiz için çekiyorum
    if (urunler == null) { // kontrol sonucu null dönerse  hata vermemesi için  urunleri boş array ile gösterdim
        urunler = [];
    }

    //listeleme bölümü

    listele(urunler);


    btnUrunEkle.addEventListener("click", function () {

        let urunAdi = document.getElementById("urunAdi").value;
        let isAdded = urunler.includes(urunAdi);

        if (isAdded) {
            alert("Bu ürün daha önce eklenmiştir");
        }else{
            urunler.unshift(urunAdi);
            localStorage.setItem("urunler", JSON.stringify(urunler));
            listele(urunler);

        }

    });


    function listele(urunler) {
        if (urunler == null || (Array.isArray(urunler) && urunler.length < 1)) {

            // listede ürün yokken bilgi verebiliriz
            let liElement = document.createElement("li");
            liElement.className = "list-group-item bg-warning text-white";
            liElement.textContent = "Henüz bir ürün yok";

            let urunListesi = document.getElementById("urunListesi");
            urunListesi.innerHTML = "";
            urunListesi.appendChild(liElement);

        }else{
            urunListesi.innerHTML = "";
            urunler.forEach(function (urun, index) {
                let liElement = document.createElement("li");
                liElement.className = "list-group-item";
                liElement.textContent = urun;
                let iElement = document.createElement("i");
                iElement.className = "bi bi-trash float-end delete-product";
                iElement.id = index;
                urunListesi.appendChild(liElement);
                liElement.appendChild(iElement);

            });
        }

    }

});


















