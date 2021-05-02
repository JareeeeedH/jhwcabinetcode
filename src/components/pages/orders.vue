<template>
    <div>

        <!-- 插入loading元件、  isLoading變數控制是否執行-->
        <loading :active.sync="isLoading">
        </loading>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" width="20">#</th>
                    <th scope="col">日期</th>
                    <th scope="col">產品</th>
                    <th scope="col">訂購人資訊</th>
                    <th scope="col" width="80">完成付款</th>
                    <th scope="col" width="100">金額</th>
                    <th scope="col">備註</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orders">

                    <th scope="row">{{item.num}}</th>

                    <td>{{item.create_at | date}}</td>

                    <td>
                        <ul>
                            <li v-for='each_product in item.products'>
                                {{each_product.product.title}} {{each_product.qty}} {{each_product.product.unit}}
                            </li>
                        </ul>
                    </td>

                    <td>
                        <ul>
                            <li v-for='each_User in item.user'>
                                {{each_User}}
                            </li>
                        </ul>
                    </td>

                    <td class="text-center">
                        <span class="text-success" v-if="item.is_paid == true">是</span>
                        <span v-else>否</span>
                    </td>

                    <td>{{item.total}}</td>

                    <td>{{item.message}}</td>

                </tr>
            </tbody>
        </table>

        <nav aria-label="Page navigation example">
            <ul class="pagination">

                <li class="page-item">
                    <a class="page-link" href="#" @click="getOrders(pagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>

                <li :class="{active: page==pagination.current_page}" class="page-item" v-for="(page, index) in pagination.total_pages" :key=page>
                    <a class="page-link" href="#" @click="getOrders(page)">{{page}}</a>
                </li>
               
                <li class="page-item" @click="getOrders(pagination.current_page + 1)">
                    <a class="page-link" href="#">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>

            </ul>
        </nav>


    </div>
</template>


<script>

    import Pagination from '../Pagination';

    export default {
        data() {
            return {
                orders: {},
                isLoading: false, //全域loading
                pagination: {},
            }
        },
        methods: {
            getOrders(page = 1) {
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders?page=${page}}`;
                const vm = this;

                vm.isLoading = true; // 讀取效果控制 (資料進來前；顯示讀取)

                this.$http.get(api).then((response) => {

                    console.log(response.data);
                    vm.orders = response.data.orders;
                    vm.isLoading = false; // 讀取效果控制 (資料完成；不顯示讀取)

                    vm.pagination = response.data.pagination;

                })

            },
        },


        created() {
            this.getOrders();
            this.$bus.$emit('message:push', 'Message', 'info') //event bus的使用方法；可將這段用於任何要顯示的地方。
        },

    }
</script>