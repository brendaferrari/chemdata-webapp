<template>
  <div class="flex h-screen justify-center">
    <div class="flex flex-col">
      <div class="flex flex-col">
        <h1 class="p-6 text-3xl">PeptoCodes</h1>
        <p>
          Transform amino acid smiles to one letter code or three letter code
          for later analysis.
        </p>
        <!-- <img
          class="mx-auto w-3/5 rounded-lg m-6"
          src="~/assets/images/Peptocodes.png"
        /> -->
      </div>

      <div class="flex flex-col w-full h-full mt-24">
        <label
          for="input_smiles"
          class="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Input SMILES</label
        >
        <input
          type="text"
          id="input_smiles"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="SMILES here"
          required
        />
      </div>
    </div>
  </div>
</template>
