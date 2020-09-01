/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) 
  {
    const [A,P]=expressions;
    const s=Math.sqrt(P**2-(16*A));
    return [(P-s)/4,(P+s)/4];
  }

