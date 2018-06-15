<template>
    <div id="city">
        
    <div class="cityaa">
        
    <mt-index-list >
        <div>
            <div class="locacity">定位城市</div>
            <div class="cityerr"><span>北京</span></div>
            <div class="locacity">热门城市</div>
            <div class="hotcity">
                <div class="city-item">
                        上海
                </div>
                <div class="city-item">北京</div>
                <div class="city-item">深圳</div>
                <div class="city-item">杭州</div>
                <div class="city-item">武汉</div>
                <div class="city-item">南京</div>
                <div class="city-item">江西</div>
            </div>
        </div>
           <div v-for='(item,ind) in clist' :key='ind'>
            <mt-index-section :index="item.initial" >   
             <div v-for='(a,i) in item.list' :key='i'>
            <mt-cell :title="a.name"></mt-cell>
            </div> 
             </mt-index-section>
  </div>
    </mt-index-list>
    </div>
    </div>
</template>

<script>
import Citylist from '../assets/city.json';
export default {
    created(){
             this.clist = Citylist   
             console.log(Citylist)
    },
    data(){
        return{
            clist:[],
            abc:[]
        }
    },
    methods:{
      
    },
   
}
</script>
<style lang='scss'>
#city{
    background: #ebebeb;
    .locacity{
        line-height: 3rem;
        padding-left: 1.5rem;
    }
    .hotcity{
        background-color: #f5f5f5;
         margin-bottom: 1rem;
         padding-bottom: 1rem;    
         height: 12rem;
         overflow: hidden;
    }
    .city-item{
        float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
    .cityerr{
        padding-left: 1.5rem;
        line-height: 4rem;
        background:#f5f5f5;
        span{
            background:white;
            font-size: 1rem;
            padding:0.5rem  1rem;
            border: 1px solid #e6e6e6;
        }
    }
}
    .mint-indexsection{
        padding-left: 1rem;
    }
    .mint-indexlist-nav{
        background: #ebebeb;
    }
</style>

