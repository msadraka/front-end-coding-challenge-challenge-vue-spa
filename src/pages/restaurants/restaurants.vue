<template>
  <Container fluid no-padding>
    <Row>
      <Col cols="4">
        <RestaurantsList />
      </Col>
      <Col cols="8">
        <router-view />
        <div v-if="!route?.params?.restaurantId" class="p-8">
          Please select a restaurant to view detail!
        </div>
      </Col>
    </Row>
  </Container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { RestaurantsList } from "./components/restaurants-list";
import { Col } from "@/ui/col";
import { Row } from "@/ui/row";
import { Container } from "@/ui/container";

const route = useRoute();
</script>
