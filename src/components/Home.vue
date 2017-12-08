<template>
  <div >
    <header class="app-header">
      <div class="app-nav">
        <span class="app-span">豆瓣</span>
        <nav>
          <ul>
            <li class="app-movie" >电影</li>
            <li class="app-book">图书</li>
            <li class="app-broadcast">广播</li>
            <li class="app-group">小组</li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.mint-header {  
  background-color: #fff; 
  height: 47px;
  border-bottom: 1px solid #f3f3f3
} 
.app-span{
  font-weight: bold;
  font-size: 20px;
  color:#00b600;
  float: left
}
.mint-button-text{
  font-size: 25px
}
.app-header{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
    max-width: 650px;
    left: 50%;
    width: 100%;
    box-sizing: border-box;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.app-header nav{
  float: right;

}
.app-right{
  color:#000;
}

.app-nav{
  border-bottom: 1px solid #f3f3f3;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 18px;
  background: #fff;
  height: 47px;
  box-sizing: border-box;
  display: -webkit-box;
  display: flex;
}

.app-nav li{
  margin-left:3px;
}

.app-movie{
  color:#2384E8;
}

.app-book{
  color:#9F7860
}

.app-broadcast{
  color: #E4A813;
}

.app-group{
  color:#2AB8CC;
}

</style>
