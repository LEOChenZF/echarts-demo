// resize
export const resize = {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  methods: {
    // 屏幕适配
    screenAdapter() {
      const barWidth = this.$refs.bar.offsetWidth;
      const titleFontSize = (barWidth / 100) * 3.6;
      const barBorderRadius = titleFontSize / 2;

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize,
            },
          },
        },
        series: [
          {
            barWidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [0, barBorderRadius, barBorderRadius, 0],
            },
          },
        ],
      };
      // 手动操作适配效果
      this.$nextTick(() => {
        adapterOption && this.chart.setOption(adapterOption);
        this.chart.resize();
      });
    },
  },

  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
};
