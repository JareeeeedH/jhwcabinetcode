<template>
  <div id="app">

    <!-- 兩個router_view 示範。 -->
    <!-- <router-view name="menu"></router-view>    -->
    
    <div class="content">
      <router-view></router-view>
    </div>



    <!-- 全域插入Footer -->
    <!-- <div class="FOOTER">
      <Index_Footer />
    </div> -->


  </div>
</template>


<script>
  import Index_Footer from './components/Index_Footer';

  export default {
    name: 'App',
    components: {
      Index_Footer,
    },
  }
</script>

<style lang="scss">
  @import "./assets/all.scss";


  /* 控制內容與 footer固定下方 */
  .content {
    min-height: calc(100vh - 70px);
  }

  .FOOTER {
    height: 70px;
  }
</style>