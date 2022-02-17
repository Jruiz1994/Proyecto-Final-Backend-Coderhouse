import axios from 'axios';

const url = 'http://localhost:8080/api/products/';

//GET ALL PRODUCTS
const getProducts = async(url) => {
    try {
        const res = await axios.get(url)
        const products = await res.data;
        console.log('GET PRODUCTS =>', products)
    } catch (err) { console.log(err) }
}

//GET PRODUCT BY ID
const productUrl = url + '61cdfd93e12069c6c73d2e77';

// POST PRODUCT
const postProduct = async(url) => {
    const nuevoProd = {
        "title": "Fernet Branca 22/1",
        "description": "Fernet Branca de menta 750mL",
        "code": "FBM750",
        "price": "580",
        "stock": 2,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcQBvDP44ImTWP4ILqGbqk5LD6LVMu3CYnSthglXMrjXSy-iFvBnSoUPfu7gG4-WFaS3NWI&usqp=CAU"
    }
    const headers = {
        admin: true
    }
    try {
        const res = await axios.post(url, nuevoProd, { headers: headers })
        console.log('NUEVO PRODUCTO => ', res.data)
    } catch (error) {
        console.log(error)
    }
}

//DELETE PRODUCT
const deleteProduct = async(url) => {
    const productId = '61cdfd93e12069c6c73d2e77';
    url += productId
    const headers = {
        admin: true
    }
    try {
        const res = await axios.delete(url, { headers: headers })
        console.log('DELETE PRODUCTO => ', res.data)
    } catch (error) {
        console.log(error)
    }
}

//UPDATE PRODUCT
const updateProduct = async(url) => {
    const productId = '61ec355281aa62ce0eda4c71';
    const productUrl = url + productId
    const updatedProd = {
        "title": "Fernet Brancav5.0",
        "description": "Fernet Branca de menta 750mL",
        "code": "FBM750",
        "price": 580,
        "stock": 2,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcQBvDP44ImTWP4ILqGbqk5LD6LVMu3CYnSthglXMrjXSy-iFvBnSoUPfu7gG4-WFaS3NWI&usqp=CAU"
    }
    const headers = {
        admin: true
    }
    try {
        const res = await axios.put(productUrl, updatedProd, { headers: headers })
        console.log('UPDATE PRODUCTO => ', res.data)
    } catch (error) {
        console.log(error)
    }
}


//GET ALL
// getProducts(url)
//GET BY ID
// getProducts(productUrl)
// POST
// postProduct(url)
//DELETE
// deleteProduct(url)
//UPDATE
updateProduct(url)