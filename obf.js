document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("showButton").addEventListener("click", onImpButtonClick);
});

let isDeobf = false;

function onImpButtonClick() {
  if (isDeobf) return;
  
  const elements = document.getElementsByClassName("obf");
  Array.from(elements).forEach((el) => {
    el.innerHTML = deobf(el.innerHTML)
  });
  isDeobf = true;
  document.documentElement.style.setProperty("--obfDisplay", "block");
}

const key = "ASFFETGEF"

function deobf(text) {
  return text.split('')
    .map((c, i) => String.fromCharCode(
      c.codePointAt(0) ^ key.codePointAt(i % key.length))
    )
    .join('');
}