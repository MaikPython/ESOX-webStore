{
    const arr = []
    const items = document.querySelectorAll(".product-grid > div")
    let category = document.title.replace(/\s/g,'')
    category = category.split('@')[0]


    console.log(category);
    

    items.forEach(element => {
        const picSelector = element.querySelectorAll(".image > a > img")[0]
        const pic = picSelector.src

        const nameSelector = element.querySelectorAll(".name")[0]
        const title = nameSelector.textContent

        const priceSelector = element.querySelectorAll(".price")[0]     
        const price = priceSelector.getElementsByClassName("price-new")[0].textContent
  
        arr.push({
            imgSrc : pic,
            title: title,
            price: price,
            category: category
        })

    });
    

    console.log(arr);
    const handMade = [
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…_1484566648342957_6154376475161133056_n_large.jpg", title: "Estlant Merikalant 18g ja 22g", price: "11,66 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/skin/bigshop/image/product_nothumb.png", title: "Käsitöö haugilant Cocomartini 32g", price: "10,75 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…2277-2277_59c655162ec843.62324800_ahven_large.jpg", title: "Käsitöö plekklant Ahven 28-29g", price: "12,60 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…5144-5144_59c65507ca63a8.16951380_ahven_large.jpg", title: "Käsitöö plekklant Ahven 36-38g", price: "12,60 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/skin/bigshop/image/product_nothumb.png", title: "Käsitöö plekklant Haug hõbe 36g", price: "12,60 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…2276_59c654debb4bc2.69595479_sa%CC%88rg_large.jpg", title: "Käsitöö plekklant Särg 27-29g", price: "12,60 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…5145_59c654f1491566.86210192_sa%CC%88rg_large.jpg", title: "Käsitöö plekklant Särg 36-37g", price: "12,60 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…6049_5ad0c1b9c7cfd9.96074418_tuulehaug2_large.jpg", title: "Käsitöö Tuulehaugi rakendus kroomitud 2 23g", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-….07979998_ra%CC%88im-%60%60sinine%60%60_large.jpg", title: "Meriforelli lant 1 (sinine)", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…7.31519244_ra%CC%88im-%60%60lilla%60%60_large.jpg", title: "Meriforelli lant 2 (lilla)", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…676275_ra%CC%88im-%60%60originaal%60%60_large.jpg", title: "Meriforelli lant 3 (must)", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…7465946_ra%CC%88im-%60%60roheline%60%60_large.jpg", title: "Meriforelli lant 4 (roheline)", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…285-2285_59c6542f074482.44956395_kriimu_large.jpg", title: "Meriforelli lant 5", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…7_12562524_1087480771296719_492324626_o_large.jpg", title: "Meriforelli lant 6", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…_13105817_1158002220911240_1866040934_o_large.jpg", title: "Meriforelli lant 7", price: "13,05 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…6975-6975_5bf3d96d0a0031.75281841_roosa_large.jpg", title: "Meriforelli lant Cocomartini 1 (Roosa) 18g", price: "10,75 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/skin/bigshop/image/product_nothumb.png", title: "Meriforelli lant Cocomartini 10 (oliiv) 19g", price: "10,76 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/skin/bigshop/image/product_nothumb.png", title: "Meriforelli lant Cocomartini 11 (pruun) 19g", price: "10,76 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/skin/bigshop/image/product_nothumb.png", title: "Meriforelli lant Cocomartini 12 (pruun nigli) 19g", price: "10,76 € (10%)", category: "Käsitöölandid"},
    {imgSrc: "http://www.kalastus.eu/skin/bigshop/image/product_nothumb.png", title: "Meriforelli lant Cocomartini 13 (roheline nigli) 19g", price: "10,76 € (10%)", category: "Käsitöölandid"}
    ]
    const indusMade = 
    [
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…699-2699_56d9935e7b79b4.10924585_152200_large.jpg", title: "SpinTube Disco aeglaselt uppuv 35g hõbe", price: "13,05 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…911-4911_5911cf065cb881.40734820_152250_large.jpg", title: "SpinTube Disco aeglaselt uppuv 35g pärl/lilla", price: "13,05 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…909-4909_5911ccf52f4a78.05209901_152220_large.jpg", title: "SpinTube Disco aeglaselt uppuv 35g roheline/kollane", price: "13,05 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…910-4910_5911cf70c59a37.50891346_152240_large.jpg", title: "SpinTube Disco aeglaselt uppuv 35g sinine", price: "13,05 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…710-2710_56db11a3a875b2.89951213_155080_large.jpg", title: "SpinTube Leech 10 g", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…712-2712_56dc2c01c17451.30639821_155140_large.jpg", title: "SpinTube Leech 10g oranz", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…708-2708_56dc2c2aefc450.41849696_155110_large.jpg", title: "SpinTube Leech 10g roheline/must", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…713-2713_56dc2c60e5caf5.71478400_155150_large.jpg", title: "SpinTube Leech 10g roosa/must", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…266-3266_57189ce75e9576.06613563_155030_large.jpg", title: "SpinTube Leech 5g fl. yellow", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…148-3148_571f8f66825f71.15119079_155070_large.jpg", title: "Spintube Leech 5g Kollane/Must", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…146-3146_571f8f92667818.97551430_155000_large.jpg", title: "Spintube Leech 5g Punane/Must", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…147-3147_571f8fc6b15461.20072179_155050_large.jpg", title: "Spintube Leech 5g Roosa/Must", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…149-3149_571f8ff4e528b9.73484047_155080_large.jpg", title: "Spintube Leech 5g Valge/Roosa", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…709-2709_56db1143193953.49971573_155000_large.jpg", title: "SpinTube Leech fl. red/black 10g ", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…711-2711_56db125b27b2a6.25582742_155090_large.jpg", title: "SpinTube Leech valge-must 10g", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…033-4033_58233712aed4c3.31945720_155840_large.jpg", title: "SpinTube Minnow Brass White/Chart 5g", price: "4,77 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…_56da96ceacaaa6.47677188_154720-800x800_large.jpg", title: "SpinTube Natural 10g ", price: "5,49 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…62b7f64e6.82284659_allalaaditud-fail-1-_large.jpg", title: "SpinTube Natural 10g", price: "5,49 € (10%)", category: "Leechid"},
        {imgSrc: "http://www.kalastus.eu/media/kalastus-eu/.product-…_56da9710aaed47.61243770_154730-800x800_large.jpg", title: "SpinTube Natural 10g", price: "5,49 € (10%)", category: "Leechid"}
    ]   
}