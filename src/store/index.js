import { createStore } from "vuex";
import prodcuts from './modules/products.js';

export default createStore({
  modules: {
    prodcuts
  }
});
