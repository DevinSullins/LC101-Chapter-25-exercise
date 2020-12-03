let submit = document.getElementById("testParameters")
let form = document.querySelector("form")
let inputs = [
    "testName",
    "testDate",
    "boosterCount",
    "windRating"
]
form.addEventListener("submit", function (event) {
    let testName = document.queryselector("input[name=testName]");
    let testDate = document.queryselector("input[name=testDate]");
    let boosterCount = document.queryselector("input[name=boosterCount]");
    let windRating = document.queryselector("input[name=windRating]");    // let validationScore=0
    if (testName.value === "" || testDate.value === "" || boosterCount.value === "" || windRating.value === "" || ){
        event.preventDefault;
    };
    console.log("event listener ran")
});
