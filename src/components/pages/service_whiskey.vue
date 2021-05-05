<template>
  <div class="hello bg-light">

    <div class="sticky-top">
      <Index_Navbar></Index_Navbar>
    </div>

    <!-- Alert元件 -->
    <Alert />

    <!-- 讀取效果元件 -->
    <loading :active.sync="isLoading">
    </loading>

    <!-- Jumbo大圖 -->
    <div class="header jumbo-bg bg-cover d-flex align-items-end">
      <div class="p-5">
        <div class="bg-lighter p-3">
          <p class="h2">我有酒，你有故事嗎?</p>
          <p class="h5">Do you have any stories?</p>
        </div>
      </div>
    </div>

    <section class="py-3">
      <div class="container">
        <div class="row">

          <!-- 產品服務頁面；左邊導覽欄位 -->
          <div class="col-md-2 mb-2 ">

            <div class="sticky-top list-group" style="top:80px;">

              <li @click="getSorted('all')" class="list-group-item h6 mb-0 text-center"
                v-bind:class="{ active: sortedProduct== 'all' }">
                所有酒品
              </li>

              <li @click="getSorted('normal')" class="list-group-item h6 mb-0 text-center"
                v-bind:class="{ active: sortedProduct== 'normal' }">
                普飲區

              </li>

              <li @click="getSorted('recommended')" class="list-group-item h6 mb-0 text-center"
                v-bind:class="{ active: sortedProduct== 'recommended' }">
                推薦區
              </li>

              <li @click="getSorted('rare')" class="list-group-item h6 mb-0 text-center"
                v-bind:class="{ active: sortedProduct== 'rare' }">
                珍稀區
              </li>

            </div>

          </div>

          <!-- 一個卡片、產品欄位；使用v-for迴圈渲染所有產品 -->
          <div class="col-md-10">

            <div class="row">
              <div class="col-md-4 mb-5" v-for="item in filterProducts" :key="item.id">
                <div class="card border-0 box-shadow" style="overflow: hidden;">

                  <div @click.prevent="toProductDetail(item.id)" class="wine_photo bg-cover blackWindow"
                    :style="{backgroundImage: `url(${item.imageUrl})`}">
                  </div>

                  <div class="card-body">

                    <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                    <h6 class="card-title" style="height:30px">
                      <a @click.prevent="toProductDetail(item.id)" class="title_Link">{{item.title }}</a>
                    </h6>
                    <p class="card-text mb-0" style='height: 35px'>{{ item.description }}</p>
                    <div class="d-flex justify-content-end align-items-baseline">
                      <div class="h6 text-success" v-if="item.price">{{ item.price | currency}} 元</div>
                    </div>

                  </div>

                  <div class="d-flex justify-content-end p-3">
                    <button type="button" class="btn btn-outline-barMain btn-sm wine_btn"
                      @click="getSingleProduct(item.id)">
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem==item.id"></i>
                      <i class="fas fa-info-circle"></i>
                    </button>
                    <button type="button" class="btn btn-outline-barMain btn-sm mx-1 wine_btn"
                      @click="addtoCart(item.id)">
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem==item.id"></i>
                      <i class="fas fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- "查看更多"的Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-barMain text-white">
          <div class="modal-header">
            <h5 class="modal-title " id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div :style="{backgroundImage: `url(${product.imageUrl})`}" style="height: 200px" class="bg-cover"></div>

            <!-- 舊版型使用img方式 (註解掉) -->
            <!-- <img :src="product.imageUrl" class="img-fluid" alt="productPhoto"> -->

            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <del class="h6" v-if="product.origin_price > product.price">原價 {{ product.origin_price |currency}} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price |currency}}元</div>
            </div>
            <select name="qty" class="form-control mt-3" v-model="product.Qty">
              <option value="0" disabled selected>請選擇數量</option>
              <option :value="num" v-for="num in 6" :key='num'>選{{ num }} {{ product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.Qty}} * {{product.price |currency}} = {{ product.Qty * product.price |currency
                }}</strong> 元
            </div>
            <button type="button" class="btn btn-light btn-outline-barMain btn-sm" @click="addtoCart(product.id, product.Qty)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem==product.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>>
    </div>

    <!-- Footer -->
    <Index_Footer />

  </div>

</template>

<script>
  import Index_Navbar from '../Index_Navbar';
  import Index_Footer from '../Index_Footer';

  import Alert from '../AlertMessage'; //Alert元件

  import { mapGetters } from 'vuex'; //Vuex/ getters

  export default {
    components: {
      Index_Navbar,
      Index_Footer,
      Alert,
    },

    data() {
      return {
        sortedProduct: 'all', //控制篩選產品、預設為取所有產品
        product: { Qty: '1' }, //單一筆產品data

        status: {
          loadingItem: '', //讀取icon顯示/出現控制
        },
      }
    },

    computed: {
      // 過濾塞選
      filterProducts: function () {
        var vm = this;

        if (vm.sortedProduct == 'all') {
          return vm.products;

        }

        if (vm.sortedProduct == 'normal') {
          return vm.products.filter(function (item) {
            return item.price < 1500
          })
        }

        if (vm.sortedProduct == 'recommended') {
          return vm.products.filter(function (item) {
            return item.price > 1500 && item.price < 15000
          })
        }

        if (vm.sortedProduct == 'rare') {
          return vm.products.filter(function (item) {
            return item.price > 15000
          })
        }
      },

      ...mapGetters(['products',]),

      isLoading(){
        return this.$store.state.isLoading;
      },
      
    },
    methods: {

      // 取得所有產品列表
      getProducts() {

        //打action
        this.$store.dispatch('getProducts');

      },
      //取得單一筆產品
      getSingleProduct(id) {

        this.status.loadingItem = `${id}`; //讀取出現

        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
        const vm = this;

        this.$http.get(api).then((response) => {
          console.log('單一筆產品', response.data);

          vm.product = response.data.product;
          vm.product.Qty = '1';

          vm.status.loadingItem = '' //讀取消失
          $('#productModal').modal('show');

        })
      },
      // 跳轉單一筆產品；取單產品id、跳轉取路由上id；串Api。
      toProductDetail(id) {
        const vm = this;
        vm.$router.push(`/whiskey/${id}`);
      },

      // 加入購物車
      addtoCart(id, qty = 1) {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        const vm = this;
        this.status.loadingItem = `${id}`; //讀取出現

        // 加入購物車所需丟入的資料結構。
        const addingItem = {
          product_id: id,
          qty: qty,
        };

        this.$http.post(api, { data: addingItem }).then((response) => {
          console.log(response.data);

          vm.status.loadingItem = '' //讀取消失

          // event bus觸發 Navbar的function
          vm.$bus.$emit('shopCart:update');

          $('#productModal').modal('hide')
          this.$bus.$emit('message:push', '已加入購物車', 'success')

        })

      },

      // 點擊、控制分類、套用到 filter
      getSorted(sort) {

        this.sortedProduct = `${sort}`;

      },
    },

    created() {
      this.getProducts();

      // event bus的使用方法；、載入元件後；可將這段用於任何要顯示的地方。
      this.$bus.$emit('message:push', 'HelloWorld', 'info');

    }


  }

</script>

<style scoped>
  .jumbo-bg {
    background-image: url('../../assets/image/products_jumbo.jpg');
    height: 200px;
  }

  .bg-lighter {
    background-color: rgb(255, 255, 255, 0.3)
  }
</style>