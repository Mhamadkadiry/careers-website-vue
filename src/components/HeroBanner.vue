<template>
    <main>
        <section class="flex flex-col h-screen pt-10 pb-20" >
            <div class="grid grid-cols-12">
                <div class="col-span-1 col-start-1">
                </div>
                <div class="col-span-5 col-start-2">
                    <the-headline />
                    <job-search-form />
                </div>
                <div class="col-span-5 col-start-7 self-center justify-self-center">
                    <img class="h-96 w-96 object-contain rounded-lg" :src="setSrc" />
                </div>
                <div class="col-span-1 col-start-12">
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import TheHeadline from './TheHeadline.vue';
import JobSearchForm from './JobSearchForm.vue';
import nextElementInList from '@/utils/nextElementInList';
    export default {
        name: "HeroBanner",
        components: {
            TheHeadline,
            JobSearchForm
        },
        data() {
            return {
                interval: null,
                src: "https://img.freepik.com/free-photo/portrait-professional-elegant-businessman_23-2150917160.jpg?t=st=1703782725~exp=1703786325~hmac=faf1fa669e934997a9a62a8da411b5414e0d81bf9bdaec9ed9773a018cc62cb2&w=826"
            }
        },
        computed: {
            setSrc() {
        return this.src;
    }
        },
        created(){
            this.changeSrc();
        },
        beforeUnmount(){
            clearInterval(this.interval);
        },
        methods: {
            changeSrc() {
                    this.interval = setInterval(() => {
                    const srcs = ["https://img.freepik.com/free-photo/portrait-professional-elegant-businessman_23-2150917160.jpg?t=st=1703782725~exp=1703786325~hmac=faf1fa669e934997a9a62a8da411b5414e0d81bf9bdaec9ed9773a018cc62cb2&w=826", "https://img.freepik.com/free-photo/business-people-rush-hour-walking-commuting-city-concept_53876-120488.jpg?w=740&t=st=1703783569~exp=1703784169~hmac=59d1eb1249ae73838f6de6cc8d9c16444f78415a1f68240521ef604f045df5af"];
                    this.src = nextElementInList(srcs, this.src);
                }, 3000);
            }
            }
        }
</script>