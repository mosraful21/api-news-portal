const newsItems = async() => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}


const displayNewsDetails = (newses) => {
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="d-flex bg-white shadow p-4 mb-4 bg-body rounded-4">
            <div class="col-md-3">
                <img src="${news.author.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-9 p-4">
                <div class="card-body">
                    <h5 class="card-title mb-3">${news.title}</h5>
                    <p class="card-text">${news.details}</p>
                    <div class="d-flex justify-content-between mt-5">
                        <p class="d-flex flex-column"> ${news.author.name} <small class="text-muted">${news.author.published_date}</small></p>
                        <p>${news.total_view}</p>
                        <button type="button" class="btn btn-success">Read More</button>
                    </div>
                    
                </div>
            </div>
        </div>
        `
        newsContainer.appendChild(newsDiv);
    })
   
}

newsItems();
