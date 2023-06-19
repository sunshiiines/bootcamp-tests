function fromWhere(regNum) {
    if (regNum.startsWith('CY')) {
        return 'Bellville'
     } else if (regNum.startsWith('CJ')) {
     return 'Paarl'
     } else if (regNum.startsWith('CA')) { 
     return 'Cape Town'
     } else {
     return 'Some other place!'
     }
    }
    
    console.log(fromWhere('CY 567489'))
    console.log(fromWhere('CJ 343502'))
    console.log(fromWhere('CA 987504'))
    console.log(fromWhere('ZN 568593'))