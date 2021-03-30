console.log("AJAX");

//Ajax apis - XHE, Fetch, jQuery, axios, Request

//AJAX
// function ajaxCall() {
//     //create
//     var request = new XMLHttpRequest();

//     //GET->To Retrieve Data, Post->To Upload Data
//     request.open("GET", "dataserver.txt");

//     //Sending request
//     request.send();

//     request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200) {
//             document.getElementById("ajxresponse").innerHTML = this.responseText;
//         }
//     };

// }


// JSON
// function ajaxCall() {
//     var request = new XMLHttpRequest();


//     request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200) {
//             var result = JSON.parse(request.responseText);
//             document.getElementById("FirstName").innerHTML = result.firstName;
//             document.getElementById("LastName").innerHTML = result.lastName;
//         }

//     };
//     request.open("GET", "dataserver.txt");
//     request.send();
// }

// Fetch
// function ajaxCall() {
//     fetch('dataserver.txt', {
//         method: 'get'
//     })
//         .then(response => response.json())
//         .then(jsondata => console.log(jsondata.firstName + " " + jsondata.lastName))
//         .catch(err => { console.log("no way!! some error occured now!") })
// }

function ajaxCall() {
    // var xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         var result = JSON.parse(xhr.response);
    //         document.getElementById("FirstName").innerHTML = result.buyerId;
    //         document.getElementById("LastName").innerHTML = result.buyerName;
    //     }

    // }
    // xhr.open("GET", "dataserver.json");
    // xhr.send();
}