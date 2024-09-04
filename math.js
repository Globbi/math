async function updateFun() {
  formular_container.innerHTML = "\\[y = mx + n\\]"
  
  await MathJax.startup.promise; // make sure initial typesetting has taken place
  MathJax.typesetClear([formular_container]); // clear MathJax awareness of this element
  await MathJax.typesetPromise([formular_container]); // typeset anew
}

const formular_container = document.getElementById("formular-container");
