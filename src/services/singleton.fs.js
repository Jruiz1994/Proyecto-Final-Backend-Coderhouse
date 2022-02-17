import logger from '../utils/logger.util.js'
import { promises as fs } from 'fs';

class SingletonDaoFS {

    constructor(file) {
        this.file = file
        if (SingletonDaoFS.instance) return SingletonDaoFS.instance
    }
    async getAll() {
        try {
            const items = await fs.readFile(this.file, 'utf-8');
            return JSON.parse(items)
        } catch (error) { logger.error(error) }
    }

    async getById(id) {
        const items = await this.getAll();
        const item = items.find(item => item._id == id);
        if (item) return item
        else logger.error('Item not found')
    }

    async getByCategory(category) {
        const items = await this.getAll();
        const item = items.find(item => item.category == category);
        if (item) return item
        else logger.error('Category not found')
    }

    async deleteById(id) {
        const items = await this.getAll();
        const index = items.findIndex(item => item._id == id)
        if (index >= 0) {
            const itemToDelete = items[index];
            items.splice(index, 1);
            await this.saveFile(items);
            return { deleted: itemToDelete }
        } else { logger.error('Item not found') }
    }

    async updateById(id, newProps) {
        const items = await this.getAll()
        const index = items.findIndex(item => item._id == id)
        if (index >= 0) {
            items[index] = {
                ...items[index],
                ...newProps
            }
            await this.saveFile(items);
            return { updated: items[index] }
        } else { logger.error('Item not found') }
    }

    async saveItem(item) {
        const items = await this.getAll();
        const lastId = items.length ? items[items.length - 1]._id : 0;
        item._id = lastId + 1;
        items.push(item);
        const respuesta = await this.saveFile(items);
        return respuesta
    }

    async saveFile(newArray) {
        try {
            await fs.writeFile(this.file, JSON.stringify(newArray, null, 2))
        } catch (error) { logger.error(error) }
    }
}

export default SingletonDaoFS