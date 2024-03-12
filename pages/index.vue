<template>
  <div class="flex flex-col">
    <div class="bg-violet-100 h-screen">
      <div class="p-6">
        <img class="mx-auto rounded-full w-96 h-96" src="\images\profile.png" />
      </div>
      <div class="flex justify-center text-5xl dancing-script-font">
        <p>Hello! I am Brenda Ferrari</p>
      </div>
      <div class="flex justify-center p-2 text-xl">
        <p>
          DSc in Chemistry | Cheminformatician | Artificial Inteligence |
          Computational Chemistry
        </p>
      </div>
      <div class="flex justify-center p-8 gap-1">
        <!-- https://flowbite.com/docs/typography/links/ -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        />

        <a href="https://github.com/brendaferrari" target="_blank">
          <button
            class="bg-black hover:bg-slate-800 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"
          >
            <i class="fab fa-github mr-1"></i> GitHub
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/brenda-ferrari-b04bb2b4/"
          target="_blank"
        >
          <button
            class="bg-blue-800 hover:bg-blue-700 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"
          >
            <i class="fab fa-linkedin mr-1"></i> LinkedIn
          </button>
        </a>
        <a href="https://orcid.org/0000-0001-5609-0947" target="_blank">
          <button
            class="bg-lime-600 hover:bg-lime-500 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"
          >
            <i class="fab fa-orcid mr-1"></i> ORCID
          </button>
        </a>
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          onclick="smoothScroll(document.getElementById('second'))"
        >
          <ChevronDoubleDownIcon
            class="hover:bg-gray-200 dark:hover:bg-gray-800 animate-bounce h-10 w-10 mt-2 md:flex"
          />
        </button>
      </div>
    </div>

    <div class="flex second h-screen bg-violet-200" id="second">
      <div class="flex flex-col space-y-4 items-center basis-2/5 px-12 py-12">
        <div class="flex justify-start dancing-script-font text-5xl">
          <h3>About me</h3>
        </div>
        <div class="box-content bg-violet-400 rounded-full h-2 w-16"></div>
        <span class="text-justify"
          >My name is Brenda Ferrari and I am chemistry PhD student working on
          my bio/cheminformatics skills. I write codes and blog posts to share
          concepts I have learned! If you're interested to learn with my codes
          feel free to explore!</span
        >
      </div>

      <div class="flex flex-col items-center basis-3/5 px-12 py-12">
        <h3 class="text-3xl md:text-5xl dark:text-white dancing-script-font">
          Skills
        </h3>
        <div class="flex">
          <div>
            <h4 class="flex justify-end p-4">Chemistry</h4>
            <ProgressBarReversed />
            <ProgressBarReversed />
            <ProgressBarReversed />
            <ProgressBarReversed />
            <ProgressBarReversed />
          </div>
          <!-- <div>
            <h4 class="p-4">Computation</h4>
            <ProgressBar :percentage="0" />
            <ProgressBar :percentage="25" />
            <ProgressBar :percentage="50" />
            <ProgressBar :percentage="75" />
            <ProgressBar :percentage="100" />
          </div> -->
          <div>
            <h4 class="p-4">Computation</h4>
            <div v-for="(skill, index) in skills" :key="index">
              <ProgressBar :percentage="skill.percentage" :name="skill.name" />
            </div>
            <!-- <ProgressBar :percentage="0" />
            <ProgressBar :percentage="25" />
            <ProgressBar :percentage="50" />
            <ProgressBar :percentage="75" />
            <ProgressBar :percentage="100" /> -->
          </div>
        </div>
      </div>
    </div>

    <div class="bg-violet-100 h-screen">This is my work!</div>
  </div>
  <!-- <article class="prose dark:prose-invert max-w-none">
      <ContentDoc path="/" />
  </article> -->
</template>

<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/outline";

const skills = ref([
  {
    percentage: 0,
    name: "modelling",
  },
  {
    percentage: 25,
    name: "cat",
  },
  {
    percentage: 50,
    name: "cat",
  },
  {
    percentage: 75,
    name: "cat",
  },
  {
    percentage: 100,
    name: "cat",
  },
]);

// https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click
window.smoothScroll = function (target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};
</script>
