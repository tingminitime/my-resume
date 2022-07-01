import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = 'disableScroll'
  static defaultOptions = {
    direction: '',
  }

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0
    }
    return { ...delta }
  }
}

Scrollbar.use(DisableScrollPlugin)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
