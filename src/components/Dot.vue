<template>
    <footer id="dot">
        <ul>
            <li v-for="(dot, index) in dots" :key="index" :class="{ active : dots == currentDot}"></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'dot',
    props: ['currentDot'],
    data(){
        return {
            dots: 3
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
                width: .3rem;
                height: .3rem;
                margin: .5rem;
                background: $greyich;
                border-radius: 50%;
            
                &.active {
                    background: white;
                }
            }
        }
    }
</style>
