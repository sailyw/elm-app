<template>
    <div class="address">
        <Header :isLeft="true" title="选择收货地址"/>
        <div class="city_search">
            <div class="search">
                
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    name:'Address',
    components:{
        Header
    },
    data(){
        return{
            city:'', // 当前的城市
            search_val:'' //搜索的值
        }
    }
}
</script>

<style lang="scss" scoped>
.address{
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding-top: 45px;
}
</style>