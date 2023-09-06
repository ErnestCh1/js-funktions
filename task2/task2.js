console.log('Hello brother')

function daysToForm(days, form){
    let minutes = days * 24 * 60
    let hours = days * 24
    let weeks =Math.round (days / 7)
    let months = Math.round (days / 31)
    let years = Math.round (days / 365)
    if (form === 'minutes'){
        let output = `${days} days - ${minutes} minutes`
        return output
    }else if (form === 'hours'){
        let output = `${days} days - ${hours} hours`
        return output
    }else if (form === 'weeks'){
        let output = `${days} days - ${weeks} weeks`
        return output
    }else if (form === 'months'){
        let output = `${days} days - ${months} months`
        return output
    }else if (form === 'years'){
        let output = `${days} days - ${years} years`
        return output
    }else {
        let output = `Netinkamas formatas`
        return output
    }
}
console.log(daysToForm(15, 'hours'))

function toDivide (unit, divisor){
    let remains = unit % divisor
    if(remains == 0 ){
        let output = `${unit} dalinasi iš ${divisor}`
        return output
    }else {
        let output = `${unit} nesidalina iš ${divisor}, Liekana yra ${remains}`
        return output
    }
}
console.log(toDivide(11, 5 ))

function lengthTester (text){
    let length = text.length
    let letter = length % 2
    if (letter == 1){
        let output = `Teksto raidžių skaičius neporinis`
        return output
    }else {
        let output = `Teksto raidžių skaičius porinis`
        return output
    }
    
}
console.log(lengthTester('Viso gero'))

function letterTester (text , letterNumber){
    let symbol = text.charAt(letterNumber)
    let symbolNumber = text.length
    let backwards = symbolNumber + letterNumber
    let backwardsSymbol = text.charAt(backwards)
    if(symbolNumber>= letterNumber && letterNumber >= 0){
    let output = `Teskto "${text}" ${letterNumber} simbolis yra "${symbol}"`
    return output
    }else if (letterNumber < 0) {
        let output = `Teskto "${text}" ${letterNumber} simbolis yra "${backwardsSymbol}"`
        return output

    }else  {
        let output = `Tekstas "${text}" turi ${symbolNumber} simbolius, o jūs nurodėte grąžinti ${letterNumber}.`
        return output 
    }
}
console.log(letterTester('Hello' , -1))

