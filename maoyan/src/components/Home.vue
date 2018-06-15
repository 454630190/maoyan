<template>
  <div id="home">
    <router-view></router-view>
     <div id="footer">
       <div class="flexa">
       <router-link to='/movie'>
            <i class="fa fa-film" aria-hidden="true"></i>
            <p>电影</p>
       </router-link>
       </div>
      <div class="flexa">
       <router-link to='/cinema'>
            <i class="fa fa-window-maximize" aria-hidden="true"></i> 
            <p>影院</p>
       </router-link>
       </div>
       <div class="flexa">
       <router-link to='self'>
            <i class="fa fa-user" aria-hidden="true"></i>
            <p>个人</p>
       </router-link>
       </div>
       
     </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='scss'>
 .router-link-active{
  color:red
}
#footer{
  width:100%;
  border-top:1px solid gray;
 position:fixed;
  display: flex;
  justify-content: space-between;
  height:4.8rem;
  bottom:0;
  background: white;
  .flexa{
    flex:1;
    text-align: center;
    i{
      margin-top: 1rem;
      font-size: 2rem
    }   
}
   
  }


</style>
