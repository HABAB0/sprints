<script setup>
defineProps({
  comment: { type: Object, required: true }
})
</script>

<template>
  <div class="comment flex flex-col p-4 gap-2">
    <p>{{ comment.by }}</p>
    <p v-html="comment.text" />
    <p>
      {{ (new Date(comment.time * 1000)).toLocaleTimeString('ru-RU', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'})
      }}
    </p>
    <comments
        v-for="child in comment.children"
        :key="child.id"
        :comment="child"
    />
  </div>
</template>

<style scoped>
.comment{
  border: solid black 1px;
  border-radius: 12px;
}
</style>