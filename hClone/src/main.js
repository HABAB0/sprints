import { createApp } from 'vue'
import App from './app/App.vue'
import router from './router'

const getStories = () => {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then((storiesId) => {
        return storiesId.json()
    })
    .then(storiesData => {
        storiesData.slice(0, 20).forEach(story => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
            .then((storiesData) => {
                return storiesData.json()
            })
            .then(storiesData => console.log(storiesData))
        })
    })

}

getStories()
createApp(App).use(router).mount('#app')