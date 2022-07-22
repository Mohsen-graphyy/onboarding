<template>
  <div class="flex flex-col h-screen">
    <div
      class="
        h-05
        flex
        justify-center
        items-center
        bg-gradient-emerald-to-orange
        rounded-b-3xl
      "
    >
      <img class="w-96 p-5" src="./../assets/svg/computerman.png" alt="" />
    </div>
    <div class="px-5 flex flex-col justify-between">
      <h1 class="font-bold text-3xl mt-10">Find a perfect job match</h1>

      <p class="mt-10">
        One place with the best job Companies in tech. Apply in all of them and
        get in touch with the hiring managers directly.
      </p>
      <sliber-bar />
      <div class="flex flex-row justify-between items-center mt-10">
        <p class="bg-transparent border-none font-bold">
          <nuxt-link :to="{ name: 'jobname' }" >
            <p @click="setIsClicked">skip</p>
          </nuxt-link>
        </p>
        <nuxt-link
          :to="{ name: 'jobname' }"
          class="bg-green-lighten border-none rounded-3xl px-5 py-2"
          >get start</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<router>
  
</router>

<script>
import sliberBar from "../components/MainPage/sliberBar.vue";
import { mapActions } from "vuex";
export default {
  components: { sliberBar },
  name: "IndexPage",
  head() {
    return {
      title: "Job Finder App",
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    };
  },
  methods: {
    ...mapActions("mainpage", ["setIsClicked"]),
  },
};
</script>

<style scoped>

</style>
