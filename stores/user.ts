import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    email: "",
  }),

  actions: {
    async registerUser(name: string, email: string, password: string) {
      const response = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });

      this.name = response.data.user.name;
      this.email = response.data.user.email;
    },
  },
});
