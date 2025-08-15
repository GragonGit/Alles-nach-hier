document.addEventListener("DOMContentLoaded", function () {
  setContact();
  document.getElementById("showButton").addEventListener("click", onImpButtonClick);
});

let isDeobf = false;
function onImpButtonClick() {
  if (isDeobf) return;
  isDeobf = true;

  const elements = document.getElementsByClassName("obf");
  Array.from(elements).forEach((el) => {
    el.innerHTML = deobf(el.innerHTML)
  });
  document.getElementById("mail").href = "mailto:" + document.getElementById("mail2").innerHTML + document.getElementById("mail3").innerHTML;
  document.getElementById("showButton").style.setProperty("display", "none");
  document.documentElement.style.setProperty("--hiddenDisplay", "block");
}

const key = "df32Mo%ekMN187wr"
function deobf(text) {
  return text.split('')
    .map((c, i) => String.fromCharCode(
      c.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    )
    .join('');
}

function setContact() {
  document.getElementById("name").innerHTML = "0\x14ZA9\x0EKE%8\x91SYB\x1A";
  document.getElementById("street1").innerHTML = "0\x13A_";
  document.getElementById("street2").innerHTML = "\x17\x12AS\x92\n";
  document.getElementById("number").innerHTML = "VV";
  document.getElementById("postcode").innerHTML = "SR\x03\x05\x7F";
  document.getElementById("city").innerHTML = ",\x03Z^/\x1DJ\v\x05";
  document.getElementById("tel1").innerHTML = "0\x03_W+";
  document.getElementById("tel2").innerHTML = "\v\b\t\x12}^\x10T\\mz\x03\f\x04EE\\";
  document.getElementById("mail1").innerHTML = "!K~S$\x03\x1FE";
  document.getElementById("mail2").innerHTML = "\x03\x14RU\"\x01D\x11\x04?~\x03x";
  document.getElementById("mail3").innerHTML += "\x03\vR[!AF\n\x06";
}