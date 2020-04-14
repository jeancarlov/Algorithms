## How recursive functions work 

![IMG_0049](https://user-images.githubusercontent.com/39811614/79053129-eada9e80-7c08-11ea-9130-52c00a53706b.jpg)

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
