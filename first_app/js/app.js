// create an immediately Invoked Function Expression (IIFE) to run at startup
(function () {
  let Start = () => {
    console.log("App Started");
    let x = 1;
    console.log(x);

    // fetch & show contacts
    getContacts((data) => {
      let list = document.getElementById("contactList");
      // create a list items for each contact
      data.forEach((contact) => {
        let listItem = document.createElement("li");
        listItem.innerText = contact.Name;
        listItem.className = "list-group-item";
        list.appendChild(listItem);
      });
    });
  };

  window.addEventListener("load", Start);
})();

let updateCounter = (() => {
  // now counter gets created and initiialized to zero only once
  let counter = 0;
  return () => {
    // every click can use the same counter var now
    counter++;
    document.getElementById("counter").innerHTML = counter;
  };
})();

let getContacts = (callback) => {
  // use jquery to read then display our json file contents
  // the data param gets filled once all the data is read from the file
  $.getJSON("./data/contact.json", (data) => {
    callback(data);
  });
};
