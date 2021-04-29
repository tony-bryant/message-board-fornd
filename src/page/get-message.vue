<template>
  <div>
    <p style="font-size: 30pt;margin: 0px">XX留言列表</p>
    <el-card class="box-card" v-for="i in 4" style="display: table;margin: 10px auto;width: 80%;background-color: #E6A23C" :key="i">
      <div slot="header">
        <span style="font-size: 15pt">标题</span>
      </div>
      <div style="text-align: left">
         内容
      </div>
    </el-card>
    <el-pagination
      style="position: absolute;left: 62%;"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
