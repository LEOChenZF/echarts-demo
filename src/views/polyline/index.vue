<template>
  <div ref="polyline">polyline</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "polyline",
  data() {
    return {
      cheart: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    //   初始化图表
    initChart() {
      this.cheart = echarts.init(this.$refs.polyline);
      const initOption = {};
      initOption && this.cheart.setOption(initOption);
    },
    //   获取图表数据
    getData() {
      this.updataChart();
    },
    //   更新图表数据
    updataChart() {},
  },
};
</script>

<style>
</style>