<template>
  <div class="flex h-screen justify-center">
    <div class="flex flex-col">
      <div class="flex flex-col">
        <h1 class="p-6 text-3xl">PeptoCodes</h1>
        <p>
          Transform amino acid smiles to one letter code or three letter code
          for later analysis.
        </p>
      </div>

      <form @submit.prevent="sendInput()">
        <div class="flex flex-col self-start w-full mt-24 mb-12">
          <div>
            <label
              for="input_smiles"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Input SMILES</label
            >
            <input
              v-model="inputSmiles"
              type="text"
              id="input_smiles"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="write your SMILES here"
              required
            />
          </div>
          <div class="mt-6">
            <label
              for="input_file"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Input file</label
            >
            <input
              type="file"
              id="input_file"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="drop your input file here"
              required
              disabled
            />
          </div>
        </div>
        <!-- #TODO: Delete archive tag -->
        <!-- <div class="flex flex-col">
        <img
          class="mx-auto w-3/5 rounded-lg m-6"
          src="~/assets/images/Peptocodes.png"
        />
      </div> -->
        <div class="flex flex-col justify-center">
          <button
            type="submit"
            class="button self-center mb-12 bg-gradient-to-b from-gray-50 to-gray-400 border-gray-300 dark:bg-gradient-to-b dark:from-gray-600 dark:to-gray-900 dark:border-gray-600 border rounded-lg w-24 h-8"
          >
            Submit
          </button>
        </div>
        <div v-if="error">{{ error }}</div>
        <div v-if="result">{{ result }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
function sendInput() {
  // Result vars
  error.value = null;
  result.value = null;

  // Check if there is an error
  if (!inputSmiles.value) {
    error.value = "perkele";
    return;
  }

  // Get data from API
  const res = fetchApi();

  // Show the result to the user
  result.value = JSON.stringify(res);
}

const fetchApi = () => {
  return test;
};

const test = [
  {
    smiles: "NCCN",
    name: "amino",
  },
];
const inputSmiles = ref();
const error = ref(null);
const result = ref(null);
</script>
