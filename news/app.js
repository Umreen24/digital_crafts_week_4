let newsDiv = document.getElementById("newsDiv")


function populateNews () {

    let newsList = news.articles.map(newsItems =>{

        let articleItems = `<div class="NewsItems">
                            <img src='${newsItems.urlToImage}' class="storyImages"></img>
                            <h2>${newsItems.title}</h2>
                            <h3 class="storyDescription">${newsItems.description ? newsItems.description: "Description Not Available"}<h3>
                            <h4 class="author">${newsItems.author ? newsItems.author:"Author Not Available"}</h4>
                            <a href="${newsItems.url}">Link to full story</a>
                            <label>${newsItems.publishedAt}</label>
                        </div>`
        return articleItems
})
newsDiv.innerHTML = newsList.join(' ')
}

populateNews() 

