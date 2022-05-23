import { Server } from 'miragejs'
import data from './db/data.json'

export default {
  install: () => {
    new Server({
      seeds(server) {
        server.db.loadData({
          products: data
        })
      },
      fixtures: {
        products: data
      },
      routes() {
        this.logging = false
        this.namespace = 'api'
        this.get('/products', (schema) => schema.db.products)
      }
    })
  }
}
