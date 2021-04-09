<template>
    <div>
        <!-- 插入loading元件、  isLoading變數控制是否執行 -->
        <loading :active.sync="isLoading">
        </loading>

        <div class="text-right mb-3">
            <button class="btn btn-success btn-sm" @click="OpenModal(true)">建立優惠券</button>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" width="80">#</th>
                    <th scope="col">名稱</th>
                    <th scope="col">有效日期 (Unix timestamp格式)</th>
                    <th scope="col" width="80">折扣率</th>
                    <th scope="col" width="100">是否啟用</th>
                    <th scope="col">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ticket) in coupon_using.coupons" :key='ticket.id'>

                    <th scope="row">{{ticket.num}}</th>
                    <td>{{ticket.title}}</td>
                    <td>{{ticket.due_date | date}}</td>
                    <td>{{ticket.percent }}</td>
                    <td class="text-center">
                        <span class="text-success" v-if="ticket.is_enabled==1">是</span>
                        <span v-else>否</span>
                    </td>
                    <td>
                        <button class="btn btn-info btn-sm" @click="OpenModal(false, ticket)">編輯</button>
                        <button class="btn btn-warning btn-sm" @click=OpenDelModal(ticket)>刪除</button>
                    </td>

                </tr>
            </tbody>
        </table>

        <!-- 新增優惠券/ Modal -->
        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增優惠券</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title" placeholder="請輸入標題"
                                        v-model="coupon_new.title">
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="is_enabled"
                                            v-model="coupon_new.is_enabled" :true-value="1" :false-value="0">
                                        <label class="form-check-label" for="is_enabled">
                                            是否啟用
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="title">折扣(1-100%)</label>
                                    <input type="text" class="form-control" id="discount" placeholder="number"
                                        v-model="coupon_new.percent">
                                </div>
                                <div class="form-group">
                                    <label for="title">有效日期</label>
                                    <input type="text" class="form-control" id="expiry" placeholder="( Unix Timestamp )"
                                        v-model="coupon_new.due_date">
                                </div>
                                <div class="form-group">
                                    <label for="title">折扣碼</label>
                                    <input type="text" class="form-control" id="code" placeholder="code"
                                        v-model="coupon_new.code">
                                </div>
                                <hr>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click='addCoupon(coupon_new.id)'>確認</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete_Modal -->
        <div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        確認要刪除 <strong class="text-danger">{{coupon_new.title}}</strong> 優惠券嗎?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="DelCoupon">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                isLoading: false, //全域loading
                coupon_using: {}, //現有coupon資料
                coupon_new: {}, //存放新增& 修改的 coupon資料
                addingCoupon: false,//控制是否新增
            }
        },
        methods: {

            // 取優惠券列表；預設十筆以內、暫不使用分頁。
            getCoupons(page = 1) {
                this.isLoading = true;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
                const vm = this;

                this.$http.get(api,).then((response) => {
                    console.log('優惠券列表:', response.data)
                    vm.coupon_using = response.data;

                    vm.isLoading = false;

                })
            },

            // 新增coupon
            addCoupon(id) {

                //預設 情況；
                let ApiMethod = 'post'
                let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
                const vm = this;

                // 如果是要修改；則修改 method& Api路徑。
                if (this.addingCoupon == false) {
                    ApiMethod = 'put';
                    api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${id}`;
                }

                this.$http[ApiMethod](api, { data: vm.coupon_new }).then((response) => {
                    console.log(response.data);
                    $('#couponModal').modal('hide');
                    vm.getCoupons();

                })
            },

            // 打開modal；並選擇要 新增or修改。
            OpenModal(isNew, item) {
                const vm = this;

                if (isNew == true) {
                    vm.coupon_new = {};
                    vm.addingCoupon = true;
                }
                else {
                    vm.coupon_new = Object.assign({}, item);
                    vm.addingCoupon = false;
                }
                $('#couponModal').modal('show');
            },

            // 打開刪除的modal的modal。
            OpenDelModal(item){
                const vm = this;
                vm.coupon_new = Object.assign({}, item);
                $('#delModal').modal('show');
            },

            // 刪除coupon。
            DelCoupon() {
                
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${this.coupon_new.id}`;
                const vm = this;

                this.$http.delete(api).then((response) => {
                    console.log('刪除優惠券:',response.data);
                    $('#delModal').modal('hide');
                    vm.getCoupons();

                })
            },
        },




        created() {
            this.getCoupons();
        },
    }


</script>