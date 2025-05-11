document.querySelector("form").addEventListener("submit", function (e) {
  const tc = document.getElementById("tc").value.trim();
  if (!/^[1-9][0-9]{10}$/.test(tc)) {
    alert("Lütfen geçerli bir T.C. Kimlik numarası girin.");
    e.preventDefault();
    return;
  }

  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Geçerli bir e-posta adresi giriniz.");
    e.preventDefault();
    return;
  }

  const tel = document.getElementById("tel").value;
  if (!/^05\d{9}$/.test(tel)) {
    alert("Telefon numarası 05xxxxxxxxx formatında olmalıdır.");
    e.preventDefault();
    return;
  }
});
