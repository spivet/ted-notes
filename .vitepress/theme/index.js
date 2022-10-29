import DefaultTheme from 'vitepress/theme'
import NoteTitle from './components/note-title.vue'
import NoteMedia from './components/note-media.vue'
import './styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('NoteTitle', NoteTitle)
    app.component('NoteMedia', NoteMedia)
  }
}