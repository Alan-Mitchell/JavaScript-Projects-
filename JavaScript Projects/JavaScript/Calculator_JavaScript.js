//creates an object to keep trak of values
const Calculator = {
    //this displays 0 on the screen
    Display_Value: '0',
    //This will hold the first  operand for any exprression, we set it to null for now
    First_Operand: null,
    //This checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

//this modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //We are checking to see if Wait_Second_Operand is true and set
    //Display_Value to the Key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;

    }
    else {
        //this overwrites Display_Value if the current value is 0
        //otherwise it adds onto it
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

    //this section handles decimal points
    function Input_Decimal(dot) {
        //this ensures that accidental clciking of the decimal point
        // doesnt cause bugs in your operation
        if (Calculator.Wait_Second_Operand === true) return;
        if (!Calculator.Display_Value.includes(dot)) {
            //we are saying that if the Display_Value does not contain a decimal poinr 
            //we want to add a decimal point
            Calculator.Display_Value += dot;
        }
    }

//this section handles operators
function Handle_Operator(Next_Operator) {
    const{ First_Operand, Display_Value, operator} = Calculator
    //When an operator key is pressed, we convert the currnet number 
    //displayed on the screen to a number and then store the result in 
    //Calculator.First.Operand if it doesnt already exists
    const Value_of_input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Se{cond_Operand is true,
    //then update the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_operand = Value_of_Input;
    }
    else if(operator) {//checks if an opertor already exists 
        const Value_Now = First_Operand || 0;
        //If operator exists, property lookup is performed for the opertor 
        //in the Perform_Calculations object and the function that matches the 
        //operator is executed
        let result = Perform_Caluclations[operator] (Value_Now, Value_of_Input);
        //here add a fixed amount of numbers after the decimal 
        result = Number(result).toFixed(9)
        //this will remove any trailling 0's
        result= (result * 1 ).toString()
        Calculator.Display_Value=parseFloat(result);
        Calculator.First_Operand= parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
    const Perform_Calculation = {
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
        '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
        '+':(First_Operand, Second_Operand) => First_Operand + Second_Operand,
        '-':(First_Operand, Second_Operand) => First_Operand - Second_Operand,
        '=':(First_Operand, Second_Operand) => Second_Operand
        

    };

    function Calculator_Reset(){
        Calculator.Display_Value='0';
        Calculator.First_Operand=null;
        Calculator.Wait_Second_Operand = false;
        Calculator.operator = null;
    }
//this function updates the screen with the contents of Display_Value
    function Update_Display() {
        const display = document.querySelector('.calculator-screen');
        display.value = Calculator.Display_Value;
    }

    Update_Display();
//this section monitors button clicks 
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click',(event) => {
    //the target variables is an objcet that represents the element
    //that was clicked 
    const {target} = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
