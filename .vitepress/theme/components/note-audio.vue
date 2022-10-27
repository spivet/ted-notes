<template>
    <div class="audio-box">
        <audio class="audio" controls>
            <slot></slot>
            您的浏览器不支持 audio 元素。
        </audio>
    </div>
</template>

<script setup>

</script>

<style scoped>
.audio-box {
    margin: 8px 0;
}
.audio {
    display: block;
    width: 100%;
}
</style>