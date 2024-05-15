---
layout: post
title: pymol integration memo!
publishedAt: 2023-08-28 13:30 +0800
# last_modified_at: 2020-10-01 01:08:25 +0800
tags: [pymol, jupyter notebook, chemistry]
toc: true
---

Hello everyone!

Just a simple update to you all and myself (of course): you can integrate visualization using pymol in jupyter notebook!

So, first things first it is necessary to create your environment. I normally use Windows OS, so this tutorial is focused on instalation on Windows. First you need to create the conda environment,

```
conda create --name pymol-int python=3.11
```

To set the environment, it is important to install the pymol open source version, using the following command:

```
conda install -c conda-forge pymol-open-source
```

After

This past month I had to re-do some Molecular Dynamics (MD) analysis and, since before that, I spent a lot of time working with projects that were more Machine Learning related, I had to remember the best way to perform an MD analysis. That's why came to me the idea to write a quick tutorial to help future me (let's never forget to write tutorials!!) and to help anyone else that needs a head start on how to do MD analysis.

The objective of this tutorial is not to teach how to perform a MD simulation, for that I think that [mdtutorials](http://www.mdtutorials.com/gmx/) has excellent tutorials. By the way the simulation I am going to use as exemple here today I perfomed following the [Tutorial 1: Lysozyme in Water](http://www.mdtutorials.com/gmx/lysozyme/index.html). This simulations are being perfomed using WSL2 on Ubuntu 18.04 with GROMACS 2020.4.
