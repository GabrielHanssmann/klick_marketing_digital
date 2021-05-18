const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  
  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".fecha-limite");
  
  let futureDate = new Date(2021,5,25,11,30,0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  const seconds = futureDate.getSeconds();
  
  let month = futureDate.getMonth();
  let day = futureDate.getDay();
  
  giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${day} ${months[month]} ${year} at ${hours}:${minutes}am`
  
  // future time in ms
  const futureTime = futureDate.getTime();
  
  function getRemainingTime(){
    const today = new Date().getTime();
    // sustract the differens in milliseconds of the futre time and the time of today
    const T = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1h = 60min
    // 1d = 24hr
  
    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60* 60 * 1000;
    const oneMinute = 60* 1000
    // Calculate values
    let days = T/oneDay;
    // math.floor gets the round the numbers
    days = Math.floor(days);
    let hours = Math.floor((T % oneDay)/oneHour);
    let minutes = Math.floor((T % oneHour)/oneMinute);
    let seconds = Math.floor((T % oneMinute)/1000);
    
    // set values in an array
    const values = [days,hours,minutes,seconds];
    
    // get 0 in numbres less than 10
    function format(item){
      if(item < 10){
        return (item = `0${item}`);
      }
      return item;
    };
  
    // Function to place the dates values in the item const, the order will be the same of the array because of the index parametrer that will get the number of the array
    items.forEach( (item,index)=>{
      item.innerHTML = format(values[index]);
  
      // when timer gets to 0
      if(T < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<span class="fecha-limite">sorry, this giveaway has expired</span>`;
      }
    })
  
  }
  // countdown
  let countdown = setInterval(getRemainingTime, 1000);
  
  getRemainingTime();
  
  