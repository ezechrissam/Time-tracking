const cardsContainer = document.querySelector('.cards-container');
const btnDaily = document.querySelector('#btn-daily');
const btnWeekly = document.querySelector('#btn-weekly');
const btnMonthly = document.querySelector('#btn-monthly');
const url = './data.json';

fetch(url)
    .then(response => response.json())
    .then(data => loadData(data))

   
const loadData = (data) => {

    window.addEventListener('load' , loadWeeklyData(data));

    btnDaily.addEventListener('click' , () => {
          loadDailyData(data);  
    })

    btnWeekly.addEventListener('click' , () => {
        cardsContainer.innerHTML = '';
        loadWeeklyData(data);
    })

    btnMonthly.addEventListener('click' , () => {
        cardsContainer.innerHTML = '';
        loadMonthlyData(data);
    })
}



const loadDailyData = (data) => {
  cardsContainer.innerHTML = '';

  data.map(element => {
    cardsContainer.innerHTML += `
    <div class="card">
    <div class="card-title">
      <small>${element.title}</small>
      <img src="./images/more-icon.svg" alt="">
    </div>

    <div class="card-info-time">
      <span>${element.timeframes.daily.current}hrs</span>
      <small>Last Week - ${element.timeframes.daily.previous}hrs</small>
    </div>
  </div> 
    `
  })

  btnDaily.classList.add('active');
  btnWeekly.classList.remove('active');
  btnMonthly.classList.remove('active');
}


const loadWeeklyData = (data) => {
  cardsContainer.innerHTML = '';

  data.map(element => {
    cardsContainer.innerHTML += `
    <div class="card">
    <div class="card-title">
      <small>${element.title}</small>
      <img src="./images/more-icon.svg" alt="">
    </div>

    <div class="card-info-time">
      <span>${element.timeframes.weekly.current}hrs</span>
      <small>Last Week - ${element.timeframes.weekly.previous}hrs</small>
    </div>
  </div> 
    `
  })

  btnDaily.classList.remove('active');
  btnWeekly.classList.add('active');
  btnMonthly.classList.remove('active');

}

const loadMonthlyData = (data) => {
  cardsContainer.innerHTML = '';
  data.map(element => {
    cardsContainer.innerHTML += `
    <div class="card">
    <div class="card-title">
      <small>${element.title}</small>
      <img src="./images/more-icon.svg" alt="">
    </div>

    <div class="card-info-time">
      <span>${element.timeframes.monthly.current}hrs</span>
      <small>Last Week - ${element.timeframes.monthly.previous}hrs</small>
    </div>
  </div> 
    `
  })

  btnDaily.classList.remove('active');
  btnWeekly.classList.remove('active');
  btnMonthly.classList.add('active');

}