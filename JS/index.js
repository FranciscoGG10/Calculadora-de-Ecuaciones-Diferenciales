document.getElementById('diffEqForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var solution = document.getElementById('solution');
    solution.innerHTML = '';
	var raices = document.getElementById('raices');
    raices.innerHTML = '';
	var yc = document.getElementById('yc');
    yc.innerHTML = '';
	var sols = document.getElementById('sols');
    sols.innerHTML = '';
	

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        solution.textContent = 'Por favor, ingrese valores numéricos para y^(2), y^(1), y.';
        return;
    }

    if (a === 0) {
        solution.textContent = 'La ecuación no es una ecuación diferencial de segundo orden.';
        return;
    }
	
	if (b == 0){
			if (c < 0){
				yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' - ' + (c*-1) +' = 0';
			}else{
				yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' + ' + c +' = 0';
			}
			} else if(b < 0){
				if (c < 0){
					yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' - ' + (b*-1) + 'm - ' + (c*-1) +' = 0';
				} else{
					yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' - ' + (b*-1) + 'm + ' + c +' = 0';
				}
			} else if (c == 0){
			if (b < 0){
				yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' - ' + (b-1) + 'm = 0';
			}else{
				yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' + ' + b + 'm = 0';
			}
			} else if (c < 0){
				if (b < 0){
					yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' - ' + (b*-1) + 'm - ' + (c*-1) +' = 0';
				} else{
					yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' + ' + b + 'm - ' + (c*-1) +' = 0';
				}
			}else{
				yc.textContent = 'La ecuación característica es: ' + a + 'm^2'+ ' + ' + b + 'm + ' + c +' = 0';
			}

    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		
		raices.textContent = 'Las raices son m1 = '+ root1 +', m2 = '+ root2;
		sols.textContent = 'Las soluciones son: y1 = e^(' + root1 + 'x), y2 = e^(' + root2 + 'x)';
        solution.textContent = 'La solución general es: y = C1 * e^(' + root1 + 'x) + C2 * e^(' + root2 + 'x)';
    
	} else if (discriminant === 0) {
        var root = -b / (2 * a);
		
		raices.textContent = 'Las raices son m1,2 = '+ root;
		sols.textContent = 'Las soluciones son: y1 = e^(' + root + 'x), y2 = x*e^(' + root + 'x)';
        solution.textContent = 'La solución general es: y = (C1*e^(' + root + 'x) + C2*x*e^(' + root + 'x))';
    } else {
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
		
		
		if (realPart == 0){
			raices.textContent = 'Las raices son m1,2 = ±'+ imaginaryPart +'i';
			sols.textContent = 'Las soluciones son: y1 = cos(' + imaginaryPart + 'x), y2 = sin(' + imaginaryPart + 'x)';
			solution.textContent = 'La solución general es: y = C1 * cos(' + imaginaryPart + 'x) + C2 * sin(' + imaginaryPart + 'x)';
		} else {
			raices.textContent = 'Las raices son m1,2 = '+ realPart+ '±' + imaginaryPart +'i';
			sols.textContent = 'Las soluciones son: y1 = e^(' + realPart + 'x) * cos(' + imaginaryPart + 'x), y2 = e^(' + realPart + 'x) * sin(' + imaginaryPart + 'x)';
			solution.textContent = 'La solución general es: y = C1 * e^(' + realPart + 'x) * cos(' + imaginaryPart + 'x) + C2 * e^(' + realPart + 'x) * sin(' + imaginaryPart + 'x)';
		}
        
    }
});
// JavaScript Document