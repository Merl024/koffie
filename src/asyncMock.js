export const products = [
    //Ojetos de la cat de cafes helados
    // {
    //     nombre: "Frozen capuccino",
    //     imagen: "../assets/frozen.png",
    //     categoria: "helado",
    //     precio: 3.75,
    //     tamanio: "14 onz"
    // },
    // {
    //     nombre: "Fappé",
    //     imagen: "../assets/frappe.png",
    //     categoria: "helado",
    //     precio: 4.50,
    //     tamanio: "16 onz"
    // },
    // {
    //     nombre: "Mocha helado",
    //     imagen: "../assets/mocha.png",
    //     categoria: "helado",
    //     precio: 3.75,
    //     tamanio: "14 onz"
    // },
    // //Objetos de la cat de cafes calientes
    // {
    //     nombre: "Café americano",
    //     imagen: "../assets/americano.png",
    //     categoria: "caliente",
    //     precio: 2.75,
    //     tamanio: "12 onz"
    // },
    // {
    //     nombre: "Latte",
    //     imagen: "../assets/latte.png",
    //     categoria: "caliente",
    //     precio: 3.75,
    //     tamanio: "12 onz"
    // },
    // {

    //     nombre: "White mocha",
    //     imagen: "../assets/mochacal.png",
    //     categoria: "caliente",
    //     precio: 4.00,
    //     tamanio: "12 onz"
    // },
    // //Objetos de la cat de otros
    // {
    //     nombre: "Green Tea",
    //     imagen: "../assets/greentea.png",
    //     categoria: "otros",
    //     precio: 4.75,
    //     tamanio: "16 onz"
    // },
    // {

    //     nombre: "Hot chai",
    //     imagen: "../assets/chai.png",
    //     categoria: "otros",
    //     precio: 4.75,
    //     tamanio: "14 onz"
    // },
    // {
    //     nombre: "Cheesecake (Sugar Free)",
    //     imagen: "../assets/postre.png",
    //     categoria: "otros",
    //     precio: 5.25,
    //     tamanio: "Una porción"
    // }
]

export const getProducts = ()=>{ 
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        })
    }, 2000)
}

export const getProductsByCategoria = (productCat) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.categoria === productCat))
        })
    }, 2000)
}