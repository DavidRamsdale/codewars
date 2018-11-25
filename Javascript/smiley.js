//return the total number of smiling faces in the array
function countSmileys(arr) {
    const smile = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    let count = 0;
    
    for (let m=0; m<arr.length; m++){
      for (let n=0; n<smile.length; n++){
        if (arr[m]===smile[n]){
          count++;
        }
      }
      }
    return count;
    }