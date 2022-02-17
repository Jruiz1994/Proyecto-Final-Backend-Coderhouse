/* eslint-disable no-undef */
import supertest from 'supertest'
import { expect } from 'chai'
import app from '../src/app'
const request = supertest(app)

describe('Tests API de productos', () => {
    describe('GET', () => {
        it('Deberia traer productos con status 200', async() => {
            let response = await request.get('/products')
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(8)
        })
    })
    describe('GET', () => {
        it('Deberia traer productos por id con status 200', async() => {
            const _id = '61ec362d1f3b0b3d65982544'
            let response = await request.get('/products/' + _id)
            expect(response.status).to.equal(200)
            expect(response.body._id).to.equal(_id)
        })
    })
    describe('POST', () => {
        it('Deberia agregar un producto', async() => {
            let prod = {
                "title": "Fernet Branca recien agregado",
                "description": "Fernet Branca de menta 750mL",
                "code": "FBM750",
                "price": "580",
                "stock": 2,
                "thumbnail": "https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcQBvDP44ImTWP4ILqGbqk5LD6LVMu3CYnSthglXMrjXSy-iFvBnSoUPfu7gG4-WFaS3NWI&usqp=CAU"
            }
            let response = await request.post('/products').send(prod).set({ admin: true })
            expect(response.status).to.equal(200)
            expect(response.body).to.include.keys('title', 'description', 'code', 'price', 'stock', 'thumbnail')
            expect(response.body.title).to.equal(prod.title)
        })
    })
    describe('DELETE', () => {
        it('Deberia eliminar un producto', async() => {
            let countProdsAntes = await request.get('/products')
            countProdsAntes = countProdsAntes.body.length
            let response = await request.delete('/products/61e726f16a1e05248d6ef0e4').set({ admin: true })
            expect(response.status).to.equal(200)
            let countProdsDespues = await request.get('/products')
            expect(countProdsDespues.body.length).to.equal(countProdsAntes - 1)
        })
    })
    describe('UPDATE', () => {
        it('Deberia actualizar un producto', async() => {
            const _id = '61ec355281aa62ce0eda4c71'
            let prodActualizado = {
                "title": "Fernet Branca",
                "description": "Fernet Branca 750mL",
                "code": "FBM750U",
                "price": 585,
                "stock": 25,
                "thumbnail": "https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcQBvDP44ImTWP4ILqGbqk5LD6LVMu3CYnSthglXMrjXSy-iFvBnSoUPfu7gG4-WFaS3NWI&usqp=CAU"
            }

            let response = await request.put('/products/' + _id).send(prodActualizado).set({ admin: true })
            let prodNuevo = await request.get('/products/' + _id)
            expect(response.status).to.equal(200)
            expect(prodNuevo.body.title).to.equal(prodActualizado.title)
            expect(prodNuevo.body.description).to.equal(prodActualizado.description)
            expect(prodNuevo.body.code).to.equal(prodActualizado.code)
            expect(prodNuevo.body.price).to.equal(prodActualizado.price)
            expect(prodNuevo.body.stock).to.equal(prodActualizado.stock)
            expect(prodNuevo.body.thumbnail).to.equal(prodActualizado.thumbnail)
        })
    })
})