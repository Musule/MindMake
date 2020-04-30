
<template>
  <div id="app">
    <div style="width: 100%;height: 100%;">
      <el-backtop :bottom="60"></el-backtop>
    </div>
    <Home></Home>
  </div>
</template>


<script>
import Home from "./components/Pages/Home/Home";

export default {
  name: "App",
  provide() {
    return {};
  },
  data() {
    return {};
  },
  methods: {
    reload() {}
  },

  components: {
    Home
  }
};
</script>


<style lang="scss" scoped>
.el-header {
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #409eff;
  color: rgb(0, 0, 0);
  text-align: center;
  line-height: 600px;
  height: 800px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: left;
  line-height: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 460px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

a {
  color: #313030;
  text-decoration: none;
  font-family: 微软雅黑;
}
.router-link-active {
  text-decoration: none;
}
</style>
