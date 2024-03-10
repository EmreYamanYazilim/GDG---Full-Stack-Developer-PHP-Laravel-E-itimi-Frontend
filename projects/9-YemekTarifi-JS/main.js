document.addEventListener("DOMContentLoaded", function (event) {

    let yemekAdi = document.getElementById("yemekAdi");
    let yemekTarif = document.getElementById("yemekTarif");
    let yemekBaslik = document.getElementById("yemekBaslik");
    let tarifDetay = document.getElementById("tarifDetay");
    let icerikListesi = document.getElementById("icerikListesi");
    let urunListesi = document.getElementById("urunListesi");
    let searchInput = document.getElementById("search");
    let btnKaydet = document.getElementById("btnkaydet");

    let yemek = {
        yemekAdi: "",
        yemekTarif: "",
        icindekiler: [],
    };

    let icindekiler = [];


    let urunler = JSON.parse(localStorage.getItem("urunler"));

    if (urunler == null) {
        urunler = [];
    }

    urunListele(urunler);

    let yemekListesi = (JSON).parse(localStorage.getItem("yemek-listesi"));
    if (yemekListesi == null) {
        yemekListesi = [];
    }


    yemekAdi.addEventListener("input", function (eventYAdi) {
        // event eklerken farklı event vermekte fayda var.
        let name = this.value;

        if (name.length > 1) {
            yemekBaslik.textContent = name;
        } else {
            yemekBaslik.textContent = "Yemek Başlığı";
        }

        yemek.yemekAdi = name;
    });


    yemekTarif.addEventListener("input", function (eventYTarif) {

        let detay = this.value;

        if (detay.length > 1) {
            tarifDetay.textContent = detay;
        } else {
            tarifDetay.textContent = "Tarif Detayı";
        }

        yemek.yemekTarif = detay;

    });


    searchInput.addEventListener("input", function (eventSearch) {

        let searchValue = this.value;

        let filtrelenmisUrunler = urunler.filter(function (urun, index, array) {
            return urun.toLowerCase().includes(searchValue.toLowerCase());
        });
        urunListele(filtrelenmisUrunler);
    });


    document.body.addEventListener("click", function (eventBClick) {

        let element = eventBClick.target;

        let elementIsProductAdd = element.className.includes("add-product");
        let elemenIsProductDelete = element.className.includes("delete-product-content");


        let urunAdi = false;// alt ilealakalı

        if (elementIsProductAdd && // + butona tuklandı mı
            idExistsUrunler(element.id) && // urun var mı
            (urunAdi = urunler[element.id]) &&
            !isNameExistsIcindekiler(urunAdi)// urun tekrar eklemeyi engelleme
        ) {


            // + elementine tıklandığı zaman çalışacak kodlar

            let product = {
                id: element.id,
                miktar: "",
                name: urunAdi,
            };

            icindekiler.unshift(product);
            urunIcerigiListele(icindekiler);

            yemek.icindekiler = icindekiler;

            let parentli = element.parentElement;
            parentli.style.textDecoration = "line-through"; // üstünü çizme
            element.style.pointerEvents = "none"; //+ işareti devre dışu bırakıldı
            element.style.opacity = "0.2"; //+ işareti renk doygunluğunu düşürdü


        }


        if (elemenIsProductDelete &&
            element.hasAttributes("data-id") &&
            (elmentID = element.getAttribute("data-id")) &&
            idExistsUrunler(elmentID) &&
            (urunAdi = urunler[elmentID]) &&
            isNameExistsIcindekiler(urunAdi)
        )
        {

            icindekiler = icindekiler.filter(product => product.name !== urunAdi);
            urunIcerigiListele(icindekiler);
            yemek.icindekiler = icindekiler;

            let iElement = document.getElementById("i");
            iElement.style.pointerEvents = "auto";
            iElement.style.opacity = "1";
            let parentli = iElement.parentElement;
            parentli.style.textDecoration;
        }


    });


    icerikListesi.addEventListener("input", function (eventInput) {
        var degisenElement = eventInput.target;
        if (degisenElement.classList.contains("mikar")) {

            let mitarUrunID = degisenElement.getAttribute("data-id")
            icindekiler.find(function (item) {
                if ( item.id == mitarUrunID) {
                    item.miktar = degisenElement.value;

                }


            });
        }


    });

    btnKaydet.addEventListener("click", function () {
        if (btnKaydet) {
            yemekListesi.unshift(yemek);
            localStorage.setItem("yemek-listesi", JSON.stringify(yemekListesi))

            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }


    });
    function idExistsUrunler(id) {//true dönerse ürün var  false gelirse yok
        return urunler[id] !== undefined;

    }

    function isNameExistsIcindekiler(name) {
        // // alltaki yöntemle devam ediyoruz
        // icindekiler.find(function (item) {
        //     if (item.name === name) {
        //         return false;
        //     }
        // });

        // tekrar ürün eklenmemesi için

        return icindekiler.find(item => item.name === name) !== undefined;


    }


    function urunListele(urunler) {
        if (urunler == null || (Array.isArray(urunler) && urunler.length < 1)) {
            /**
             * Liste ürün yokken ürün olmadığına dair bilgi verebiliriz.
             */

            let liElement = document.createElement("li");
            liElement.className = "list-group-item bg-warning text-white";
            liElement.textContent = "Henüz Listede bir ürün yok.";

            urunListesi.innerHTML = "";
            urunListesi.appendChild(liElement);
        } else {
            urunListesi.innerHTML = "";

            urunler.forEach(function (urun, index, array) {
                let liElement = document.createElement("li");
                liElement.className = "list-group-item";
                liElement.textContent = urun;

                let iElement = document.createElement("i");
                iElement.className = "bi bi-plus-lg float-end add-product";
                iElement.id = index;
                urunListesi.appendChild(liElement);
                liElement.appendChild(iElement);
            })
        }
    }

    function urunIcerigiListele(urunler) {

        if (urunler == null || (Array.isArray(urunler) && urunler.length < 1)) {
            /**
             * Liste ürün yokken ürün olmadığına dair bilgi verebiliriz.
             */

            let liElement = document.createElement("li");
            liElement.className = "list-group-item bg-warning text-white";
            liElement.textContent = "Henüz Listede bir ürün yok.";

            icerikListesi.innerHTML = "";
            icerikListesi.appendChild(liElement);
        } else {

            icerikListesi.innerHTML = "";

            urunler.forEach(function (urun, index, array) {
                let liElement = document.createElement("li");
                liElement.className = "d-flex justify-content-between";

                let spanElement = document.createElement("span");

                let iElement = document.createElement("i");
                iElement.className = "bi bi-trash delete-product-content";
                iElement.setAttribute("for", "miktar-" + urun.id); // burada hata var

                let labelElement = document.createElement("label");
                labelElement.setAttribute("for", "miktar-" + urun.id);
                labelElement.textContent = urun.name;

                spanElement.appendChild(iElement);
                spanElement.appendChild(labelElement);

                let inputElement = document.createElement("input");

                inputElement.placeholder = "miktar";
                inputElement.className = "float-end border-0 border-bottom border-black miktar";
                inputElement.id = "miktar-" + urun.id;
                inputElement.setAttribute("data-id", urun.id);

                liElement.appendChild(spanElement);
                liElement.appendChild(inputElement);
                icerikListesi.appendChild(liElement);


            });

        }

    }


});