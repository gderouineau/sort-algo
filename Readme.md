
## Insertion sort

Complexity :  worst : n2 , average n2 , best n where n is the number of elements in the given array

Fast algorithm if the array contain a maximum of 15 elements.

```js
var insertion = require('sort-algo').insertion;

var array  = [ 4 , 6 , 3 , 7 , 1 , 9 , 2 ] ;

insertion(array, function(err, sortArray){
    if(err) console.log(err);
    console.log(sortArray);
});
// return [ 1 , 2 , 3 , 4 , 6 , 7 , 9 ]

```

### Insertion Synchronous sort

Same as insertion sort but the synchronous way

```js

var insertionSyncSort = require('sort-algo').insertionSync;

var array  = [ 4 , 6 , 3 , 7 , 1 , 9 , 2 ] ;

insertionSyncSort(array);
// return [ 1 , 2 , 3 , 4 , 6 , 7 , 9 ]

```



## Quick sort

Complexity :  worst : n2 , average n log n , best n log n  where n is the number of elements in the given array

cf : wiki Quick sort

```js
var quickSort = require('sort-algo').quick;

var array  = [ 4 , 6 , 3 , 7 , 1 , 9 , 2 ] ;

quickSort(array, function(err, result){
    if(err) console.log(err);
    console.log(result);
});
// return [ 1 , 2 , 3 , 4 , 6 , 7 , 9 ]

```

### Quick sort Synchronous

Same as quick sort but the synchronous way

```js

var quickSyncSort = require('sort-algo').quickSync;

var array  = [ 4 , 6 , 3 , 7 , 1 , 9 , 2 ] ;

quickSyncSort(array);
// return [ 1 , 2 , 3 , 4 , 6 , 7 , 9 ]

```