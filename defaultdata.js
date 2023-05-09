const Products = require("./models/productsSchema");
const productsdata = require("./constant/productsdata");

const DefalutData = async() => {
    try {
    
//For delete same data when we save the page(MongooDB method)
        await Products.deleteMany({});

        const storeData = await Products.insertMany(productsdata);
        // console.log(storeData);
    } catch (error) {
        console.log("error",+error.message);
    }
};

module.exports = DefalutData;