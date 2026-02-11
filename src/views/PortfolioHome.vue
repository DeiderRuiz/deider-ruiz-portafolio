<script setup>
import AppNavbar from '@/layouts/AppNavbar.vue'
import ProfileHeader from '@/layouts/ProfileHeader.vue'
import MySkills from '@/layouts/MySkills.vue'
import MyProjects from '@/layouts/MyProjects.vue'
import MyEducation from '@/layouts/MyEducation.vue'
import AppFooter from '@/layouts/AppFooter.vue'
</script>
<template>
  <AppNavbar></AppNavbar>
  <main class="max-w-full">
    <section class="scroll-mt-17" id="perfil">
      <ProfileHeader></ProfileHeader>
      <MySkills></MySkills>
    </section>
    <div class="px-6 sm:px-12"><hr /></div>
    <MyProjects></MyProjects>
    <div class="px-6 sm:px-12"><hr /></div>
    <MyEducation></MyEducation>
    <AppFooter></AppFooter>
  </main>
</template>
