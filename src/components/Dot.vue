<template>
    <footer id="dot">
        <ul>
            <li v-for="(dot, index) in dots" :key="index" :class="{ current: step == currentStep}"></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'dot',
    props: ['currentStep'],
    data(){
        return {
            dots: 3
        }
    }
}
</script>

<style lang="scss" scoped>
    #dot {
        display: flex;
        height: 4rem;
        ul {
            flex: 1;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            li {
                width: .5rem;
                height: .5rem;
                margin: 1rem;
                background: white;
                border-radius: 999rem;
                background: rgba($color: #fff, $alpha: .4);
            
                &.active {
                    background: white;
                }
            }
        }
    }
</style>
