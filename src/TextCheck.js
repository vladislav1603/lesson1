function TestClass() {
  const str1 = "Java";
  const str2 = "Java";
  const str3 = "C++";
 
 
  if (str1.equals(str2)) {
      alert("Statement is true");
  } else {
    alert("Statement is false");
  }
  // => Statement is true
 
  if(str1.equals(str3)) {
    alert("Statement is true");
  } else {
    alert("Statement is false");
  }
}