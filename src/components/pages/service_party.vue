<template>
  <div class="hello">

    <div class="sticky-top">
      <Index_Navbar></Index_Navbar>
    </div>


     <!-- Alert元件 -->
    <Alert />


    <!-- jumbo -->
    <section class="mb-5">
      <div class="jumbo d-flex align-items-end">

          <div class="p-6">
            <div class="bg-lighter p-3 text-white">
              <p class="h5">派對要High，讓專業的來。</p>
              <p class='h6'>聯繫告知需求、服務客戶、人數、地點...，免費取得報價。</p>
            </div>
          </div>

      </div>
    </section>


    <!-- 描述欄位 -->
    <section class="mb-5 container">
      <div class="row">

          <h3 class="p-3 text-barMain font-weight-bold">派對客製到府服務</h3>
          <p style='line-height:25px' class="h5 p-3">
            婚禮、品牌發表、泳池派對、遊艇派對、春酒、尾牙餐宴、公司行號開幕酒會，可以為您做出有質感的的客製化活動與酒水套餐。
          </p>

      </div>
    </section>


    <!-- 專家介紹 -->
    <section class="mb-5 bg-light py-5">
      <div class="container">

        <h3 class="text-barMain font-weight-bold mb-3">專家介紹</h3>

        <div class="row mb-3">

          <div class='col-md-2 box_photo1 rounded-circle'></div>
          <div class="col-md-3">
            <div>
              <span class="h3">Will Liao</span>
              <h5><span class="badge badge-dark">活動DJ</span></h5>
            </div>
            <div>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span>(18)</span>
            </div>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat illo dolor, alias, laboriosam rem quae
                omnis eius facilis.</p>
            </div>


          </div>

          <div class="col-md-3">
            <h5>主要曲⾵/特⾊</h5>
            <ul>
              <li>House</li>
              <li>Deep/Tech House</li>
              <li>EDM</li>
              <li>可依需求配合客製想要的曲風。</li>
            </ul>
          </div>

          <div class="col-md-4">
            <h5>經歷</h5>
            <ul>
              <li>DHL曼聯傳奇球星晚宴DJ Showcase</li>
              <li>#Praty 101⼤樓 跨年系列派對DJ演出</li>
              <li>Tesla高雄旗艦店開幕派對演出</li>
              <li>入選2021亞洲百大DJ第88名。</li>

            </ul>

          </div>

        </div>

        <div class="row mb-3 ">

          <div class='col-md-2 box_photo2 rounded-circle'></div>

          <div class="col-md-3">
            <div>
              <span class="h3">Steven</span>
              <h5><span class="badge badge-dark">調酒師</span></h5>
            </div>
            <div>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="text-warning fa fa-star"></span>
              <span>(29)</span>
            </div>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat illo dolor, alias, laboriosam rem quae
                omnis eius facilis.</p>
            </div>


          </div>

          <div class="col-md-3">
            <h5>主要專長/特色</h5>
            <ul>
              <li>各式調酒</li>
              <li>花式調酒表演</li>
              <li>現場氣氛主持帶動</li>

            </ul>
          </div>

          <div class="col-md-4">
            <h5>經歷</h5>
            <ul>
              <li>國家乙級飲料調製（調酒）合格證書</li>
              <li>2020台灣花式調酒冠軍</li>
              <li>高雄Roxanne's Bar開幕誌慶</li>
              <li>平時駐點於高雄Roxanne's Bar</li>

            </ul>

          </div>

        </div>
      </div>
    </section>


    <!-- 活動紀錄 -->
    <section class='mb-5 py-5'>
      <div class="container">

        <h3 class="text-barMain font-weight-bold">活動花絮</h3>
        <div class="row">

          <div class="col-md-3">
            <div class="activity1 bg-cover"></div>
            <div class="h6 p-1 text-center">公司行號春酒</div>
          </div>

          <div class="col-md-3">
            <div class="activity2 bg-cover"></div>
            <div class="h6 p-1 text-center">汽車上市發表會</div>
          </div>

          <div class="col-md-3">
            <div class="activity3 bg-cover"></div>
            <div class="h6 p-1 text-center">生日派對</div>
          </div>

          <div class="col-md-3">
            <div class="activity4 bg-cover"></div>
            <div class="h6 p-1 text-center">花式調酒表演</div>
          </div>

        </div>
      </div>
    </section>


    <!-- 討論區  -->
    <section class="mb-5 py-5 bg-light">
      <div class="container">

        <h3 class="text-barMain font-weight-bold mb-3">看看其他人怎麼說</h3>

        <div class="media mb-1">
          <!-- <img class="mr-3"> -->
          <div class="media-body">
            <h4 class="mt-0">屏東柯佳嬿</h4>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span>2021/03/25</span>
            <p class='h6 py-3'>
              我想要安排一場生日派對，地點在墾丁的沙灘，現場任何設施都沒有，預計人數50位，
              希望提供啤酒、數種調酒暢飲，播放Funk/ EDM的曲風，日期在5/1號
              請問你們可以幫忙嗎，請給我一份報價。
            </p>
            <hr>
          </div>
        </div>

        <div class="media mb-1">
          <!-- <img class="mr-3"> -->
          <div class="media-body">
            <h4 class="mt-0">Lydia Huang</h4>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span>2021/01/24</span>
            <p class='h6 py-3'>服務好、設備齊全，人員也非常專業，讚!</p>
            <hr>
          </div>
        </div>

        <div class="media mb-1">
          <!-- <img class="mr-3"> -->
          <div class="media-body">
            <h4 class="mt-0">Eric Chen</h4>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span class="text-warning fa fa-star"></span>
            <span>2021/1/04</span>
            <p class='h6 py-3'>大推調酒師的花式調酒表演，太精彩了!</p>
            <hr>
          </div>
        </div>

      </div>
    </section>

    <Index_Footer />

  </div>

</template>

<script>
  import Index_Navbar from '../Index_Navbar';
  import Index_Footer from '../Index_Footer';

  import Alert from '../AlertMessage'; //Alert元件

  export default {
    components: {
      Index_Navbar,
      Index_Footer,
      Alert
    }
  }
</script>


<style scoped>
  .box_photo1 {
    background-image: url('https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg');
    height: 150px;
    background-position: center center;
    background-size: cover;
  }

  .box_photo2 {
    background-image: url('../../assets/image/bartendar.jpg');
    height: 150px;
    background-position: center center;
    background-size: cover;
  }

  .jumbo {
    height: 250px;
    background-image: url('../../assets/image/service_dj.jpg');
    background-position: center center;
    background-size: cover;
  }

  .activity1 {
    height: 200px;
    background-image: url('../../assets/image/ac1.jpg');
  }

  .activity2 {
    height: 200px;
    background-image: url('../../assets/image/ac2.jpg');
  }

  .activity3 {
    height: 200px;
    background-image: url('../../assets/image/ac3.jpg');
  }

  .activity4 {
    height: 200px;
    background-image: url('../../assets/image/ac4.jpg');
  }
</style>