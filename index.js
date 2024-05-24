function receivesAFunction(callback) {
    console.log("Calling the callback function...");
    callback();
  }
  function returnsANamedFunction() {
    // Define a named function inside
    function namedFunction() {
      console.log("Named function has been called!");
    }
    // Return the named function
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("Anonymous function has been called!");
    };
  }