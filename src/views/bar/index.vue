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
export default {
  name: "bar",
  data() {
    return {
      chart: null,
      option: {
        legend: {
          data: ["2011年", "2012年"],
        },
        title: {
          //  left: 'center',
          show: true,
          text: "▍星期统计",
          subtext: "在此测试",
          textStyle: {
            fontSize: 30,
            textAlign: "middle",
          },
          subtextStyle: {
            textAlign: "middle",
          },
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期天",
          ],
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
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230,930230],
            showBackground: true,
            barWidth: "30%",
            itemStyle: {
              // color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              //   { offset: 0, color: "#83bff6" },
              //   { offset: 0.5, color: "#188df0" },
              //   { offset: 1, color: "#188df0" },
              // ]),
            },
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807,935555],
            showBackground: true,
            barWidth: "30%",
            itemStyle: {
              // color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              //   { offset: 0, color: "#83bff6" },
              //   { offset: 0.5, color: "#188df0" },
              //   { offset: 1, color: "#188df0" },
              // ]),
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.getInit();
  },
  methods: {
    getInit() {
      this.chart = echarts.init(this.$refs.bar, "walden");
      this.option && this.chart.setOption(this.option);
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