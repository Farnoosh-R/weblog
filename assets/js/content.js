

// let url = window.location.href;
// console.log(url.id)


(function() {
    var retrievedObject = localStorage.getItem('arrayArticle');
    var data = JSON.parse(retrievedObject);
    console.log(data);
    showArticle(data);
 })();

 function showArticle(data){

    //const params = new URL(location.href).searchParams;
    

    //let url= new URL('https://javascriptjeep.com?mode=night&page=2');
    let url = window.location
    let params = new URLSearchParams(url.search);
    const paramId = params.get('article_id');
    console.log(params.get('article_id'));
    
    
    //data.forEach(item => {
        //console.log(item.title)
        let objContent = data.filter((p) => p.id === paramId);
        console.log(objContent)
        if (objContent.length === 1){
            console.log('ok')
            let elContentBox = document.getElementById('content-box');
            let elContent = document.createElement('div');
            let elImg = document.createElement('img');
            elImg.src = "../assets/images/image1.jpg"
            let elTitle = document.createElement('h3');
            let elBody = document.createElement('p');

            elTitle.innerHTML = objContent[0].title;
            elBody.innerHTML = objContent[0].body;
            elContent.appendChild(elImg)
            elContent.appendChild(elTitle)
            elContent.appendChild(elBody)
            elContentBox.appendChild(elContent)


        }
        
  //  });
 }


