const countPostsByDay = (posts) => {
    // Object to store the counts for each day
    const countsByDay = {};

    for(let i = 0; i < posts.length; i++) {
        const timestamp = posts[i].date;

        const date = new Date(timestamp).toISOString().split("T")[0];

        if(!countsByDay[date]) {
            countsByDay[date] = 1;
        } else {
            countPostsByDay[date]++;
        }
    }
    // Refactor the countsByDay => {date: "2023-01-11", count: 2}
    let heatmapData = [];
    for(let key in countsByDay){
        let newObj = {date: key, count: countsByDay[key]};
        heatmapData.push(newObj);
    }   
    return heatmapData;
}

export default countPostsByDay