<template>
    <div class="hello bg-light">


        <!-- 讀取效果元件 -->
        <loading :active.sync="isLoading">
        </loading>

        <!-- 首頁NavBar元件 -->
        <div class="sticky-top">
            <Index_Navbar></Index_Navbar>
        </div>



        <!-- Alert彈出警示 -->
        <Alert />


        <!-- 滑回去 -->
        <div id="slider" v-show='scroller > 300'>up</div>


        <!-- 首頁上方大圖示 -->
        <section class="container-fluid mb-3">
            <div class="row index_jumbo_image bg-cover">
                <div class="d-flex align-items-end">
                    <div class="p-7">
                        <div class="bg-lighter p-5 text-white">

                            <div class="d-none d-md-block">
                                <span class="h2 p-1">一杯香醇威士忌</span>
                                <span class="h2 p-1">一趟豐富的旅程</span>
                                <span class="h2 p-1">一段動人的旋律</span>
                            </div>

                            <div class="d-md-none">
                                <p class="h6 p-1">一杯香醇威士忌</p>
                                <p class="h6 p-1">一趟豐富的旅程</p>
                                <p class="h6 p-1">一段動人的旋律</p>
                            </div>

                            <hr>

                            <p class="h4 p-1 mb-0 d-none d-md-block">這就是生活</p>
                            <p class="h4 p-1 mb-0 d-none d-md-block">What Else ?</p>

                            <p class="h6 p-1 mb-0 d-md-none">這就是生活</p>
                            <p class="h6 p-1 mb-0 d-md-none">What Else ?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 服務區 -->
        <section class="mb-5">
            <div class="container">

                <h3 class="text-barMain font-weight-bold">服務專區</h3>

                <hr>

                <div class="row no-gutters justify-content-between">

                    <router-link style="height: 320px; position: relative; overflow:hidden; text-decoration:none;"
                        class="col-4 d-flex justify-content-center align-items-center" to="/whiskey">

                        <div class="services_photo_1 serviceRec bg-cover">
                        </div>
                        <span class="h2 text-white writting-vertical" style="z-index: 1;">酒精</span>


                    </router-link>

                    <router-link style="height: 320px; position: relative; overflow:hidden; text-decoration:none"
                        class="col-4 d-flex justify-content-center align-items-center" to="/travel">

                        <div class="services_photo_2 serviceRec bg-cover">
                        </div>

                        <span class="h2 text-white writting-vertical" style="z-index: 1;">旅遊</span>

                    </router-link>

                    <router-link style="height: 320px; position: relative; overflow:hidden; text-decoration:none"
                        class="col-4 d-flex justify-content-center align-items-center" to="/party">

                        <div class="services_photo_3 serviceRec bg-cover">
                        </div>

                        <span class="h2 text-white writting-vertical" style="z-index: 1;">派對</span>

                    </router-link>

                </div>

            </div>
        </section>

        <!-- 最新消息News -->
        <section class="mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <h3 class="text-barMain font-weight-bold">最新消息</h3>
                        <ul class="list-group" style='list-style: none'>

                            <li class="border-bottom h6 pb-1 pt-3">
                                <span class="text-danger">2021/03/01</span>
                                <span>店長當月壽星，邀請大家喝起來，下單即享20%優惠，折扣碼: <span class="text-success">drinkingUp</span>。</span>
                            </li>

                            <li class="border-bottom h6 pb-1 pt-3">
                                <span class="text-danger">2021/02/14</span>
                                <span>傑瑞酒業祝您牛年行大運，提醒各位春節期間，理性飲酒。</span>
                            </li>

                            <li class="border-bottom h6 pb-1 pt-3">
                                <span class="text-danger">2021/02/10</span>
                                <span>國際疫苗進入大量接踵階段，今年有望開放旅遊服務，行程規劃中，敬請期待。</span>
                            </li>

                            <li class="border-bottom h6 pb-1 pt-3">
                                <span class="text-danger">2021/01/15</span>
                                <span>泥煤品酩會，2021/ 05/ 30，舉辦於高雄 Roxanne's Bar，即日起開放報名。</span>
                            </li>

                            <li class="border-bottom h6 pb-1 pt-3">
                                <span class="text-danger">2020/03/15</span>
                                <span>因應疫情關係，旅遊服務暫停服務。</span>
                            </li>

                        </ul>

                    </div>
                    <div class="col-6">

                    </div>
                </div>
            </div>
        </section>

        <!-- 本周專欄-->
        <section class="mb-5 bg-barSecond">
            <div class="container p-3">

                <div class="row justify-content-center">
                    <h3 class="text-light font-weight-bold p-3">本週專欄</h3>
                </div>

                <div class="row">
                    <div class="col-md-3 paper_photo bg-cover" style="min-height: 200px">

                    </div>

                    <div class="col-md-9">


                        <h5 class="text-light font-weight-bold p-3">你知道嗎? 威士忌投資成長驚人，十年增值六倍 威士忌投資成長驚人!</h5>

                        <p class="text-light px-3">
                            根據英國萊坊於2019年3月公布的奢侈品投資指數(Knight Frank Luxury Investment Index,KFLII)，
                            在富豪階層眾多投資標的中，珍稀威士忌是潛在回報最高的奢侈品資產，
                            其價值在過去一年增長了40%，更在過去十年增長了582%，漲幅將近6倍！遠遠高於位居第二名的老爺車，一舉成為投資人財富加值的新興投資工具。
                        </p>


                        <h5 class="text-white font-weight-bold p-3">投資珍稀威士忌要素</h5>
                        <ul>
                            <li class="p-1 text-light">
                                <span class="font-weight-bold text-light">知名品牌:</span>
                                <p>選擇知名酒廠推出的酒款，大型酒廠品質通常較為穩定，且更容易擁有死忠的固定藏家。</p>

                            </li>
                            <li class="p-1 text-light">
                                <span class="font-weight-bold text-light">稀有性:</span>
                                <p>年份越高的威士忌越少見，可選擇陳桶年份為25年以上，每批產量低於4,000瓶更好，而限量版的威士忌更是藏家追逐的標的。</p>
                            </li>
                            <li class="p-1 text-light">
                                <span class="font-weight-bold text-light">口感佳:</span>
                                <p>頂級藏家蒐羅後，總有開瓶品酩的一天，好喝的威士忌絕對是投資一大重點，國內外知名品酒人評論是參考重點。</p>
                            </li>
                            <li class="p-1 text-light">
                                <span class="font-weight-bold text-light">故事性:</span>
                                <p>酒款如具歷史意義或話題性的，更能展現其獨特性，也容易有較佳的市場表現。</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </section>

        <!-- Quote -->
        <section class="mb-5">
            <div class="container d-md-none">
                <div
                    class="row justify-content-center flex-column align-items-center h3 py-3 text-barMain font-weight-bold">
                    <div>本周推薦</div>
                </div>
            </div>

            <div class="container d-flex justify-content-center">
                <div
                    class="row flex-column align-items-center h3 writting-vertical d-none d-md-block text-barMain font-weight-bold">
                    <div>本周推薦</div>
                </div>
            </div>
        </section>

        <!-- 本日精選區域 -->
        <section class="mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="bg-cover today_photo_1" style="position:relative ;height: 315px">
                                <div class="item-tag">
                                    本日精選
                                </div>
                                <div class="item-heart">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <div style='min-height: 80px;'
                                class="font-weight-bold d-flex text-center align-items-center">
                                <div class="col p-3 border-right">Glendronach 21y</div>
                                <div class="col p-3"> NT$4,050</div>
                            </div>
                            <button class="h6 mb-0 border-0 card-footer text-center bg-barSecond text-white"
                                @click="addtoCart('-MUPNXzkaAkFFuTo3SRu')">
                                加入購物車
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="bg-cover today_photo_2" style="position:relative ;height: 315px;">
                                <div class="item-tag">
                                    本日精選
                                </div>
                                <div class="item-heart">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <div style='min-height: 80px;'
                                class="font-weight-bold d-flex text-center align-items-center">
                                <div class="col p-3 border-right">Aberlour A'bunadh</div>
                                <div class="col p-3"> NT$1,600</div>
                            </div>
                            <button class="h6 mb-0 border-0 card-footer text-center bg-barSecond text-white"
                                @click="addtoCart('-MUPP9eGnzcED9Bo-sho')">
                                加入購物車
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="bg-cover today_photo_3" style="position:relative ;height: 315px;">
                                <div class="item-tag">
                                    本日精選
                                </div>
                                <div class="item-heart">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <div style='min-height: 80px;'
                                class="font-weight-bold d-flex text-center align-items-center">
                                <div class="col p-3 border-right">GLENDRONACH Kingsman Edition</div>
                                <div class="col p-3"> NT$45,000</div>
                            </div>
                            <button class="h6 mb-0 border-0 card-footer text-center bg-barSecond text-white"
                                @click="addtoCart('-MUDP2aSTsY5UQ1YGDbz')">
                                加入購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer元件-->
        <Index_Footer />

    </div>
</template>

<script>

    import Index_Navbar from './Index_Navbar';
    import Index_Footer from './Index_Footer';
    import Alert from './AlertMessage';// Alert Message

    export default {
        name: 'index',
        components: {
            Index_Navbar,
            Index_Footer,
            Alert
        },
        data() {
            return {
                scroller:''
            }
        },

        // 使用computed獲取Vuex中的資料
        computed: {
            isLoading() {
                return this.$store.state.isLoading;
            },
        },

        methods: {
            // 登出
            signout() {
                const api = `${process.env.APIPATH}/logout`;
                const vm = this;

                this.$http.post(api).then((response) => {
                    console.log(response.data);
                    vm.$router.push('/login')
                })

            },
            // 加入購物車
            addtoCart(id, qty = 1) {
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
                const vm = this;

                this.$store.dispatch('updateLoading', true);

                // 加入購物車所需丟入的資料結構。
                const addingItem = {
                    product_id: id,
                    qty: qty,
                };

                this.$http.post(api, { data: addingItem }).then((response) => {
                    console.log(response.data);


                    // 註冊event bus事件、在此頁面點擊、並NavBar接收與觸發。
                    vm.$bus.$emit('shopCart:update');

                    // Alert提示訊息彈出
                    this.$bus.$emit('message:push', '已加入購物車', 'success')


                    //關掉modal、首頁用不到。 
                    // $('#productModal').modal('hide')

                    // 讀取消失
                    // vm.isLoading = false;
                    // this.$store.state.isLoading = false;

                    this.$store.dispatch('updateLoading', false);
                })
            },
            getScroller(){
                this.scroller = document.body.scrollTop || document.documentElement.scrollTop;
            },
        },
        mounted() {

            // 把button監聽click事件、卷軸滾動最上方。
            let oBtn = document.getElementById('slider');
            oBtn.addEventListener('click', function (e) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // 卷軸滾動添加事件。
            let vm = this;
            window.onscroll = function(){              
                vm.getScroller()
            }

        },
    }



</script>



<style lang="scss">
    .index_jumbo_image {
        height: 770px;
        background-image: url('../assets/image/index_jumbo.jpg');

    }

    .services_photo_1 {
        background-image: url('../assets/image/service_wine.jpg');
    }

    .services_photo_2 {
        background-image: url('../assets/image/service_travel.jpg');
    }

    .services_photo_3 {
        background-image: url('../assets/image/service_dj_aly.jpg');
    }

    .paper_photo {
        background-image: url('../assets/image/whiskey_invest.jpg');
    }

    /* 本日精選三張照片 */
    .today_photo_1 {
        background-image: url("../assets/image/product_2.jpg");
    }

    .today_photo_2 {
        background-image: url("../assets/image/product_5.jpg");
    }

    .today_photo_3 {
        background-image: url("../assets/image/product_king.jpg");
    }

    #slider {
        width: 50px;
        height: 50px;
        background-color:blue;
        position: fixed;
        bottom: 100px;
        right: 100px;
        z-index: 99;
    }
</style>