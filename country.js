const countryNames= new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-deatails img')
const countryNameH1 = document.querySelector('.country-deatails h1')
const nativeName = document.querySelector('.native-name')
const population =document.querySelector('.Population')
const Regin = document.querySelector('.region')
const SubRegin = document.querySelector('.sub-region')
const Capital = document.querySelector('.Capital')
const TopLevelDomain = document.querySelector('.tld')
const currencies = document.querySelector('.Currencies')
const langueges = document.querySelector('.lang')
const  borderCountries = document.querySelector('.border-countries')
const backButton = document.querySelector('.back-button')

const themeChanger = document.querySelector('.theme-changer')





fetch(`https://restcountries.com/v3.1/name/${countryNames}?fullText=true`).then((res)=> res.json())
.then(([country])=>{
    // console.log(country.borders)
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common
    population.innerText = country.population.toLocaleString('en-IN')
    Regin.innerText = country.region
    TopLevelDomain.innerText= country.tld.join(', ')

   //  langueges.innerText = country.languages

     if(country.subregion){
      SubRegin.innerText = country.subregion
     }


     if(country.capital){
      Capital.innerText = country.capital?.[0]
     }

    if(country.name.nativeName){
        nativeName.innerText = Object.values(country.name.nativeName)[0].common
     }
     else{
        nativeName.innerText = country.name.common
     }

     if(country.currencies){
      currencies.innerText = Object.values(country.currencies).map((currency)=> currency.name).join(', ')
  }

  if(country.languages){
   langueges.innerText= Object.values(country.languages).join(", ")
 }

 if(country.borders){
  country.borders.forEach((border)=>{
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then((res)=>res.json())
    .then(([borderCountry])=>{
      // console.log(borderCountry)
      const borderCountryTag = document.createElement('a')
      borderCountryTag.innerText =  borderCountry.name.common
      borderCountryTag.href=`country.html?name=${borderCountry.name.common}`
      // console.log(borderCountryTag)
      borderCountries.append(borderCountryTag)

    })
  })
 }


})


backButton.addEventListener('click',() =>{
 

  history.back()

})



themeChanger.addEventListener('click',()=>{
  document.body.classList.toggle('dark')
})