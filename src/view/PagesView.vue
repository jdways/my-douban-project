<template>
	<div class="pages-view">
	<!-- 头文件 -->
    <head-nav ></head-nav>
    <!-- 内容路由 -->
    <router-view></router-view>

  </div>
</template>

<script>
import HeadNav from '../components/HeadNav'

export default {
  name: 'pages-view',
  components: { HeadNav},
  data () {
    return {
    }
  },
  methods: {
    open: function () {
      this.talion = 'open'
    },
    close: function () {
      this.talion = ''
    }
  }
}
</script>