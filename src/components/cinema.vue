<template>
<div id="cinema">
    <Header>影院</Header>
    <div id="nav">
      <div id="city">
        <span>北京</span>
        <i></i>
      </div>
      <div id="nav_input">
        <img src="../assets/magnify.png">
        <span>搜影院</span>
      </div>
    </div>
    <div id="box">
      <div id="nav_wrap">
        <div id="nav_fliter_wrap">
        </div>
        <div id="item">
          全城
          <span></span>
        </div>
        <div id="item">
          品牌
          <span></span>
        </div>
        <div id="item">
          特色
          <span></span>
        </div>
      </div>
      <ul id="list_warp" >
        <!-- to路由上传参 -->
        <router-link id="items" 
            v-for="(data,ind) in list" 
            :key="ind" 
            :to="'/dateils/'+data.id" 
            tag="li"
            @click="go"
            >
            <div id="box_flex">
                    <div class="title_block" >
                        <div class="title_line">
                            <span>{{data.nm}}</span>
                            <span class="price_block">
                                <span class="price">{{data.sellPrice}}</span>
                                <span class="q">元起</span>
                            </span>
                    </div>
                    <div class="location_block">
                        <div class="line_ellipsis">{{data.addr}}</div>
                        <div class="distance">{{data.distance}}</div>
                    </div>
                    <div class="label_block">
                        <div class="hallType" v-if="data.tag.allowRefund">退</div>
                        <div class="hallType" v-if="data.tag.endorse">改签</div>
                        <div class="snack" v-if="data.tag.snack">小吃</div>
                        <div class="vipTag" v-if="data.tag.vipTag">{{data.tag.vipTag}}</div>
                        <div class="hallType" v-if="data.tag.hallType">{{data.tag.hallType[0]}}</div>
                    </div>
                    <div class="discount_block">
                    <div v-if="data.promotion.cardPromotionTag">
                        <div class="discount_label">
                            <img src="../assets/vipTag.png">
                        </div>
                        <div class="discount_label_text">{{data.promotion.cardPromotionTag}}</div>
                    </div>
                </div>
                <div class="border"></div>
                </div>
            </div>
        </router-link>
        
      </ul>
    </div>
</div>
</template>

<script>
import Header from './Header';
export default {
    name: 'Cinema',
    components:{
        Header,
    },
    data(){
        return {
            list:[]
        }
    },
    methods:{
        go(){
            this.$router.push({path: '/dateils/',query:{id :this.id}})
        }
    },
    mounted(){
        let url = "/sexLady/ajax/cinemaList?day=2018-06-12&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1528771478156&cityId=1";
        this.$http.get(url).then((res)=>{
            this.list = res.data.cinemas;   
            for(let i=0;i<this.list.length; i++){
                // console.log( this.list[i].id);
                this.id= this.list[i];
            }   
            // this.id = "";
            // console.log(this.list)  
        })          
    }
};
</script>
<style>
#nav {
    font-size: 14px;
    background: #f5f5f5;
    color: #777;
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;
}
#nav #city {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: flex;
    align-items: center;
}
#nav #city span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
    max-width: 19.2vw;
}
#nav #city i {
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
}
#nav #nav_input {
    flex-grow: 1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    font-size: 13px;
    color: #b2b2b2;
    margin-left: 18px;
    border: 0.5px solid #e6e6e6;
    border-radius: 5px;
    margin-right: 15px;
}
#nav #nav_input img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
}
#box {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
}
#nav_wrap {
    display: flex;
    width: 100%;
    height: 40px;
    z-index: 10;
    background-color: #fff;
}
#nav_wrap #item {
    flex: 1;
    color: #777;
    text-align: center;
    line-height: 40px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    text-overflow: ellipsis;
}
#nav_wrap span {
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-top-color: #b0b0b0;
}
/* ul */
#list_warp {
    box-sizing: border-box;
    margin-top: 0px;
    padding-right: 15px;
    min-height: 401.333px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 40px;
}
/* li */
#items { 
    padding: 13px 11px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
}
#list_warp #box_flex{
    display: block;
    width: 100%;
}
.border{
    width: 100%;
    border-bottom: 1px #eee solid;
}
/* 第一层 */
#title_line{
    width: 100%;
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
#title_line .price-block {
    padding-top: 9px 0 0 3px;
}
.price{
    font-size: 18px; 
    color: #f03d37;
}
.q{
    font-size: 11px;
    color: #f03d37;
}
/* 第二层 */
.location_block {
    height: 19px;
    width: 100%;
    overflow: hidden;
    margin-top: 6px;
    font-size: 13px;
    color: #666;
    line-height: 1.5;
    display: flex;
    position: relative;
}
.line_ellipsis{
    width: 264.8px;
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
}
.distance{
    margin-left: 5px;
    position: absolute;
    right: 0;
}
/* 第三层 */
#box_flex .label_block {
    width: 100%;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    flex-shrink: 0;
    font-size: 12px;
}
#box_flex div{
    display: inline-block;
    border-radius: 2px;
    padding: 0 3px;
    line-height: 15px;
}
#box_flex .snack,.vipTag{
    color: #f90;
    border: 1px solid #f90;
}
#box_flex .hallType{
    color: #589daf;
    border: 1px solid #589daf;
}
#box_flex discount_block{
    width: 100%;
}
#box_flex .discount_label{
    width: 15px;
    height: 14px;
    position: relative;
    top: 3px;
    display: inline-flex;
    margin-left: 0;
}
#box_flex .discount_label img{
    display: block;
    width: 100%;
    border: 0px;
}
#box_flex .discount_label_text {
    margin-left: 0;
    font-size: 11px;
    display: inline-block;
    color: #999;
}
</style>
