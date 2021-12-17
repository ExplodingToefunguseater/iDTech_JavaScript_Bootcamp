let numbers = [6, 900, 45, 2, 8000];
function sorting(numbers)
{
    let sorted = numbers.sort(
        function(a, b){
            return b - a;
        }
    );
    console.log(sorted);
}

function addNumber(numbers, callback)
{
    numbers.push(6128);
    console.log(numbers);
    callback(numbers); 
}
addNumber(numbers, sorting);