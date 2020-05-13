<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="container w-10/12 mx-auto py-8 text-center shadow mb-8" >
      <h1 class="text-4xl mb-10 font-mono">Htet Aung Ko</h1>
      <h2 class="my-10 font-serif">" Working as web developer "</h2>
      <h3 class="font-serif">it's me who love to develop web apps and like to play games.</h3>
      <div class="container w-6/10 mx-auto flex justify-center items-center mt-6">
        <div class="w-2/6 bg-green-800">
          <a href="#" v-on:click="showAddress" class="block py-10 m-px-20 hover:bg-green-800 text-white">Where i live</a>
        </div>
        <div class="w-2/6 bg-black">
          <a href="#" v-on:click="showMail" class="block py-10 m-px-20 hover:bg-gray-700 text-white">Mail</a>
        </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to my second home @2020" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Swal from 'sweetalert2';
import '@sweetalert2/themes/dark/dark.min.css';

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {

  },
  methods: {
    showAddress() {
      Swal.fire('Yangon \n +95 979 7989113');
    },
    showMail() {
      Swal.fire("mail@mghako.com");
    }
  }
};
</script>
