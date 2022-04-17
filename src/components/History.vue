<script setup>
defineProps({
    Histories: {
        type: Object,
        require: true,
        default: {}
    }
})
</script>

<template>
    <div>
        <h1>
            <ul v-for="(history, index) in Histories" :key="history.index">
                <li> {{ history.username }} {{ history.book }} {{ history.action }}</li>
            </ul>
        </h1>
    </div>
</template>

<style scoped>
.container {
    width: 650px;
    position: relative;
    margin-bottom: 500px;
    margin-right: 200px;
    height: 10vh;
    display: flex;
    justify-content: center;
    font-family: 'Skranji';
    text-align: center;
    padding: 10px;
}

.content {
    position: relative;
    text-align: center;
    min-width: 80%;
    padding: 2em 0;
}

.logo {
    position: absolute;
    width: 10%;
    width: 10%;
    left: 2%;
    transition: all 1s ease-out;
}

.logo-git:hover {
    cursor: pointer;
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}

.logo-git {
    width: 5%;
    position: absolute;
    right: 2%;
    bottom: 2%;
}
</style>
