//Descriptografia basic in arrays;

//array; 
var a = ['o',4,1,3,4,31,4,'l',4,3,32,1,'a',4,5,6,7,8,9,9,' ',5,6,'M',2,3,4,1,466766,'U',123,'N',12,43,543,232,23,'D',33243343,1212321312,334,3243,534,534,534,546,54654,65,4654,74,7567,567,5,'O'];

let some=a.some(
	function rodaelementos(elem){
			if(typeof elem == 'string'){ //apenas add el type.
				document.write(elem)
			}
	}
);