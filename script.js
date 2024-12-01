const countriesContainer = document.querySelector('.countries-container')
const filterbyRegion = document.querySelector('.filter-by-region')
const serchInput =  document.querySelector('.serch-container')
const themeChanger = document.querySelector('.theme-changer')
let  allCountriesData 

fetch('https://restcountries.com/v3.1/all')
.then((res)=> res.json())
.then((data)=>{
    renderCountries(data)
    allCountriesData = data

})


filterbyRegion.addEventListener('change',(e)=>{
    //  console.log(filterbyRegion.value)
fetch(`https://restcountries.com/v3.1/region/${filterbyRegion.value}`)
   .then((res)=> res.json())
    .then(renderCountries)


})


function renderCountries(data){
    countriesContainer.innerText=' ' 
    data.forEach((country) =>{
    // console.log(country) 
    const countryCard=document.createElement('a')
    countryCard.classList.add('country-card')
    countryCard.href=`/country.html?name=${country.name.common}`
    countryCard.innerHTML=`
    <img src="${country.flags.svg}" alt=" ${country.name.common}flag">
    <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
        <p><b>Regin: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital?.[0]}</p>
    </div>

`  
    countriesContainer.append(countryCard)

   })

}

serchInput.addEventListener('input',(e)=>{
    // console.count(e.target.value)
    // console.log(allCountriesData)
    const filterdData = allCountriesData.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    // console.log(filterdData);
    renderCountries(filterdData)
})

themeChanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})






// new URLSearchParams(location.search).get('name')
















 
// const countriesContainer = document.querySelector('.countries-container')
// const countryCard=document.createElement('a')
// countryCard.classList.add('country-card')

// // const cardImg=document.createElement('img')
// // cardImg.src= 'https://flagcdn.com/ch.svg'
// // countryCard.append(cardImg)

// const cardHTML = `   
//     <img src="https://flagcdn.com/ch.svg" alt="flag">
//     <div class="card-text">
//         <h3 class="card-title">Switzerland</h3>
//         <p><b>Population: </b>81,770,900 </p>
//         <p><b>Regin: </b>Europe </p>
//         <p><b>Capital: </b>Berlin </p>
//     </div>

// `
// countryCard.innerHTML=cardHTML

// countriesContainer.append(countryCard)

