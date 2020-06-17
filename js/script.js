function Spoiler() {
  var ele = document.getElementById("text-block-2");
  var text = document.getElementById("read-more");
  if (ele.style.display == "block") {
    ele.style.display = "none";
    text.innerHTML = "Читать далее";
  } else {
    ele.style.display = "block";
    text.innerHTML = "Скрыть текст";
  }
}
