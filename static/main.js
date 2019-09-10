const showItemProps = () =>{
    console.log(window.location.search)
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams.get("title"));
    const title = urlParams.get("title")
    const cost = urlParams.get("cost")
    const pic = urlParams.get("src")
    alert(`Title: ${title} cost: ${cost} pic: ${pic}`);
    
}


window.onload = showItemProps  
