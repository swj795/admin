<template>
  <div ref="echart" style="height: 100%"></div>
</template>

<script>
// import * as echarts from "echarts";
const echarts = require("echarts");
console.log("echarts", echarts);
export default {
  // 父组件向子组件传值
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          // 横轴数据
          xData: [],
          // 表型数据
          series: [],
        };
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      echart: null,
      // 带有坐标的图表
      axisOption: {
        legend: {
          textStyle: {
            color: "#333",
          },
        },
        // grid 控制整个图表在页面中的布局
        grid: {
          left: "20%",
        },
        // 提示框属性
        tooltip: {
          // 触发属性 axis 坐标轴触发 item 数据项触发  none 无触发
          trigger: "axis",
        },
        // 横轴
        xAxis: {
          // 横轴的类型 category time value
          type: "category",
          // data 通过prop来传递
          data: [],
          axisLine: {
            // 横轴上的线的样式
            lineStyle: {
              color: "red",
            },
          },
          // 横轴上的字的样式
          axisLabel: {
            color: "blue",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "pink",
            },
          },
        },
        color: ["red","blue","yellow","pink","yellowgreen","skyblue"],
        series: [],
      },
      // 饼图
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: ["red", "yellow", "blue", "green", "pink"],
        // 从prop中传值
        series: [],
      },
    };
  },
  //   监听一个值
  computed: {
    //   是否有坐标轴
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
    // 收缩状态
    isCollapse() {
      return this.$store.state.tab.iscollapse;
    },
  },
  watch: {
    //   监听数据的变化
    chartData: {
      // 监听图表数据变化
      handler: function () {
        // 重新渲染图表
        this.initChart();
      },
      // 深度监听 不管那一层数据有变化都需要进行更新
      deep: true,
    },
    isCollapse() {
      setTimeout(() => {
        this.resizeChart();
      }, 300);
    },
  },
  mounted() {
    //   绑定事件 需要在destroy周期解绑
    window.addEventListener("resize", this.resizeChart);
  },
  methods: {
    // 初始化图表
    initChart() {
      // 将对应的数据放到对应的位置
      this.initChartData();
      // 是否初始化
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        // 通过ref取到dom 并初始化
        this.echart = echarts.init(this.$refs.echart);
        // 渲染数据 setOption()自带的api
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      // 先判断是否有坐标轴
      if (this.isAxisChart) {
        // 柱状图 折线图的数据
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        // 饼图的数据
        this.normalOption.series = this.chartData.series;
      }
    },
    resizeChart() {
      // resize()是一个api
      this.echart && this.echart.resize();
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
};
</script>

<style lang="scss" scoped>
</style>