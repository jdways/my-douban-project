<template>
<div class="home-view has-header">
	<sub-nav></sub-nav>
	<section>
		<a class="feed-item" href="">
			<div class="feed-content">
				<div class="cover" style="position: relative; background: url(&quot;https://qnmob3.doubanio.com/img/files/file-1512918267.jpeg?imageView2/2/q/80/w/330/h/330/format/jpg&quot;) center center / cover no-repeat rgb(250, 250, 250);"><div style="padding-top: 100%;"></div>
			</div>
			<h3>年度神棍片来了，猜中开头你也猜不中结局</h3>
			<p>下班之后，睡觉以前，让好电影与你相伴。“大表姐” 詹妮弗·劳伦斯主演的《母亲》堪称年度WTF电影；高分韩剧《请回答1988》导演新作聚焦监狱题材。最值得推荐的影视内容，都在这里！</p>
			</div>
			<div class="author"><!-- react-text: 11 -->by&nbsp;<!-- /react-text --><span class="name">豆瓣电影</span></div>
			<span class="feed-label">来自栏目 今晚我有空</span>
		</a>
		<a class="feed-item" href="">
			<div class="feed-content">
				<div class="cover" style="position: relative; background: url(&quot;https://qnmob3.doubanio.com/img/files/file-1512918267.jpeg?imageView2/2/q/80/w/330/h/330/format/jpg&quot;) center center / cover no-repeat rgb(250, 250, 250);"><div style="padding-top: 100%;"></div>
			</div>
			<h3>年度神棍片来了，猜中开头你也猜不中结局</h3>
			<p>下班之后，睡觉以前，让好电影与你相伴。“大表姐” 詹妮弗·劳伦斯主演的《母亲》堪称年度WTF电影；高分韩剧《请回答1988》导演新作聚焦监狱题材。最值得推荐的影视内容，都在这里！</p>
			</div>
			<div class="author"><!-- react-text: 11 -->by&nbsp;<!-- /react-text --><span class="name">豆瓣电影</span></div>
			<span class="feed-label">来自栏目 今晚我有空</span>
		</a>
	</section>
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
			List:[]
		}
	},
	created(){
		this.getList()
	},
  	methods:{
  		getList:function(){
		const url='api/event/list?loc=108288';
		this.$axios.get(url).then((response) => {
			console.log(response.data)
		// success
		//this.myData = response.data.data;

		 	this.List=response.data.events;
		 	console.log(this.List[0])
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


.feed-item {
    display: block;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    position: relative;
    color: #494949;
    border-bottom: 1px solid #f3f3f3
}

.feed-content {
    overflow: hidden;
    margin-bottom: 10px;
}

.feed-content .cover {
    width: 25.6%;
    margin-left: 25px;
    float: right;
}
.feed-content p {
    overflow: hidden;
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.feed-content h3 {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    margin-bottom: 6px;
}

section p, section h3 {
    line-height: 22px;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
}

.feed-item .author {
    font-size: 12px;
    color: #ccc;
}

.feed-item .feed-label {
    position: absolute;
    bottom: 25px;
    right: 18px;
    font-size: 12px;
    color: #ccc;
}
</style>