<template>
  <div class="container">
    <ProductsHead
      @onSortChange="onSortChange"
      :totalProducts="productsList.length"
    />
    <ProductsList v-loading="loading" :productsList="productsList" />
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

      currentPage: 1,
      pageSize: 6,

      sorting: {
        order: "",
        type: ""
      }
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
        size: this.pageSize,
        sorting: { ...this.sorting }
      };
      try {
        await this.PRODUCTS_REQUEST(params);
      } finally {
        this.loading = false;
      }
    },
    onSortChange(val) {
      this.sorting = {
        order: val.order,
        type: val.type
      };
    }
  },
  watch: {
    currentPage() {
      this.getProducts();
    },
    pageSize() {
      this.getProducts();
    },
    sorting: {
      deep: true,
      handler() {
        this.getProducts();
      }
    }
  },
  beforeMount() {
    this.getProducts();
  }
};
</script>
