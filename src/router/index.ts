import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    children: [
      {
        component: () => import("@/pages/restaurants/pages/restaurant-details"),
        name: "restaurant-details",
        path: ":restaurantId",
      },
    ],
    component: () => import("@/pages/restaurants"),
    name: "restaurants",
    path: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
