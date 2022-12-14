const loadTitle = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayTitles(data.data.news_category);
    }
    catch(error){
        console.log(error);
    }
}

const displayTitles = (titles) => {
    const titleContainer = document.getElementById('title-container');
    let i = 0;
    titles.forEach(title => {
        const titleList = document.createElement('div');
        titleList.innerHTML = `
        <a onclick="newsItems('${title.category_id}')" id="item-${i}" class="nav-link active mx-2" aria-current="page" href="#">${title.category_name}</a>
        `
        i = i + 1;
        titleContainer.appendChild(titleList);
    });
    // stop spinner
    
}



loadTitle();