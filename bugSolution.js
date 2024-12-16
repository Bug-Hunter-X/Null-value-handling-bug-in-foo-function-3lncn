function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Correct handling of null values
  } else if (a === null || b === null) {
    return 0; // Correct handling of null values
  }
  return a + b; 
}