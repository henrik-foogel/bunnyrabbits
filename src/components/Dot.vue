<template>
    <footer id="dot">
        <ul>
            <li v-for="(dot, index) in dots" :key="index" :class="{ active : dot == currentDot}"></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'dot',
    props: ['currentDot'],
    data(){
        return {
            dots: 3,
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../scss/variable';

    #dot {
        display: flex;
        

        ul {
            flex: 1;
            margin: 0;
            padding: 0;
            list-style: none;
            @extend %center;

            li {
                width: .4rem;
                height: .4rem;
                margin: 1rem;
                background: $greyich;
                border-radius: 100rem;
            
                &.active {
                    background: white;
                    transform: scale(1.5);
                }
            }
        }
    }
</style>
