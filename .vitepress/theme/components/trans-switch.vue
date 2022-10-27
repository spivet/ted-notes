<script setup>
import { VTSwitch, VTIconChevronDown } from '@vue/theme'
import { useRoute } from 'vitepress'
import { reactive, ref } from 'vue'

const switchData = reactive({
  isShow: false,
  text: '关闭',
})
const classList = document.documentElement.classList
const toggleTrans = () => {
  switchData.isShow = !switchData.isShow
  if (switchData.isShow) {
    switchData.text = '显示'
    classList.add('transcript-show')
  } else {
    switchData.text = '关闭'
    classList.remove('transcript-show')
  }
}

</script>

<template>
  <div class="switch-bar">
    {{switchData.text}}翻译
    <VTSwitch class="switch" @click="toggleTrans" />
  </div>
</template>

<style scoped>
.switch-bar {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.preference-switch {
  font-size: 12px;
  border-bottom: 1px solid var(--vt-c-divider-light);
  transition: border-color 0.5s, background-color 0.5s ease;
  margin-bottom: 20px;
  position: sticky;
  top: -0.5px;
  background-color: var(--vt-c-bg);
  padding-top: 10px;
  z-index: 10;
}
.toggle {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2px;
  width: 100%;
  font-weight: 600;
}
.toggle:hover {
  color: var(--vt-c-text-1);
}
.no-outline {
  outline: 0;
}
.vt-link-icon {
  position: relative;
  top: 1px;
}
.vt-link-icon.open {
  transform: rotate(180deg);
}
#preference-switches {
  padding: 12px 16px;
  background-color: var(--vt-c-bg-soft);
  transition: background-color 0.5s;
  margin: 6px 0 12px;
  border-radius: 8px;
  font-weight: 600;
}
.switch-container {
  display: flex;
  align-items: center;
}
.switch-container:nth-child(2) {
  margin-top: 10px;
}
.vt-switch {
  margin-right: 5px;
  transform: scale(0.8);
}
.switch-container label {
  transition: color 0.5s;
  cursor: pointer;
}
.switch-container label:first-child {
  width: 50px;
}
.switch-link {
  margin-left: 8px;
  font-size: 11px;
  min-width: 14px;
  height: 14px;
  line-height: 13px;
  text-align: center;
  color: var(--vt-c-green);
  border: 1px solid var(--vt-c-green);
  border-radius: 50%;
}
@media (max-width: 1439px) {
  #preference-switches {
    font-size: 11px;
    padding: 8px 4px;
  }
  
  .vt-switch {
    margin: auto;
  }
  
  .switch-link {
    margin-left: auto;
  }
  .switch-container label:first-child {
    width: 46px;
  }
}
</style>

<style>
.composition-api,
.sfc {
  display: none;
}
.prefer-composition .options-api,
.prefer-sfc .html {
  display: none;
}
.prefer-composition .composition-api,
.prefer-sfc .sfc {
  display: initial;
}
.transcript-show .switch {
  background-color: var(--vp-c-green);
}
.transcript-show .switch .vt-switch-check {
  transform: translateX(18px);
}
.composition-label,
.sfc-label,
.prefer-composition .options-label,
.prefer-sfc .no-sfc-label {
  color: var(--vt-c-text-3);
}
.prefer-composition .composition-label,
.prefer-sfc .sfc-label {
  color: var(--vt-c-text-1);
}
.prefer-sfc .sfc-switch .vt-switch-check {
  transform: translateX(18px);
}
.tip .options-api,
.tip .composition-api {
  color: var(--vt-c-text-code);
  /* transition: color 0.5s; */
  font-weight: 600;
}
</style>