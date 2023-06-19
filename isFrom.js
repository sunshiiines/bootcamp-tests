function isFrom(registration, location) {
    return registration.startsWith(location)
    }
    
    var fromPaarl = isFrom('CJ 98912', 'CJ'); 
    var fromBellvile = isFrom('CJ 98912', 'CJ'); 
    
    var fromBellville = isFrom('CY 874324', 'CY'); 
    var fromCapeTown = isFrom('CY 874324', 'CA'); 