import { ref } from 'vue'
import { defineStore } from 'pinia'

export const StoriesStorage = defineStore('stories', () =>{
    const storiesId = ref([])
    const storiesData = ref([])
    const storiesCount = ref(0)
    const loaded = ref(false)
    const newId = ref(null)

    const  fetchStoriesId = async () => {
        storiesId.value = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
            .then(res => res.json())
    }

    const  fetchStoriesData = async () => {
        const fetchPromises = storiesId.value.slice(storiesCount.value, storiesCount.value + 20).map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json())
        )
        const stories = await Promise.all(fetchPromises)
        storiesData.value.push(...stories)
        storiesCount.value += 20;
        loaded.value = true
    }

        const refreshStories = async () => {
            const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
            newId.value = await res.json()
            if (newId.value[0] !== storiesId.value[0]) {
                storiesId.value = newId.value;
                storiesData.value = []
                storiesCount.value = 0
                await fetchStoriesData()
            }
        }
    return {storiesId, storiesData, storiesCount, loaded, newId, fetchStoriesId, fetchStoriesData, refreshStories}
})



