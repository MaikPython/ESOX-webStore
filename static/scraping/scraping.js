{
    const handMade = []
    const industryMade = []
    const items = document.querySelectorAll(".product-grid > div")

    items.forEach(element => {
        const picSelector = element.querySelectorAll(".image > a > img")[0]
        const pic = picSelector.src

        const nameSelector = element.querySelectorAll(".name")[0]
        const title = nameSelector.textContent

        const priceSelector = element.querySelectorAll(".price")[0]     
        const price = priceSelector.getElementsByClassName("price-new")[0].textContent
  
        handMade.push({
            imgSrc : pic,
            title: title,
            price: price
        })
    });
    
    
    console.log(handMade);
    
}