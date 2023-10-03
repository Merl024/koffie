const products = [
    //Ojetos de la cat de cafes helados
    {
        id: 1,
        nombre: "Frozen capuccino",
        imagen: "./components/Assets/frozen.png",
        categoria: "Café helado",
        precio: 3.75,
        tamanio: "14 onz"
    },
    {
        id: 2,
        nombre: "Fappé",
        imagen: "components/Assets/frappe.png",
        categoria: "Café helado",
        precio: 4.50,
        tamanio: "16 onz"
    },
    {
        id: 4,
        nombre: "Mocha helado",
        imagen: "components/Assets/mocha.png",
        categoria: "Café helado",
        precio: 3.75,
        tamanio: "14 onz"
    },
    //Objetos de la cat de cafes calientes
    {
        id: 4,
        nombre: "Café americano",
        imagen: "components/Assets/americano.png",
        categoria: "Café caliente",
        precio: 2.75,
        tamanio: "12 onz"
    },
    {
        id: 5,
        nombre: "Latte",
        imagen: "/components/Assets/latte.png",
        categoria: "Café caliente",
        precio: 3.75,
        tamanio: "12 onz"
    },
    {
        id: 6,
        nombre: "White mocha",
        imagen: "components/Assets/americano.png",
        categoria: "Café caliente",
        precio: 4.00,
        tamanio: "12 onz"
    },
    //Objetos de la cat de otros
    {
        id: 7,
        nombre: "Green Tea",
        imagen: "components/Assets/greentea.png",
        categoria: "Otros",
        precio: 4.75,
        tamanio: "16 onz"
    },
    {
        id: 8,
        nombre: "Hot chai",
        imagen: "components/Assets/chai.png",
        categoria: "Otros",
        precio: 4.75,
        tamanio: "14 onz"
    },
    {
        id: 9,
        nombre: "Cheesecake (Sugar Free)",
        imagen: "components/Assets/postr.png",
        categoria: "Otros",
        precio: 5.25,
        tamanio: "Una porción"
    }
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