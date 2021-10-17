1. 3, And that is the value of i that breaks the for loop. Since it is declared as var, it can be accessed throughout the function block.
2. 150, that is the value of discountPrice in the last run of the for loop, and it is declared as var so it is accessible throughout the function block.
3. 150, finalPrice goes to a process of turning discountPrice into an integer value, even when discountPrice already is an integer like in this case. Also, it is declared as a var so it can be used throughout function scope.
4. [ 50, 100, 150 ], the array [ 100, 200, 300 ] has each of its values 'discounted' by 50% and the resulting discount values are rounded and returned in an array.
5. error, the function tries to print i outside of the scope it is declared in (for loop).
6. error, the function tries to print discountedPrice outside of the scope it is declared in (for loop).
7. 150, 150 is the value set for finalPrice by the last forloop run, so that is what gets printer.
8. [ 50, 100, 150 ], the array [ 100, 200, 300 ] has each of its values 'discounted' by 50% and the resulting discount values are rounded and returned in an array.
9. error, i is not defined in block it is called in.
10. 3, length is a const value of 3 for the whole function block.
11. [ 50, 100, 150 ], the function pushes to and returns a const array which is allowed, const array just can't be reassigned.
12. student.name, student["Grad Year"], student.greeting, student["Favorite Teacher"].name, student.courseLoad<rawtext>[0]</rawtext>
13. '3' + 2 -> '32' concat 2's string value of '2' to string '3'
'3' - 2 -> 1 when - is, strings are converted to numbers if they are a string of a number
3 + null -> 3 null is ignored in arithmetic with numbers
'3' + null -> '3null' null's string value is concatted to string '3'
true + 3 -> 4 true is typecast to int equivalent, which is 1
false + null -> 0 false is typecast to int equivalent which is 0
'3' + undefined -> '3undefined' undefinated's string object is 'undefined' and is concatted
'3' - undefined -> NaN any number arithmetic with undefined produces NaN
1.  '2' > 1 -> true '2's int equivalent of 2 is used in comparison.
'2' < '12' -> false the ASCII value between each string's first character that isn't equal is compared
2 == '2' -> true the int equivalent of string '2' is used in the comparison
2 === '2' -> false type don't match so they can't be equal by ===
true == 2 -> false true's int equivalent is 1, 1 != 2
true === Boolean(2) -> true 2 is type cast to Boolean true, so this is true === true
15. == tries to find equality between different data types, like 1 and '1' are equal. === is strictly between intra-type comparisons, so int 1 would be only equal with other int 1.
17. [ 2, 4, 6 ], modifyArray takes in an array and a callback function and creates a new array with each value of the input array passed into the callback function and the output of that pushed into the array that modifyArray will return, the callback function here just doubles values.
19. 1, 4, 3, 2 setTimeout places 2 and 3 on a delay, the time was longer for 2 so it comes after 3.