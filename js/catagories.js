const loadTitle = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayTitles(data.data.news_category);
}

const displayTitles = (titles) => {
    const titleContainer = document.getElementById('title-container');
    titles.forEach(title => {
        const titleList = document.createElement('ul');
        titleList.innerHTML = `
        <li style="list-style-type: none;"> <a class="text-decoration-none text-dark" href=""> ${title.category_name} </a> </li>
        `
        titleContainer.appendChild(titleList);
    })
}

loadTitle();