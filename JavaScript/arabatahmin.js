// Araba tahmin oyunu
  const arabalar = [
    { id: 1, isim: "Audi A4", foto: "../Görseller/Araba/audi-a4.jpeg" },
    { id: 2, isim: "BMW 3 Serisi", foto: "../Görseller/Araba/bmw-3-serisi.jpg" },
    { id: 3, isim: "Citroen C3", foto: "../Görseller/Araba/citroen-c3.jpg" },
    { id: 4, isim: "Dacia Duster", foto: "../Görseller/Araba/dacia-duster.jpg" },
    { id: 5, isim: "Fiat Egea", foto: "../Görseller/Araba/fiat-egea.jpg" },
    { id: 6, isim: "Ford Focus", foto: "../Görseller/Araba/ford-focus.jpeg" },
    { id: 7, isim: "Honda Civic", foto: "../Görseller/Araba/honda-civic.jpg" },
    { id: 8, isim: "Hyundai i20", foto: "../Görseller/Araba/hyundai-i20.jpg" },
    { id: 9, isim: "Jeep Renegade", foto: "../Görseller/Araba/jeep-renegade.jpeg" },
    { id: 10, isim: "Kia Sportage", foto: "../Görseller/Araba/kia-sportage.jpeg" },
    { id: 11, isim: "Mercedes C Serisi", foto: "../Görseller/Araba/mercedes-c-serisi.jpg" },
    { id: 12, isim: "Nissan Qashqai", foto: "../Görseller/Araba/nissan-qashqai.jpg" },
    { id: 13, isim: "Opel Astra", foto: "../Görseller/Araba/opel-astra.jpg" },
    { id: 14, isim: "Peugeot 3008", foto: "../Görseller/Araba/peugeot-3008.jpeg" },
    { id: 15, isim: "Renault Clio", foto: "../Görseller/Araba/renault-clio.jpg" },
    { id: 16, isim: "Seat Leon", foto: "../Görseller/Araba/seat-leon.jpg" },
    { id: 17, isim: "Skoda Superb", foto: "../Görseller/Araba/skoda-superb.jpg" },
    { id: 18, isim: "Tesla Model 3", foto: "../Görseller/Araba/tesla-model-3.jpeg" },
    { id: 19, isim: "Toyota Corolla", foto: "../Görseller/Araba/toyota-corolla.jpg" },
    { id: 20, isim: "Volkswagen Passat", foto: "../Görseller/Araba/volkswagen-passat.jpg" }
  ];

  let dogruSayisi = 0;
  let mevcutAraba = 0;

  function yeniAraba() {
    const araba = arabalar[mevcutAraba];
    document.getElementById("arabaResmi").src = araba.foto;

    const tahminSelect = document.getElementById("tahmin");
    tahminSelect.innerHTML = "<option value=''>-- Araba seçin --</option>";
    arabalar.forEach((araba) => {
      const option = document.createElement("option");
      option.value = araba.id;
      option.textContent = araba.isim;
      tahminSelect.appendChild(option);
    });
  }

  window.kontrolEt = function () {
    const tahmin = document.getElementById("tahmin").value;
    const sonuc = document.getElementById("sonuc");
    const odul = document.getElementById("odul");
    const araba = arabalar[mevcutAraba];

    if (parseInt(tahmin) === araba.id) {
      dogruSayisi++;
      sonuc.textContent = "Tebrikler! Doğru tahmin ettiniz.";
      sonuc.style.color = "green";
      if (dogruSayisi === 1) {
        odul.textContent = "İlk doğru tahmininiz! %10 indirim kazandınız!";
      } else if (dogruSayisi === 2) {
        odul.textContent = "2. doğru tahmin! Ücretsiz ekstra 1 saat araç kiralama kazandınız!";
      } else if (dogruSayisi === 3) {
        odul.textContent = "3. doğru tahmin! Bir sonraki kiralamanızda %20 indirim kazandınız!";
      } else {
        odul.textContent = `Harika! ${dogruSayisi}. doğru tahmininiz! Daha fazla ödül kazanmak için devam edin!`;
      }
    } else {
      sonuc.textContent = "Üzgünüz, yanlış tahmin ettiniz. Tekrar deneyin!";
      sonuc.style.color = "red";
      odul.textContent = "";
    }

    let oncekiAraba = mevcutAraba;
    do {
      mevcutAraba = Math.floor(Math.random() * arabalar.length);
    } while (mevcutAraba === oncekiAraba);

    yeniAraba();
  };

  yeniAraba(); // İlk araba gösterimi