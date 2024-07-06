
const createElement = (data) => {
    let outputEl = document.getElementById('output');
    let elTitleContent = document.createElement('h4');
    elTitleContent.setAttribute('id', 'test');

    let elTitle = document.createElement('h4');
    let elSummery = document.createElement('h4');
    let elDate = document.createElement('h4');

        data.forEach(item => {
            //console.log(item);
            elTitle.innerHTML = `${item.title} :عنوان`;
            elSummery.innerHTML = `${item.summery} :خلاصه`;
            elDate.innerHTML = `${item.date} :تاریخ انتشار`;
            outputEl.appendChild(elTitle);
            outputEl.appendChild(elSummery);
            outputEl.appendChild(elDate);
        });

   
}
   
(function() {
    var retrievedObject = localStorage.getItem('arrayArticle');
    var data = JSON.parse(retrievedObject);
    createElement(data);
 })();




