import { ref } from 'vue'
import { defineStore } from 'pinia'

export const currentStory = defineStore('CurrentStory', () => {
    const id = ref()

    const setId = (newId) => {
        id.value = newId
    }
    const loading = ref(true)
    const commentsData = ref([])
    const storyData = ref()
    const  fetchStoryData = async () => {
        loading.value = true
        storyData.value = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id.value}.json`)
            .then(res => res.json())

        if (storyData.value ) {
            commentsData.value = await fetchAllComments(storyData.value.kids)
        }
        loading.value = false
    }

    async function fetchAllComments (commentsId) {
        if (commentsId === undefined || commentsId.length === 0 ) {
            return []
        }
        const promises = commentsId.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json()))

        commentsData.value = await Promise.all(promises)
        const fullcommentsData = await Promise.all(
            commentsData.value.map(async comment => {
                if (!Array.isArray(comment.kids)) {
                    comment.children = []
                    return comment
                }
                comment.children = await fetchAllComments(comment.kids)
                return comment
            })
        )
        return fullcommentsData
    }

    return {id, setId, fetchStoryData, storyData, commentsData, fetchAllComments, loading}

})