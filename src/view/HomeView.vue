<template>
<div class="home-view has-header">
	<sub-nav></sub-nav>
	<div>
		<ul>
			<li>222</li>
			<li>222</li>
			<li>222</li>

		</ul>
	</div>
	<!-- <list mold="thumbnail" :items="events"></list> -->
	<!-- <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
		<loading slot="spinner"></loading>
	</infinite-loading> -->
</div>

</template>

<script>
	import SubNav from '../components/SubNav'
	export default {
	  name: 'home-view',
	  components: { SubNav},
	  data () {
	    return {
	    	list:[]
	    }
	  },
	  created(){
	  	this.getList()
	  },
	  methods:{
  	  	getList:function(){
  	  		/*axios.get('https://api.douban.com/v2/event/list?loc=108288')
			.then(function (response) {
			console.log(response);
			})
			.catch(function (error) {
			console.log(error);
			});*/


 			 const url='api/event/list?loc=108288';
			  this.$axios.get(url).then((response) => {
			  	console.log(response.data.events)
		        // success
		        // 
		        // 
		        //this.myData = response.data.data;
		      }, (error) => {
		        // error
		        console.log(error)
		      });
	  	    },
  	  	 
	  }
	}
</script>

<style type="text/css">
.home-view{
    padding-top: 47px;
    background: #fff;
    margin: 0 auto;
    overflow-x: hidden
}
</style>