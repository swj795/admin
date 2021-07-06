<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧 -->
    <el-col :span="8">
      <!-- 用户信息 -->
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/logo.png" alt="" />
          <div class="user-info">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间：
            <span>2021-06-21</span>
          </p>
          <p>
            上次登录地址：
            <span>上海</span>
          </p>
        </div>
      </el-card>
      <!-- 图书销售情况 -->
      <el-card shadow="hover" style="height: 460px; margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tabbelLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="16">
      <!-- 六个小卡片 -->
      <div class="num">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="value">￥{{ item.value }}</p>
            <p class="txt">￥{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <!-- 折线图 -->
      <el-card shadow="hover" style="height: 280px">
        <common-echart :chartData="order" style="height:240px" />
      </el-card>

      <!-- 柱状图和饼图 -->
      <div class="graph">
        <el-card shadow="hover" style="height: 260px">
          <common-echart :chartData="user" style="height:240px" />
        </el-card>
        <el-card shadow="hover" style="height: 260px">
          <common-echart :isAxisChart="false" :chartData="count" style="height:240px" />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CommonEchart from "../../components/CommonEcharts";
export default {
  components: {
    CommonEchart,
  },
  data() {
    return {
      // 六个小卡片上的数据
      countData: [
        {
          name: "订单1",
          icon: "success",
          value: 123,
          color: "red",
        },
        {
          name: "订单2",
          icon: "success",
          value: 123,
          color: "red",
        },
        {
          name: "订单3",
          icon: "success",
          value: 123,
          color: "red",
        },
        {
          name: "订单4",
          icon: "success",
          value: 123,
          color: "red",
        },
        {
          name: "订单5",
          icon: "success",
          value: 123,
          color: "red",
        },
        {
          name: "订单6",
          icon: "success",
          value: 123,
          color: "red",
        },
      ],
      // 表头
      tabbelLabel: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      // 表格数据
      tableData: [],
      // 折线图
      order: {
        xData: [],
        series: [],
      },
      // 柱状图
      user: {
        xData: [],
        series: [],
      },
      // 饼图
      count: {
        series: [],
      },
    };
  },
  created() {
    this.getChartData();
  },
  methods: {
    getChartData() {
      this.$request.get("/home/getData").then((res) => {
        console.log("输出结果", res.data);
        const { countData, orderData, tableData, userData } = res.data;
        this.tableData = tableData;
        this.setAxisData(orderData);
        this.setBarData(userData);
        this.setBingData(countData);
      });
    },
    // 处理折线图
    setAxisData(orderData) {
      // 设置横坐标
      this.order.xData = orderData.date;
      // 折线
      // Object.keys(obj)返回一个数组
     let keyArr = Object.keys(orderData.data[0]);
      keyArr.forEach((key) => {
        this.order.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });
    },
    setBarData(userData) {
      // 横轴
      this.user.xData = userData.map(item => item.date);

      // series 柱形图
      this.user.series.push({
        name: "新增用户",
        data: userData.map(item => item.new),
        type: "bar",
      });
      this.user.series.push({
        name: "活跃用户",
        data: userData.map(item => item.active),
        type: "bar"
      });
    },
    setBingData(countData) {
      // series
      this.count.series.push({
        data: countData,
        type: "pie",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 20px;
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    img {
      width: 150px;
      height: 150px;
    }
  }
  .user-info {
    margin-left: 20px;
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }
  .login-info {
    margin-top: 20px;
    p {
      line-height: 28px;
      color: #666;
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .value {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        color: #999;
        text-align: center;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>