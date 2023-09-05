function hello() {
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

}