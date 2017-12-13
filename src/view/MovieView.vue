<template>
<div class="movie-view">
	<section id="movie_showing" >
        <header>
            <span>影院热映</span>
            <a href="/movie/nowintheater?loc_id=108288">更多</a>
        </header>
        <div class="section-content">
        	<ul class="row items">
        		<li class="item items-movie" v-for="item in in_theaters">
        			<div class="item-poster" :style="{ backgroundImage: 'url(' + item.images.small + ')' }"></div>
        			<span class="item-title">{{item.title}}</span>
        		</li>
        	</ul>
        </div>
    </section>
    <section id="movie_showing" >
        <header>
            <span>即将上映</span>
            <a href="/movie/nowintheater?loc_id=108288">更多</a>
        </header>
        <div class="section-content">
        	<ul class="row items">
        		<li class="item items-movie" v-for="item in this.comingList">
        			<div class="item-poster" :style="{ backgroundImage: 'url(' + item.images.small + ')' }"></div>
        			<span class="item-title">{{item.title}}</span>
        		</li>
        	</ul>
        </div>
    </section>
    <section id="movie_showing" >
        <header>
            <span>北美票房榜</span>
            <a href="/movie/nowintheater?loc_id=108288">更多</a>
        </header>
        <div class="section-content">
        	<ul class="row items">
        		<li class="item items-movie" v-for="item in in_theaters">
        			<div class="item-poster" :style="{ backgroundImage: 'url(' + item.images.small + ')' }"></div>
        			<span class="item-title">{{item.title}}</span>
        		</li>
        		<!-- <li class="item items-movie">
        			<div class="item-poster" style="background-image: url(https://img3.doubanio.com/view/event_poster/median/public/131875877d7f285.jpg)"></div>
        			<span class="item-title">寻梦环游记</span>
        		</li>
        		<li class="item items-movie">
        			<div class="item-poster" style="background-image: url(https://img3.doubanio.com/view/event_poster/median/public/131875877d7f285.jpg)"></div>
        			<span class="item-title">寻梦环游记</span>
        		</li>
        		<li class="item items-movie">
        			<div class="item-poster" style="background-image: url(https://img3.doubanio.com/view/event_poster/median/public/131875877d7f285.jpg)"></div>
        			<span class="item-title">寻梦环游记</span>
        		</li>
        		<li class="item items-movie">
        			<div class="item-poster" style="background-image: url(https://img3.doubanio.com/view/event_poster/median/public/131875877d7f285.jpg)"></div>
        			<span class="item-title">寻梦环游记</span>
        		</li> -->
        	</ul>
        </div>
    </section>
</div>
</template>


<script>
import SubNav from '../components/SubNav'
export default {
	name: 'movie-view',
	components: { SubNav},
	data () {
		return {
			in_theaters:[],
			comingList:[]
		}
	},
	created(){
		this.getList();
		this.getNewMovies();
	},
  	methods:{
  		getList:function(){
		const url='api/movie/in_theaters';
		this.$axios.get(url).then((response) => {
			//console.log(response.data.subjects)
		// success
		//this.myData = response.data.data;

		 	this.in_theaters=response.data.subjects;
		 	//console.log(this.in_theaters)
		}, (error) => {
		// error
		console.log(error)
		});
    	},
	  	getNewMovies:function(){
  		const url='api/movie/coming_soon';
		this.$axios.get(url).then((response) => {
			console.log(response.data.subjects)
		// success
		//this.myData = response.data.data;

		 	this.comingList=response.data.subjects;
		 	console.log(this.comingList)
		}, (error) => {
		// error
		console.log(error)
		});
	  	} 
    }
}
</script>

<style type="text/css">
.movie-view{
	padding-top: 47px;
	background: #fff;
	margin: 0 auto;
	overflow-x: hidden
}

section h2 {
    display: inline-block;
    min-width: 4em;
    margin-bottom: 0;
    font-size: 18px;
    color: #111;
    padding-left: 0;
    padding-bottom: 0;
    font-size: 1.06rem;
}


section header {
    padding: 0 1.12rem;
}

section header a{
    float: right
}

section:first-child {
    padding-top: 10px;
}

section a {
    color: #42bd56;
    text-decoration: none;
}

.item-poster {
	width: 100px;
	height: 142.84px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}
ul{
	list-style: none
}

.row {
    border-bottom: 1px solid #F2F2F2;
    padding: 15px 0 43px 0;
}
.items {
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.item:first-child {
    margin-left: 1.12rem;
}
.item {
    margin-left: 0.48rem;
}
.item {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    text-align: center;
}
.items>* {
    font-size: .94rem;
    white-space: normal;
}

.item:not(.item__celebrity) .item-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item__movie .item-title {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.item-title {
    display: block;
    margin-top: .6rem;
    line-height: .94rem;
}

</style>