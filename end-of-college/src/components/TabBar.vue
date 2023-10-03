<template>
    <div id="tabbar">
        <router-link active-class="active" to="/"><div class="bars"><span>img</span>首页</div></router-link>
        <router-link active-class="active" to="/InfoPage"><div class="bars"><span>img</span>资讯</div></router-link>
        <router-link active-class="active" to="/ClassPage"><div class="bars"><span>img</span>分类</div></router-link>
        <router-link active-class="active" to="/MyPage"><div class="bars"><span>img</span>我的</div></router-link>
    </div>
</template>


<script>
export default {
    name:"TabBar"
}

</script>

<style scoped>
#tabbar{
    background-color: red;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 10%;
    max-height: 60px;
    min-height: 20px;
    display: flex;
    justify-content: space-around;
}

.bars{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: green;
}
.barc{
    color: black;
}
.active{
    color: red;
}

</style>