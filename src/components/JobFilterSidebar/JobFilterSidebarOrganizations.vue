<template>
    <collapsible-accordion title="Organizations">
                <div class="mt-5">
                    <fieldset>
                        <ul class="flex flex-row flex-wrap">
                        <li class="h-8 w-1/2">
                            <input id="VueTube" type="checkbox" class="mr-2" />
                            <label for="VueTube">VueTube</label>
                        </li>
                        <li class="h-8 w-1/2">
                            <input id="Between vue and Me" type="checkbox" class="mr-2" />
                            <label for="Between vue and Me">Between vue</label>
                        </li>
                        <li class="h-8 w-1/2">
                            <input id="Et Vue Brute" type="checkbox" class="mr-2" />
                            <label for="Et Vue Brute">Et Vue Brute</label>
                        </li>
                        <li class="h-8 w-1/2">
                            <input id="Vue and a Half Men" type="checkbox" class="mr-2" />
                            <label for="Vue and a Half Men">Vue and a Half Men</label>
                        </li>
                    </ul>
                    </fieldset>
                </div>
            </collapsible-accordion>
</template>
<script>
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue';
    export default {
        name: "JobFilterSidebarOrganizations",
        components: {
            CollapsibleAccordion,
        },
    }
</script>