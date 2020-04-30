<template>
  <div id="Mind" class="block">
    <div id="mindmap">
      <mindmap
        v-model="mind_data"
        :width="width"
        :height="height"
        :xSpacing="xSpacing"
        :ySpacing="ySpacing"
        :draggable="dragable"
        :gps="gps"
        :fitView="fitView"
        @change="handleChange"
      ></mindmap>
    </div>
  </div>
</template>

<script>
import mindmap from "@hellowuxin/mindmap";
import html2canvas from "html2canvas";
export default {
  name: "Mind",
  data() {
    return {
      mind_data: [
        {
          name: "项目",
          children: [
            {
              name: "模块1", 
              children: [
                {
                  name: "测试套件1", 
                  children: [
                    {
                      name: "用例标题1",
                      children: [
                        {
                          name: "重要性1", 
                          children: [
                            {
                              name: "前置条件1", 
                              children: [
                                {
                                  name: "步骤操作1.1", 
                                  children: [
                                    { name: "期望结果1.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作1.2",
                                  children: [
                                    { name: "期望结果1.2", children: [] }
                                  ] 
                                },
                                {
                                  name: "步骤操作1.3", 
                                  children: [
                                    { name: "期望结果1.3", children: [] }
                                  ] 
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "用例标题2",
                      children: [
                        {
                          name: "重要性2",
                          children: [
                            {
                              name: "前置条件2",
                              children: [
                                {
                                  name: "步骤操作2.1",
                                  children: [
                                    { name: "期望结果2.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作2.2",
                                  children: [
                                    { name: "期望结果2.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {

                      name: "用例标题3",
                      children: [
                        {
                          name: "重要性3",
                          children: [
                            {
                              name: "前置条件3",
                              children: [
                                {
                                  name: "步骤操作3.1",
                                  children: [
                                    { name: "期望结果3.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作3.2",
                                  children: [
                                    { name: "期望结果3.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "测试套件2",
                  children: [
                    {
                      name: "用例标题1", 
                      children: [
                        {
                          name: "重要性1", 
                          children: [
                            {
                              name: "前置条件1",
                              children: [
                                {
                                  name: "步骤操作1.1", 
                                  children: [
                                    { name: "期望结果1.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作1.2", 
                                  children: [
                                    { name: "期望结果1.2", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作1.3",
                                  children: [
                                    { name: "期望结果1.3", children: [] }
                                  ] 
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "用例标题2",
                      children: [
                        {
                          name: "重要性2",
                          children: [
                            {
                              name: "前置条件2",
                              children: [
                                {
                                  name: "步骤操作2.1",
                                  children: [
                                    { name: "期望结果2.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作2.2",
                                  children: [
                                    { name: "期望结果2.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "用例标题3",
                      children: [
                        {
                          name: "重要性3",
                          children: [
                            {
                              name: "前置条件3",
                              children: [
                                {
                                  name: "步骤操作3.1",
                                  children: [
                                    { name: "期望结果3.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作3.2",
                                  children: [
                                    { name: "期望结果3.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "模块2", 
              children: [
                {
                  name: "测试套件1", 
                  children: [
                    {
                      name: "用例标题1", 
                      children: [
                        {
                          name: "重要性1", 
                          children: [
                            {
                              name: "前置条件1", 
                              children: [
                                {
                                  name: "步骤操作1.1",
                                  children: [
                                    { name: "期望结果1.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作1.2", 
                                  children: [
                                    { name: "期望结果1.2", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作1.3", 
                                  children: [
                                    { name: "期望结果1.3", children: [] }
                                  ] 
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "用例标题2",
                      children: [
                        {
                          name: "重要性2",
                          children: [
                            {
                              name: "前置条件2",
                              children: [
                                {
                                  name: "步骤操作2.1",
                                  children: [
                                    { name: "期望结果2.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作2.2",
                                  children: [
                                    { name: "期望结果2.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "用例标题3",
                      children: [
                        {
                          name: "重要性3",
                          children: [
                            {
                              name: "前置条件3",
                              children: [
                                {
                                  name: "步骤操作3.1",
                                  children: [
                                    { name: "期望结果3.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作3.2",
                                  children: [
                                    { name: "期望结果3.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "测试套件2",
                  children: [
                    {
                      name: "用例标题1",
                      children: [
                        {
                          name: "重要性1", 
                          children: [
                            {
                              name: "前置条件1",
                              children: [
                                {
                                  name: "步骤操作1.1", 
                                  children: [
                                    { name: "期望结果1.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作1.2", 
                                  children: [
                                    { name: "期望结果1.2", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作1.3", 
                                  children: [
                                    { name: "期望结果1.3", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "用例标题2",
                      children: [
                        {
                          name: "重要性2",
                          children: [
                            {
                              name: "前置条件2",
                              children: [
                                {
                                  name: "步骤操作2.1",
                                  children: [
                                    { name: "期望结果2.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作2.2",
                                  children: [
                                    { name: "期望结果2.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "用例标题3",
                      children: [
                        {
                          name: "重要性3",
                          children: [
                            {
                              name: "前置条件3",
                              children: [
                                {
                                  name: "步骤操作3.1",
                                  children: [
                                    { name: "期望结果3.1", children: [] }
                                  ]
                                },
                                {
                                  name: "步骤操作3.2",
                                  children: [
                                    { name: "期望结果3.2", children: [] }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
  
  props: [
    "width", 
    "height",
    "xSpacing", 
    "ySpacing", 
    "dragable", 
    "gps", 
    "fitView" 
  ],
  methods: {
    handleChange() {
      this.$emit("getMindData", this.mind_data);
    },
    
  },
  mounted() {},
  created() {
    this.$store.dispatch("set_mind_data", this.mind_data);
  },
  updated() {
    this.$store.dispatch("set_mind_data", this.mind_data);
  },
  components: {
    mindmap
  }
};
</script>

<style lang="less" scoped>
.block {
  height: 500px;
}
</style>