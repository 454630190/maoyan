<template>
    <div id="onplay">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0">
            <li v-for='(item,key) in list' :key='key'>
                <router-link :to="'/detail/'+item.id" >
                <div class="item" @click="getLo(item.id)">
                    <div class="item-img">
                    <img :src="item.img | https" alt="">
                    </div>
                    
                    <div class="mright">
                        <div class="main">
                        <div class="mtitle">{{item.nm}}</div>
                        <div v-if='item.sc'>
                            <span class="people">观众评</span> 
                            <span class="score">{{item.sc}}</span>
                        </div>
                        <div v-else>
                            <span class="wish">{{item.wish}}</span><span>人想看</span>
                        </div>
                        <div class="actor">主演:{{item.star}}</div>
                        <div class="today">{{item.showInfo}}</div>
                    </div>
                     <div class="buy" v-if='item.sc'><span>购票</span></div>
                     <div class="willbuy" v-else><span>预售</span></div>                                      
                    </div>
                </div>
               </router-link>
            </li>
                
                                       
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            count:[],
            ind:12,
            
        }
    },
    methods:{
        getData(){
            let url = '/anhao/ajax/movieOnInfoList?token='
            this.$http.get(url).then((res)=>{
                
                   this.count = res.data.movieIds
                    let data = res.data.movieList
                    
                    this.list = data
            }).catch((err)=>{

            })
        },
        getLo(a){
            this.$store.commit('getCinema',a)
        },
        
        loadMore(){
            //console.log(this.count)
            this.loading = true;
           let arr = this.count.slice(this.ind,this.ind+10) 
           let str2 = arr.join('%2C') 
           let url = '/anhao/ajax/moreComingList?token=&movieIds='+str2
           this.$http.get(url).then((res)=>{
                let arr2 = res.data.coming;
                this.list = this.list.concat(arr2)
                this.ind = this.ind+10
           }).catch((err)=>{

           })

        }

    },
    mounted(){
        this.getData()
        
    },
    updated(){
        
    },
    filters:{
        https(value){
            
            let str = 'https:'+value.split(':')[1]
            let str2 = str.replace(/(w\.h)/g,'128.180')
            return str2
        }
    }
}
</script>
<style lang='scss'>
#onplay{
    padding-top: 8rem;
    padding-bottom: 4.8rem;
}
    .item{
        padding:0 1rem;
        overflow: hidden;
         
        .item-img{
            width: 7rem;
            height: 9rem;
            margin-right: 1.2rem;
            overflow: hidden;
            float: left;
            margin-top:1.5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .mright{
            
            display:flex;
            border-bottom: 1px solid gray;
          
            .main{
                width: 75%;
                margin-right: 1rem;
               
           
            }
            
        }
       .mtitle{
           font-size:1.8rem;
           font-weight: 900;
           color:#333;
           margin-bottom: 0.7rem;
           margin-top: 1.5rem;
           width: 100%;
           overflow: hidden;
               white-space: nowrap;
               text-overflow: ellipsis;


       }
        .buy{
            width: 4rem;
            height: 2rem;
            background:#f03d37;
            color:#fff;
            text-align: center;
            line-height: 2rem;
            border-radius:0.2rem;
            margin-top: 4rem;
        }
        .willbuy{
             width: 5rem;
            height: 2rem;
            background:skyblue;
            color:#fff;
            text-align: center;
            line-height: 2rem;
            border-radius:2px;
            margin-top: 4rem;
        }
        .wish{
                color: #faaf00;
                font-size: 1.5rem;
                font-weight: 600;
        }
        .people{
            font-size:1.4rem;
            color:#666;
            
        }
        .score{
                font-weight: 700;
                color: #faaf00;
                font-size: 1.5rem;
        }
        .actor{
            font-size: 1.2rem;
            color: #666;
            width: 100%;
            overflow: hidden;
               white-space: nowrap;
               text-overflow: ellipsis;
               margin-top:0.7rem;
               margin-bottom: 0.7rem;
           
            
        }
        .today{
             font-size: 1rem;
            color: #666;
            margin-bottom: 1rem;
        }
    }
</style>
