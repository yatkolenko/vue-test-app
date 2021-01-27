<template>
  <ul class="product__list" :class="{ 'inline-style': inlineList }">
    <li v-for="i in productsList" :key="i.id">
      <div class="product__box">
        <a
          href="javascript:;"
          :class="{ active: i.isFav }"
          class="product__like"
          @click.prevent="onFavClick(i)"
        >
          <i class="el-icon-star-on" v-if="i.isFav" />
          <i class="el-icon-star-off" v-else />
        </a>

        <a :href="i.url" class="product__preview">
          <el-image fit="cover" :src="i.picture ? i.picture : ''" lazy />
        </a>
        <div class="product__content">
          <h3 class="product__title">{{ i.name }}</h3>
          <div class="product__info">
            <span class="product__size">{{ i.size }}</span>
            <el-rate
              :colors="['#cc5577', '#cc5577', '#cc5577']"
              v-model="i.rating"
              disabled
            />
          </div>
          <div class="product__costs">
            <strong class="product__curr-cost" v-if="i.price">{{
              i.price
            }}</strong>
            <span class="product__old-cost" v-if="i.oldPrice">{{
              i.oldPrice
            }}</span>
            <span class="product__discount" v-if="i.savings"
              >You save: {{ i.savings }}</span
            >
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { PRODUCT_CHANGE_REQUEST } from "@/store/actions/products.js";

export default {
  props: {
    productsList: {
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      inlineList: "getInlineList"
    })
  },
  methods: {
    ...mapActions([PRODUCT_CHANGE_REQUEST]),
    onFavClick(item) {
      const data = item;
      data.isFav = !data.isFav;
      this.PRODUCT_CHANGE_REQUEST(data);
    }
  }
};
</script>

<style lang="less" scoped>
@color-blur: #62a3db;
@color-blur-900: #1b1854;
@color-white: #ffffff;
@color-gray: #7e7789;
@color-red: #cc5376;

.product {
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px 30px;
    &.inline-style {
      grid-template-columns: 1fr;
      .product__box {
        flex-direction: row;
      }
      .product__preview {
        flex: 0 0 370px;
      }
      .product__like {
        right: auto;
        left: 320px;
      }
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    text-decoration: none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: @color-white;
  }
  &__preview {
    display: block;
    text-decoration: none;
    height: 245px;
    background: @color-blur;
    &:hover {
      opacity: 0.8;
    }
    .el-image {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  &__like {
    position: absolute;
    left: auto;
    top: 20px;
    right: 22px;
    border-radius: 50%;
    background: @color-white;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    text-decoration: none;
    z-index: 2;
    font-size: 24px;
    color: @color-red;
    &:hover {
      background: @color-blur;
      // opacity: 0.8;
    }
  }

  &__content {
    padding: 21px 21px 41px;
    flex: 1 1 auto;
  }
  &__title {
    font-size: 17px;
    margin: 0 0 8px;
    font-weight: normal;
    text-transform: capitalize;
    color: @color-blur-900;
  }
  &__info {
    display: flex;
    align-items: center;
    margin: 0 0 11px;
  }
  &__size {
    display: block;
    margin-right: 5px;
  }
  &__costs {
  }
  &__curr-cost {
    text-transform: uppercase;
    font-size: 28px;
    font-weight: bold;
    display: inline;
    color: @color-blur-900;
    padding: 0 14px 0 0;
  }
  &__old-cost {
    display: inline;
    text-decoration: line-through;
    color: @color-gray;
    padding: 0 11px 0 0;
  }
  &__discount {
    display: inline;
    color: @color-red;
  }
}
</style>
