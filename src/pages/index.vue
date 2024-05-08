<template>
  <div class="main">
    
    <el-row :gutter="20" class="main-top">
      <el-col :span="14" class="col-left"><score></score></el-col>
      <el-col :span="10" class="col-right"><title_logo></title_logo></el-col>
    </el-row>
    <el-row :gutter="20" class="main-bottom">
      <el-col :span="14" class="col-left"><ranking></ranking></el-col>
      <el-col :span="10" class="col-right"><submittion v-if="true"></submittion><login_student v-if="false"></login_student></el-col>
    </el-row>

  </div>
</template>

<script>
import title_logo from "@/components/title";
import score from "@/components/score";
import ranking from "@/components/ranking";
import submittion from "@/components/submittion";
export default {
  name: "index",
  components: {
    title_logo,
    score,
    ranking,
    submittion
  },
  data() {
    return {
    }
  },
  mounted() {
   
  },
  methods: {
  }
}
</script>

<style scoped>

.main {
  min-height: 1000px;
  min-width: 1000px;
  height: calc(100% - 5px);
}
.main-top {
  
  height: 40%;
  margin: 0% !important;
}
.main-bottom {
  
  height: 60%;
  margin: 0% !important;
}
.col-left {
  height: 100%;
  
}
.col-right {
  height: 100%;
  
}
</style>
