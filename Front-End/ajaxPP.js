console.log("AJAX");

function fetchData() {
    // console.log("Button is Clicked!");

    // var xhr = new XMLHttpRequest();

    // xhr.open("GET", "dataserver.json", true);
    // xhr.open("POST","dataserver.json",'Content-type': 'application/json')

    // xhr.send();

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         let result = JSON.parse(this.responseText);
    //         document.getElementById("para").innerHTML = result.buyerId;
    //     }
    // }

    let myBtn = document.getElementById("myBtn");

    let content = document.getElementById("content");

    fetch('dataserver.json', {
        method: 'get'
    }).then(
        res => res.json()
    ).then(
        data => {
            console.log(data);
            console.log(data.buyerId);
            console.log(data.firstName);
            console.log(data.lastName);
        }
    ).catch(err => console.log("Error!"));

    console.log('We are done!');
}

