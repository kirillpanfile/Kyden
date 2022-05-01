import { Server } from "miragejs";
import data from "./db/data.json";

export default {
  install: () => {
    const server = new Server({
      seeds(server) {
        server.db.loadData({
          products: data,
        });
      },
      fixtures: {
        products: data,
      },
      routes() {
        this.timing = 200;
        this.namespace = "api";
        this.get("/products", (schema) => schema.db.products);
      },
    });
  },
};
