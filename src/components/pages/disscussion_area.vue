<template>
  <div>
    <h1>Social Area</h1>
    <div class="bg-dj"></div>
    <section>
      <div class="container">
          <div class="row">
              <div class="col-md-10">
                  <div class="card mt-3">
                      <h5 class="card-header">Discussion Area</h5>
                      <div class="card-body">
                        <div class="media mb-5">
                          <img class="mr-3" src="https://randomuser.me/api/portraits/lego/2.jpg" style="width:100px; height:100px">
                          <div class="media-body">
                            <h5 class="mt-0">Visitor</h5>
                            <div class="form-group">
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button class="btn btn-primary btn-block">Submit</button>
                          </div>
                        </div>
                        <hr>
                        <div class="media mb-5">
                          <img class="mr-3"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58v0I987OJ_ARiDP5rj0JwYBX0CE1ksJcpQ&usqp=CAU"
                            style="width:100px; height:100px">
                          <div class="media-body">
                            <h5 class="mt-0">Ovuvuevuwewewewe onyetenyevwe uvwewenum osas</h5>
                            Sheeko ayaan hayaa, khamri ma leedahay?
                          </div>
                        </div>
                        <div class="media mb-5">
                          <img class="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/80px-Elon_Musk_2015.jpg"
                            style="width:100px; height:100px">
                          <div class="media-body">
                            <h5 class="mt-0">Olun Master</h5>
                            hey Jared, can i get one more Kingsman from you?<br>
                            And When are you going to start your service of Traveling, I would like to join it !
                          </div>
                        </div>
                        <div class="media mb-5">
                          <img class="mr-3"
                            src="https://pbs.twimg.com/profile_images/1325900398809374720/nHzzt2jz_400x400.jpg"
                            style="width:100px; height:100px">
                          <div class="media-body">
                            <h5 class="mt-0">Xavier</h5>
                            hey Jared, OMG I got great time when i visited you bar last week.
                            But i'm so confused why did your bartendar and waiter asked me "Are you drunk" so many times,
                            I told them, no I'm Xavier! anyway, I will visit your bar again soon.
                          </div>
                        </div>
                        <div class="media mb-5">
                          <img class="mr-3"
                            src="data:image/jpeg;base64,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"
                            style="width:100px; height:100px">
                          <div class="media-body">
                            <h5 class="mt-0">天峰</h5>
                            偶這邊有一瓶 [輕井澤 · 藝妓系列 · 繁花之都]，0元起標，一刀兩百。<br>
                            得標者贈送牙控輝機一台。
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
          </div>
      </div>
    </section>
  </div>
  
</template>

<script>

</script>

<style>
/* .bg-dj{
  width: 800px;
  height: 200px;

  background-image: url('../../assets/image/lounge.jpg');
  background-position: center center;
  background-size: cover;

} */
</style>