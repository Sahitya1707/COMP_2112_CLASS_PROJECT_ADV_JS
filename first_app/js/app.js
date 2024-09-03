// create an immediately Invoked Function Expression (IIFE) to run at startup
(function () {
  let Start = () => {
    console.log("App Started");
    let x = 1;
    console.log(x);
  };

  window.addEventListener("load", Start);
})();
