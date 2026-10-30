<template>
    <img
     class="badge" :src=imageUrl />
</template>

<script setup>
const props = defineProps({
    name: String,
})
const imageUrl = computed(()=>{
    return new URL(`/assets/${props.name}.png`, import.meta.url).href;

})
</script>
<style scoped>
.badge {
 max-height: 75px;
 margin-top: 15px;
}
</style>