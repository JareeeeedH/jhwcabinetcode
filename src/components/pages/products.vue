<template>
    <div>

        <!-- 插入loading元件、  isLoading變數控制是否執行-->
        <loading :active.sync="isLoading">
        </loading>

        <div class="text-right mb-3">
            <button class="btn btn-success btn-sm" @click="OpenModal(true)">建立新的產品</button>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" width="100">#</th>
                    <th scope="col">分類</th>
                    <th scope="col">名稱</th>
                    <th scope="col" width="80">售價</th>
                    <th scope="col" width="100">是否啟用</th>
                    <th scope="col">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index, key) in products" :key="item.id">

                    <th scope="row"> {{index + 1}}  </th>
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.price | currency }}</td>
                    <td class="text-center">
                        <span class="text-success" v-if="item.is_enabled==1">是</span>
                        <span v-else>否</span>
                    </td>
                    <td>
                        <button class="btn btn-info btn-sm" @click="OpenModal(false, item)">編輯</button>
                        <button class="btn btn-warning btn-sm" @click="OpenDel_Del_Modal(item)">刪除</button>
                    </td>

                </tr>
            </tbody>
        </table>


        <!-- Pagination分頁元件； -->
        <!-- 使用:pagi_data接收當前的pagination資料 -->
        <!-- 使用emit；內層觸發外層getProducts -->
        <Pagination :pagi_data='pagination' v-on:emit_function="getProducts"></Pagination>


            


        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="image">輸入圖片網址</label>
                                    <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結"
                                        v-model="tempProduct.imageUrl">
                                </div>
                                <div class="form-group">
                                    <label for="customFile">或 上傳圖片
                                        <i class="fas fa-spinner fa-spin" v-if="status.fileUploading==true"></i>
                                        <i class="fas fa-circle-notch fa-spin" v-if="status.fileUploading==true"></i>
                                        <i class="fas fa-sync fa-spin" v-if="status.fileUploading==true"></i>
                                        <i class="fas fa-cog fa-spin" v-if="status.fileUploading==true"></i>
                                        <i class="fas fa-spinner fa-pulse" v-if="status.fileUploading==true"></i>
                                        <i class="fas fa-stroopwafel fa-spin" v-if="status.fileUploading==true"></i>
                                    </label>
                                    <input type="file" id="customFile" class="form-control" ref="files"
                                        @change="uploadFile">
                                </div>
                                <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                                    class="img-fluid" alt="PruductPhoto" :src="tempProduct.imageUrl">
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title" placeholder="請輸入標題"
                                        v-model="tempProduct.title">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                                            v-model="tempProduct.category">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input type="unit" class="form-control" id="unit" placeholder="請輸入單位"
                                            v-model="tempProduct.unit">
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price">原價</label>
                                        <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                                            v-model="tempProduct.origin_price">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">售價</label>
                                        <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                                            v-model="tempProduct.price">
                                    </div>
                                </div>
                                <hr>

                                <div class="form-group">
                                    <label for="description">產品描述</label>
                                    <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                                        v-model="tempProduct.description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="content">說明內容</label>
                                    <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                                        v-model="tempProduct.content"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="is_enabled"
                                            v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
                                        <label class="form-check-label" for="is_enabled">
                                            是否啟用
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="addProduct">確認</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete_Modal -->
        <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                        是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>


<script>

    // import $ from 'jquery';

import Pagination from '../Pagination';

    export default {
        components:{
            Pagination,
        },
        data() {
            return {
                StoreName: "JW_Cabinet",
                UserName: 'Jared_Huang',
                products: {},
                tempProduct: {},
                adding_item: false,
                isLoading: false, //全域loading

                status: { fileUploading: false, },

                pagination:{},
            }
        },
        methods: {
            getProducts(page=1) {
                // const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
                const vm = this;

                vm.isLoading = true; // 讀取效果控制 (資料進來前；顯示讀取)

                this.$http.get(api).then((response) => {

                    console.log(response.data);
                    vm.isLoading = false; // 讀取效果控制 (資料完成；不顯示讀取)

                    vm.products = response.data.products;

                    vm.pagination= response.data.pagination;
                    console.log(vm.pagination);


                })
            },

            OpenModal(isNew, item) {

                if (isNew) {
                    this.tempProduct = {};
                    this.adding_item = true;
                }
                else {
                    this.tempProduct = Object.assign({}, item);
                    this.adding_item = false;
                }
                $('#productModal').modal('show');


            },
            OpenDel_Del_Modal(item) {
                this.tempProduct = Object.assign({}, item);
                $('#delProductModal').modal('show');

            },

            addProduct() {

                let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
                let httpMethod = 'post'
                const vm = this;

                if (!vm.adding_item) {

                    api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                    httpMethod = 'put';

                }


                this.$http[httpMethod](api, { "data": vm.tempProduct }).then((response) => {
                    if (response.data.success) {
                        $('#productModal').modal('hide');
                        vm.getProducts();
                    }
                    else {
                        $('#productModal').modal('hide');
                        vm.getProducts();
                        console.log('failed to update');
                        alert('新增失敗');
                    }
                })
            },

            delProduct() {
                const vm = this;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${this.tempProduct.id}`

                this.$http.delete(api).then((response) => {
                    if (response.data.success) {
                        this.getProducts();
                        $('#delProductModal').modal('hide');
                    }
                })

            },
            uploadFile() {
                console.log(this);
                const uploadFile = this.$refs.files.files[0];
                const vm = this;

                const formData = new FormData();
                formData.append('file-to-upload', uploadFile);

                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;

                vm.status.fileUploading = true; //局部讀取控制(顯示)


                this.$http.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {

                    vm.status.fileUploading = false;  //局部讀取控制(隱藏)

                    console.log(response.data);
                    if (response.data.success) {

                        vm.tempProduct.imageUrl = response.data.imageUrl;
                        // console.log(vm.tempProduct); 

                        //欄位如果沒有雙向綁定、則使用強制寫入；如下
                        // vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
                    }
                    else{
                        this.$bus.$emit('message:push', response.data.message, 'danger') //event bus的使用方法；如果新增失敗 則顯示
                    }
                })


            },
        },



        created() {
            this.getProducts()

            this.$bus.$emit('message:push', 'Good day !', 'info') //event bus的使用方法；載入alert元件後；可將這段用於任何要顯示的地方。
        },

    }
</script>