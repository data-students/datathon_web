import dateFormat from "dateformat";
import "./generator.css";

const btn = document.querySelector("#get-code-btn"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
    setTimeout( () => {
      btn.classList.toggle("invisible");
      var now = new Date();
      var month = now.getMonth() - 9;
      var s = parseInt(dateFormat(now, `ss MM hh dd ${month}`).replaceAll(' ', '')).toString(36);
      console.log(s);
      document.querySelector("#code").innerHTML = s;
      document.querySelector("#code-span").classList.toggle("invisible");
    }, 300)
  };
}