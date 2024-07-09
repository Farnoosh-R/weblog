let arrayArticles = [];

function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function getToday(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today;
  }

$(document).ready(function () {
  $(function () {
    $("#art-pub-date").datepicker();
  });
}) 



const register = () =>{
    let elTitle = document.getElementById('art-title').value;
    let elSummery = document.getElementById('art-summery').value;
    let elCat = document.getElementById('art-cat').value;
    let elBody = document.getElementById('art-body').value;
    let elDatePub = document.getElementById('art-pub-date');

   arrayArticles.push({
    title: elTitle,
    summery: elSummery,
    body: elBody,
    cat: elCat,
    date: getToday(),
    datePublish: elDatePub.value,
    id: uuid(),
   });
   console.log(arrayArticles);
   localStorage.setItem('arrayArticle', JSON.stringify(arrayArticles));

console.log(arrayArticles);
}