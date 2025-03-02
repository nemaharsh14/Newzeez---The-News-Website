console.log("This is my index js file");

//initialize the news parameter
let source='the-times-of-india';
let apikey='10656dad2ec24e05833ccc414ce3cc51';

//Grab the news container
let newsAcoordian = document.getElementById('newsAcoordian');

//Create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if(this.status === 200){

        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        // console.log(articles);
        let newshtml="";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news=`<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}: </b> ${element["title"]}
                                </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAcoordian">
                            <div class="card-body">
                                ${element["description"]}. <a href="${element['url']}" target="_blank"> Read more here </a>
                            </div>
                        </div>
            </div>`;
            newshtml+=news;
        });
        newsAcoordian.innerHTML=newshtml;
    }
    else{
        console.log("Some error occured")
    }
}

//send request
xhr.send()

