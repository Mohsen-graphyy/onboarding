<template>
  <div class="flex p-3 w-10 h-10 flex-col bg-w rounded-lg">
    <div class="flex flex-row gap-4 items-start">
      <div class="">
        <!-- <img
          class="rounded-full w-8 object-cover h-8"
          :src="`/image/${data.image}`"
          alt=""
        /> -->
      </div>
      <div class="flex flex-col">
        <p class="text-2sm font-bold">posted at</p>
        <p class="text-sm font-bold">
          <span>{{
            new Intl.DateTimeFormat("en-US-u-ca-persian", {
              dateStyle: "full",
              timeStyle: "short",
            }).format(new Date(data.created))
          }}</span>
        </p>
      </div>
    </div>
    <div>
      <h1 class="capitalize text-md font-bold">
        {{ data.title }}
      </h1>
      <p>{{ data.salary }} Dollar</p>
    </div>
    
  </div>
</template>

<script>
// import { getCard } from "./../../services/card";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  
  
};
</script>

<style lang="scss" scoped>
</style>