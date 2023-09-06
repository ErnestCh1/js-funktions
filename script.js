/*function hello() {
    console.log ('hello')
}
hello()

function helloName (x){
    console.log(`Hello, ${x}`)

}
helloName('Brother')

function perimetras (width, height , units){
    let unitsText = 'vnt'
    if(units){
        unitsText = units
    }
    let perimeter = (height+width) *2
    let output = `Perimeter : ${perimeter} ${units}`

}*/

function personAge (age){
    let dogAge = age / 7
    let output = `${dogAge} šuns metų lygu ${age} žmogaus metų`
    return output
}
console.log (personAge(35))

function booksReading (books){
    let booksTemp = Math.round(365 / books) 
    let output = `Norint perskaityti ${books} knygu per metus, vienai knygai perskaityti turėsi ${booksTemp} dienas`
    return output
}
console.log (booksReading(10))

function daysToWeeks(days){
    let week = Math.trunc (days / 7)
    let addDays = days % 7
    if(addDays){
    let output = `${days} dienos yra ${week} pilnos savaitės ir ${addDays} dienos`
    return output
    } else {
        let output = `${days} dienos yra ${week} pilnos savaitės `
        return output
    }
    
    
}
console.log (daysToWeeks(39))

function daysToYears (days){
    let years = Math.trunc(days/365)
    let plusDays = days % 365
    let addMonths = Math.trunc(plusDays/31)
    let addDays = plusDays % 31
    if(plusDays == 0){
    let output = `${days} dienos yra ${years} metai`
    return output
    }else if (addDays == 0){
        let output = `${days} dienos yra ${years} metai ir ${addMonths} menesiai`
        return output
    }else if (addMonths == 0){
        let output = `${days} dienos yra ${years} metai ir ${addDays} dienu`
        return output
    }
    else {
        let output = `${days} dienos yra ${years} metai  ${addMonths} menesiai ir ${addDays} dienu`
        return output
    }
}
console.log (daysToYears(370))

function yearsToHours(years){
    let hours = years * 365 * 24
    let output = `${years} metai turi ${hours} valandas`
    return output
}
console.log (yearsToHours(5))

function monthsToHours(months){
    let hours = months * 31 * 24
    let output = `${months} menesiai turi ${hours} valandas`
    return output
}
console.log (monthsToHours(3))

function monthsToMinutes(months){
    let minutes = months * 31 * 24 * 60
    let output = `${months} menesiai turi ${minutes} minutes`
    return output
}
console.log (monthsToMinutes(2))