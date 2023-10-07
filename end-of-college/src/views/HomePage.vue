<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <div class="scoller">
            <div class="scoll-box">
                <div v-for="(item, index) in scollList" :key="index">
                    <div :class="chouseSwiper == index ? 'view-scoll-ac':'view-scoll'" @click="chouse(index)">{{ item.csname }}</div>
                </div>
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div :class="chouseSwiper == index ? 'swiper-slide swiper-slide-active':'swiper-slide'"  v-for="(item,index) in scollList" :key="index">
                    <homestyleA v-if="item.style == 'A'"></homestyleA>
                    <homestyleB v-if="item.style == 'B'"></homestyleB>
                    {{ index }}
                    
                </div>
            </div>
            
        </div>


        
    </div>
</template>

<script>
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'
import homestyleA from '@/components/HomePageStyleA.vue'
import homestyleB from '@/components/HomePageStyleB.vue'

export default {
    name: "HomePage",
    data() {
        return {
            //swiper选中
            chouseSwiper:0,
            //顶栏数据
            scollList: [
                { csid: 0, csname: "推荐", style:"A" },
                { csid: 1, csname: "鞋包", style:"B" },
                { csid: 2, csname: "食品", style:"B" },
                { csid: 3, csname: "内衣", style:"B" },
                { csid: 4, csname: "手机", style:"B" },
                { csid: 5, csname: "男装", style:"B" },
                { csid: 6, csname: "电脑", style:"B" },
                { csid: 7, csname: "运动", style:"B" },
                { csid: 8, csname: "女装", style:"B" },
                { csid: 9, csname: "医药", style:"B" },
                { csid: 10, csname: "饰品", style:"B" },
                { csid: 11, csname: "百货", style:"B" },
                { csid: 12, csname: "美妆", style:"B" },
                { csid: 13, csname: "电器", style:"B" },
                { csid: 14, csname: "母婴", style:"B" },
                { csid: 15, csname: "家纺", style:"B" },
                { csid: 16, csname: "海淘", style:"B" },
                { csid: 17, csname: "家具", style:"B" },
                { csid: 18, csname: "家装", style:"B" },
                { csid: 19, csname: "车品", style:"B" },
                { csid: 20, csname: "水果", style:"B" },
                { csid: 21, csname: "玩乐", style:"B" },
            ],
            input: ""
        };
    },
    mounted() {
        new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: false, // 循环模式选项            
        })
        
        
    },
    methods:{
            chouse (chouseid){
                this.chouseSwiper = chouseid
                console.log(this.chouseSwiper)
                
            }
    },
    components: {
        homestyleA,
        homestyleB
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
.view-scoll-ac {
    margin: 0 5px;
    width: 3rem;
    text-align: center;
    border-radius: 2px;
    background-color:red;
}

.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide{
    width: 100%;
}
</style>