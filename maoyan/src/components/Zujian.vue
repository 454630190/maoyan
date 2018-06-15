<template>
    <div id="zujian" >
        <ul v-if='lists.length'>
         <li v-for='(item,i) in lists' :key='i'>
        <div class="title-block">
            <span class="">{{item.nm}}</span><span class="price">{{item.sellPrice}}</span><span class="q">元起</span>
        </div>
        <div class="location-movie"><span>{{item.addr}}</span><span>{{item.distance}}</span></div>
        <div class="label-block">
            <span class="snack" >小吃</span>
            <span class="vip">折扣卡</span>
            <span class="hall" v-if='item.tag.hallTypeVOList.length'>{{item.tag.hallTypeVOList[0].name}}</span>
            </div>
        <div>
            <div class="normal-card"><img src="../../static/下载.png" alt=""></div>
            <div class="label-text">开卡特惠,首单2张减16元</div>
        </div>
        <div class="latest-play">近期场次:19:00|21:45</div>
        </li>
        </ul>
        <ul v-else class="loadingul">
            <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
        </ul>
    </div> 
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: 'Zujian',
    data(){
        return{
            lists:[]
        }
    },
    mounted(){
        
        setTimeout(()=>{
            this.lists = this.cinemas
            
        },3000)
    },
    computed:{
        ...mapState(['cinemas'])
    },
    updated(){
        
         setTimeout(()=>{
            this.lists = this.cinemas
            
        },3000)
    }
    
};
</script>
<style lang='scss'>
    .loadingul{
        text-align: center;
        font-size: 5rem;
    }
    .title-block{
        height: 2rem;
        line-height: 2rem;
        font-size: 1.6rem;
        color: #000;
        .price{
                color: #f03d37;
                font-size: 1.8rem;
                margin-left:8px;
        }
        .q{
            font-size: 1rem;
            color: #f03d37;
        }
    }
    .location-movie{
        margin-top: 6px;
        font-size: 1.3rem;
        color: #666;
        display: flex;
        justify-content: space-between;
    }
    .label-block{
            height: 1.7rem;
            line-height: 1.7rem;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            font-size: 0;
            flex-shrink: 0;
            span{
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: 1.5rem;
                line-height: 1.5rem;
                border-radius: 2px;
                font-size: .6rem;
                color: #f90;
                border: 1px solid #f90;
                margin-right: 5px;
            }
            .hall{
                color: #589daf;
                border: 1px solid #589daf;
            }
    }
    .normal-card{
        width: 1.5rem;
        height: 1.4rem;
        position: relative;
        top: 3px;
        display: inline-flex;
        img{
            width: 100%;
            display: block;
        }
    }
    .label-text{
        margin-left: 0;
        font-size: 1rem;
        display:inline-block;
        color:#999;
    }
    .latest-play{
        padding: 0 15px 0 0;
        margin-right: -15px;
        line-height: 1.5;
        font-size: 1rem;
        color:#999;
        margin-top: 5px;
    }
    #zujian{
        padding:0 1rem 0 1rem;
        margin-bottom: 1.5rem;
        margin-top: 1.5rem;
    }
</style>

