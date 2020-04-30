<template>
  <div id="Options" class="Options_block">
    <div class="options">
      <span class="demonstration">设置节点横向间隔</span>
      <el-slider v-model="xSpacing" @change="handleChange"></el-slider>
    </div>
    <div class="options">
      <span class="demonstration">设置节点纵向间隔</span>
      <el-slider v-model="ySpacing" @change="handleChange"></el-slider>
    </div>
    <div class="options">
      <div>
        <label for="dragable">设置节点是否可拖拽</label>
        <el-switch
          id="dragable"
          v-model="dragable"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="handleChange"
        ></el-switch>
      </div>
      <br />
      <br />
      <div>
        <label for="gps">是否显示居中按钮</label>
        <el-switch
          id="gps"
          v-model="gps"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="handleChange"
        ></el-switch>
      </div>
      <br />
      <br />
      <div>
        <label for="fitView">是否显示缩放按钮</label>
        <el-switch
          id="fitView"
          v-model="fitView"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="handleChange"
        ></el-switch>
      </div>
      <!-- <br />
      <br />
      <div>
        <label for="width">设置组件宽度</label>
        <el-input-number
          id="width"
          v-model="width"
          @change="handleChange"
          :min="1"
          :max="100"
          label="设置组件宽度"
        ></el-input-number>
      </div>

      <br />
      <br />
      <div>
        <label for="height">设置组件高度</label>
        <el-input-number
          id="height"
          v-model="height"
          @change="handleChange"
          :min="1"
          :max="100"
          label="设置组件高度"
        ></el-input-number>
      </div>-->
    </div>
    <br />
    <br />
    <br />

    <div>
      <el-radio-group v-model="excel_type">
        <el-radio label="csv">CSV</el-radio>
        <el-radio label="xls">XLS</el-radio>
      </el-radio-group>
    </div>
    <br />
    <br />
    <!-- TODO -->
    <div class="block">
      <download-excel
        class="btn btn-default"
        :data="json_data2"
        :type="excel_type"
        worksheet="My Worksheet"
        name="mindMake.xls"
      >
        <el-button type="primary" @click="OutputExcel">导出Excel</el-button>
      </download-excel>
    </div>
    <div></div>
  </div>
</template>

<script>
import downloadExcel from "vue-json-excel";
import ScreenCapture from "@notadd/vue-screen-capture";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";
export default {
  name: "Options",
  props: ["mindDataToOptions"],
  data() {
    return {
      html: document.getElementById("Home"),
      width: 1050,
      height: 730,
      xSpacing: 30,
      ySpacing: 30,
      dragable: true,
      gps: true,
      fitView: true,
      excel_type: "csv",
      excel_name: "测试用例",
      excel_sheet_name: "Sheet1",
      project_name: "",
      module_info: [],
      module_num: 0,
      suite_name: "",
      case_name: "",
      importance_name: "",
      pre_condition_name: "",
      opear_step: "",
      expected_result: "",
      json_fields: {
        项目名称: "项目名称",
        所属模块: "所属模块",
        所属套件: "测试套件",
        用例编号: "用例编号",
        用例标题: "用例标题",
        重要性: "重要性",
        前置条件: "前置条件",
        操作步骤: "操作步骤",
        期望结果: "期望结果"
      },
      json_data: [],
      json_data2: [],
      case_id: 1,
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ]
    };
  },
  methods: {
    handleChange() {
      this.$emit("getOptionsValue", {
        width: this.width,
        height: this.height,
        xSpacing: this.xSpacing,
        ySpacing: this.ySpacing,
        dragable: this.dragable,
        gps: this.gps,
        fitView: this.fitView
      });
    },

    OutputImage() {},

    OutputExcel() { 
      var mind_data = this.$store.getters.get_mind_data;   
      this.project_name = mind_data[0]["name"];   
      this.module_num = mind_data[0]["children"].length;    
      var module_info_array = mind_data[0]["children"];
      for (let index = 0; index < module_info_array.length; index++) {
        const module_info_array_element = module_info_array[index];
        this.json_data[index] = {};
        this.json_data[index]["项目名称"] = this.project_name;
        this.json_data[index]["所属模块"] = module_info_array_element.name;
      }
      for (let index1 = 0; index1 < this.module_num; index1++) {
        for (
          let index2 = 0;
          index2 < module_info_array[index1].children.length;
          index2++
        ) {
          const module_info_array_element =
            module_info_array[index1].children[index2];
          this.json_data[index1][module_info_array_element.name] = {};
          for (
            let index3 = 0;
            index3 < module_info_array_element.children.length;
            index3++
          ) {
            const suite_caseinfo_element =
              module_info_array_element.children[index3];
            this.json_data[index1][module_info_array_element.name][
              suite_caseinfo_element.name
            ] = {}; 
            for (
              let index4 = 0;
              index4 < module_info_array_element.children.length;
              index4++
            ) {
              const element = module_info_array_element.children[index4];
              this.json_data[index1][module_info_array_element.name][
                suite_caseinfo_element.name
              ]["重要性"] = element.children[0].name;
              this.json_data[index1][module_info_array_element.name][
                suite_caseinfo_element.name
              ]["前置条件"] = element.children[0].children[0].name;
              this.json_data[index1][module_info_array_element.name][
                suite_caseinfo_element.name
              ]["步骤操作"] = element.children[0].children[0].children[0].name;
              this.json_data[index1][module_info_array_element.name][
                suite_caseinfo_element.name
              ]["期望结果"] =
                element.children[0].children[0].children[0].children[0].name;
              this.json_data2.push({
                项目名称: this.project_name,
                所属模块: module_info_array_element.name,
                测试套件: module_info_array_element.name,
                用例编号: this.case_id++,
                用例标题: suite_caseinfo_element.name,
                重要性: element.children[0].name,
                前置条件: element.children[0].children[0].name,
                操作步骤: element.children[0].children[0].children[0].name,
                期望结果:
                  element.children[0].children[0].children[0].children[0].name
              });
            }
          }
        }
      }
    },
    getCaptureImage(File) {
      //console.log("File", File);
    },

    OutputImage() {
      let canvas = document.querySelector("#Home");
      let that = this;
      html2canvas(canvas, { scale: 2, logging: false, useCORS: true }).then(
        function(canvas) {
          let type = "png";
          let imgData = canvas.toDataURL(type);
          // 照片格式处理
          let _fixType = function(type) {
            type = type.toLowerCase().replace(/jpg/i, "jpeg");
            let r = type.match(/png|jpeg|bmp|gif/)[0];
            return "image/" + r;
          };
          imgData = imgData.replace(_fixType(type), "image/octet-stream");
          let filename = "MindMake" + "." + type;
          that.saveFile(imgData, filename);
        }
      );
    },
   
    saveFile(data, filename) {
      let save_link = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "a"
      );
      save_link.href = data;
      save_link.download = filename;

      let event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      save_link.dispatchEvent(event);
    },

    OutputPDF() {
      let name = "MindMake";
      let shareContent = document.body, 
        width = shareContent.clientWidth, 
        height = shareContent.clientHeight, 
        canvas = document.createElement("canvas"), 
        scale = 2; 
      canvas.width = width * scale; 
      canvas.height = height * scale; 
      canvas.style.width = shareContent.clientWidth * scale + "px";
      canvas.style.height = shareContent.clientHeight * scale + "px";
      canvas.getContext("2d").scale(scale, scale); 
      let opts = {
        scale: scale, 
        canvas: canvas, 
        logging: false, 
        width: width, 
        height: height,
        useCORS: true 
      };

      html2canvas(shareContent, opts).then(() => {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
        var pageHeight = (contentWidth / 592.28) * 841.89;
        var leftHeight = contentHeight;
        var position = 0;
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight;
        var pageData = canvas.toDataURL("image/jpeg", 1.0);
        var PDF = new JsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save(name + ".pdf"); 
      });
    }
  },
  mounted() {},
  created() {},
  updated() {},
  components: {
    downloadExcel,
    ScreenCapture
  }
};
</script>
<style lang="">
.block {
  line-height: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  align-content: center;
}
.options {
  text-align: center;
  margin-top: 20px;
  line-height: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>