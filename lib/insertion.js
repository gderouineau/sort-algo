
module.exports = function(array){

    var size = array.length;
    var i , j ;

    for(i = 1 ; i < size ; i++){
        var element = array[i];
        for(j = i ; j > 0 && array[j - 1] > element ; j--){
            array[j] = array[j-1];
        }
        array[j] = element;
    }
    return(array);
};