<template>
  <div>
    <v-app>
      <v-navigation-drawer>
        <!-- Inhalt und Optionen für den Navigations-Drawer -->
        <v-list>
          <Login @navigate="navigateTo" />
          <Profile @navigate="navigateTo" />
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app>
        <!-- Content and Options for our App-Bar -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Titel der App</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <MyComponent />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue'; // We have to ensure a correct path
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
    navigateTo(route) {
      console.log(`Navigiere zu: ${route}`);
      // Hier können Sie die Navigationslogik implementieren
    },
  },
};
</script>