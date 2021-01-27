import {
  PRODUCTS_REQUEST,
  PRODUCT_CHANGE_REQUEST
} from "../actions/products.js";
import axios from "axios";

export default {
  state: {
    products: [],
    productsTotalCount: 0,
    inlineList: false
  },
  mutations: {
    [PRODUCTS_REQUEST]: (state, payload) => {
      state.products = payload.data;
      state.productsTotalCount = +payload.headers["x-total-count"];
    },
    MUTATE_LIST_STYLE: (state, payload) => {
      state.inlineList = payload;
    }
  },
  actions: {
    [PRODUCTS_REQUEST]: async (ctx, params) => {
      const { page, size } = params;
      try {
        const response = await axios.get(
          `/products?_page=${page}&_limit=${size}`
        );
        ctx.commit(PRODUCTS_REQUEST, response);
      } catch (e) {
        console.log(e);
      }
    },
    [PRODUCT_CHANGE_REQUEST]: async (ctx, data) => {
      const ID = data.id;
      console.log({ ...data });
      console.log(data.id);
      try {
        await axios.put(`/products/${ID}`, {
          ...data
        });
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    getProducts: state => state.products,
    getProductsTotalCount: state => state.productsTotalCount,
    getInlineList: state => state.inlineList
  }
};
