<template>
  <div class="hello bg-light">

    <div class="sticky-top">
      <Index_Navbar></Index_Navbar>
    </div>

    <!-- Alert元件 -->
    <Alert />

    <!-- 全域讀取效果 -->
    <loading :active.sync="isLoading">
    </loading>

    <div class="container">

      <!-- 麵包屑-->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent pl-0">
          <li class="breadcrumb-item">
            <router-link to="/index">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/whiskey">Whiskey</router-link>
          </li>
          <li class="breadcrumb-item active">{{product.product.title}}</li>
        </ol>
      </nav>

      <div class="row mb-3">

        <div class="col-md-4">

          <div class="mb-3">

            <h3 class="mb-3">{{ product.product.title}}</h3>

            <div class="d-flex justify-content-between my-3">
              <h6 class="mb-0">{{product.product.description}}</h6>
              <h6 style="line-height:1" class="badge badge-secondary mb-0">{{product.product.category}}</h6>
            </div>
            <hr>


            <!-- 手機顯示: 產品小圖 -->
            <div class="bg-cover d-md-none my-3" style="height: 150px"
              :style="{backgroundImage: `url(${product.product.imageUrl})`}">
            </div>

            <div class="d-flex justify-content-between my-3">

              <div class="d-flex border">
                <button class="btn btn-sm border" @click="qtyRevise(-1)" :disabled="qty == 1">

                  <i class="fas fa-minus"></i>

                </button>

                <input class="border text-center" style="width: 40px" type="text" v-model="qty">

                <button class="btn btn-sm border" @click="qtyRevise(+1)"> <i class="fas fa-plus"></i> </button>
              </div>

              <div class="d-flex">
                <span><del>{{ product.product.origin_price|currency}}</del></span>
                <span class="h3 text-success">{{ product.product.price * qty |currency}}</span>
              </div>

            </div>

            <hr>
            <button class="btn btn-outline-barMain btn-sm " @click="addtoCart(product.product.id, qty)">加入購物車</button>

          </div>

          <div class="card my-5">
            <!-- <div class="card-header">產品描述</div> -->
            <div class="text-barnaim">
              <!-- <h5 class="card-title">Primary card title</h5> -->
              <p class="p-1 h5 textContent card-text text-barMain">{{product.product.content}}</p>
            </div>
          </div>
        </div>


        <div class="col-md-8">
          <div class="bg-cover d-none d-md-block" style="height: 580px"
            :style="{backgroundImage: `url(${product.product.imageUrl})`}">
          </div>
        </div>

      </div>

    </div>

    <Index_Footer />

  
  </div>
  </div>

</template>

<script>
  import Alert from '../AlertMessage'; //痾樂
  import Index_Navbar from '../Index_Navbar';
  import Index_Footer from '../Index_Footer';

  import $ from 'jquery'

  export default {
    components: {
      Alert,
      Index_Navbar,
      Index_Footer

    },

    data() {
      return {
        product: { //單一筆產品data
          product: {}
        },
        nowID: '',

        qty: '1',

        isLoading: false,

      }
    },

    methods: {
      // 取路由參數ID、串API、取單一產品內容
      getSingleDetail() {

        this.nowID = this.$route.params.productID;
        const api = `https://vue-course-api.hexschool.io/api/jwcabinet/product/${this.nowID}`;

        const vm = this;

        vm.isLoading = true; //全域讀取打開

        this.$http.get(api).then((response) => {

          console.log('單一產品細節:', response.data);

          if (response.data.success == true) {
            vm.product = response.data;
          }
        vm.isLoading = false; //全域讀取結束

        })
      },
      // 數量增減

      qtyRevise(change) {

        this.qty = Number(this.qty) + Number(change)

      },


      // 加入購物車
      addtoCart(id, qty = 1) {
        // const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        const api = `https://vue-course-api.hexschool.io/api/jwcabinet/cart`;
        const vm = this;

        vm.isLoading = true; //全域讀取打開

        // 加入購物車所需丟入的資料結構。
        const addingItem = {
          product_id: id,
          qty: qty,
        };

        this.$http.post(api, { data: addingItem }).then((response) => {
          console.log(response.data);

    
          vm.isLoading = false;
          vm.$bus.$emit('shopCart:update');


          $('#productModal').modal('hide')
          this.$bus.$emit('message:push', '已加入購物車', 'success')

        })

      },

    },

    created() {
      this.getSingleDetail();
    }

  }

</script>

<style scoped>
  /* 調整卡片內容文字 */
  .textContent {
    letter-spacing: 3px;
    line-height: 35px;
  }
</style>