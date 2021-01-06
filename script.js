document.getElementById("age").addEventListener("click", determainer);
document.getElementById("day").addEventListener("click", determainer);
function determainer() {
  let day= document.getElementById("day box").value;
  let age= document.getElementById("age box").value;
  if (age<=18 && day!="saturday"&&"sunday"){
  alert("You have school") }
  else if (age>18 && day!="saturday"&&"sunday"){
  alert("Go to work")}
 else {alert ("Relax for the weekend")
  }
}
  