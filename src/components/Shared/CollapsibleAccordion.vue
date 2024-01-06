<template>
    <div class="border-b border-solid border-brand-gray-2 py-5">
        <div class="flex cursor-pointer flex-wrap items-center justify-between" role="button" @click="toggleAccordion">
            <h3 class="text-base font-semibold">{{ title }}</h3>

            <font-awesome-icon :icon="caretIcon" class="ml-2" />
        </div>
        <div v-if="isOpen" class="mt-5 w-full">
            <slot>
                Forgot to type something here!
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "CollapsibleAccordion",
    props: {
        title: {
            type: String,
            required: true
        
        }
    },
    data(){
        return {
            isOpen: false
        }
    },
    computed: {
        caretIcon(){
            return this.isOpen ? ["fas", "angle-up"] : ["fas", 'angle-down']
        }
    },
    methods: {
        toggleAccordion(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>