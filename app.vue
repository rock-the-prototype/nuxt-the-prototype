<template>
  <div>
    <v-app>
      <transition name="fade">
        <div>
      <v-navigation-drawer v-model="drawer">
        <v-list>
          <Profile @navigate="navigateTo" />
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Title of the App</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-switch label="Dark mode" v-model="isDark"></v-switch>
        <LoginNav @navigate="navigateTo" />
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
        </div>
      </transition>
    </v-app>
  </div>
</template>

<script setup>
import LoginNav from '@/components/LoginNav.vue';
import Profile from '@/components/Profile.vue';
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { useRouter } from 'vue-router';

const theme = useTheme()
const isDark = ref(theme.global.name.value === 'dark')
const drawer = ref(false);
const router = useRouter();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}

const navigateTo = (route) => {
  console.log(`Navigating to: ${route}`);
  // Implement your navigation logic here
  router.push('/' + route);
}

watch(isDark, (newVal) => {
  theme.global.name.value = newVal ? 'dark' : 'light';
})

</script>

<style scoped>
/* If you have any styles, it's best to keep them scoped to prevent them from affecting other components */
</style>