<template>
    <div id="comesoon">
        <div class="wantest">
            <p>近期最受期待</p>
            <div class="movie-lunbo">
                <ul>
                    <li class="itemlunbo" v-for="(item,ind) in comelist" :key='ind'>
                        <div class="img-bg">
                            <img :src="item.img | newimg" alt="">
                            <div class="cheart">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                            </div>
                            <div class="bgcover">
                                <span>{{item.wish}}人想看</span>
                            </div>
                        </div>
                        <h5>{{item.nm}}</h5>
                        <div class="date">{{item.comingTitle}}</div>
                    </li>
                </ul>
            </div>
        </div>
       
    </div>
</template>
<script>

export default {
    data(){
        return{
            comelist:[]
        }
    },
    filters:{
        newimg(v){
            let str = 'https:'+v.split(':')[1]
            let str2 = str.replace(/(w\.h)/g,'170.230')
            return str2
        }
    },
        beforeRouteEnter (to, from, next) {
            next((vm)=>{
                
                vm.$store.commit('getComing')
            })
        },
        mounted(){
            this.comelist = this.$store.state.coming.coming
        }
}
</script>
<style lang='scss'>
#comesoon{
    padding-top: 8rem;
    padding-bottom: 4.8rem;
    overflow: hidden;
    ul{
        width: 100rem;
        overflow: hidden;
        
    }
    .itemlunbo{
            width:8rem;
            float: left;
            margin-right: 10px;
            h5{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin: 0 0 3px;
                font-size: 13px;
                color: #222;
            }
            .date{
                margin: 0;
                font-size: 12px;
                color: #999;
            }
            }
    .wantest{
        margin:1.2rem;
        overflow: hidden;
        p{
                margin: 0 0 12px;
                font-size: 1.4rem;
                color: #333;
        }
        
        }
        .img-bg{
                width: 8rem;
                height: 10rem;
                position: relative;
                margin-bottom: 6px;
                img{
                    width: 100%;
                    display: block;
                    height: 100%;
                }
                .cheart{
                    width: 28px;
                    line-height: 28px;
                    background: rgba(61,63,71,.6);
                    text-align: center;
                    border-bottom-right-radius: 10px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    i{
                        color:white;
                    }
                }
                .bgcover{
                        display: inline-block;
                        width: 100%;
                        height: 35px;
                        position: absolute;
                        bottom: 0;
                        background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
                        text-align: center;
                        span{
                                position: absolute;
                                left: 0;
                                bottom: 2px;
                                color: #faaf00;
                                font-size: 11px;
                                font-weight: 600;
                                width: 100%;
                        }

                }
        }
    }

</style>
