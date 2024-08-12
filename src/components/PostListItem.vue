<template>
    <div class="post-item">
        <div class="d-flex d-flex_jcsb">
            <h2>{{ model.title }}</h2>
            <small>{{ model.date }}</small>
        </div>

        <div class="d-flex">
            <p>{{ model.description }}</p>
            <img :src="model.image" alt="Post image" class="post-image"/>
        </div>
    </div>  
</template>

<script>
export default {
    props: {
        model: {
            type: Object
        }
    }
}
</script>

<style scoped>
.post-item {
    margin-bottom: 2rem;
}

.post-image {
    width: 200px;
    margin-left: 1rem;
}
</style>


