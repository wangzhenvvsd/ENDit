<template>
    <div>
        <div class="block">
            <el-carousel trigger="click" height="150px" arrow="always">
                <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                    <img style="width: 100%;height: 100%;" :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name:"InHome",
        data() {
            return {
                bannerList: [
                require("@/assets/HomePage/test.jpg"),
                require("@/assets/HomePage/test.jpg"),
                require("@/assets/HomePage/test.jpg"),
                require("@/assets/HomePage/test.jpg"),
            ],
            className: "",
            }
        },
    }
</script>

<style>
.el-carousel__button{
    background-color: green;
}
.el-carousel__arrow {
    background-color: #ddd;
    color: green;
}
</style>