<template>
  <div class="hello">

    <div class="sticky-top">
      <Index_Navbar></Index_Navbar>
    </div>

    <div class="container">
      <!-- <div class="row p-5">
        <h3 class="text-danger">旅遊服務目前無限期暫停。</h3>
      </div> -->
      <div class="row mb-5 bg-light text-barMain">

        <div class="col-md-6 p-5">
          <div>
            <div>
              <h5 class="font-weight-bold">蘇格蘭高地 尼斯湖 酒鄉英格蘭 精選十三天</h5>
            </div>

            <hr>
            <p>DAY01臺北 / 杜拜(阿姆斯特丹)</p>
            <p>DAY02杜拜 / 格拉斯哥—西北高地之路—Lochaber區</p>
            <p>DAY03Lochaber區—格蘭芬南高架橋—尼斯湖區—凱恩戈姆山國家公園</p>
            <p>DAY04凱恩戈姆山國家公園—皮特洛克裏鎮—百年威士忌酒廠品酒—愛丁堡</p>
            <p>DAY05愛丁堡</p>
            <p>DAY06愛丁堡—格蘭塔格林—彭裏斯—湖區</p>
            <p>DAY07湖區—賈斯特—史特拉佛</p>
            <p>DAY08史特拉佛—水上波頓—拜伯裏—牛津</p>
            <p>DAY09牛津—巴斯</p>
            <p>DAY10巴斯—巨石群—溫莎—倫敦</p>
            <p>DAY11倫敦—劍橋—倫敦</p>
            <p>DAY12倫敦 / 杜拜(阿姆斯特丹)</p>
            <p>DAY13杜拜(阿姆斯特丹) / 臺北</p>
            <br>
            <div class="travel_1 bg-cover"></div>
          </div>
        </div>

        <div class="col-md-6 p-5">
          <div>

            <div>
              <h5 class="font-weight-bold">品味蘇格蘭 斯貝塞 酒廠三天二夜之旅</h5>
            </div>
            <hr>

            <p>
              從愛丁堡出發，前往威士忌酒廠林立的斯貝塞（Speyside）觀光，還可以參觀著名的亞伯樂威士忌酒廠、家豪威士忌酒廠等知名酒廠。
            </p>
            <p>此外還將於斯貝塞木桶製造廠(Speyside Cooperage)參觀酒桶的製作過程，您還可以前往享有「威士忌之都」美譽的埃爾金城參觀。</p>

            <hr>

            <p><span class="h5">DAY01/</span>愛丁堡出發；於皮特洛赫里午餐；參觀達爾維尼酒廠；斯佩河畔格蘭敦住宿</p>
            <hr>

            <p<span class="h5">DAY02/</span>蘇格蘭著名威士忌產區觀光；於斯佩河畔格蘭敦住宿</p>
              <li>
                <span class="h5">本諾曼克(Benromach)</span>
                <br>
                <span>酒廠它是斯貝塞最小規模的、家族經營的酒廠。</span>
              </li>
              <li>
                <span class="h5">亞伯樂(Aberlour)</span>
                <br>
                <span>酒廠位於斯佩河與勞爾河的交匯處，自1879年創立以來持續受到大眾的喜愛</span>
              </li>
              <li>
                <span class="h5">家豪(Cardhu)威士忌酒廠</span>
                <br>
                <span>酒廠因為生產世界聞名的蘇格蘭威士忌品牌——尊尼獲加黑牌威士忌而被人熟知，同時因為由2位女性經營而聞名。</span>
              </li>
              <li>
                <span class="h5">斯貝塞木桶製造廠</span>
                <br>
                <span>這裡製造的酒桶不僅供給蘇格蘭，還出口到全世界，您可以在此參觀使用傳統工藝的酒桶製作過程。</span>
              </li>
              <hr>
              <p<span class="h5">DAY3/</span>上午探秘單一麥芽威士忌之源格蘭威特（Glenlivet）；下午:抵達愛丁堡，解散</p>
          </div>
          <div class="travel_2 bg-cover"></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Index_Navbar from '../Index_Navbar';

  export default {
    components: {
      Index_Navbar,
    }
  }
</script>


<style lang="scss">
  .travel_1 {
    background-image: url('../../assets/image/travel_1.jpg');
    height: 300px;
  }

  .travel_2 {
    background-image: url('../../assets/image/travel_2.jpg');
    height: 300px;
  }
</style>