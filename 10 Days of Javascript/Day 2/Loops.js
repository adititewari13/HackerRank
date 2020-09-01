/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) 
{
    var vowels=['a','e','i','o','u'];
    for(var i=0;i<s.length;i++)
       {
           if(vowels.includes(s[i])==true)
           {
               console.log(s[i]);
           }
       }
    for(var i=0;i<s.length;i++)
       {
           if(vowels.includes(s[i])==false)
           {
               console.log(s[i]);
           }
       }      
}

