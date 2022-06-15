<template>
    <div class="btn">
        <button type="button">
            <div>
                <img :src="icon" :alt="`${text}图标`">
            </div>
            <span>{{text}}</span>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
            icon: String,
        },
    }
</script>

<style lang="css" scoped>
* {
    box-sizing: border-box;
}
#btn {
    width: fit-content;
}
button {
    padding: 0;
    border: none;
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.849);
    color: white;
    font-size: 5px;
    align-content: center;
    flex-flow: row wrap;
    justify-content: center;
}
button div {
    width: fit-content;
    height: fit-content;
}
img {
    width: 25px;
    height: 25px;
}
span {
    flex: 100%;
}
</style>