<template>
    <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
        <section class="pb-5">
            <div class="flex flex-row justify-between">
                <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
                <div class="flex items-center text-sm">
                    <action-button text="Clear Filters" type="secondary" class="ml-1" />
                </div>
            </div>
            <job-filter-sidebar-organizations />
        </section>
</div>
</template>
<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import JobFilterSidebarOrganizations from '@/components/JobFilterSidebar/JobFilterSidebarOrganizations.vue';
    export default {
        name: "JobFilterSidebar",
        components: {
            ActionButton,
            JobFilterSidebarOrganizations
        },
    }
</script>