<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[3, 6, 12, 24, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="productsTotalCount"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    productsTotalCount: {
      default: 0
    },
    propCurrentPage: {
      default: 0
    },
    propPageSize: {
      default: 0
    }
  },
  data() {
    return {
      currentPage: 0,
      pageSize: 0
    };
  },
  beforeMount() {
    this.currentPage = this.propCurrentPage;
    this.pageSize = this.propPageSize;
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  watch: {
    currentPage(val) {
      this.$emit("update:currentPage", val);
    },
    pageSize(val) {
      this.$emit("update:pageSize", val);
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  padding: 30px 10px;
}
.el-pagination {
  white-space: normal;
  &::v-deep {
    .el-pagination {
      &__total {
        margin: 10px 0;
      }
      &__sizes {
        margin: 10px 0;
      }
    }
  }
}
::v-deep {
  .el-pagination__jump,
  .el-pager {
    margin: 10px 0;
    text-align: left;
  }
  .btn-prev,
  .btn-next {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
