function perimeter (x,y) {
 
    let perimeter = (x + y) * 2;
    return perimeter;
    }
 
    let x = 3;
    let y = 7;
    console.log ("Perimeter of rectangle = " + perimeter(x,y));

function thegreatest (x,y,z) {

	if (x > y)
  {
    great = x;
  } 
	else
  {
    great = y;
  }
  	if (z > great) 
  {
    
    great = z;
  }
  return great;
}
console.log ("The greatest among three numbers = " + thegreatest(32,1021,315));

function currency (x) {
	let currency = x * 448;
	return currency;
	}

	console.log ("The converted sum (dollars to tenge) = " + currency (100) + "tg");