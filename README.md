# Socially-Guided Allocation of Attention in the Memory Encoding of Spoken Language

This repository contains all materials required to reconstruct analyses and run the three experiments associated with my dissertation *Socially-Guided Allocation of Attention in the Memory Encoding of Spoken Language*.

To reconstruct statistical analyses, download the `analysis` folder. The analysis for each chapter is in a separate `.Rmd` file. The only thing you should need to change is the working directory, which should point to `analysis`. Data is stored in the `Data` directory. Main experiment results are stored in the files `C2.csv`, `C3.csv`, and `C4.csv`. The other files there are for additional analyses. The `Models` directory includes `.txt` printouts of all of the model summaries reported in the dissertation. 

The analyses associated with Chapters 2 \& 4 should be relatively straightforward to run. For Chapter 3, the script used to bootstrap the memorability composite score is in its own file, which is called `C3_calculate_memorability`. This code is relatively slow to run, so the output values are also stored in a file, `C3_mem.csv`, which can be used for the main experiment analysis. The split-half consistency test in Chapter 3 relies on a separate bootstrapping procedure. The results of that are stored in the file `C3_split_half.csv`, but can also be generated from scratch in lines 318--457. 

The experiments all use the study/test recognition memory paradigm with spoken sentences heard in both blocks. To run the experiments in your own browser, follow these links for [Chapter 2](https://willclapp.github.io/socially-guided-attention/exp/exp.html), [Chapter 2](https://willclapp.github.io/socially-guided-attention/exp/exp.html), or [Chapter 4](https://willclapp.github.io/socially-guided-attention/exp/exp.html).




