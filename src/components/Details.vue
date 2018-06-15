<template>
  	<div class="details">
		<!-- <i class="fa fa-cog" aria-hidden="true"></i> -->
		<Header v-show="isShow">影院</Header> 
  	</div>
</template>
<script>
import Header from './Header';
export default {
	name: 'Details',
	components:{
		Header,
	},
	data(){
		return {
			ids:'',
			isShow:true
		}
	},
	beforeRouteEnter (to, from, next) {
		// ...
		next((vm)=>{
			console.log(vm)
			setTimeout(()=>{
				vm.isShow = false;
			},4000)
		})
		
		
	},
	mounted(){
		let url = '/sexLady/ajax/cinemaDetail?cinemaId='+ this.ids;
		this.$http.get(url).then((da)=>{
			this.items = da.data.cinemaData;
			console.log(da.data.cinemaData)
			console.log(da.data.cinemaData.nm)
		})
	},
	created(){
		this.ids = this.$route.params.id;
	}

}
</script>
<style scoped>
</style>
