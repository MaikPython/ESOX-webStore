

const setUp = () =>{
    const urlParams = new URLSearchParams(window.location.search)
    console.log(window.location.search);
    
    const title = urlParams.get("title")    
    const cost = urlParams.get("cost")
    const pic = urlParams.get("src")

    console.log("title: ", title, "cost: ", cost , "pic:", pic);

    const container = document.createElement("div")
    container.className = "item_container";

    const itemImage = document.createElement("img")
    itemImage.src = pic
    itemImage.className = "item_image";
    itemImage.width = 252
    itemImage.height = 252

    const itemTitle = document.createElement('p')
    itemTitle.textContent = title
    itemTitle.className = "item_title"

    const itemCost = document.createElement('p')
    itemCost.textContent = cost
    itemCost.className = "item_cost"

    container.append(itemImage)
    container.append(itemTitle)
    container.append(itemCost)
    
    document.body.appendChild(container)

    
}

module.exports = {
    setUp,
}