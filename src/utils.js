
const createItem = (item) =>{
    let anchor = document.createElement('a')
    anchor.href = `item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`
    
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'item1')
  
    let img = document.createElement('img')
    img.src = item.imgSrc
    img.setAttribute('class', 'item')
    
  
    let title = document.createElement('p')
    title.textContent = item.title
    title.className = "item_title"
    let price = document.createElement('p')
    price.textContent = item.price
    price.className = "item_cost"
  
  
    div1.appendChild(img)
    div1.appendChild(title)
    div1.appendChild(price)
    anchor.append(div1)
    return anchor  
  }
  module.exports = {
    createItem
  }
  