function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This is wrong!
  }
  return a + b; 
}