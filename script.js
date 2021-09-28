const addPair = document.getElementById("add-pair");
const removePair = document.getElementById("remove-pair");
var original = document.querySelector('#elem1');
var i = 0;

function cloneItem() {
    var clone = original.cloneNode(true);

    // Update the ID and add a class


    // Inject it into the DOM
    original.after(clone);

}


addPair.addEventListener('click',
    cloneItem)
// Create a copy of it