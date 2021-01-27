<template>
  <div class="prodcuts-head">
    <div class="products-count">{{ totalProducts }} results</div>
    <div class="controls-holder">
      <el-button
        type="primary"
        @click="inlineList = !inlineList"
        :icon="inlineList ? 'el-icon-tickets' : 'el-icon-s-grid'"
      />
      <div class="select-box">
        <el-select v-model="value" placeholder="Sort by">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
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
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: "Option1"
    };
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
  margin: 0 0 19px;
}
.products-count {
  display: block;
  font-weight: bold;
  font-size: 21px;
  padding: 5px 0;
}
.controls-holder {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
.select-box {
  padding-left: 15px;
}
</style>
