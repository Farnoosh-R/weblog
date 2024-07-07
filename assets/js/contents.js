
const createElement = (data) => {
    let outputEl = document.getElementById('output');
    let elTitleContent = document.createElement('h4');

    


        data.forEach(item => {
            elTitleContent.setAttribute('id', 'test');
            let elDiv = document.createElement('div');
            let elTitle = document.createElement('p');
            let elSummery = document.createElement('p');
            let elDate = document.createElement('p');
            console.log(item);
            elTitle.innerHTML = `${item.title} :عنوان`;
            elSummery.innerHTML = `${item.summery} :خلاصه`;
            elDate.innerHTML = `${item.date} :تاریخ انتشار`;
            elDiv.appendChild(elTitle);
            elDiv.appendChild(elSummery);
            elDiv.appendChild(elDate);

            outputEl.appendChild(elDiv);
        });

   
}
   
(function() {
    var retrievedObject = localStorage.getItem('arrayArticle');
    var data = JSON.parse(retrievedObject);
    console.log(data);
    createElement(data);
 })();




