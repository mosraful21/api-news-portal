const newsItems = async(category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayNewsDetails(data.data);
    }
    catch(error){
        console.log(error);
    }
}

const displayNewsDetails = (news) => {
    news.sort(function (x, y) {return y.total_view - x.total_view })
    const newContainer = document.getElementById('news-container');
    newContainer.textContent = '';
    let count = 0;
    news.forEach(news => {
        count++;
        const newDetailsDiv = document.createElement('div');
        newDetailsDiv.innerHTML = `
            <div class="row p-4 shadow p-3 mb-5 bg-body rounded">
                <div class="col-md-3">
                    <img src="${news.thumbnail_url}" class="img-fluid rounded" alt="...">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h2 class="card-title mb-3">${news.title}</h2>
                        <p class="card-text text-muted">${news.details.slice(0,200)}...</p>
                        <div class="d-flex justify-content-between mt-5">
                            <div class="d-flex">
                                <img style="width: 50px; height:50px" class="rounded-circle" src="${news.author.img}" alt="">
                                <p class="d-flex flex-column mx-2"> ${news.author.name} <small class="text-muted">${news.author.published_date}</small></p>
                            </div>
                            <p>${news.total_view}</p>
                            <button onclick="loadNewsData('${news._id}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show details</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        newContainer.appendChild(newDetailsDiv);
    })
    // Stop spinner
    toggleSpinner(false);

    const countField = document.getElementById('count-field')
    if (count !== 0) {
        countField.innerText = `${count} News found for category `
    }
    else {
        countField.innerText = `No News Found`
    }
}

document.getElementById('title-container').addEventListener('click', function(){
    // Start spinner
    toggleSpinner(true);
})
const toggleSpinner = (isLoading) => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove("d-none");
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
