<template>
    <div class="">
        <h1 class="title">{{title}} - {{author}}</h1>
        <!-- <p class="author"></p> -->
        <div class="info">
            <div class="info-noter">
                <span class="time">{{time}}</span>
                <span class="noter">{{noter}}</span>                
            </div>
            <TransSwitch />
        </div>
    </div>
</template>

<script setup>
import TransSwitch from './trans-switch.vue'

defineProps({
    title: {
        type: String,
        default: '',
    },
    author: {
        type: String,
        default: '',
    },
    time: {
        type: String,
        default: '',
    },
    noter: {
        type: String,
        default: '了不起的方块',
    },
})
</script>

<style scoped>
.title {
}
.info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    color: #8a919f;

}
.info-noter {
    display: flex;
    font-size: 14px;
}
.noter {
    padding-left: 16px;
}
.author {
    font-size: 20px;
    font-weight: bold;
    text-align: right;
}
</style>