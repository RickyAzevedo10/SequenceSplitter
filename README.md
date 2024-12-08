# Problem Description

You are given two paper strips, each containing a random permutation of numbers in the range [1, 2, ..., N], with no repetitions. Your task is to cut the original paper strip into several pieces and rearrange those pieces to form the desired sequence. The goal is to determine the minimum number of pieces required to achieve this transformation efficiently.

## Function Requirements

Write a function that takes two arrays (original and desired) and returns the minimum number of cut pieces required to rearrange the original array into the desired array. The function should be optimized for time complexity.

## Example

For the input:
original = [1, 4, 3, 2]
desired = [1, 2, 4, 3]

The output should be 3, as the minimum number of pieces required to transform the original sequence into the desired sequence is 3. The pieces would be:
(1)
(4, 3)
(2)

## Approach

1- Iterate through the desired sequence: Starting from the first element, find the corresponding position of each element in the original array.
2- Check continuity: If the current element from the desired sequence appears consecutively in the original sequence, continue the current piece. Otherwise, start a new piece.
3- Count pieces: Track and return the total number of pieces needed to form the desired sequence.
