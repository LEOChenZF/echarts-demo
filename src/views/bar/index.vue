<template>
  <div class="bar" ref="bar"></div>
</template>

<script>
import * as echarts from "echarts";
import dark from "@/theme/dark.js";
import macarons from "@/theme/macarons.js";
import vintage from "@/theme/vintage.js";
import chalk from "@/theme/chalk.js";
import walden from "@/theme/walden.js";

import { resize } from "@/mixins/echarts";
export default {
  name: "bar",
  mixins: [resize],
  data() {
    return {};
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.bar);
      const initOption = {
        title: {
          //  left: 'center',
          show: true,
          text: "▍星期统计",
          subtext: "在此测试",
          textStyle: {
            textAlign: "middle",
          },
          subtextStyle: {
            textAlign: "middle",
          },
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
      };
      initOption && this.chart.setOption(initOption);
    },

    getData() {
      const dataOption = {
        yAxis: {
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期天",
          ],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230, 930230],
            showBackground: true,
            barWidth: "50%",
            itemStyle: {
              barBorderRadius: [0, 33, 33, 0],
              // color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              //   { offset: 0, color: "#83bff6" },
              //   { offset: 0.5, color: "#188df0" },
              //   { offset: 1, color: "#188df0" },
              // ]),
            },
          },
        ],
      };
      dataOption && this.chart.setOption(dataOption);
    },
  },
};
</script>

<style lang="less" scoped>
.bar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>