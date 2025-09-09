function go() {
  const nums = document.getElementById("nums").value;
  let numArr = nums
    .split(",")
    .map((item) => item.trim())
    .map(Number);
  let str = "п. ";
  let last = 0;
  str += numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] + 1 == numArr[i + 1]) {
      last = numArr[i + 1];
    } else {
      if (last == 0) {
        if (i!=numArr.length-1){
          str += ", ";
          str += numArr[i + 1];
        }
      } else {
        str += "-";
        str += last;
        last = 0;
        if (i!=numArr.length-1){
          str += ", ";
          str += numArr[i + 1];
        }
      }
    }
  }
  document.getElementById("str").value = str;
}
