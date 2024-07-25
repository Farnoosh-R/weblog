


(function() {
    var retrievedObject = localStorage.getItem('arrayArticle');
    var data = JSON.parse(retrievedObject);
    console.log(data);
    findArticle(data)
    showArticle(data);
 })();

 function findArticle(data){


    let url = window.location
    let params = new URLSearchParams(url.search);
    const paramId = params.get('article_id');
    console.log(params.get('article_id'));

    let objContent = data.filter((p) => p.id === paramId);
    
    data[0].visit +=1;
    localStorage.setItem('arrayArticle', JSON.stringify(data));
    console.log('findArticle:' + data[0].visit);
 }

 function showArticle(data){

              
        if (data.length === 1){
            console.log('ok')

            let elContentBox = document.getElementById('content-box');
            let elContent = document.createElement('div');
            let elImg = document.createElement('img');
            elImg.src = "../assets/images/image1.jpg"
            let elTitle = document.createElement('h3');
            let elVisit = document.createElement('p');
            let elBody = document.createElement('p');

            elTitle.innerHTML = `${data[0].title} :عنوان مطلب`
            elBody.innerHTML = `${data[0].body} :متن`
            elVisit.innerHTML = `تعداد بازدید: ${data[0].visit}`
            elContent.appendChild(elImg)
            elContent.appendChild(elVisit)
            elContent.appendChild(elTitle)
            
            elContent.appendChild(elBody)
            elContentBox.appendChild(elContent)


        }
 }


