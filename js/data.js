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
                        <p class="card-text text-muted">${news.details.slice(0,200)}</p>
                        <div class="d-flex justify-content-between mt-5">
                            <div class="d-flex">
                                <img style="width: 50px; height:50px" class="rounded-circle" src="${news.thumbnail_url}" alt="">
                                <p class="d-flex flex-column mx-2"> ${news.author.name} <small class="text-muted">${news.author.published_date}</small></p>
                            </div>
                            <p>${news.total_view}</p>
                            <button onclick="newsItems('${news.category_id}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show details</button>
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
}


const modal = () => {
    const modal = document.getElementById('modal');
    
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = `
        <div class="modal fade" id="newsDetailModal" tabindex="-1" aria-labelledby="newsDetailModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="newsDetailModalLabel"></h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="news-details" class="modal-body">
    
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `
        modal.appendChild(modalDiv);
    }
    
modal();
    