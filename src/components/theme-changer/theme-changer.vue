<template>
  <Button
    class="text-3xl"
    type="button"
    test-id="themeChanger"
    aria-haspopup="true"
    aria-controls="theme-menu"
    @click="toggleTheme"
  >
    {{ themeStore?.selectedTheme?.value === "light" ? "🌙" : "☀️" }}
  </Button>
</template>

<script setup lang="ts">
import { Button } from "../../ui/button";
import { themeStore } from "@/stores/theme-store";

const toggleTheme = () => {
  themeStore.setTheme(
    themeStore?.selectedTheme?.value === "light" ? "dark" : "light",
  );
};
</script>
