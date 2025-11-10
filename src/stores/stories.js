import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const StoriesStorage = defineStore('stories', {
    state: () =>  ({
        stories: []
    }),

    actions: {
        async fetchStories()  {
            const storiesId = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
                .then(res => res.json())
            const storiesData = storiesId.slice(0, 20).map(id =>
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
            )
            const stories = await Promise.all(storiesData)
            this.stories = stories;
        }
    },
})



