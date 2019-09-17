
const createItem = (item) =>{
    let anchor = document.createElement('a')
    anchor.href = ""
    
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'item1')
  
    let img = document.createElement('img')
    img.src = item.imgSrc
    img.setAttribute('class', 'item')
    
  
    let title = document.createElement('a')
    title.textContent = item.title
    let price = document.createElement('p')
    price.textContent = item.price
  
    title.href = `item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`
  
    div1.appendChild(img)
    div1.appendChild(title)
    div1.appendChild(price)
    return div1  
  }
  module.exports = {
    createItem
  }
  