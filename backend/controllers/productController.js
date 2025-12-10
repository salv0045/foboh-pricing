const products = require("../data/products");

function getProducts(req,res){
    const {search, category, subCategory, segment, brand } = req.query;
    
    //array copied to avoid mutation 
    let result =[...products];

    //search by title or SKU
    if(search && typeof search ==="string"){
        const q = search.toLowerCase();
         result = result.filter((p) =>
         p.title.toLowerCase().includes(q) ||
         p.sku.toLowerCase().includes(q)
  );
    }


    //filter by category, subcategory, segement, brand 
    if(category) result= result.filter((p)=>p.category=== category);
    if (subCategory) result = result.filter((p) => p.subCategory === subCategory);
    if (segment) result = result.filter((p) => p.segment === segment);
    if (brand) result = result.filter((p) => p.brand === brand);

    res.json(result);
}

module.exports ={getProducts};