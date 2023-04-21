document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("calc-display");
    const display2 = document.getElementById("calc-display2")
    const buttons = document.getElementsByClassName("btn");



    let currentValue = "0";
    let prevValue2 = "";

    display.value = currentValue;
    display2.value = prevValue2;

    function factorial(n) {



        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }



    }



    function evaluateResult() {






        let convertedValue = currentValue
            .replace("X", "*")
            .replace("÷", "/")
            .replace("%", "*.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("tan", "Math.tan")
            .replace("pi", "Math.PI")
            .replace("ln", "Math.log")
            .replace("e", "Math.E")
            .replace("√", "Math.sqrt")

            .replace("arcSin", "Math.asin")
            .replace("arcTan", "Math.atan")
            .replace("arcCos", "Math.acos")



        const result = eval(convertedValue);

        currentValue = result.toString();
        display.value = currentValue;

      



    }





    document.getElementById("Fx").onclick = function () {
        document.getElementById("Numerical_buttons").style.display = "none";
        document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "none";
        document.getElementById("Scientific_buttons_smallscreen").style.display = "flex";
    }


    document.getElementById("123").onclick = function () {

        document.getElementById("Scientific_buttons_smallscreen").style.display = "none";
        document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "none";
        document.getElementById("Numerical_buttons").style.display = "flex";
    }

    document.getElementById("Inv1").onclick = function () {

        document.getElementById("Scientific_buttons_smallscreen").style.display = "none";
        document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "flex";
    }

    document.getElementById("Inv2").onclick = function () {


        document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "none";
        document.getElementById("Scientific_buttons_smallscreen").style.display = "flex";
    }

    document.getElementById("Inv3").onclick = function () {

        document.getElementById("Scientific_buttons_for_lg_screen").className = "row gx-1 d-lg-none d-none";
        document.getElementById("Scientific_buttons_on_Inv_click_for_lg_screen").style.display = "flex";
    }

    document.getElementById("Inv4").onclick = function () {

        document.getElementById("Scientific_buttons_on_Inv_click_for_lg_screen").style.display = "none";
        document.getElementById("Scientific_buttons_for_lg_screen").className = "row gx-1 d-lg-flex d-none";
    }

    document.getElementById("AC").onclick = function () {

        document.getElementById("AC").className = "btn btn-light w-100 mt-2 border d-none";
        document.getElementById("CE").className = "btn btn-light w-100 mt-2 border d-block";
        
    }

    var numElements = document.getElementsByClassName("num");
for (var i = 0; i < numElements.length; i++) {
  numElements[i].onclick = function () {

    document.getElementById("AC").className = "btn btn-light w-100 mt-2 border d-none";
    document.getElementById("CE").className = "btn btn-light w-100 mt-2 border d-flex";
    
}
}

    document.getElementById("equals").onclick = function () {

        document.getElementById("CE").className = "btn btn-light w-100 mt-2 border d-none";
        document.getElementById("AC").className = "btn btn-light w-100 mt-2 border d-flex";
        
    }



   

   



    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function () {
            // alert("button clicked!");


            const value = buttons[i].innerText;





                if (value == "CE") {

                 

                     currentValue=currentValue.slice(0,-1);
                        display.value=currentValue;
             
                

               
                   
    
                }



            else if (value == "AC") {


             
                prevValue2 = currentValue;
                display2.value = "Ans = " + prevValue2;
               
               
                   currentValue = "0";
                   display.value = currentValue;
               

            }

            else if (value == "Inv") {


                currentValue = "";
                display.value = currentValue;



            }

            else if (value == "x!") {


                const prevValue = currentValue;
                currentValue += "!";
                display.value = currentValue;



            }

            else if (value == "sin-1") {



                currentValue = "arcSin";
                display.value = currentValue;


                // console.log(currentValue);



            }
            else if (value == "tan-1") {
                currentValue = "arcTan";
                display.value = currentValue;

            }

            else if (value == "cos-1") {
                currentValue = "arcCos";
                display.value = currentValue;

            }

            else if (value == "=") {

              
                if (currentValue.includes("!")) {
                    currentValue = currentValue.slice(0, -1)
                    let result = factorial(currentValue);
                    currentValue = result.toString();
                    display.value = currentValue;

                    currentValue = "0";

                }
                else {

                    prevValue2 = currentValue;
                    display2.value = prevValue2 + "=";
                    evaluateResult();
                   
                    if(value=="AC"){

                        prevValue2 = currentValue;
                    display2.value = "Ans=" + prevValue2;
                    currentValue = "0";
                    display.value = currentValue;


                    }
                    if(value=="X"||value=="/"||value=="+"||value=="-"||value=="%"||value=="("||value==")")
                    
                    {

                        currentValue += value;
                        display.value = currentValue;


                 } 


                }
            }


            else if (value == "Fx" || value == "123") {

                value = currentValue;
            }
            else {

                currentValue += value;

                if(display.value=="0")

                {currentValue = currentValue.slice(1);}

                 display.value = currentValue;
                

            };


        })
    };


});
