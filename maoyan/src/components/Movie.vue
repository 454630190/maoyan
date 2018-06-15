<template>
    <div id="movie">
        <div class="topfix">
       <h1>猫眼电影</h1>

        <div class="topbar">
            <div class="location">
            <span @click="gocity">北京</span>
            <i class="fa fa-sort" aria-hidden="true"></i>
            </div>
            <div class="hotmovie">
                <router-link to='/movie/onplaying'>
                        正在上映
                </router-link>
            </div>
            <div class="hotmovie">
                <router-link to='/movie/comesoon'>
                        即将上映
                </router-link>
            </div>
            <div class="msearch">
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        gocity(){
            this.$router.push({path:'/city'})
        }
    }
}
</script>
<style lang='scss'>
    #movie{
        
        .topfix{
            position:fixed;
            width: 100%;
            
        }
        h1{
            text-align: center;
            font-size: 2rem;
            background: #f03d37;
            height: 4rem;
            line-height: 4rem;
            color:#fff;
            width: 100%;
            
        }
    }
    .topbar{
        height: 4rem;
        line-height: 4rem;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        border-bottom: 1px solid gray;
        background: white;
        
        .location{
            font-size: 1.5rem;
        };
        .hotmovie{
            font-size: 1.5rem;
            padding:0 1rem;
            padding-bottom: 0.1rem;
            font-weight: 900;
            a{
                
            }
        }
        .msearch{
            font-size: 2rem;
            color: #f03d37;
        }
    }
</style>
