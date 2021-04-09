<template>
  <div>
    <Index_Navbar/>

      <div class="header jumbo-bg bg-cover d-flex mb-3">

        <div class="container d-flex justify-content-center align-items-center">

          <div class="row">

            <div class="col-12 d-flex align-items-center px-0 py-5">
              <div class="d-flex w-100 justify-content-between line">
                <div style="background-color: white;" class="steps_2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-2x far fa-check-circle"></i></div>
                <div style="background-color: white;" class="steps_2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-2x far fa-check-circle"></i></div>
                <div style="background-color: white;" class="steps_2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-2x far fa-check-circle"></i></div>
              </div>
            </div>

            <div class="col-12">
              <h1 class="text-center text-white font-weight-bold">付款成功</h1>
            </div>

            <div class="col-12 text-center p-3 w-100" style='background-color: rgba(245, 234, 37, 0.7)'>
              <router-link  to="/index" class='h2 text-white'>
                繼續逛逛
              </router-link>
            </div>

          </div>


        </div>

      </div>

    <Index_Footer/>
  </div>
</template>

<script>

import Index_Navbar from '../Index_Navbar';
import Index_Footer from '../Index_Footer';


  export default {
     components: {
            Index_Navbar,
            Index_Footer,
        },
  }

</script>


<style scoped>
.bg-cover{
    background-size: cover;
    background-position: center center
}

.jumbo-bg{
    background-image: url('../../assets/image/success.jpg');
    height: 496px;
}

.bg-lighter{
    background-color: rgb(255, 255, 255, 0.3)
}


.line::after{
    content:"";
    position: absolute;
    left:0;
    right:0;
    height: 1px;
    top: 50%;
    border: 1px solid white;
}

/* 0:還沒完成、 1當前步驟、 2完成 */
.steps_1{
    width:20px;
    height:20px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #0f3057;
    z-index:1;
    
}

.steps_1::after{
    content:"";
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: white;
    border-radius: 20px;
}

.steps_0{
    width:20px;
    height:20px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #0f3057;
    z-index:1;
}

.steps_2{
    width:22px;
    height:22px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #0f3057;
    z-index:1;
    /* background-image: url('../img/done.svg'); */
}

</style>