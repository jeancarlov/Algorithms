![IMG_0053](https://user-images.githubusercontent.com/39811614/79526778-07753d00-8034-11ea-8b2d-d06f01bec8a4.jpg)
## How recursive functions work 

![IMG_0049 2](https://user-images.githubusercontent.com/39811614/79524241-0214f400-802e-11ea-8020-de8282797246.jpg)

# Invoke the same function with a different input until you reach your base 
###  Base Case is where the recursion ends !important!


# Second recursive function 

# Ask your Self this questions 

## Can you spot the base?
## Do you notice the different input?
## what would happen if we didn't return?

# Common recursion pitfalls

## No having a base case or case base is wrong 
## Forgeting to return  or returning the wrong thing 

### If the return 1 is taking off then the function will go never ending the return is the break

# Helper method recusion

## Helper method recursion has two functions one in and one out 

## Pure Recursion

# Pure recusion mean that the function itself is self containing, there is not external data structure and nested functions. Pure recursion is a bit more challenging than helper method but is more efficient

## Tip for Pure Recursion 

# For arrays, use methods like slice, the spread operator, and concat that make copies of array so you do not mutate them
# Remember that strings are immutable so you will need to use methods like slice, subsstr, or substring to make copies of strings
# To make copies of objects use Object.assign, or the spread operator


### Searching Algorithms
# Index search methods on arrays  indexOf , includes, find 
# This methods search each element at a time 


### Big O Linear Search  LINEAR IS GREAT FOR UNSORTED ARRAY
# Best is O(1)
# Average O(n)
#  Worst O(n)  as n growth so is the time 

### Binary Search is great O(log n) this close to 0(1) but it only works in sorted arrays (in order)  
# 	• Rather than eliminating one element at a time, You can eliminate half of the remaining elements at time.	
# Tip for binary  => Divide and Conquer 

## TIME COMPLEXITY WITH BINARY SEARCH
# Worst and Average O(log n) 
# Best Case (1)

### Elementary Sort Algorithms: Bubble, Insertion , Selection

# Bubble sort:  placing large values first into sorted position at the end. bubble sort is quadratic so in large data it will take longer (time complexity)
# Selection sort:  places small value first into sorted position at the start.
# Insertion sort: Builds up the sort by gradually creating a larger left sorted portion  --- ideal for new data to be place in continues order positions.

## Shortcommings: Elementary algorithms do not scale well in a large scale 

### Intermedate Sort Algorithms : Merge , Quick , Radix Sort  
## Why this algorithms?  faster sorting algorithms that can improve time complexity from  O(n^2)  to  O(n log n)

## Merge
#  MergeSort  O(n log n)  this actually the best we could get from a sorting algorith unless is help like in quick sort
# Mersor is good with time complexity => O(n log n) 

## Quick Sort 
# It works in the same assumption as mergeSort. We slpit the data until is individually sort. However, Works by selecting one element (pivot) ex: 5  and finding the index where the pivot should end up in the sorted array, and then we repeated the process of pivoting an element for the left and right side
# Avoid picking the first Element in array [0] as the pivot instead  try the median or random number
# Quick sort has a major array that is decomposed into subarrays in right and left, then return newArr in recursion to an order sort array as the final output. 
![IMG_0052](https://user-images.githubusercontent.com/39811614/79518164-5fa14480-801e-11ea-9ccd-60e64c78ea11.jpg)

## Comparison Sort group: 
# (bubble, insertion, selection) -lacks on time complexity O(n^2)  in a large scale good for small arrays
# (Merge, Quick) - It inprobes time complexity to O(n log n) 

### Can we do beter? is there faster Algorithms? Yes, but not by making comparisons, best case secnerio is getting  O(n log n) 

## Radix sort (Works on numbers usually binary)
# It exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number.
![radix](https://user-images.githubusercontent.com/39811614/79520164-03d9ba00-8024-11ea-883b-b237f2a0988a.png)