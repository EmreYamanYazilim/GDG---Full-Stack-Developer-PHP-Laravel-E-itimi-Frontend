document.addEventListener("DOMContentLoaded", function () {
    let foodList = document.getElementById("foodList");
    let completedListElement = document.getElementById("completedList");

    let completedList = JSON.parse(localStorage.getItem("completed_list"));

    if (completedList == null) {
        completedList = [];
    }
    let yemekListesi = JSON.parse(localStorage.getItem("yemek-listesi"));

    if (yemekListesi == null) {
        yemekListesi = [];
    }

    listele(yemekListesi, foodList, true);
    listele(completedList, completedListElement);

    document.body.addEventListener("click", function (event) {
        let element = event.target;

        let elementDeleteFood = element.className.includes("delete-food");
        let elementcompletedFood = element.className.includes("completed-food");

        if (elementDeleteFood) {
            let yemekID = element.getAttribute("data-id");
            let yemek = yemekListesi[yemekID];

            Swal.fire({
                title: yemek.yemekAdi + " yemegi silinsin mi?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Evet",
                denyButtonText: `Hayir`,
                cancelButtonText: "Iptal",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    yemekListesi.splice(yemekID, 1);
                    localStorage.setItem("yemek-listesi", JSON.stringify(yemekListesi));
                    listele(yemekListesi, foodList, true);
                    Swal.fire({
                        title: "Islem Basarili",
                        text: "Yemek Silindi",
                        icon: "success",
                        confirmButtonText: "Tamam",
                    });
                } else if (result.isDenied) {
                    Swal.fire({
                        title: "Yemek Silinmedi",
                        icon: "info",
                        confirmButtonText: "Tamam",
                    });
                }
            });
        }

        if (elementcompletedFood) {
            let yemekID = element.getAttribute("data-id");
            let yemek = yemekListesi[yemekID];

            Swal.fire({
                title: yemek.yemekAdi + " yemegi yapildi olarak isaretlensin mi?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Evet",
                denyButtonText: `Hayir`,
                cancelButtonText: "Iptal",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    let newComplete = yemekListesi.splice(yemekID, 1);
                    completedList = completedList.concat(newComplete); //dahil et

                    localStorage.setItem("completed_list", JSON.stringify(completedList));
                    localStorage.setItem("yemek-listesi", JSON.stringify(yemekListesi));

                    listele(yemekListesi, foodList, true);
                    listele(completedList, completedListElement);

                    Swal.fire({
                        title: "Islem Basarili",
                        text: "Yemek Yapildi",
                        icon: "success",
                        confirmButtonText: "Tamam",
                    });
                } else if (result.isDenied) {
                    Swal.fire({
                        title: "Yemek Yapilmadi",
                        icon: "info",
                        confirmButtonText: "Tamam",
                    });
                }
            });
        }
    });

    function listele(yemekler, listElement, buttonStatus = false) {
        listElement.innerHTML = "";

        if (yemekler.length < 1) {
            listElement.innerHTML = "Listede eleman yok";
        }

        yemekler.forEach(function (val, index) {
            let satirElement = document.createElement("div");
            satirElement.className = "col-md-6 mt-4";

            let cardElement = document.createElement("div");
            cardElement.className = "card";

            let cardHeaderElement = document.createElement("h5");
            cardHeaderElement.className = "card-header";
            cardHeaderElement.innerHTML = `<strong>Yemek Adi: </strong> ${val.yemekAdi}`;

            let cardBodyElement = document.createElement("div");
            cardBodyElement.className = "card-body";

            let contentElement = document.createElement("div");
            contentElement.className = "content";

            let contentTitle = document.createElement("h5");
            contentTitle.textContent = "Icindekiler";

            let ulContentListElement = document.createElement("ul");
            val.icindekiler.forEach(function (urun) {
                let liElement = document.createElement("li");
                liElement.className = "d-flex justify-content-between";
                liElement.textContent = urun.name + " miktar: " + urun.miktar;

                ulContentListElement.appendChild(liElement);
            });

            contentElement.appendChild(contentTitle);
            contentElement.appendChild(ulContentListElement);

            let recipeElement = document.createElement("div");
            recipeElement.className = "recipe";

            let recipeTitle = document.createElement("h6");
            recipeTitle.textContent = "Tarif:";

            let recipeDetail = document.createElement("p");
            recipeDetail.textContent = val.yemekTarif;

            recipeElement.appendChild(recipeTitle);
            recipeElement.appendChild(recipeDetail);

            cardBodyElement.appendChild(contentElement);
            cardBodyElement.appendChild(recipeElement);

            let footerElement = document.createElement("div");
            footerElement.className = "card-footer d-flex justify-content-between";

            cardElement.appendChild(cardHeaderElement);
            cardElement.appendChild(cardBodyElement);

            satirElement.appendChild(cardElement);

            listElement.appendChild(satirElement);

            if (buttonStatus) {
                let btnSil = document.createElement("button");
                btnSil.className = "btn btn-danger col me-5 delete-food";
                btnSil.textContent = "Sil";
                btnSil.setAttribute("data-id", index);

                let btnYapildi = document.createElement("button");
                btnYapildi.className = "btn btn-success col completed-food";
                btnYapildi.textContent = "Yapildi";
                btnYapildi.setAttribute("data-id", index);
                cardElement.appendChild(footerElement);
                footerElement.appendChild(btnSil);
                footerElement.appendChild(btnYapildi);
            }
        });
    }
});