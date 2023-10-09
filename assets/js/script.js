var req = 'https://newsapi.org/v2/everything?q=anxiety&from=2023-10-01&sortBy=popularity&apiKey=d614ee047e9c4a1d862800207e29abed';
let updateArticles = function (articles){
    if (articles.length >= 3) {
        let article1title = document.querySelector("#article-1 h2")
        let article2title = document.querySelector("#article-2 h2")
        let article3title = document.querySelector("#article-3 h2")
        let article1image = document.querySelector("#article-1 img")
        let article2image = document.querySelector("#article-2 img")
        let article3image = document.querySelector("#article-3 img")
        let article1link = document.querySelector("#article-1 a")
        let article2link = document.querySelector("#article-2 a")
        let article3link = document.querySelector("#article-3 a")
        let article1description = document.querySelector("#article-1 p")
        let article2description = document.querySelector("#article-2 p")
        let article3description = document.querySelector("#article-3 p")
        article1title.textContent = articles[0].title
        article2title.textContent = articles[1].title
        article3title.textContent = articles[2].title
        article1image.src = articles[0].urlToImage
        article2image.src = articles[1].urlToImage
        article3image.src = articles[2].urlToImage
        article1link.href = articles[0].url
        article2link.href = articles[1].url
        article3link.href = articles[2].url
        article1description.textContent = articles[0].description
        article2description.textContent = articles[1].description
        article3description.textContent = articles[2].description
    }
}

fetch(req)
.then(function (response) {
   if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data.articles[0,1,2]);
        updateArticles(data.articles)
    });
    } else {
              alert('Error: ' + response.statusText);
            }
          })
          .catch(function (error) {
            alert('Unable to connect');
          });
