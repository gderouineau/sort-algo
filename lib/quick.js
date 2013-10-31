
module.exports = function(array){

    var size = array.length;

    return(quickSort(array , 0 , size - 1));
}

function exchange(array , a , b){

    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    return(array);
}
function quickSort(array , start , end){

    var left  = start - 1 ;
    var right = end   + 1 ;
    const pivot = array[start];

    if( start >= end){ // array.lengh == 0
        return(array);
    }

    while(true){
        console.log(array);
        do right-- ; while(array[right] > pivot);
        do left++  ; while(array[left] < pivot);

        if(left < right){
            array = exchange(array, left, right);
        }
        else
            break;
    }
    array = quickSort(array , start , right);
    array = quickSort(array , right + 1 , end);
    return array;
}