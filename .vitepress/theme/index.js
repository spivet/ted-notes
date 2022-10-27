import DefaultTheme from 'vitepress/theme'
import NoteTitle from './components/note-title.vue'
import NoteAudio from './components/note-audio.vue'
import './styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('NoteTitle', NoteTitle)
    app.component('NoteAudio', NoteAudio)
  }
}