document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("calc-display");
    const display2 = document.getElementById("calc-display2");
    const buttons = document.getElementsByClassName("btn");
    const Rad = document.getElementById("Rad");
    const Deg = document.getElementById("Deg");

    let mode = "rad";

    // console.log(Rad.innerText);
    // console.log(Deg.innerText);


    //to create an array of the numbers.
    const numbers = document.getElementsByClassName("num");
    const numberTextArray = [];

    for (let i = 0; i < numbers.length; i++) {
        numberTextArray.push(numbers[i].innerText);
    }


    //to create an array of the scientific buttons.
    const Scientific_buttons = document.getElementsByClassName("btn-secondary");
    const S_buttonTextArray = [];

    for (let i = 0; i < Scientific_buttons.length; i++) {
        S_buttonTextArray.push(Scientific_buttons[i].innerText);
    }

    //to create an array of the mathematical operator.
    const mOperator = document.getElementsByClassName("operator");
    const mOperatorTextArray = [];

    for (let i = 0; i < mOperator.length; i++) {
        mOperatorTextArray.push(mOperator[i].innerText);
    }







    let currentValue = "0";
    let prevValue2 = "";

    display.value = currentValue;
    display2.value = prevValue2;


    //factorial=x!











    // document.getElementById("Fx").onclick = function () {
    //     document.getElementById("Numerical_buttons").style.display = "none";
    //     document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "none";
    //     document.getElementById("Scientific_buttons_smallscreen").style.display = "flex";
    // }


    // document.getElementById("123").onclick = function () {

    //     document.getElementById("Scientific_buttons_smallscreen").style.display = "none";
    //     document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "none";
    //     document.getElementById("Numerical_buttons").style.display = "flex";
    // }

    // document.getElementById("Inv1").onclick = function () {

    //     document.getElementById("Scientific_buttons_smallscreen").style.display = "none";
    //     document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "flex";
    // }

    // document.getElementById("Inv2").onclick = function () {


    //     document.getElementById("Scientific_buttons_smallscreen_on_Inv_click").style.display = "none";
    //     document.getElementById("Scientific_buttons_smallscreen").style.display = "flex";
   // })

    document.getElementById("Inv3").onclick = function () {

        document.getElementById("Scientific_buttons_for_lg_screen").className = "row gx-1 d-lg-none d-none";
        document.getElementById("Scientific_buttons_on_Inv_click_for_lg_screen").style.display= "flex";
    }

    document.getElementById("Inv4").onclick = function () {

        document.getElementById("Scientific_buttons_on_Inv_click_for_lg_screen").style.display = "none";
        document.getElementById("Scientific_buttons_for_lg_screen").className = "row gx-1 d-flex";
    }

    document.getElementById("AC").onclick = function () {

        document.getElementById("AC").style.display = "none";
        document.getElementById("CE").style.display = "flex";

    }

    var numElements = document.getElementsByClassName("num");
    for (var i = 0; i < numElements.length; i++) {
        numElements[i].onclick = function () {

            document.getElementById("AC").style.display = "none";
            document.getElementById("CE").style.display = "flex";

        }
    }

    document.getElementById("equals").onclick = function () {
        
        document.getElementById("CE").style.display = "none";
        document.getElementById("AC").style.display = "flex";

    }



    // document.getElementById("toggleButton").onclick = function () {

    //     if (mode="")

    //     document.getElementById("Rad").style.color = "grey";
    //     document.getElementById("Deg").style.color = "white";
    //     console.log(Deg.innerText);
    //     display.value = Deg.innerText;
    //     mode = "deg"; // switch to degree mode

    // }


    document.getElementById("toggleButton").onclick = function() {
      
        if (mode === "deg") {
          
          document.getElementById("Rad").style.color = "white";
          document.getElementById("Deg").style.color = "grey";
          mode = "rad";
          
        } else {
            
          document.getElementById("Rad").style.color = "grey";
          document.getElementById("Deg").style.color = "white";
          console.log(Deg.innerText);
          display.value = Deg.innerText;
          mode = "deg";
          
        }
      };

    // document.getElementById("Rad").onclick = function () {

    //     document.getElementById("Deg").style.color = "grey";
    //     document.getElementById("Rad").style.color = "white";
    //     console.log(Rad.innerText);
    //     display.value = Rad.innerText;
    //     mode = "rad"; // switch to rad mode

    // }

    // document.getElementById("Deg1").onclick = function () {

    //     document.getElementById("Rad1").style.color = "grey";
    //     document.getElementById("Deg1").style.color = "white";
    //     console.log(Deg1.innerText);
    //     display.value = Deg1.innerText;
    //     mode = "deg"; // switch to degree mode

    // }

    // document.getElementById("Rad1").onclick = function () {

    //     document.getElementById("Deg1").style.color = "grey";
    //     document.getElementById("Rad1").style.color = "white";
    //     console.log(Rad.innerText);
    //     display.value = Rad.innerText;
    //     mode = "rad"; // switch to rad mode

    // }


    function factorial(n) {



        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }



    }

    //x^y

    function power(x, y) {

        return Math.pow(x, y);
    }

    //EXP

    function EXP(x, y) {

        let a = Math.pow(10, y)

        return x * (a);
    }
    
//root
    function Root(x, y) {

        let a = Math.pow(x, 1/y)

       
    }






    function evaluateResult() {


        if (mode === "deg" && currentValue.length >= 6 ) {


            const [func2, secondValue] = currentValue.split("(");


            let angle = secondValue.slice(0, -1)

            let angle2 = angle * 0.01745329251;


            let fourthValue = "Math." + func2;

            console.log(fourthValue);





            console.log(currentValue);

            if (currentValue.includes("arcSin") || currentValue.includes("arcTan") || currentValue.includes("arcCos")) {

                // console.log(currentValue);

                let convertedValue2 = fourthValue
                    .replace("arcSin", "asin")
                    .replace("arcTan", "atan")
                    .replace("arcCos", "acos");

                // currentValue=(convertedValue+"("+angle+")")*57.2957795131;

                let convertedValue = convertedValue2 + "(" + angle + ")";


                // console.log(convertedValue);
                // console.log(currentValue);

                currentValue = fourthValue + "(" + angle2 + ")";
                // console.log("convertedValue",convertedValue);
                let result = eval(convertedValue);
                result = Math.round(result * 57.2957795131);

                currentValue = result.toString();
                display.value = currentValue;

            }






            convertedValue = fourthValue + "(" + angle2 + ")";
            console.log("convertedValue", convertedValue);
            const result = eval(convertedValue);

            currentValue = result.toString();
            display.value = currentValue;


        }


        else {
            let convertedValue = currentValue
                .replace("X", "*")
                .replace("÷", "/")
                .replace("%", "*.01")
                .replace("sin", "Math.sin")
                .replace("cos", "Math.cos")
                .replace("tan", "Math.tan")
                .replace("π", "Math.PI")
                .replace("ln", "Math.log")
                // .replace("e", "Math.E")
                .replace("√", "Math.sqrt")
                .replace("log", "Math.log10")
                .replace("EXP", "Math.exp")


                .replace("arcSin", "Math.asin")
                .replace("arcTan", "Math.atan")
                .replace("arcCos", "Math.acos")
                .replace("e", "2.71828")





            console.log(convertedValue);
            // console.log(angle)
            const result = eval(convertedValue);

            currentValue = result.toString();
            display.value = currentValue;
        }




    }










    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function () {
            // alert("button clicked!");


            const value = buttons[i].innerText;
            
           if (value == "CE") {



                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;






            }



            else if (value == "AC") {



                prevValue2 = currentValue;
                display2.value = "Ans = " + prevValue2;


                currentValue = "0";
                display.value = currentValue;


            }

            else if (value == "Inv") {

                
                // currentValue = "";
                display.value = currentValue;



            }

            else if (value == "x!") {


                let prevValue = currentValue;
                currentValue += "!";
                display.value = currentValue;



            }
            else if (value == "EXP") {


                let prevValue = currentValue;
                currentValue += "E";
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

            else if (value == "xy") {

                let prevValue = currentValue;
                currentValue += "^";


                display.value = currentValue;

            }

            else if (value == "Ans") {

                // let prevValue = currentValue;
                // currentValue += "Ans";
                const [firstValue, secondValue] = prevValue2.split("=");
                console.log("firstValue:", firstValue);
                console.log("secondValue:", secondValue);

                console.log(prevValue2)

                currentValue += secondValue;


                display.value = currentValue;

            }

            else if (value == "e") {

                console.log(currentValue);

                if (display.value == "0") { currentValue = currentValue.slice(1) ;
                    currentValue += value ;
                    display.value = currentValue;
                }


                else if (numberTextArray.includes(currentValue)) {

                    currentValue += " X " + "e";
                    display.value = currentValue;


                }





            }

            else if (currentValue.includes("e") && value !== "=") {



                console.log("I am here 1");
                if ( currentValue.includes("^")) {

                    console.log("I am here 5");

                    // let prevValue = currentValue;
                    currentValue+=value;
                    display.value = currentValue;
                };

                if (currentValue.slice(-1) === "e") {
                    if (numberTextArray.includes(value)) {

                        currentValue += " X " + value;
                        display.value = currentValue;
                        currentValue = currentValue.replace("X", "*");

                    }

                    else if (mOperatorTextArray.includes(value)) {

                        currentValue += value;
                        display.value = currentValue;

                    }

                }


            }

            else if (value == "√") {

                console.log(currentValue);
              
                if (display.value == "0") { currentValue = currentValue.slice(1) ;
                    currentValue += value + "(";
                    display.value = currentValue;
                }

                // if (numberTextArray.includes(currentValue.slice(0,-1))) {


                //     console.log("I am here");
                  
                //     currentValue += " X " + value +"(";
                //     display.value = currentValue;


                // }
                 else {
                   
                    currentValue += " X " + value + "(";
                    display.value = currentValue;

                 }
              }




              else if (value == "y√x") {

                console.log(currentValue);
               currentValue = "y√" + currentValue;
               display.value = currentValue;
               currentValue=currentValue.replace("√","root");


                
              }

              else if (currentValue.includes("y√")) {

                console.log(currentValue);
               currentValue = currentValue.replace("y",value)
               display.value = currentValue;


                
              }


       


            
             

            else if (value == "ex") {

                currentValue += "e" + "^";
                display.value = currentValue;
               ;

           

            }

            else if (value == "x2") {

                currentValue +=  "^" + "2";
                display.value = currentValue;
               ;

           

            }






            else if (value == "Rnd") {

                // let prevValue = currentValue;
                // currentValue += "Ans";

                if (currentValue === "0" || currentValue === "") {
                    currentValue = Math.random();
                    display.value = currentValue;
                }

                else {

                    currentValue += " X " + Math.random();
                    display.value = currentValue;
                }

            }

            else if (value.includes("Rad")) {

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

                else if (currentValue.includes("^")) {



                    // currentValue=currentValue.toString;

                    if (currentValue.includes("e")) {

                        currentValue = currentValue.replace("e","2.71828");
                    }

               
                    const [firstValue, secondValue] = currentValue.split("^");
                    console.log("firstValue:", firstValue);
                  
                    console.log("secondValue:", secondValue);



                    let result = power(firstValue, secondValue);

                    currentValue = result.toString();
                    display.value = currentValue;


                }


                else if (currentValue.includes("E")) {



                    // currentValue=currentValue.toString;
                    const [firstValue, secondValue] = currentValue.split("E");
                    console.log("firstValue:", firstValue);
                    console.log("secondValue:", secondValue);



                    let result = EXP(firstValue, secondValue);

                    currentValue = result.toString();
                    display.value = currentValue;


                }

                else if (currentValue.includes("e")) {

                    // console.log(currentValue);
                    console.log("I am here 3");

                    currentValue = currentValue.replace("e", "2.71828");
                    // console.log(currentValue);
                    evaluateResult();

                    display.value = currentValue;

                }

                else if (currentValue.includes("root")) {



        
                console.log(currentValue);
                

               
                    const [firstValue, secondValue] = currentValue.split("root");
                    console.log("firstValue:", firstValue);
                  
                    console.log("secondValue:", secondValue);



                    let result = Root(firstValue, secondValue);

                    currentValue = result.toString();
                    display.value = currentValue;


                }








                else {

                    prevValue2 = currentValue;
                    display2.value = prevValue2 + "=";
                    console.log(mode);
                    evaluateResult();

                    if (prevValue2 && mOperatorTextArray.includes(value)) {

                        console.log("I am here ok")
                        // prevValue2 = currentValue;
                        // display2.value = "Ans = " + prevValue2;
                        prevValue2 = currentValue;
                        display2.value = "Ans = " + prevValue2;
                        currentValue += value;
                        display.value = currentValue;


                    }










                }
            }


           


            else if (prevValue2.includes("Ans") && numberTextArray.includes(value) || prevValue2.includes("Ans") && S_buttonTextArray.includes(value)) {


                // console.log("I am here")

                if (display.value == "0") { currentValue = currentValue.slice(1); }

                currentValue += value;
                display.value = currentValue;
            }
            else if (prevValue2 && mOperatorTextArray.includes(value)) {

                // console.log("I am here ok")
                prevValue2 = "Ans = " + currentValue;
                display2.value = prevValue2;

                currentValue += value;
                display.value = currentValue;


            }

            else if (prevValue2 && !prevValue2.includes("Ans") && numberTextArray.includes(value) || prevValue2 && !prevValue2.includes("Ans") && S_buttonTextArray.includes(value)) {

                if (display.value == "0") { currentValue = currentValue.slice(1); }

                console.log(prevValue2)





                prevValue2 = "Ans=" + currentValue;

                display2.value = prevValue2;

                prevValue2 = currentValue;
                display2.value = "Ans = " + prevValue2;

                currentValue = value;

                display.value = currentValue;









            }

            else {


                currentValue += value;
                if (display.value == "0") { currentValue = currentValue.slice(1); }





                display.value = currentValue;


            }




        })
    };


});
