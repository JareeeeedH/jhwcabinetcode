<template>
  <div>
    <div id='bg'>
    </div>
    <div>
      <form class="form-signin" @submit.prevent="signin">
        <!-- <img class="mb-4" src="@/assets/image/jia.jpg" alt="" width="" height=""> -->
        <h1 class="h3 mb-3 font-weight-normal text-center">管理登入</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="user.username">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="user.password">
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-barMain btn-block" type="submit">登入</button>
        <router-link class="btn btn-lg btn-barMain btn-block" type="submit" to="/index">前往首頁</router-link>
      </form>
      <h5 class="mt-5 mb-3 copyright"> &copy; 2021 Jared's Whiskey Cabinet</h5>
      <h5 class="mt-5 mb-3 email"> e-mail: jared_cabinet@gmail.com</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      user: {
        username:'',
        password:'',
      }
    }
  },

  methods:{
    signin(){
  
    const api = `https://vue-course-api.hexschool.io/admin/signin`;

    const vm= this;

    this.$http.post(api, vm.user).then((response) => {

      console.log('登入結果:',response.data)

      if(response.data.success==true){


        ///
        // 抓出 cookie資料
        const token= response.data.token;
        const expired= response.data.expired;
        console.log(token, expired);
        // 寫入cookie
        document.cookie = `hexToken=${token}; expires=${new Date(expired)};`; 
        ///

        vm.$router.push('/admin/products')
        

      }


      })
    },
  },
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

#bg{
  position:absolute;
  height: 100vh;
  width: 100vw;
  background-image: url('../../assets/image/login_bg.jpg');
  z-index: -1;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
}

.copyright{
  position: absolute;
  bottom: 100px;
  text-align: center;
  color: white;
}

.email{
  position: absolute;
  bottom: 70px;
  text-align: center;
  color: white;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>