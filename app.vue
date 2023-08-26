<template>
  <div>
    <v-app>
      <!-- Adding v-model to bind drawer -->
      <v-navigation-drawer v-model="drawer">
        <!-- Content and options for the navigation drawer -->
        <v-list>
          <Profile @navigate="navigateTo" />
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app>
        <!-- Content and options for our App-Bar -->
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Title of the App</v-app-bar-title>
        <Login @navigate="navigateTo" />
      </v-app-bar>
      <v-main>
        <MyComponent />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue'; // Ensure correct path
import Login from '@/components/Login.vue';
import Profile from '@/components/Profile.vue';

export default {
  components: {
    MyComponent,
    Login,
    Profile,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    navigateTo(route) {
      console.log(`Navigating to: ${route}`);
      // Implement your navigation logic here
      this.$router.push(route); // Navigate to the specified route
    },
  },
};
</script>

<style scoped>
/* If you have any styles, it's best to keep them scoped to prevent them from affecting other components */
</style>