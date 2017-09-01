<template>
  <div id="app" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="Loading...">
    <el-row :gutter="24" >
      <div class="grid-content bg-blue">
        <div class="encuadra">
          <el-row>
            <el-col :span="2" class="is-hidden-touch">
              <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" width="40" height="40" />
              </div>
            </el-col>
            <el-col :span="5" class="is-hidden-touch">

              <div class="logo">
                </h3>
                <h3> Element- Custom Theme</h3>
              </div>
            </el-col>
            <el-col :span="17" style="margin-top: 0px">
              <div class="menu">
                <el-menu class="bg-blue-ns" mode="horizontal" >
                  <el-menu-item index="1" >Processing Center</el-menu-item>
                  <el-submenu index="2" >
                    <template slot="title" >Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                  </el-submenu>
                </el-menu>

              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-row>
    <!-- <el-row :gutter="24">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">Processing Center</el-menu-item>
              <el-submenu index="2">
                <template slot="title">Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
              </el-submenu>
             
            </el-menu>-->
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <el-row :gutter="24">
              <el-col :span="24">
                <el-button type="primary">Primary Button</el-button><br><br>
              </el-col>
              <el-col :span="24">
                <el-table :data="tableData" stripe border style="width: 100%">
                  <el-table-column prop="date" label="Date" width="180">
                  </el-table-column>
                  <el-table-column prop="name" label="Name" width="180">
                  </el-table-column>
                  <el-table-column prop="address" label="Address">
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>

    </el-row>

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js and element + theme',
      activeIndex: '1',
      activeIndex2: '1',
      fullscreenLoading:false,
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
      
      

    }
  },
  mounted(){
    this.openFullScreen()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
  }
}
</script>
<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.bg-blue {
  height: 80px;
  background-color: #1b88d9;
  color: white;
  font-size: 16px;
  font-weight: lighter;
}

.bg-blue-ns {
  background-color: #1b88d9;
  line-height: 100px;
  font-size: 16px;
  
}



.logo {
  padding: 0px 20px;
}

.encuadra {
  padding: 10px;
}

.encuadra i {
  margin-right: 5px;
}

.grid-content {
  border-radius: 4px;
  min-height: 30px;
}

.logo {
  border-right: 1px solid #ffffff;
  margin-top: 10px;
}
</style>