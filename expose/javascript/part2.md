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