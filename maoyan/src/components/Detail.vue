<template>
    <div id="detail">
        <div class="mname">
            {{item.nm}}
            <i class="fa fa-undo" aria-hidden="true" @click="goback"></i>
        </div>
        <div class="movie-detail">
            <div class="movie-filter"></div>
            <div class="movie-content">
                <div class="movie-img">
                    <img :src="item.img | ret" alt="">
                </div>
                <div class="content-right">
                    <div class="movie_title">{{item.nm}}</div>
                    <div class="english">{{item.enm}}</div>
                    <div class="wantto">{{item.wish}}人想看</div>
                    <div class="movietype">{{item.cat}}</div>
                    <div class="country"><span>{{item.fra}}</span>/<span>{{item.dur}}</span>分钟</div>
                    <div class="playtime">{{item.pubDesc}}</div>
                </div>
            </div>
            <div class="next"> > </div> 
        </div>


        <div class="datelist">
           <ul>
               <li @click='getNew'>今天{{m}}月{{d}}日</li>
               <li @click='getNew'>明天{{m}}月{{d+1}}日</li>
               <li @click='getNew'>后天{{m}}月{{d+2}}日</li>              
           </ul>
        </div>
        <div class="citytese">
            <div class="city-item">城市<span class="drop"></span></div>
            <div class="city-item">品牌<span class="drop"></span> </div>
            <div class="city-item">特色<span class="drop"></span></div>
        </div> 
        <Zujian></Zujian>       
    </div>
</template>
<script>
import Zujian from './Zujian.vue'
export default {
    components:{
        Zujian
    },
    methods:{
        getM(){
                let aid = this.$route.params.id
                
                
                
                let url = '/anhao/ajax/detailmovie?movieId='+aid
                this.$http.get(url).then((res)=>{
                    this.item = res.data.detailMovie
                })
        },
        goback(){
            this.$router.back(-1)
        },
        getNew(){
            this.$store.commit('tomorrow',this.$route.params.id)
            
        }              
    },
    data(){
        return{
            item:'',
            id:'',
            m:new Date().getMonth()+1,
            d:new Date().getDate()
        }
    },
    created(){
        this.getM()
       
        
    },
    mounted(){
        
        
    },
    updated(){
        this.$store.commit('getCinema',this.$route.params.id)
    },
    filters:{
        ret(val){
            if(val){
                let str = val.split(':')
                
                 str = str[1]
                let str2 = str.replace(/(w\.h)/g,'148.208')
                return str2
            }
            
        }
    }
}
</script>
<style lang='scss'>
    .citytese{
        width: 100%;
        height: 4rem;
        display: flex;
        border-bottom: 1px solid gray;
        border-top: 1px solid gray;
        .city-item{
                flex: 1;
                text-align: center;
                line-height: 4rem;
                position: relative;
                white-space: nowrap;
                overflow: hidden;
                font-size: 13px;
                text-overflow: ellipsis;
                .drop{
                        display: inline-block;
                        position: absolute;
                        top: 18px;
                        width: 0;
                        height: 0;
                        margin-left: 4px;
                        border: 4px solid transparent;
                        border-top-color: #b0b0b0;
                }
        }
    }
    .mname{
       text-align: center;
            font-size: 2rem;
            background: #f03d37;
            height: 4rem;
            line-height: 4rem;
            color:#fff;
            width: 100%;
            position: relative;
            .fa-undo{
                position:absolute;
                left: 1rem;
                top:1rem;
                font-size: 2.5rem;
            }
    }
    .movie-detail{
        height:18rem;
        width: 100%;
        position:relative;
        
        .next{
            position: absolute;
            right: 1rem;
            top:6rem;
            font-size: 3rem;
            color:white;
            opacity: 0.8;
        }
        .movie-filter{
            width: 100%;
            height: 100%;
            position: absolute;
            background:black;
            opacity: 0.8;
            z-index: -10;
        }
        .movie-content{
            z-index: 10;
            display: flex;
            
            padding-top: 2rem;
            .movie-img{
                margin-left: 1rem;
                img{
                    width: 10rem;
                    height: 14rem;
                }
            }
            .content-right{
                color:white;
                margin-left: 1rem;
                .movie_title{
                        font-size: 1.8rem;
                        font-weight: 700;
                        overflow: hidden
                }
                .english{
                    margin-top: 0.8rem;
                    font-size: 1rem;
                    opacity: .8;
                                       
                }
                .wantto{
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: #fc0;
                        margin-top:1rem;
                }
                .movietype,.country,.playtime{
                    margin-top: 1rem;
                    font-size: 1rem;
                    color: #fff;
                    opacity: .8;
                }
                
            }
        }
        
        
            
    }
    .datelist{
        width: 100%;
        ul{
            overflow: hidden;
            li{
            float: left;
            position: relative;
            display: inline-block;
            width: 115px;
            line-height: 43px;
            margin-left: 4.5px;
            font-size: 14px;
            text-align: center;
            list-style: none;
            border-bottom: 2px solid #f03d37;
            color: #f03d37;
        }
    }        
    }  
        
    
</style>
