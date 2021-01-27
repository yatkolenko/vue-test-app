<template>
  <div class="container" v-loading="loading">
    <ProductsHead :totalProducts="productsList.length" />
    <ProductsList :productsList="productsList" />
    <ProductsPagination
      :propCurrentPage="currentPage"
      :propPageSize="pageSize"
      :productsTotalCount="productsTotalCount"
      @update:pageSize="pageSize = $event"
      @update:currentPage="currentPage = $event"
    />
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
import ProductsHead from "@/components/ProductsHead.vue";
import ProductsPagination from "@/components/ProductsPagination.vue";

import { PRODUCTS_REQUEST } from "@/store/actions/products.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ProductsList,
    ProductsHead,
    ProductsPagination
  },
  data() {
    return {
      loading: true,

      currentPage: 10,
      pageSize: 6
    };
  },
  computed: {
    ...mapGetters({
      productsList: "getProducts",
      productsTotalCount: "getProductsTotalCount"
    })
  },
  methods: {
    ...mapActions([PRODUCTS_REQUEST]),
    async getProducts() {
      this.loading = true;
      const params = {
        page: this.currentPage,
        size: this.pageSize
      };
      try {
        await this.PRODUCTS_REQUEST(params);
      } finally {
        this.loading = false;
      }
    }
  },
  watch: {
    currentPage() {
      this.getProducts();
    },
    pageSize() {
      this.getProducts();
    }
  },
  beforeMount() {
    this.getProducts();
  },
  beforeUnmount() {
    this.$store.commit('RESET_PRODUCTS');
  },
};
</script>