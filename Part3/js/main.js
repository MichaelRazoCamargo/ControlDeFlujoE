//Ejercicio Parte3
function businessHours(dayNumber,hourNumber){
    if ((dayNumber>=1) && (dayNumber<=5)&&
    (hourNumber>=9) && (hourNumber<=18)
         ){
            
    return true;
    }else {
        return false;
    }
    
    }

function getDayNumber ( janFirstDayNumber,yearDayNumber){
    return (janFirstDayNumber+(yearDayNumber-1))%7;
    
    }

    function part3(yearDayNumber, hourNumber){
            let day = getDayNumber(0, yearDayNumber);
            return businessHours(day,hourNumber);
    }

    console.log(
        part3(72,17)
    );