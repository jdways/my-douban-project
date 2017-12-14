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
        			<el-rate v-model="value5" disabled show-score text-color="#ff9900" :score-template="''+item.rating.average">
        			</el-rate>
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
			comingList:[],
			value5:9.1,
		}
	},
	created(){
		this.getList();
		this.getNewMovies();
	},
	computed: {
    // 一个计算属性的 getter
	    value5(){
	    	alert(3);
	    }
  	},
  	methods:{
  		getList:function(){
		const url='api/movie/in_theaters';
		this.$axios.get(url).then((response) => {
		 	this.in_theaters=response.data.subjects;
		 	console.log(this.in_theaters);
		}, (error) => {
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
	  	}, 
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

section {
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
    padding: 15px 0 33px 0;
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


::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
} 

.el-rate__icon {
    font-size: 14px;
    margin-right: 2px;
    color: #c0c4cc;
    -webkit-transition: .3s;
    transition: .3s;
}
.el-rate__text {
    font-size: 12px;
    vertical-align: middle;
}


.el-rate {
	padding-top: 5px;
    height: 20px;
    line-height: 1;
}
</style>