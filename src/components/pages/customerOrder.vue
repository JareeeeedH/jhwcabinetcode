<template>
  <div>
  <Index_Navbar/>


    <!-- Alert提示訊息 -->
    <div class="container py-5 text-center">
      <div class="form-row">
        <div class="col-12 col-sm">
          <div class="alert alert-dark alert-rounded" role="alert">
            1.輸入訂單資料
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="alert alert-primary alert-rounded" role="alert">
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

    <!-- 訂購產品與訂購人訊息；手機螢幕-->
    <section class="border p-3 bg-light mb-3 d-md-none container">

      <div>

        <div class="h5 text-center">購物清單</div>
        <hr class="bg-barMain" style="width: 70px; height:2px ">

      </div>

      <div class="my-5 row justify-content-center">
        <!-- <div class="p-3 h5">購物清單</div> -->
        <form class="" @submit.prevent="orderToPay">
          <table class="table">
            <thead>
              <th>品名</th>
              <th width="80">數量</th>
              <th width="80">單價</th>
              <th width="120" class="text-right">小計</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.product.price | currency}}</td>
                <td class="align-middle text-right">
                  {{ item.total | currency}}
                  <br>
                  <span class="text-success" v-if="item.coupon">折扣價:{{ item.final_total | currency}}</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="text-barMain h5">
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ order.total | currency}}</td>
              </tr>
            </tfoot>
          </table>

          <div clsss="d-flex justify-content-center">

            <div class="h5 text-center">訂購人訊息</div>
            <hr class="bg-barMain" style="width: 70px; height:2px ">

          </div>

          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th width="">付款金額</th>
                <td>{{ order.total | currency}} </td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>

        </form>
      </div>
    </section>


    <section>
      <div class="container">
        <div class="row">

          <!-- 信用卡付款欄位 -->
          <div class="col-md-6 d-flex flex-column">
            <div class="bg-barMain ">

              <form action="" class="needs-validation p-3 text-white" novalidate>

                <div class="form-row">
                  <div class="col-6 col-md-6">
                    <h1>付款</h1>
                  </div>
                  <div class="col-6 col-md-6 d-flex align-items-center px-0">
                    <div class="d-flex w-100 justify-content-between line">
                      <div class="steps_2 d-flex align-items-center justify-content-center"><i
                          class="fa fa-2x far fa-check-circle"></i></i></div>
                      <div class="steps_1 d-flex align-items-center justify-content-center"></div>
                      <div class="steps_0 d-flex align-items-center justify-content-center"></div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="cardNum">卡號</label>
                      <input required id="cardNum" style="height: 50px;" type="text" class="form-control"
                        placeholder="xxxx-xxxxx-xxxx-xxxx">
                      <span class="invalid-feedback">欄位有誤</span>
                      <span class="valid-feedback">欄位完成</span>
                    </div>
                  </div>
                </div>

                <div class="form-row">

                  <div class="col-6">
                    <div class="form-group">
                      <label for="fn">First name</label>
                      <input required id="fn" required style="height: 50px;" type="text" class="form-control"
                        placeholder="姓">
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-group">
                      <label for="ln">Last Name</label>
                      <input required id="ln" style="height: 50px;" type="text" class="form-control" placeholder="名">
                    </div>
                  </div>

                </div>

                <div class="form-row">

                  <div class="col-6">
                    <div class="form-group">
                      <label for="month">有效期限/月</label>
                      <input id="month" style="height: 50px;" type="text" class="form-control" placeholder="month">
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for="year">有效期限/年</label>
                      <input id="year" style="height: 50px;" type="text" class="form-control" placeholder="year">
                    </div>
                  </div>

                </div>

                <div class="form-row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="pw">驗證碼</label>
                      <input id="pw" style="height: 50px" type="text" class="form-control" placeholder="XXX">
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-success" @click="orderToPay">確認付款</button>

              </form>


            </div>

          </div>

          <!-- 訂購訊息 -->
          <div class="d-none d-md-block col-md-6">
            <div class="bg-light text-barSecond border mb-3">
              <div class="p-2 text-center border-bottom border-barMain bg-light">
                <h2>訂購人訊息</h2>
              </div>
              <table class="table">
                <tbody>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th width="">付款金額</th>
                    <td>{{ order.total | currency}} </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span v-if="!order.is_paid">尚未付款</span>
                      <span v-else class="text-success">付款完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 訂購清單 -->
            <div class="bg-light text-barSecond border">

              <div class="p-2 text-center border-bottom border-barMain">
                <h2>購物清單</h2>
              </div>

              <div class="row p-1 border-bottom" v-for="item in order.products" :key="item.id">

                <!-- Photo -->
                <div class="col-2">
                  <div class="p-1 bg-cover h-100" :style="{backgroundImage: `url(${item.product.imageUrl})`}">
                  </div>
                </div>

                <!-- title -->
                <div class="col-5 py-3">
                  <div>
                    <span class="h6">{{item.product.title}} ({{item.qty}})</span>
                  </div>
                  <div>
                    <span>{{item.product.price | currency}}</span>
                  </div>
                </div>

                <!-- Price -->
                <div class="col-3 py-3">

                  <div>
                    <span class="h6">小計</span>
                    <span>{{item.total | currency}} </span>
                  </div>

                  <div>
                    <span class="text-success h6" v-if="item.coupon">優惠價: {{item.final_total | currency}} </span>
                  </div>
                </div>
                
              </div>
              <div class="p-2 d-flex justify-content-end align-items-center h3">
                <span>
                  總計 {{ order.total | currency}}
                </span>
                <span>
                </span>
              </div>


            </div>
          </div>


        </div>
      </div>
    </section>

    <Index_Footer/>
  </div>
</template>

<script>

  // BS4表單驗證的JS
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  import Index_Navbar from '../Index_Navbar';
  import Index_Footer from '../Index_Footer';

  export default {
    components: {
      Index_Navbar,
      Index_Footer,
    },
    data() {
      return {
        nowID: '',
        order: {
          user: {},
        },
      }
    },

    methods: {
      getSingleOrder() {

        // 'orderID'是在index.js路由配置時的自訂命名；在此取出當前面頁網址上的 orderID
        this.nowID = this.$route.params.orderID;

        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${this.nowID}`;
        const vm = this;

        this.$http.get(api).then((response) => {
          vm.order = response.data.order;
          console.log('訂單內容', response.data);
        })

      },

      orderToPay() {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${this.nowID}`;
        const vm = this;

        this.$http.post(api).then((response) => {

          vm.$router.push('/orderSuccess')

          vm.getSingleOrder();
        })
      },

    },

    created() {
      this.getSingleOrder();
    },

  }

</script>


<style>
  
  .line::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    top: 50%;
    border: 1px solid white;
  }

  /* 0:還沒完成、 1當前步驟、 2完成 */
  .steps_1 {
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #0f3057;
    z-index: 1;

  }

  .steps_1::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: white;
    border-radius: 20px;
  }

  .steps_0 {
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #0f3057;
    z-index: 1;
  }

  .steps_2 {
    width: 22px;
    height: 22px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #0f3057;
    z-index: 1;
    /* background-image: url('../img/done.svg'); */
  }
</style>