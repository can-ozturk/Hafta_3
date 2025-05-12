var veriler = new URLSearchParams(window.location.search);
var ad = veriler.get('ad');
var soyad = veriler.get('soyad');
var dogumTarihi = veriler.get('dogumTarihi');
var tel = veriler.get('tel');
var cinsiyet = veriler.get('cinsiyet');
var email = veriler.get('email');
var adres = veriler.get('adres');

var icerik = "<p><strong>BAŞARI İLE KİRALANDI</strong></p>" +
             "<p><strong>Ad:</strong> " + ad + "</p>" +
             "<p><strong>Soyad:</strong> " + soyad + "</p>" +
             "<p><strong>Doğum Tarihi:</strong> " + dogumTarihi + "</p>" +
             "<p><strong>Telefon No:</strong> " + tel + "</p>" +
             "<p><strong>Cinsiyet:</strong> " + cinsiyet + "</p>" +
             "<p><strong>E-posta:</strong> " + email + "</p>" +
             "<p><strong>Adres:</strong> " + adres + "</p>";

document.getElementById("kiralamaBilgisi").innerHTML = icerik;
