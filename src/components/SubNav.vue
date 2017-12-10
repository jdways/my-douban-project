<template>
<div class="sub-nav">
    <!-- Bottom nav -->
    <!-- <div class="navBottom" v-if="mold === 'navBottom'">
      <div class="nav-item">
        <router-link :to="{name: 'RegisterView'}">注册帐号</router-link>replace blank<template v-if="currentUser.email">
          <a href="#" @click.prevent="logout()">退出登录</a>
        </template>
        <template v-else>
          <router-link :to="{name: 'LoginView'}" replace>登录豆瓣</router-link>
        </template>
      </div>
      <div class="nav-item">
        <a href="https://movie.douban.com/">使用桌面版</a>replace blank<a href="#">使用豆瓣App</a>
      </div>
    </div> -->
    <!-- Quick start nav -->
    <div class="quickNav" >
      <ul class="quick-nav">
        <li>
          <router-link :to="{name: 'MovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link :to="{name: 'RegisterView'}">豆瓣时间</router-link>
        </li>
        <li>
          <router-link :to="{name: 'RegisterView'}">使用豆瓣app</router-link>
        </li>
        <!-- <li>
          <template v-if="currentUser.email">
            <a href="#" @click.prevent="logout()">退出登录</a>
          </template>
          <template v-else>
            <router-link :to="{name: 'LoginView'}" replace>登录豆瓣</router-link>
          </template>
        </li> -->
      </ul>
    </div>
 </div>


</template>

<script type="text/javascript">
	
export default {
  name: 'sub-nav'
}
</script>

<style>
.sub-nav{
    margin: 0 18px;
}

.quick-nav {
    overflow: hidden;
    margin: 5px 0 0 0;
    padding-top: 6px;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.quick-nav>li>a {
    background-color: #f6f6f6;
    color: #494949;
    display: block;
    text-align: center;
    line-height: 20px;
    padding: 12px 0;
    border-radius: 2px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.quick-nav>li {
    float: left;
    width: 50%;
    padding: 3px;
    box-sizing: border-box;
    font-size: 15px;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}
a {
    color: #42bd56;
    text-decoration: none;
}
</style>