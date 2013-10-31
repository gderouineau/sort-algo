
## Insertion sort

Complexity :  worst : n2 , average n2 , best n where n is the number of elements in the given array

Fast algorithm if the array contain a maximum of 15 elements.

```js
var insertion = require('sort-algo').insertion;

var array  = [ 4 , 6 , 3 , 7 , 1 , 9 , 2 ] ;

insertion(array);
// return [ 1 , 2 , 3 , 4 , 6 , 7 , 9 ]

```



## Quick sort

Complexity :  worst : n2 , average n log n , best n log n  where n is the number of elements in the given array

cf : wiki Quick sort

```js
var quickSort = require('sort-algo').quick;

var array  = [ 4 , 6 , 3 , 7 , 1 , 9 , 2 ] ;

quickSort(array);
// return [ 1 , 2 , 3 , 4 , 6 , 7 , 9 ]

```
