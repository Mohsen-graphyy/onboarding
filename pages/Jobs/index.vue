<template>
  <div class="flex flex-col px-5 bg-gray-100 pb-8 gap-10 h-screen">
    <div class="flex flex-row justify-between items-center mt-10">
      <button>
        <svg
          class="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <div class="">
        <img
          class="rounded-full w-full h-8"
          src="./../../assets/image/kaveh.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col">
      <h1>
        Discover your
        <br />
        <span class="text-green-400">favourite Job.</span>
      </h1>
    </div>
    <input
      class="border-none p-3 rounded-lg"
      placeholder="Search for location"
      type="text"
    />
    <h1>Newest Jobs</h1>
    <div class="flex flex-warp justify-between gap-4 items-center">
      <card v-for="card in datas" :key="card.id" :data="card"/>
    </div>
  </div>
</template>
<router>
{
    name: "jobname"
}
</router>
<script>
import card from "./../../components/Listing/card.vue";
// import {mapState} from 'vuex'
export default {
  // layouts : 'mobileStructure',
  components: {
    card,
  },
  data() {
    return {
      datas: "",
    };
  },
  // computed: {
  //   ...mapState("cardlist",['jobs']),
  // },
  methods: {
    async getCards() {
      console.log('app');
      const { data } = await this.$api.card.getCard();
      this.datas = data;
    },
  },
  mounted() {
    this.getCards();
  },
  
  middleware: ["redirections"],
  head() {
    return {
      title: "Job Finder App | Favorite",
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>