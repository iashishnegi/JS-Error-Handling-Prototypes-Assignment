// 1.Type Conversion 
//Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number".Use error handling in javascript to achieve this output.

function convertToNumber(str){
            let input = Number(str);
            try {
                if(isNaN(input)){
                    throw new Error("Invalid Number(From Try Block)");
                }
                console.log(input);;
            }
            

            catch(error){
                console.log("Invalid Number (From Catch Block)");
            }

}

convertToNumber("42"); // Output: 42
convertToNumber("3.14"); // Output: 3.14
convertToNumber("Hello"); // Output: Invalid number