<template>
  <div>
    <Navbar/>

    <!-- 插入警示訊息顯示位置Alert Message -->
    <Alert/> 

    <div class="container-fluid">
      <div class="row">
        
        <Sidebar></Sidebar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

          <router-view></router-view>
          
        </main>

      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import Alert from '../AlertMessage';// Alert Message




export default {
  components:{
    Navbar,
    Sidebar,
    Alert,

  },

  // 帶入寫入的cookie；詳見Epso91；MDN、Axios文件設定Headers..
  created(){
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

    console.log('MyCookie', myCookie)
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
}

</script>
