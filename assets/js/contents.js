

const createElement = (data) => {
    let outputEl = document.getElementById('output');
    let elTitleContent = document.createElement('h4');

    
        data.forEach(item => {
            elTitleContent.setAttribute('id', 'test');

            let elDiv = document.createElement('div');
            elDiv.classList.add("content-box");

            let elRow = document.createElement('div');
            elRow.classList.add('row', 'row-content-box');

            let elCol4 = document.createElement('div');
            elCol4.classList.add('col-md-4');

            let elCol8 = document.createElement('div');
            elCol8.classList.add('col-md-8');

            let elImg = document.createElement('img');
            elImg.classList.add('img-content');
            elImg.src = "../assets/images/image1.jpg"

            let elDes = document.createElement('a');
            elDes.classList.add('btn', 'btn-success');
            let btnText = document.createTextNode("Read more");
            elDes.setAttribute('href', `/content.html?article_id=${item.id}&article_title=${item.title}`);


   

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
            elCol8.appendChild(elDiv);
            elCol8.appendChild(elDes);
            elCol4.appendChild(elImg);
            elRow.appendChild(elCol8);
            elRow.appendChild(elCol4);
            elDes.appendChild(btnText);
            
            outputEl.appendChild(elRow);
        });

   
}

   
(function() {
    var retrievedObject = localStorage.getItem('arrayArticle');
    var data = JSON.parse(retrievedObject);
    console.log(data);
    createElement(data);
 })();




