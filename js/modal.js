const loadNewsData = async(news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayDetails(data.data[0]);
    }
    catch(error){
        console.log(error);
    }
}

const displayDetails = (newss) => {
    console.log(newss);
    const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = newss.title;
    const newsDetails = document.getElementById('news-detail');
    newsDetails.innerHTML = `
        <p> <strong>News Details:</strong> ${newss.details ? newss.details : "No Data"}</p>
        <p> <strong>Author Name:</strong> ${newss.author.name ? newss.author.name : "No Data"}</p>
        <p> <strong>Is todays pick:</strong> ${newss.others_info.is_todays_pick ? newss.others_info.is_todays_pick : "No Data"}</p>
        <p> <strong> Is trending:</strong> ${newss.others_info.is_trending ? newss.others_info.is_trending : "No Data"}</p>
        <p> <strong>Total View:</strong> ${newss.total_view ? newss.total_view : "No Data"}</p>
        <p> <strong>Rating:</strong> ${newss.rating.number ? newss.rating.number : "No Data"}</p>
    `
}