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
        <v-spacer></v-spacer> <!-- Dies schiebt nachfolgende Elemente nach rechts -->
        <v-switch label="Dark mode" v-model="darkMode"></v-switch>
        <LoginNav @navigate="navigateTo" />
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import LoginNav from '@/components/LoginNav.vue';
import Profile from '@/components/Profile.vue';
import '~/assets/variables.scss';

export default {
  components: {
    LoginNav,
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
      this.$router.push('/' + route); // Navigate to the specified route
    },
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  computed: {
    darkMode: {
      get() {
        return this.$vuetify.theme.dark;
      },
      set(value) {
        this.$vuetify.theme.dark = value;
      }
    }
  }
};
</script>

<style scoped>
/* If you have any styles, it's best to keep them scoped to prevent them from affecting other components */
</style>