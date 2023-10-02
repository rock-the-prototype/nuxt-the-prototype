<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>{{ profileData.name }}</h1>
          <p>{{ profileData.description }}</p>
          <!-- Add other profile attributes here -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileData: {
        name: "Sample Name",
        description: "Sample Description"
      }
    };
  }
}
</script>