/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon
{
    constructor(sides)
       {
           this.sides=sides;
       }
     perimeter()
       {
           var p=0;
           this.sides.forEach(p_perimeter);
           function p_perimeter(s) 
             {
               p+=s;
             }
           return p;
       }
}

