function calculate() {
    var display = document.querySelector('.form-control')
    let calReg = RegExp('^[0-9\\.\\+\\-\\*\\/]+$')
    //if the input meets the requirement of the Regex rule, it will go into it.
    if (calReg.test(display.value)) {
        try {
            display.value = eval(display.value)
        } catch (err) {
            display.value = "Error"
        }
    } else {
        display.value = "Error"
    }

    return false
}

// //Approach 1
// document.addEventListener('click', e => {
//     //"e" stands for everthing that has being clicked.
//     //variable display stands for the result screen.
//     var display = document.querySelector('.form-control')

//     if (e.target.matches('.btn-light, .btn-secondary')) {
//         //if there are error, it will clean the error first
//         if (display.value === "Error") {
//             display.value = e.target.value

//             //if there is no error, it will be added to the content directly.
//         } else {
//             display.value += e.target.value
//         }
//     }
//     //if the usere clicked "C", it will clean the display bar.
//     else if (e.target.matches('.btn-info')) {
//         display.value = ""
//     }
// }
// )



//Approach 2
window.addEventListener('load', function () {
    var display = document.querySelector('.form-control')
    var keys = document.querySelectorAll('[type=button]')
    keys.forEach(e => {
        e.onclick = function () {
            //If it is an erroc, it will be replaced by numbers or operator signs.
            if (display.value === "Error" && e.value != "C") {
                display.value = e.value;
            } else {
                //if it is "C", then clean the screen
                if (e.value === "C") {
                    display.value = "";
                } else {
                    // if it is a number, append it to the content
                    display.value += e.value
                }
            }
        }
    });
})