const newsItems = async(category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}

const displayNewsDetails = (news) => {
    const newContainer = document.getElementById('news-container');
    newContainer.textContent = '';
    let count = 0;
    news.forEach(news => {
        count++;
        const newDetailsDiv = document.createElement('div');
        newDetailsDiv.innerHTML = `
            <div class="row p-4 shadow p-3 mb-5 bg-body rounded">
                <div class="col-md-3">
                    <img src="${news.author.img}" class="img-fluid rounded" alt="...">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h2 class="card-title mb-3">${news.title}</h2>
                        <p class="card-text">${news.details.slice(0,200)}</p>
                        <div class="d-flex justify-content-between mt-5">
                            <p class="d-flex flex-column"> ${news.author.name} <small class="text-muted">${news.author.published_date}</small></p>
                            <p>${news.total_view}</p>
                            <button type="button" class="btn btn-secondary">Show Details</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        newContainer.appendChild(newDetailsDiv);
    })

    const countField = document.getElementById('count-field')
    if (count !== 0) {
        countField.innerText = `${count} News found for category `
    }
    else {
        countField.innerText = `No News Found`
    }
    console.log(count);
}