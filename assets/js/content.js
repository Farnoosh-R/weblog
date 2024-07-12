

// let url = window.location.href;
// console.log(url.id)


(function() {
    var retrievedObject = localStorage.getItem('arrayArticle');
    var data = JSON.parse(retrievedObject);
    console.log(data);
    showArticle(data);
 })();

 function showArticle(data){

    const params = new URL(location.href).searchParams;
    const paramId = params.get('article_id');
    
    
    data.forEach(item => {
        //console.log(item.title)
        let idFilter = data.filter((p) => p.id == paramId)[0];
        if (idFilter){
            console.log('ok')
            let elContent = document.createElement('div');
            let elImg = document.createElement('img');
            elImg.src = "../assets/images/image1.jpg"
            let elTitle = document.createElement('h3');
            let elBody = document.createElement('p');

            elTitle.innerHTML = item.title;
            elDes.innerHTML = item.body;
            elContent.appendChild(elImg)
            elContent.appendChild(elTitle)
            elContent.appendChild(elBody)

        }
        
    });
 }


