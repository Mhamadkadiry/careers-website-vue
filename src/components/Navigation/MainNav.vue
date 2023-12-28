<template>
  <header :class="['w-full', 'text-sm','font-semibold', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none first:ml-0">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full">
              <a href="#" class="flex h-full items-center py-2.5">{{ menuItem.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign in" type="primary" @click="toggleLogin" />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>
<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import SubNav from '@/components/Navigation/SubNav.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      company: 'Careers',
      url: 'https://careers.google.com',
      menuItems: [
        {
          name: 'Teams',
          url: '#'
        },
        {
          name: 'Location',
          url: '#'
        },
        {
          name: 'Life at Careers',
          url: '#'
        },
        {
          name: 'How we hire',
          url: '#'
        },
        {
          name: 'Students',
          url: '#'
        },
        {
          name: 'Jobs',
          url: '#'
        }
      ],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass(){
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn
    }
  }
}
</script>
