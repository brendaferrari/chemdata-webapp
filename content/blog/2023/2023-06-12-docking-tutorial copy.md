---
layout: post
title: Molecular docking memo!
publishedAt: 2023-06-12 13:30 +0800
# last_modified_at: 2020-10-01 01:08:25 +0800
tags: [molecular-docking, AutoDock4, chemistry]
toc: true
---

Hello everyone!

Following the advice of past myself, I want to leave this tutorial here to help me remember the correct pipeline to perform a molecular docking process. I hope this post also can help you in your endeavours.

So, first things first, we need a software to perform the molecular docking. Of course, there is a lot of [possible options](https://en.wikipedia.org/wiki/List_of_protein-ligand_docking_software) but today I am going to use [AutoDock](https://autodock.scripps.edu/).

First we need to install, so let's go!

Just a friendly reminder, I am performing this pipeline on a Windows 10 OS, but if you are able to use a Linux machine, I think the experience could be much better.

## Setting up our avatar: Autodock installation

We need to install 2 different software: [AutoDock4](https://autodock.scripps.edu/download-autodock4/) and [AutoDockTools](https://ccsb.scripps.edu/mgltools/downloads/). Why? The AutoDock software runs on command line, so the devs also provided AutoDockTools as a graphical interface to make it more simple for us to generate all the files we need.

Of course, if you prefer everything on the terminal screen, do not worry! You may skip AutoDockTools and use [AutoDock Vina](https://vina.scripps.edu/downloads/) to generate the files. For Python users, you may refer to [this docs](https://autodock-vina.readthedocs.io/en/latest/installation.html) for scripting and usage.

Focusing on our pipeline, we are going to install AutoDock4. You may install it normally as any .exe file. The same for AutoDockTools. Just one information: I had a pretty hard time if AutoDockTools since it sometimes decides not to work. The error I observed is [this one](https://www.researchgate.net/post/AutoDock_426_opeing_error). I could solve it by uninstallig it directly from the installation directory, reseting my computer ad reinstalling again. I do not kow how common this is for Linux or Mac users, but if you want to avoid this situation maybe Vina could be better in this case.

For visualizing the results and also other tasks on the pipeline I recommend using [Discovery Studio](https://discover.3ds.com/discovery-studio-visualizer-download). You just need to register and after that you may download the software free.

## Before we begin a quick word from "setting up the environment"

So, to make things easier for ourselves we could create a new folder for the docking simulations in which we are going to put all the necessary files for our work. Since AutoDock software runs on command line, we need the application files at hand to use when we are going to perform the docking. For that we can go to the directory path where AutoDock was installed and we are going to copy "autodock4.exe" and "autogrid4.exe" and we are going to paste that on our working directory.

After this, we also need the parameters for the atoms we are going to simulate on our docking process. You can download that in [here](https://github.com/marekolsak/fastgrid/blob/master/autogrid_original_4_2_1_ref/autodock/AD4.1_bound.dat) and paste it on the working directory.

Also, you need to paste the pdb file of the protein you want to perform the molecular docking and also the ligand you are going to use as a mol2 file. If you need to create the ligand yourself, I recommend using

This past month I had to re-do some Molecular Dynamics (MD) analysis and, since before that, I spent a lot of time working with projects that were more Machine Learning related, I had to remember the best way to perform an MD analysis. That's why came to me the idea to write a quick tutorial to help future me (let's never forget to write tutorials!!) and to help anyone else that needs a head start on how to do MD analysis.

The objective of this tutorial is not to teach how to perform a MD simulation, for that I think that [mdtutorials](http://www.mdtutorials.com/gmx/) has excellent tutorials. By the way the simulation I am going to use as exemple here today I perfomed following the [Tutorial 1: Lysozyme in Water](http://www.mdtutorials.com/gmx/lysozyme/index.html). This simulations are being perfomed using WSL2 on Ubuntu 18.04 with GROMACS 2020.4.
