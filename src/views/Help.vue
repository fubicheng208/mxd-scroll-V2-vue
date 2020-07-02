<template>
    <div class="demo-image__placeholder" style="margin-top: 30px;">
        <div class="block" style="float: left; margin-left: 125px; vertical-align: middle;text-align: center;">
            <div class="span_div"><span class="demonstration" style="font-size: large">示例1</span></div>
            <el-image :src="src1"></el-image>
        </div>
        <div class="block" style="float: right; margin-right: 125px; vertical-align: middle;text-align: center; ">
            <div class="span_div"><span class="demonstration" style="font-size: large;">示例2</span></div>
            <el-image :src="src2">
                <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                </div>
            </el-image>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                src1: require('../assets/weapon1.png'),
                src2: require('../assets/weapon2.png')
            }
        }
    }
</script>

<style>
    .span_div{
        margin-bottom: 30px;
    }
</style>