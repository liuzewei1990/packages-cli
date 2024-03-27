<template>
  <div class="aaaaaax" absolute min-height="400px">
    <main-content></main-content>
  </div>
</template>

<script>
  import { array, bool, number, string } from "vue-types";
  import MainContent from "./modules/index.vue";
  export default {
    components: { MainContent },
    provide() {
      return {
        props: this.$props
      };
    }
    // props: {
    //   field101: string().def(""),
    //   field102: number().def(2),
    //   field103: number().def(2),
    //   field104: array().def([1, 3]),
    //   field105: string().def(""),
    //   field106: bool().def(true),
    //   field107: string().def(""),
    //   field108: string().def(""),
    //   field109: string().def(""),
    //   field110: number().def(36)
    // },
    // propsForm: [
    //   {
    //     __vModel__: "field101",
    //     __config__: {
    //       label: "文本输入框",
    //       tag: "a-input"
    //     },
    //     placeholder: "输入内容"
    //   },
    //   {
    //     __vModel__: "field102",
    //     __config__: {
    //       label: "单选框",
    //       tag: "a-radio-group"
    //     },
    //     __slot__: {
    //       options: [
    //         {
    //           label: "男",
    //           value: 1
    //         },
    //         {
    //           label: "女",
    //           value: 2
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     __vModel__: "field103",
    //     __config__: {
    //       label: "下拉框",
    //       tag: "a-select"
    //     },
    //     __slot__: {
    //       options: [
    //         {
    //           label: "老板",
    //           value: 1
    //         },
    //         {
    //           label: "架构师",
    //           value: 2
    //         },
    //         {
    //           label: "项目经理",
    //           value: 3
    //         },
    //         {
    //           label: "测试",
    //           value: 4
    //         },
    //         {
    //           label: "运维",
    //           value: 5
    //         },
    //         {
    //           label: "程序员",
    //           value: 6
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     __vModel__: "field104",
    //     __config__: {
    //       label: "多选框",
    //       tag: "a-checkbox-group"
    //     },
    //     __slot__: {
    //       options: [
    //         {
    //           label: "Github",
    //           value: 1
    //         },
    //         {
    //           label: "Gitee",
    //           value: 2
    //         },
    //         {
    //           label: "BLog",
    //           value: 3
    //         },
    //         {
    //           label: "微信公众号",
    //           value: ""
    //         },
    //         {
    //           label: "其他",
    //           value: ""
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     __vModel__: "field105",
    //     __config__: {
    //       label: "多行文本",
    //       tag: "a-textarea"
    //     },
    //     placeholder: "多行文本"
    //   },
    //   {
    //     __vModel__: "field106",
    //     __config__: {
    //       label: "开关",
    //       tag: "a-switch"
    //     }
    //   },
    //   {
    //     __vModel__: "field107",
    //     __config__: {
    //       label: "发生时间",
    //       tag: "a-date-picker"
    //     },
    //     placeholder: "请选择时间",
    //     format: "YYYY-MM-DD HH:mm:ss",
    //     "value-format": "YYYY-MM-DD HH:mm:ss"
    //   },
    //   {
    //     __vModel__: "field109",
    //     __config__: {
    //       label: "日期范围",
    //       tag: "a-range-picker"
    //     },
    //     placeholder: ["开始时间", "结束时间"],
    //     format: "YYYY-MM-DD HH:mm:ss",
    //     "value-format": "YYYY-MM-DD HH:mm:ss"
    //   },
    //   {
    //     __vModel__: "field110",
    //     __config__: {
    //       label: "滑块",
    //       tag: "a-slider"
    //     },
    //     min: 0,
    //     max: 100,
    //     step: 1
    //   }
    // ]
  };
</script>

<style lang="less" scoped></style>
./modules/index.vue
