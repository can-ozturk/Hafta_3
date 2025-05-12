var veriler = new URLSearchParams(window.location.search);
var arac = veriler.get('arac');
document.getElementById("aracBilgisi").innerHTML = "<p><strong>Kiralanan Araç:</strong> " + arac + "</p>";
