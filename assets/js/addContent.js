let arrayArticles = [];

function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

const register = () =>{
    let elTitle = document.getElementById('art-title').value;
    let elSummery = document.getElementById('art-summery').value;
    let elCat = document.getElementById('art-cat').value;
    let elBody = document.getElementById('art-body').value;

   arrayArticles.push({
    title: elTitle,
    summery: elSummery,
    body: elBody,
    cat: elCat,
    date: '1403/07/07',
    id: uuid(),
   });

   localStorage.setItem('arrayArticle', JSON.stringify(arrayArticles));
//    var retrievedObject = localStorage.getItem('arrayArticle');
//    console.log('retrievedObject: ', JSON.parse(retrievedObject));

console.log(arrayArticles);
}