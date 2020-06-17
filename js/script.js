function Spoiler() {
  var ele = document.getElementById("text-block-2");
  var text = document.getElementById("read-more-2");
  var text1 = document.getElementById("read-more-1");
  if (ele.style.display == "block") {
    ele.style.display = "none";
    text1.style.display = "none";
    text.innerHTML = "Читать далее";
  } else {
    ele.style.display = "block";
    text1.style.display = "block";
    text.innerHTML = "Скрыть текст";
    text1.innerHTML = "Скрыть текст";
  }
}
