<template>
    <section class="mb-16">
        <h1 class="mb-14 text-8xl font-bold tracking-tighter">
            <span :class="actionClasses">{{action}}</span> 
            <br />
            for everyone
        </h1>
        <h2 class="text-3xl font-light">Find your next job at Careers Comp.</h2>
    </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList"
    export default {
        name: "TheHeadline",
        data(){
            return {
                action: "Build",
                interval: null
            }
        },
        computed: {
            actionClasses(){
                return {
                    [this.action.toLowerCase()]: true
                }
            }
        },
        created(){
            this.changeTitle();
        },
        beforeUnmount(){
            clearInterval(this.interval);
        },
        methods: {
            changeTitle(){
                this.interval = setInterval(() => {
                    const actions = ["Build", "Create", "Design", "Code"];
                    this.action = nextElementInList(actions, this.action);
                }, 3000);
            }
        }
    }
</script> 
<style scoped>
.build {
    color: #1a73e8;
}
.create{
    color: #34a853;
}
.design{
    color: #fbbc05;
} 

.code{
    color: #ea4335;
}
</style>