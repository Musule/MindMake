<template>
  <div id="Home">
    <el-container>
      <el-header>MindMake</el-header>
      <el-container>
        <el-aside width="300px">
          <Options @getOptionsValue="getOptionsValue"></Options>
        </el-aside>
        <el-container>
          <el-main>
            <Mind
              :width="width"
              :height="height"
              :xSpacing="xSpacing"
              :ySpacing="ySpacing"
              :dragable="dragable"
              :gps="gps"
              :fitView="fitView"
              @getMindData="getMindData"
            ></Mind>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
    <el-footer>Copyright ©️2020-2020 Email：liyinchi@qq.com QQ：233227763</el-footer>
  </div>
</template>

<script>
import global_ from "../../../components/Global"; 
import Options from "./Options.vue"; 
import Mind from "./Mind.vue"; 

export default {
  name: "Home",
  data() {
    return {
      mind_data_to_home: [], 
      width: 1050, 
      height: 730, 
      xSpacing: 30, 
      ySpacing: 30, 
      dragable: false, 
      gps: false, 
      fitView: false 
    };
  },
  methods: {
    formatter(row, column) {
      return this.transferTime(row.createTime);
    },
    transferTime(cTime) {
      var jsonDate = new Date(parseInt(cTime));
      Date.prototype.format = function(format) {
        var o = {
          "y+": this.getFullYear(),
          "M+": this.getMonth() + 1,
          "d+": this.getDate(),
          "h+": this.getHours(),
          "m+": this.getMinutes(),
          "s+": this.getSeconds()
        };

        if (/(y+)/.test(format)) {
          format = format.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }

        for (var k in o) {
          if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("" + o[k]).substr("" + o[k].length)
            );
          }
        }
        return format;
      };
      var newDate = jsonDate.format("yyyy-MM-dd hh:mm:ss");
      return newDate;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    onSubmit(formName) {},
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getMindData(mind_data) {
      this.mind_data_to_home = mind_data;
    },
    getOptionsValue(optionsValue) {
      this.width = optionsValue["width"];
      this.height = optionsValue["height"];
      this.xSpacing = optionsValue["xSpacing"];
      this.ySpacing = optionsValue["ySpacing"];
      this.dragable = optionsValue["dragable"];
      this.gps = optionsValue["gps"];
      this.fitView = optionsValue["fitView"];
    }
  },
  watch: {
    mind_data_to_home(){
    }
  },
  computed: {},
  components: {
    Options,
    Mind
  },
  created() {},
  beforeCreate() {},
  mounted() {
  },
  updated() {},
  destroyed() {},
};
</script>

<style scoped>
.el-header {
  background-color: #5999e2;
  border-color: #7a7a7a;
  color: #f1eeee;
  font-size: 60px;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #5999e2;
  border-color: #7a7a7a;
  color: #f1eeee;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #f1eeee;
  border-color: #7a7a7a;
  color: #333;
}

.el-main {
  background-color: #ffffff;
  border-color: #7a7a7a;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 760px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
