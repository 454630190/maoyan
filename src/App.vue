<template>
  <div id="app">
    <!-- <footer id="footer">
      <router-link v-for="(dt,inx) in linkArr " :key="inx" to="dt.path" tag="div">
          <i class="{{dt.cla}}"></i>
          <p>{{dt.title}}</p>
      </router-link>
      <router-view></router-view>
    </footer> -->
    <footer id="footer">
      <div>
        <router-link to="/movie">
          <i class="fa fa-film" aria-hidden="true"></i>
          <p>电影</p>
        </router-link>
      </div>
      <div>
        <router-link to="/cinema">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <p>影院</p>
        </router-link>
      </div>
      
      <div>
        <router-link to="/user">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <p>我的</p>
        </router-link>
      </div>
      
    </footer>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      linkArr:[
        {
          path:"/movie",
          cla:"fa fa-film",
          title:"电影",
        },
        {
          path:"/cinema",
          cla:"fa fa-envelope-o",
          title:"影院",
        },
        {
          path:"/user",
          cla:"fa fa-user-o",
          title:"我的",
        },
      ]
    };
  }
};
</script>

<style>
#footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 48.5px;
    z-index: 20;
    background: #fff;
    border-top: 0.5px solid #d8d8d8;
    display: flex;
    justify-content: space-around;
}
#footer div {
  height: 48px;
  line-height: 48px;
  box-sizing: border-box;
  color: #f03d37;
  text-align: center;
  flex: 1;
  position: relative;
}
#footer .fa {
  font-size: 20px;
  margin-top: 10px;
  color: #696969;
}
#footer p {
  line-height: 12px;
  position: absolute;
  top: 33px;
  left: 0;
  right: 0;
  font-size: 10px;
  color: #696969;
}
.active {
  color: #f03d37;
}

</style>
