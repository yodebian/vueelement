<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">Orders</a>
      </el-menu-item>
    </el-menu>

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
  }
}
</script>
<style>
.el-row {
  margin-top: 20px;
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
</style>