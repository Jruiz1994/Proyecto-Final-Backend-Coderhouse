const ProdTest = require('./prodTest.js');
const assert = require('assert').strict;

describe('Test de integración de tareas', () => {
    it('Debería crear el contenedor de productos vacío', async() => {
        const productos = new ProdTest()
        assert.strictEqual(await productos.getAll().length, 0)
    })
    it('Debería traer prodTest los productos', () => {
        const prodTest = new ProdTest()
        prodTest.create('1', 'producto1', 'description1', 'code1', '100', '10', 'https://i.blogs.es/594843/chrome/450_1000.jpg')
        prodTest.create('2', 'producto2', 'description2', 'code2', '200', '20', 'https://i.blogs.es/594843/chrome/450_1000.jpg')
        assert.strictEqual(prodTest.getAll().length, 2)
    })
    it('Deberia devolver un producto filtrando por su id', async() => {
        const prodTest = new ProdTest()
        prodTest.create('3', 'producto3', 'description3', 'code3', '300', '30', 'https://i.blogs.es/594843/chrome/450_1000.jpg')
        const getByID = await prodTest.getById('3')
        const comparado = { _id: '3', title: 'producto3', description: 'description3', code: 'code3', price: '300', stock: '30', thumbnail: 'https://i.blogs.es/594843/chrome/450_1000.jpg' }
        assert.deepStrictEqual(getByID, comparado)
    })
    it('Deberia adicionar productos correctamente', () => {
        const prodTest = new ProdTest()
        prodTest.create('1', 'producto1', 'description1', 'code1', '100', '10', 'https://i.blogs.es/594843/chrome/450_1000.jpg')
        assert.strictEqual(prodTest.getAll().length, 1)
        assert.deepStrictEqual(prodTest.getAll(), [{ '_id': '1', 'title': 'producto1', 'description': 'description1', 'code': 'code1', 'price': '100', 'stock': '10', 'thumbnail': 'https://i.blogs.es/594843/chrome/450_1000.jpg' }])
    })
    it('Debería eliminar un producto por su id', () => {
        const prodTest = new ProdTest()
        prodTest.create('1', 'producto1', 'description1', 'code1', '100', '10', 'https://i.blogs.es/594843/chrome/450_1000.jpg')
        prodTest.create('2', 'producto2', 'description2', 'code2', '200', '20', 'https://i.blogs.es/594843/chrome/450_1000.jpg')
        prodTest.deleteById('2')
        assert.strictEqual(prodTest.getAll().length, 1)
        assert.deepStrictEqual(prodTest.getAll(), [{ '_id': '1', 'title': 'producto1', 'description': 'description1', 'code': 'code1', 'price': '100', 'stock': '10', 'thumbnail': 'https://i.blogs.es/594843/chrome/450_1000.jpg' }])
    })
    it('Debería actualizar un producto por su id', async() => {
        const prodTest = new ProdTest()
        prodTest.create('1', 'producto1', 'description1', 'code1', '100', '10', 'https://i.blogs.es/594843/chrome/450_1000.jpg')
        const actualizado = await prodTest.updateById('1', { '_id': '1', 'title': 'producto2', 'description': 'description2', 'code': 'code2', 'price': '200', 'stock': '20', 'thumbnail': 'https://i.blogs.es/594843/chrome/450_1000.jpg' })
        assert.deepStrictEqual(actualizado, { '_id': '1', 'title': 'producto2', 'description': 'description2', 'code': 'code2', 'price': '200', 'stock': '20', 'thumbnail': 'https://i.blogs.es/594843/chrome/450_1000.jpg' })
    })
})