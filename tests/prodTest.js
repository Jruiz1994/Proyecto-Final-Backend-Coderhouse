class ProdTest {
    constructor() {
        this.productos = []
    }

    getAll() {
        if (this.productos.length === 0) {
            return []
        } else {
            return this.productos
        }
    }

    getById(_id) {
        const prod = this.productos.find(item => item._id === _id)
        if (prod) {
            return prod
        } else {
            throw new Error("No existe un producto con ese id")
        }
    }

    create(_id, title, description, code, price, stock, thumbnail) {
        const producto = {
            _id,
            title,
            description,
            code,
            price,
            stock,
            thumbnail
        }
        this.productos.push(producto)
    }

    deleteById(_id) {
        let productos = this.getAll()
        const index = productos.findIndex(prod => prod._id == _id)
        if (index >= 0) {
            const itemToDelete = productos[index];
            productos.splice(index, 1);
            return { "Eliminado": itemToDelete }
        } else { throw new Error('No se encontró un producto con ese id') }
    }

    updateById(_id, newProps) {
        let productos = this.getAll()
        const index = productos.findIndex(item => item._id == _id)
        if (index >= 0) {
            productos[index] = {
                ...productos[index],
                ...newProps
            }
            return productos[index]
        } else { throw new Error('No se encontró un producto con ese id') }
    }
}

module.exports = ProdTest