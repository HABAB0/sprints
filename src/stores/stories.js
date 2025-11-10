import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const StoriesStorage = defineStore('stories', {
    state: () =>  ({
        storiesId: [],
        storiesData: [],
        storiesCount: 0,
        loaded: false,
    }),

    actions: {
        async fetchStoriesId()  {
            const storiesId = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
                .then(res => res.json())
                .then(data => this.storiesId = data)
        },

        async fetchStoriesData() {
            const storiesData = this.storiesId.slice(this.storiesCount, this.storiesCount + 20).map(id =>
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
            )
            const stories = await Promise.all(storiesData)
            this.storiesData.push(...stories)
            this.storiesCount += 20;
            this.loaded = true
        },

        async refreshStories() {
            const storiesId = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
            const newId = await storiesId.json()
            if (newId[0] !== this.storiesId[0]) {
                this.storiesId = newId;
                this.storiesData = []
                this.storiesCount = 0
                await this.fetchStoriesData()
            }
        }
    },
})



