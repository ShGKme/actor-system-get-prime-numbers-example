const APIXU_TOKEN = '' // Add your token

class ComputingActor {

  async getCurrenWheather(city) {
    const axios = require('axios')
    
    let res = await axios.get(`http://api.apixu.com/v1/current.json?key=${APIXU_TOKEN}&q=` + city)
    let text = res.data.current.condition.text
    let temp = res.data.current.temp_c
    let result = `Weather from ${process.pid}: ${text}, ${temp > 0 ? '+' + temp : temp}C`

    console.log(result)
    return result
  }
  
  getPrime(num) {
    let primesCount = 0
    let current = 1

    while (primesCount !== Number(num)) {
      current++
      let isPrime = true
      for (let j = 2; j < current; j++) {
        if (current % j === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime)
        primesCount++
    }

    console.log(`Prime from ${process.pid} is ${current}`)
    return current
  }

}

module.exports.ComputingActor = ComputingActor