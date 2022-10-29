<template>
    <div class="note-media">
        <NoteAudio class="note-audio">
            <slot></slot>
        </NoteAudio>
    </div>
</template>

<script setup>
import NoteAudio from './note-audio.vue'
</script>

<style scoped>
.note-media {
    display: flex;
}
.note-audio {
    flex: 1;
}
</style>