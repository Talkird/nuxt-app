import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    email: "",
  }),

  actions: {
    async registerUser(payload: { name: string; email: string }) {
      try {
        const response = await $fetch("/api/users/register", {
          method: "POST",
          body: payload,
        });

        this.name = response.user.name;
        this.email = response.user.email;
      } catch (error) {
        console.error("Registration failed:", error);
        throw error;
      }
    },
  },
});
