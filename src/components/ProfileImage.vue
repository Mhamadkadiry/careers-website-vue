<template>
  <img :src="imageLink" alt="Profile" class="rounded-3xl w-10 h-10 object-contain" />
</template>
<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://st3.depositphotos.com/6672868/13701/v/950/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
    }
  }
}
</script>
