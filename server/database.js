const getItems = () =>{
    const items = []
    handMade.forEach((item, index)=>{
        items.push({
            ...item,
            id: 'handMade' + index
        })
    })
    indusMade.forEach((item, index)=>{
        items.push({
            ...item,
            id: 'indusMade' + index
        })
    })
    return items
}

const getItem = (id) =>{
    return getItems().find(item => item.id == id)
}



const handMade = [
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4722-4722_58fe4f290965f0.92666540_rms10bsf_large.jpg",
              "title": "Rapala Minnow Spoon 10cm BSF 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4723-4723_58fe4fa293b911.56912470_rms10bsh_large.jpg",
              "title": "Rapala Minnow Spoon 10cm BSH 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4724-4724_58fe4fd0358664.16282599_rms10elj_large.jpg",
              "title": "Rapala Minnow Spoon 10cm ELJ 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4725-4725_58fe4ff1789226.40446374_rms10flp_large.jpg",
              "title": "Rapala Minnow Spoon 10cm FLP 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4726-4726_58fe500b3b6e47.91685075_rms10frghf_large.jpg",
              "title": "Rapala Minnow Spoon 10cm FRGHF 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4727-4727_58ff8e840725f5.79427386_minnow-hfcgr_large.jpg",
              "title": "Rapala Minnow Spoon 10cm HFCGR 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3259-3259_5718aafa787e80.68539780_-807-500x500_large.jpg",
              "title": "Rapala Minnow Spoon 10cm MBT 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4728-4728_58fe50503c5f48.06462024_rms10pgr_large.jpg",
              "title": "Rapala Minnow Spoon 10cm PGR 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4729-4729_58ff8eb8dad7d6.36087173_minnow_rygr_large.jpg",
              "title": "Rapala Minnow Spoon 10cm RYGR 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4730-4730_58fe4df0918ce8.06839347_rms10sh_large.jpg",
              "title": "Rapala Minnow Spoon 10cm SH 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4731-4731_58ff8ed9042a84.24165192_minnow_wrb_large.jpg",
              "title": "Rapala Minnow Spoon 10cm WRB 32g",
              "price": "7,11 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3339-3339_5718930dc345e7.91804895_rapala-minnow-spoon-elj-1456399264777_large.jpg",
              "title": "Rapala Minnow Spoon 5cm ELJ 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3343-3343_571893d9568b92.16841938_rapala-minnow-spoon-flp-1297952857777_large.jpg",
              "title": "Rapala Minnow Spoon 5cm FLP 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/97-97_54f064ede598a8.70327991_ft_large.jpg",
              "title": "Rapala Minnow Spoon 5cm FT 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3340-3340_5718934a5ac045.16482803_rapala-minnow-spoon-fybt-1336492517777_large.jpg",
              "title": "Rapala Minnow Spoon 5cm FYBT 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3341-3341_571893924012c7.01033296_rapala-minnow-spoon-fygt-1336492552777_large.jpg",
              "title": "Rapala Minnow Spoon 5cm FYGT 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3342-3342_57189181b8bb35.68804694_101-101_54f06546083fd5.05484937_fyrt_large_large.jpg",
              "title": "Rapala Minnow Spoon 5cm FYRT 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3344-3344_571894116eaeb8.27955899_rapala-minnow-spoon-gfrt-13560875780_large.jpg",
              "title": "Rapala Minnow Spoon 5cm GFRT 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3345-3345_57189443d95890.16728705_rapala-minnow-spoon-gsd-1297949705777_large.jpg",
              "title": "Rapala Minnow Spoon 5cm GSD 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            },
            {
              "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3346-3346_571894adc0e600.64287232_rapala-minnow-spoon-mbt-1336492722777_large.jpg",
              "title": "Rapala Minnow Spoon 5cm MBT 6g",
              "price": "5,31 € (10%)",
              "category": "Roolandid"
            }
        ]   
    











  const indusMade = 
  [
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2699-2699_56d9935e7b79b4.10924585_152200_large.jpg",
    "title": "SpinTube Disco aeglaselt uppuv 35g hõbe",
    "price": "13,05 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4911-4911_5911cf065cb881.40734820_152250_large.jpg",
    "title": "SpinTube Disco aeglaselt uppuv 35g pärl/lilla",
    "price": "13,05 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4909-4909_5911ccf52f4a78.05209901_152220_large.jpg",
    "title": "SpinTube Disco aeglaselt uppuv 35g roheline/kollane",
    "price": "13,05 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4910-4910_5911cf70c59a37.50891346_152240_large.jpg",
    "title": "SpinTube Disco aeglaselt uppuv 35g sinine",
    "price": "13,05 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2710-2710_56db11a3a875b2.89951213_155080_large.jpg",
    "title": "SpinTube Leech 10 g",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2712-2712_56dc2c01c17451.30639821_155140_large.jpg",
    "title": "SpinTube Leech 10g oranz",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2708-2708_56dc2c2aefc450.41849696_155110_large.jpg",
    "title": "SpinTube Leech 10g roheline/must",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2713-2713_56dc2c60e5caf5.71478400_155150_large.jpg",
    "title": "SpinTube Leech 10g roosa/must",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3266-3266_57189ce75e9576.06613563_155030_large.jpg",
    "title": "SpinTube Leech 5g fl. yellow",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3148-3148_571f8f66825f71.15119079_155070_large.jpg",
    "title": "Spintube Leech 5g Kollane/Must",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3146-3146_571f8f92667818.97551430_155000_large.jpg",
    "title": "Spintube Leech 5g Punane/Must",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3147-3147_571f8fc6b15461.20072179_155050_large.jpg",
    "title": "Spintube Leech 5g Roosa/Must",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/3149-3149_571f8ff4e528b9.73484047_155080_large.jpg",
    "title": "Spintube Leech 5g Valge/Roosa",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2709-2709_56db1143193953.49971573_155000_large.jpg",
    "title": "SpinTube Leech fl. red/black 10g ",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2711-2711_56db125b27b2a6.25582742_155090_large.jpg",
    "title": "SpinTube Leech valge-must 10g",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4033-4033_58233712aed4c3.31945720_155840_large.jpg",
    "title": "SpinTube Minnow Brass White/Chart 5g",
    "price": "4,77 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2705-2705_56da96ceacaaa6.47677188_154720-800x800_large.jpg",
    "title": "SpinTube Natural 10g ",
    "price": "5,49 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2703-2703_56da962b7f64e6.82284659_allalaaditud-fail-1-_large.jpg",
    "title": "SpinTube Natural 10g",
    "price": "5,49 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2706-2706_56da9710aaed47.61243770_154730-800x800_large.jpg",
    "title": "SpinTube Natural 10g",
    "price": "5,49 € (10%)",
    "category": "Leechid"
    },
    {
    "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/2707-2707_56da9754823ed3.01874254_154750_large.jpg",
    "title": "SpinTube Natural 10g kollane",
    "price": "5,49 € (10%)",
    "category": "Leechid"
    }
]


module.exports = {
    getItems,
    getItem
}