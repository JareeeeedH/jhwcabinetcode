<template>
  <div class="">

    <div class="sticky-top">
      <Index_Navbar></Index_Navbar>
    </div>

    <!-- alert -->
    <Alert />



    <!-- 標題 -->
    <section>

      <div class="container">
        <div class="row no-gutters justify-content-center">

          <div class="col-md-10 h3 p-3 text-center">
            <strong>購物車內容</strong>
            <hr class="bg-barMain" style="width: 70px; height:2px ">
          </div>

        </div>
      </div>

    </section>

    <!-- 空商品頁面 -->
    <section>

      <div class='container' style='height: 350px;' v-if='cartList.carts.length ==0'>
        <h5>目前購物車內沒有商品</h5>
        <router-link to="/whiskey"><button class="btn btn-barMain">前往商城</button></router-link>

      </div>

    </section>


    <!-- 有商品才顯示的區塊 -->
    <section class='' v-if='cartList.carts.length!=0'>

      <!-- 購物車清單與收合 -->
      <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="card-header">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseExample">
                    顯示/隱藏明細
                  </button>
                </div>
                <div class="collapse card card-body show" id="collapseExample">
                  <div class="row justify-content-center">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col" width="30">刪除</th>
                            <th scope="col" class="d-none d-md-block">Photo</th>
                            <th scope="col">品名</th>
                            <th scope="col" width="60">數量</th>
                            <th scope="col">單價</th>
                            <th scope="col">小計</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(cartItem, index) in cartList.carts">
                            <td scope="row">

                              <span>
                                <button class="btn btn-outline-danger btn-sm" @click="delCart(cartItem)"><i
                                    class="fas fa-trash-alt"></i>
                                </button>
                              </span>

                            </td>

                            <td class="d-none d-md-block">
                              <div class="bg-cover" style='width: 50px; height:50px'
                                :style="{backgroundImage: `url(${cartItem.product.imageUrl})`}">
                              </div>
                            </td>

                            <td>
                              <span class="text-barMain font-weight-bold h5">{{cartItem.product.title}}</span>
                              <br>
                              <span class="text-success" v-if="cartItem.coupon">已套用優惠券</span>
                            </td>

                            <td>{{cartItem.qty}}</td>

                            <td>{{cartItem.product.price | currency}}</td>

                            <td>{{cartItem.total | currency}}</td>

                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="h6">總計:</td>
                            <td class="h6">{{cartList.total | currency}}</td>
                          </tr>
                          <tr v-if="cartList.final_total != cartList.total">
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-success h6">折扣價:</td>
                            <td class="text-success h6">{{cartList.final_total | currency}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>


              <!-- 註明優惠碼活動 -->
              <div class="py-3 font-weight-bold text-success">
                <span>店長當月壽星，約大家喝起來；輸入折扣碼享20%折扣: </span>
                <span class="text-barMain font-weight-bold h5">drinkingUp</span>
              </div>
              <!-- 輸入優惠碼 -->
              <div class="row">
                <div class="col-md-4">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="discountCode" placeholder="請輸入優惠碼">
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary btn-sm" type="button" @click="getDiscount">套用優惠碼</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>


      <!-- Alert提示欄位 steps-->
      <div class="container py-5 text-center">

        <div class="form-row">
          <div class="col-12 col-sm">
            <div class="alert alert-primary alert-rounded" role="alert">
              1.輸入訂單資料
            </div>
          </div>
          <div class="col-12 col-sm">
            <div class="alert alert-dark alert-rounded" role="alert">
              2.選擇付款
            </div>
          </div>
          <div class="col-12 col-sm">
            <div class="alert alert-dark alert-rounded" role="alert">
              3.訂單完成
            </div>
          </div>
        </div>
      </div>


      <!-- 訂購表單；標題 -->
      <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 h3 p-3 text-center">
              <strong>訂購人資料</strong>
              <hr class="bg-barMain" style="width: 70px; height:2px ">
            </div>
          </div>
        </div>
      </section>


      <!-- 訂購人訊息填寫 -->
      <section>
        <div class="container">
          <div class="my-3 row justify-content-center">
            <validation-observer v-slot="{ invalid }" class="col-md-10">
              <form @submit.prevent="creatOrder">
                <!-- v-slot導入外部資源進來內部使用。 -->

                <validation-provider rules="required|email" v-slot="{ errors, classes }" class="form-group">

                  <div class="form-group">

                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" v-model="form.user.email" class="form-control"
                      :class="classes">
                    <span class="invalid-feedback"> {{errors[0]}}</span>

                  </div>

                </validation-provider>

                <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group">
                  <div class="form-group">

                    <label for="username">收件人姓名</label>
                    <input id="username" type="text" name="name" v-model="form.user.name" class="form-control"
                      :class="classes">
                    <span class="invalid-feedback"> {{errors[0]}}</span>

                  </div>
                </validation-provider>

                <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group">
                  <div class="form-group">

                    <label for="usertel">收件人電話</label>
                    <input id="usertel" type="tel" name="Tel" v-model="form.user.tel" class="form-control"
                      :class="classes">
                    <span class="invalid-feedback"> {{errors[0]}}</span>

                  </div>
                </validation-provider>

                <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group">
                  <div class="form-group">

                    <label for="useraddress">收件人地址</label>
                    <input id="usrAddress" type="text" name="address" v-model="form.user.address" class="form-control"
                      :class="classes">
                    <span class="invalid-feedback"> {{errors[0]}}</span>

                  </div>
                </validation-provider>

                <validation-provider rules="" v-slot="{ errors, classes }" class="form-group">
                  <div class="form-group">

                    <label for="comment">留言</label>
                    <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message">
                  </textarea>
                    <span class="invalid-feedback"> {{errors[0]}}</span>

                  </div>
                </validation-provider>

                <div class="text-right">
                  <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
                </div>

              </form>
            </validation-observer>

          </div>
        </div>
      </section>

    </section>

    <!-- FOOTER -->
    <Index_Footer />

  </div>
</template>

<script>
  import Index_Navbar from '../Index_Navbar';
  import Index_Footer from '../Index_Footer';
  import Alert from '../AlertMessage'; //痾樂


  export default {
    name: 'shoppingCart',
    components: {
      Index_Navbar,
      Index_Footer,
      Alert,
    },

    data() {
      return {

        cartList: {
          carts: {}
        },

        discountCode: '', //優惠碼的資料、綁定欄位

        form: { //送出訂單的表單資料
          user: {
            name: '',
            email: '',
            tel: '',
            address: ''
          },
          message: 'Hello Vue'
        },
      }
    },

    methods: {
      // 取得購物車列表
      getCart() {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        const vm = this;

        this.$http.get(api).then((response) => {
          vm.cartList = response.data.data;
          console.log('購物車清單', response.data.data);
        })
      },
      //套用優碼
      getDiscount() {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
        const vm = this;

        const coupon = { code: vm.discountCode };

        this.$http.post(api, { data: coupon }).then((response) => {

          console.log(response.data)

          if (response.data.success) {
            this.$bus.$emit('message:push', '已套用優惠碼', 'success')
            vm.getCart();
          }
        })
      },
      delCart(cartItem) {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${cartItem.id}`;
        const vm = this;

        this.$http.delete(api).then((response) => {

          if (response.data.success) {
            this.getCart();
            this.$bus.$emit('message:push', '已刪除', 'danger');

            // 觸發bus、更新Navbar的數量
            vm.$bus.$emit('shopCart:update');

          }
        })
      },

      // 建立訂單
      creatOrder() {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
        const vm = this;

        this.$http.post(api, { data: vm.form }).then((response) => {

          console.log('建立訂單', response.data)

          if (response.data.success) {
            this.$bus.$emit('message:push', '已建立訂單', 'success');
            vm.$router.push(`/customerOrder/${response.data.orderId}`);
          }

        })
      },


    },

    created() {
      this.getCart()
    },

  }

</script>


<style>

</style>