<template>
  <section class="main-content">main-content</section>
</template>

<script>
  import * as utils from "/package-common/js/utils.js";
  console.log("🚀 ~ utils:", utils);
  import { bool, object, string } from "vue-types";

  export default {
    components: {},
    inject: ["work", "component", "props"],
    dataCacheKey: "",
    dataCache: [],
    dicts: [],
    on: {},
    props: {},
    created() {},
    mounted() {},
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="less" scoped></style>
