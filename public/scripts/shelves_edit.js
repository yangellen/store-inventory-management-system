/*
shelves_edit.js
Author: George Kochera
Description: Enables the ability to click on a row in the inventory page and edit the shelves capacity.
*/

// Find all the product rows on the page.
var shelf_row = document.getElementsByClassName('gt_product')

// Add event listeners to all the rows so when we click on them, they open a modal.
for (var row of shelf_row) {
    (function (row){
        row.addEventListener('click', function(){
            
            // Get the current values from the table on the screen.
            var min = row.querySelector('.gt_shelf_min_threshold').innerHTML
            var max = row.querySelector('.gt_shelf_max_threshold').innerHTML
            var id = row.querySelector('.gt_shelf_id').innerHTML
            console.log(min, max)
            
            // Populate the modal with the current values.
            var modal_input_min = document.querySelector('#modal_shelf_minimum_threshold')
            var modal_input_max = document.querySelector('#modal_shelf_maximum_threshold')
            var modal_input_id = document.querySelector('#modal_shelf_id')
            modal_input_min.value = min
            modal_input_max.value = max
            modal_input_id.value = id

            // Make the modal appear.
            $("#shelvesEditModal").modal("show")
        })
    }(row))
}

// TODO: Data Validation
// (function() {
//     window.addEventListener('load', function() {
//         var forms = document.getElementsByClassName('needs-validation')

//         var validation = Array.prototype.filter.call(forms, function(form) {
//             form.addEventListener('submit', function(event) {
//                 var modal_input_min = document.querySelector('#modal_shelf_minimum_threshold').value
//                 var modal_input_max = document.querySelector('#modal_shelf_maximum_threshold').value
//                 if (modal_input_max < modal_input_min || modal_input_min > modal_input_max) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated')
//             }, false);
//         });
//     }, false)
// })()

var form = document.getElementsByClassName('needs-validation')[0]
var input_min = document.querySelector('#modal_shelf_minimum_threshold').value
var input_max = document.querySelector('#modal_shelf_maximum_threshold').value

form.addEventListener('submit', function(event) {
        if (form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated')
})

function form_shelves_check_min() {
    if (input_min.value > input_max.value) {
        return false
    } else {
        return true
    }
}