/**
 * 
 * @param {Number} entryNumber 
 * @returns {String}
 */

export function numberDisplay(entryNumber){
    if (entryNumber < 1000000){
        return entryNumber;
    }
    let entryNumberMillions = entryNumber / 1000000
    if ((entryNumberMillions >= 1) && (entryNumberMillions < 1000)){
        if (entryNumberMillions == 1){
            return entryNumberMillions.toFixed(3)+" million";
        }
        return entryNumberMillions.toFixed(3)+" millions";
    }
    let entryNumberBillions = entryNumber / 1000000000
    if ((entryNumberBillions >= 1) && (entryNumberBillions < 1000)){
        if (entryNumberBillions == 1){
            return entryNumberBillions.toFixed(3)+" billion";
        }
        return entryNumberBillions.toFixed(3)+" billions";
    }
    let entryNumberTrillions = entryNumber / 1000000000000
    if ((entryNumberTrillions >= 1) && (entryNumberTrillions < 1000)){
        if (entryNumberTrillions == 1){
            return entryNumberTrillions.toFixed(3)+" trillion";
        }
        return entryNumberTrillions.toFixed(3)+" trillions";
    }
    let entryNumberQuadrillions = entryNumber / 1000000000000000
    if ((entryNumberQuadrillions >= 1) && (entryNumberQuadrillions < 1000)){
        if (entryNumberQuadrillions == 1){
            return entryNumberQuadrillions.toFixed(3)+" quadrillion";
        }
        return entryNumberQuadrillions.toFixed(3)+" quadrillions";
    }
}