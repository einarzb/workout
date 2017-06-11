/**************************************************************************
Task 1 - Write a function arraySort, that accepts an array and sorts it in asscending order.
The function will receive the array to sort, and a reference to a function that will be
used to compare array elements.
function arraySort(toSortArr, cmpFunc)
**************************************************************************/

function arraySort(toSortArr) {
  //invoke compare function
  cmpFunc(toSortArr);
}

var cmpFunc = function(toSortArr) {
  //setting up boolean flag (once a swap didnt occure)
    var swapFlag = false;
  //scanning the array
    while (!swapFlag) { //condition is true
        swapFlag = true; //flip flag true b/c there was a swap between indexs
        for (var i = 0; i < toSortArr.length - 1; ++i) {
          //initialize
            var nextIndex = i + 1;
            var temp = toSortArr[nextIndex];
            //if 
            if (toSortArr[i] > toSortArr[nextIndex]) {
                toSortArr[nextIndex] = toSortArr[i];
                toSortArr[i] = temp;
                swapFlag = false; //and flip again to false once the index wasnt swapped
            }
        }//end for
      }//end while
      console.log(toSortArr)
return toSortArr;
}

var toSortArr = [32, 445,21,2,7,85,13,5,9];
arraySort(toSortArr);
