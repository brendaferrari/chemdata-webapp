<template>
  <div class="flex h-auto justify-center">
    <div class="flex flex-col mb-48">
      <div class="flex flex-col justify-center">
        <h1 class="p-4 self-center text-3xl">PeptoCodes</h1>
        <p>
          Transform amino acid smiles to one letter code or three letter code
          for later analysis.
        </p>
      </div>

      <form @submit.prevent="sendInput()">
        <div class="flex flex-col self-start w-full mt-10 mb-10">
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
                value="one letter code"
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
                value="three letter code"
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
                value="smiles"
                @click="
                  shouldShowStringBox = true;
                  shouldShowFileBox = false;
                "
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
                @click="
                  shouldShowStringBox = false;
                  shouldShowFileBox = true;
                "
              />
              <label
                for="fileCheck"
                class="block text-sm font-medium text-gray-900 dark:text-white select-none"
                >SMILES file</label
              >
            </div>
          </div>

          <div class="" v-if="shouldShowStringBox">
            <label
              for="input_smiles"
              class="flex justify-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
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

            <form @submit.prevent="copyExample()">
              <div class="flex flex-col mt-8">
                <div class="flex max-w-xl text-sm italic mb-2">
                  <p>
                    You can use the following example to test the conversion to
                    one letter code using the peptocodes database:
                  </p>
                </div>

                <div class="flex justify-center">
                  <div class="flex relative">
                    <!-- The text field -->
                    <input
                      class="self-center max-h-0.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      value="N[C@@]([H])(CCCNC(=N)N)C(=O)N[C@@]([H])([C@]([H])(O)C)C(=O)N[C@@]([H])(CCCCN)C(=O)N[C@@]([H])(CCCNC(=N)N)C(=O)O"
                      id="myInput"
                      disabled
                      readonly
                    />
                  </div>

                  <div class="flex absolute mt-1 ml-28">
                    <!-- The button used to copy the text -->
                    <!-- # TODO UPDATE THE ALERT MESSAGE -->
                    <TooltipClick text="Copied!">
                      <button
                        class="max-h-6 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
                      >
                        Copy
                      </button>
                    </TooltipClick>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div v-if="shouldShowFileBox">
            <label
              for="input_file"
              class="flex justify-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Input file (Under Development)</label
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
            class="button self-center mb-12 bg-gray-200 dark:bg-gray-600 hover:bg-violet-300 dark:hover:bg-violet-500 rounded-lg w-24 h-8"
          >
            Submit
          </button>
        </div>
        <div class="flex justify-center" v-if="error">{{ error }}</div>
        <div class="flex flex-col self-center max-w-xl" v-if="result">
          <div class="flex self-center">
            <h1>Results</h1>
          </div>
          <div class="flex self-center">
            {{ output }}
          </div>
          <div class="flex self-center">
            {{ outputError }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import TooltipClick from "~/components/tooltip-click.vue";

const inputSmiles = ref();
const inputCode = ref();
const inputDB = ref();
const checkSmiles = ref();
const error = ref(null);
const result = ref(null);
const output = ref(null);
const outputError = ref();
const shouldShowDisclaimer = ref(false);
const shouldShowStringBox = ref(false);
const shouldShowFileBox = ref(false);

async function sendInput() {
  // Result vars
  error.value = null;
  result.value = null;

  // Check if there is an error
  if (!inputSmiles.value) {
    error.value = "Please add your input.";
    return;
  }

  // Get data from API
  const res = await fetchSmiles();

  // Show the result to the user
  result.value = JSON.stringify(res);
  output.value = res.result[0];
  outputError.value = res.result[1];
}

const fetchSmiles = async () => {
  const config = useRuntimeConfig();
  const domain = config.public.apiServer || "http://localhost:8080";
  const route = `${domain}/peptocodes`;
  const body = {
    inputSmiles: inputSmiles.value,
    inputCode: inputCode.value,
    inputDB: inputDB.value,
    checkSmiles: checkSmiles.value,
  };
  console.log(body);
  const res = await $fetch(route, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

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

function showInputFileBox() {
  // console.log("TEST");
  // console.log("INPUTDB: ", inputDB.value);

  shouldShowFileBox.value = false;

  if (checkSmiles.value) {
    shouldShowFileBox.value = true;
  }
}

async function copyExample() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
}

useSeoMeta({
  title: "PepToCodes",
  ogTitle: "PepToCodes",
  description:
    "Transform amino acid smiles to one letter code or three letter code for later analysis",
  ogDescription:
    "Transform amino acid smiles to one letter code or three letter code for later analysis",
});
</script>
