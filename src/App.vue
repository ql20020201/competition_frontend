<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


window.onload = function () {
  $('#app').css('opacity', '1');
}

export default {
  name: 'App',
  methods: {}
}
</script>

<style>
	@import url("./assets/var.css");
    @import url("./assets/common.css");
    @import url("./assets/iconfont/iconfont.css");

	body {
		margin:0;
		padding:0;
	}

	#app {
		position: absolute;
		top: 0;
		left: 0;
		width: 80%;
		margin-left: 10%;
		min-width: 800px;
		height: 100%;
		opacity: 0;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		transition: opacity 0.6s linear;
		overflow: overlay;
	}

	::-webkit-scrollbar {
  		display: none;
	}

  .el-header {
    height: 80px!important;
    border-bottom: solid 1.5px rgba(140, 147, 157, 0.5);
  }

</style>
