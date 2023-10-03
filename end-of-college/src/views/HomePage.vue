<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <div class="scoller">
            <div class="scoll-box">
                <div v-for="(item, index) in scollList" :key="index">
                    <div class="view-scoll">{{ item.csname }}</div>
                </div>
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>



        <InHome></InHome>
    </div>
</template>

<script>
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'

import InHome from '@/components/HomePage/InHome.vue'
export default {
    name: "HomePage",
    data() {
        return {
            scollList: [
                { csid: 1, csname: "推荐" },
                { csid: 2, csname: "鞋包" },
                { csid: 3, csname: "食品" },
                { csid: 4, csname: "内衣" },
                { csid: 5, csname: "手机" },
                { csid: 6, csname: "男装" },
                { csid: 7, csname: "电脑" },
                { csid: 8, csname: "运动" },
                { csid: 9, csname: "女装" },
                { csid: 10, csname: "医药" },
                { csid: 11, csname: "饰品" },
                { csid: 12, csname: "百货" },
                { csid: 13, csname: "美妆" },
                { csid: 14, csname: "电器" },
                { csid: 15, csname: "母婴" },
                { csid: 16, csname: "家纺" },
                { csid: 17, csname: "海淘" },
                { csid: 18, csname: "家具" },
                { csid: 19, csname: "家装" },
                { csid: 20, csname: "车品" },
                { csid: 21, csname: "水果" },
                { csid: 22, csname: "玩乐" },
            ],
            input: ""
        };
    },
    mounted() {
        new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    },
    components: {
        InHome
    }
}
</script>

<style >
.scoller {
    width: 100%;
    overflow: hidden;
    height: 2rem;
    background-color: rgb(255, 255, 255);
    display: flex;
}

.scoll-box {
    align-items: center;
    display: flex;
    overflow-x: scroll;
}

.scoll-box::-webkit-scrollbar {
    display: none;
}

.view-scoll {
    margin: 0 5px;
    width: 3rem;
    text-align: center;
    border-radius: 2px;
    background-color: rgb(223, 223, 223);
}

.swiper-container {
    width: 100%;
    height: 100%;
}
</style>