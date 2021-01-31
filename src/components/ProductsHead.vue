<template>
  <div class="prodcuts-head">
    <div class="products-count">{{ totalProducts }} results</div>
    <el-form :inline="true">
      <el-form-item label="Sorting:">
        <el-select @change="onSortChange" v-model="value" placeholder="Sort by">
          <el-option
            v-for="(item, k) in options"
            :key="k"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="inlineList = !inlineList"
          :icon="inlineList ? 'el-icon-tickets' : 'el-icon-s-grid'"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    totalProducts: {
      default: 0
    }
  },
  data() {
    return {
      options: [
        {
          value: "",
          label: "Default"
        },
        {
          value: "price,asc",
          label: "Price asc"
        },
        {
          value: "price,desc",
          label: "Price desc"
        },
        {
          value: "name,asc",
          label: "Name asc"
        },
        {
          value: "name,desc",
          label: "Name desc"
        }
      ],
      value: ""
    };
  },
  methods: {
    onSortChange(val) {
      const value = val.split(",");
      const data = {
        type: value[0] ? value[0] : "",
        order: value[1] ? value[1] : ""
      };
      this.$emit("onSortChange", data);
    }
  },
  computed: {
    inlineList: {
      get() {
        return this.$store.getters.getInlineList;
      },
      set(val) {
        this.$store.commit("MUTATE_LIST_STYLE", val);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.prodcuts-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 10px;
}
.products-count {
  display: block;
  font-weight: bold;
  font-size: 21px;
  padding: 5px 0;
}
</style>
