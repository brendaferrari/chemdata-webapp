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
        <div class="flex flex-col self-start w-full mt-12 mb-12">
          <div class="flex flex-col self-start">
            <h1>Which database would you like to choose?</h1>
          </div>
          <div class="flex justify-start mt-3 space-x-4">
            <div class="flex items-center">
              <input
                v-model="inputDB"
                type="radio"
                id="DBCheck1"
                class=""
                required
                value="peptocodes"
                @click="shouldShowDisclaimer = false"
              />
              <label
                for="DBCheck1"
                class="block text-sm font-medium text-gray-900 dark:text-white select-none"
                >peptocodes</label
              >
            </div>

            <div class="flex">
              <input
                v-model="inputDB"
                type="radio"
                id="DBCheck2"
                class=""
                required
                value="norine"
                @click="shouldShowDisclaimer = true"
              />
              <label
                for="DBCheck2"
                class="block text-sm font-medium text-gray-900 dark:text-white select-none"
                >norine</label
              >
            </div>
          </div>
          <div
            v-if="shouldShowDisclaimer"
            id="text1"
            class="flex flex-col text-xs self-start w-96 mt-2"
          >
            <p>
              You are using Norine database which is freely available to
              everybody.
            </p>
            <p>
              Norine: update of the nonribosomal peptide resource. Nucleic Acids
              Research, Nov. 2019, gkz1000, https://doi.org/10.1093/nar/gkz1000
            </p>
          </div>
          <!-- <div>Checked: {{ inputCode }}</div> -->

          <div class="flex flex-col self-start mt-3">
            <h1>Which representation would you like to choose?</h1>
          </div>

          <div class="flex justify-start mt-3 space-x-4">
            <div class="flex items-center">
              <input
                v-model="inputCode"
                type="radio"
                id="codeCheck1"
                class=""
                required
                value="One letter code"
              />
              <label
                for="codeCheck1"
                class="block text-sm font-medium text-gray-900 dark:text-white select-none"
                >One letter code</label
              >
            </div>

            <div class="flex">
              <input
                v-model="inputCode"
                type="radio"
                id="codeCheck2"
                class=""
                required
                value="Three letter code"
              />
              <label
                for="codeCheck2"
                class="block text-sm font-medium text-gray-900 dark:text-white select-none"
                >Three letter code</label
              >
            </div>
          </div>

          <div class="flex flex-col self-start mt-3">
            <h1>
              Would you like to run a one SMILES or a file with multiple SMILES?
            </h1>
          </div>

          <div class="flex justify-start mt-3 space-x-4">
            <div class="flex items-center">
              <input
                v-model="checkSmiles"
                type="radio"
                id="smilesCheck"
                class=""
                required
                value="SMILES"
                @click="shouldShowStringBox = true"
              />
              <label
                for="smilesCheck"
                class="block text-sm font-medium text-gray-900 dark:text-white select-none"
                >SMILES</label
              >
            </div>

            <div class="flex">
              <input
                v-model="checkSmiles"
                type="radio"
                id="fileCheck"
                class=""
                required
                value="SMILES file"
                @click="shouldShowStringBox = false"
              />
              <label
                for="fileCheck"
                class="block text-sm font-medium text-gray-900 dark:text-white select-none"
                >SMILES file</label
              >
            </div>
          </div>

          <div v-if="shouldShowStringBox">
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
          <div class="mt-6" v-if="shouldShowBox">
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
    error.value = "Please add your input.";
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
const inputCode = ref();
const inputDB = ref();
const checkSmiles = ref();
const error = ref(null);
const result = ref(null);
const shouldShowDisclaimer = ref(false);

function showDisclaimer() {
  // console.log("TEST");
  // console.log("INPUTDB: ", inputDB.value);

  shouldShowDisclaimer.value = false;

  if (inputDB.value) {
    shouldShowDisclaimer.value = true;
  }
}

function showInputBox() {
  // console.log("TEST");
  // console.log("INPUTDB: ", inputDB.value);

  shouldShowStringBox.value = false;

  if (checkSmiles.value) {
    shouldShowStringBox.value = true;
  }
}
</script>
