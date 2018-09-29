
var catRepo = require('./CategoryRepository')

/*
catRepo.getCategories().then(data=>{
    console.log(data);
})


catRepo.getCategoriesByid('b261f282-bee7-11e8-89a7-f04da24a75d1').then(data=>{

    console.log('testing category by id')
    console.log(data);

})
*/

catRepo.getProducts().then(data=> console.log(data));