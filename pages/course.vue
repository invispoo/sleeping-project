<template>
  <v-sheet
      class="mx-auto"
  >
    <v-slide-group
        show-arrows
    >
      <v-slide-group-item
          v-for="n in 30"
          :key="n"
          v-slot="{ isSelected, toggle }"
      >
        <v-card :color="isSelected ? '#ADBBDA' : undefined"
                class="ma-2 mt-6 text-center"
                rounded
                @click="toggle"
                width="400"
                height="500"
        >
          <v-card-title>
            День {{ n }}
          </v-card-title>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup lang="ts">
const length = 3;
const onboarding = ref(0);
</script>

<style scoped>

</style>