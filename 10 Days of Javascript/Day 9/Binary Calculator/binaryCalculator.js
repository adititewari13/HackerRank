const res=document.getElementById("res");
var operator='';

function dis(val)
     {
      res.innerHTML+=val;
     }

function operators(val)
     {
       operator=val;
       res.innerHTML+=operator;
     }
     
function clear_res()
     {
       res.innerHTML='';
     }
     
function calculate()
     {
       const operands=res.innerHTML.split(operator);
       var expression=parseInt(operands[0],2)+operator+parseInt(operands[1],2);
       const result=(Math.floor(eval(expression))).toString(2);
       clear_res();
       res.innerHTML+=result;
     }
  