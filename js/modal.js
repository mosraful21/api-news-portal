const loadNewsData = async(news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data[0]);
}

const displayDetails = (newss) => {
    console.log(newss);
    const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = newss.title;
    const newsDetails = document.getElementById('news-detail');
    newsDetails.innerHTML = `
        
        <p>is todays pick: ${newss.others_info.is_todays_pick ? newss.others_info.is_todays_pick : "No Data"}</p>
        <p>is trending: ${newss.others_info.is_trending ? newss.others_info.is_trending : "No Data"}</p>
        <p>Total View: ${newss.total_view ? newss.total_view : "No Data"}</p>
        <p>Rating: ${newss.rating.number ? newss.rating.number : "No Data"}</p>
    `
}