
document.addEventListener("DOMContentLoaded", function () {


    let btnUrunEkle = document.getElementById("btnUrunEkle");
    let urunler = JSON.parse(localStorage.getItem("urunlerimiz"));
    if (urunler == null  ) {
        urunler = [];
    }
    listele(urunler);

    btnUrunEkle.addEventListener("click", function () {
        let urunAdi = document.getElementById("urunAdi").value;
        let isadded = urunler.includes(urunAdi);

        if (isadded) {
            alert("Bu ürün daha önce eklenmiştir");
            console.log(urunler);

        }else{
            urunler.unshift(urunAdi);
            localStorage.setItem("urunlerimiz", JSON.stringify(urunler));
            listele(urunler);
        }


    });

    function listele(urunler) {
        if (urunler == null || (Array.isArray(urunler) && urunler.length < 1)) {

            let liElement = document.createElement("li");
            liElement.className="list-group-item bg-warning text-white"
            liElement.textContent = "Ürün bulunmamaktadır";

            let urunListesi = document.getElementById("urunListesi");
            urunListesi.innerHTML = "";
            urunListesi.appendChild(liElement);

        }else{
            urunListesi.innerHTML = "";
            urunler.forEach(function (urun, index) {
                let liElement = document.createElement("li");
                liElement.className = "list-group-item";
                liElement.textContent=urun;
                let iElement = document.createElement("i");
                iElement.className ="bi bi-trash float-end delete-product"
                iElement.id = index;
                urunListesi.appendChild(liElement);
                liElement.appendChild(iElement);
            });
        }
    }



});