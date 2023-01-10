<template>
    <div class="audio-box">
        <button @click="handlePlay">播放</button>
        <time>{{audioProps.currentTime}} / {{audioProps.duration}}</time>
        <audio ref="primitiveAudio" class="audio">
            <slot></slot>
            您的浏览器不支持 audio 元素。
        </audio>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const PlayStatus = {
    PAUSE: 0,
    PLAY: 1,
}
const primitiveAudio = ref(null)
const audioProps = reactive({
    currentTime: 0,
    duration: 0,
})
const audioStatus = ref(PlayStatus.PAUSE)

const handlePlay = () => {
    if (primitiveAudio.value?.paused) {
        primitiveAudio.value?.play()
        audioStatus.value = PlayStatus.PLAY
    } else {
        primitiveAudio.value?.pause()
        audioStatus.value = PlayStatus.PAUSE
    }
}

onMounted(() => {
    primitiveAudio.value.oncanplay = function () {
        audioProps.currentTime = primitiveAudio.value?.currentTime
        audioProps.duration = primitiveAudio.value?.duration
    }
    primitiveAudio.value.ontimeupdate = function (e) {
        audioProps.currentTime = e.target.currentTime
    }
})
</script>

<style scoped>
.audio-box {
    margin: 8px 0;
}
.audio {
    /* display: hidden; */
    width: 100%;
}
</style>