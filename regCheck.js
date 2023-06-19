function regCheck(isReg, isLoc) {
    return isReg.endsWith(isLoc)
    }
    
    console.log(regCheck('DC 55 YU GP', 'GP'))
    console.log(regCheck('5566 L', 'L'))
    console.log(regCheck('ERT 123 EC', 'EC'))
    console.log(regCheck('FGT 123 MP', 'MP'))
    
    var isGP = regCheck('DV 23 NB GP', 'GP');
    console.log(isGP);
    
    var isMP = regCheck('DV 23 LP GP', 'MP');
    console.log(isMP);