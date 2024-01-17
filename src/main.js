import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight, faHome, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowLeft, faArrowRight, faHome, faChevronLeft, faChevronRight);

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
