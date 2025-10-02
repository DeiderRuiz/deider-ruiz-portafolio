<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import ProfileHeader from '@/components/ProfileHeader.vue'
import MySkills from '@/components/MySkills.vue'
import MyProjects from '@/components/MyProjects.vue'
import MyEducation from '@/components/MyEducation.vue'
import AppFooter from '@/components/AppFooter.vue'
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
