

const showItem = () =>{
    const urlParams = new URLSearchParams(window.location.search)

    const title = urlParams.get("title")
    const cost = urlParams.get("cost")
    const pic = urlParams.get("src")

    const container = document.createElement("div")
    container.className = "item_container";

    const itemImage = document.createElement("img")
    itemImage.src = pic
    itemImage.className = "item__image";
    itemImage.width = 128
    itemImage.height = 320

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

    console.log(container)
    
}

    
window.onload = showItem
