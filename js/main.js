document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        if(content.style.maxHeight) {
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null);
        } else {
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
});
var elements = document.querySelectorAll('.article__num');
   elements.forEach(function(item, i, arr) {
       item.innerHTML = '.0'+(i+1);
   });
var form = document.querySelector('.form');
var email = document.querySelector('.email');
var tel = document.querySelector('.phone');
var Name = document.querySelector('.name');

form.addEventListener("submit", validate);
function validate(e) {
    e.preventDefault();
    var er = 0;
    if (Name.value.length < 2){
        Name.style.background = "#CF6679";
        Name.focus();
        er++;
    } else {
        Name.style.background = "rgba(255, 255, 255, 0.15)";
    }
    let reg = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    if (!reg.test(tel.value)){
        tel.style.background = "#CF6679";
        tel.focus();
        er++;
    } else {
        tel.style.background = "rgba(255, 255, 255, 0.15)";
    }
    reg = /\w+@\w+\.\w{2,20}/gi;
    if (!reg.test(email.value)){
        email.style.background = "#CF6679";
        email.focus();
        er++;
    } else {
        email.style.background = "rgba(255, 255, 255, 0.15)";
    }
    if(!er){
        sendForm();
    }
}
async function sendForm() {
    var formData = new FormData(form);
    let response = await fetch('https://harmonious-twilight-897f6f.netlify.app/server.php', {
        method: 'POST',
        body: formData
     });
    let result = await response.text();
    alert(result);
}

document.addEventListener('keyup', function(e){
	var target = document.getElementsByClassName('.checkbox-inp:focus');
	if (e.keyCode == 9 && target.length){
		target.parentElement.classList.add('focused');
	}
});

const ctx1 = document.getElementById('myChart1').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
    labels: ['-  Россия', '-  Казахстан', '-  Узбекистан'],
    datasets: [{
        labels: 'Страны',
        data: [17, 12, 5],
        backgroundColor: [
            '#9D121A',
            '#DD9622',
            '#474444',
        ],
        borderWidth: 0,
        rotation: -90,
        hoverOffset: 10,
        hoverBorderWidth: 10,
        hoverBorderColor: [
            '#9D121A',
            '#DD9622',
            '#474444'
        ],
        borderRadius: 0,
        borderAlign: 'inner'
    }]
    },
    options: {
        layout: {
            padding: 10
        },
        cutout: 70,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                fullWidth: 'false',
                labels: {
                    font: {
                        family: 'Mail Sans Roman',
                        size: '12',
                        weight: '400',
                    }    
                }   
            }
        }
    }
});
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
    labels: ['-  Тюмень', '-  Нур-Султан', '-  Ташкент', '-  Петербург', '-  Алма-Аты'],
    datasets: [{
        labels: 'Страны',
        data: [17, 12, 5, 10, 14],
        backgroundColor: [
            '#9D121A',
            '#DD9622',
            '#474444',
            '#808080',
            '#005FA7'
        ],
        borderWidth: 0,
        rotation: -90,
        hoverOffset: 10,
        hoverBorderWidth: 10,
        hoverBorderColor: [
            '#9D121A',
            '#DD9622',
            '#474444',
            '#808080',
            '#005FA7'
        ],
        borderRadius: 0,
        borderAlign: 'inner'
    }]
    },
    options: {
        cutout: 70,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                fullWidth: 'true',
                labels: {
                    font: {
                        family: 'Mail Sans Roman',
                        size: '12',
                        weight: '400',
                    }    
                }   
            }
        }
    }
});
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
    labels: ['-  Россия', '-  Казахстан', '-  Узбекистан'],
    datasets: [{
        labels: 'Страны',
        data: [17, 12, 5],
        backgroundColor: [
            '#9D121A',
            '#DD9622',
            '#474444',
        ],
        borderWidth: 0,
        rotation: -90,
        hoverOffset: 10,
        hoverBorderWidth: 10,
        hoverBorderColor: [
            '#9D121A',
            '#DD9622',
            '#474444'
        ],
        borderRadius: 0,
        borderAlign: 'inner'
    }]
    },
    options: {
        layout: {
            padding: 10
        },
        cutout: 70,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                fullWidth: 'false',
                labels: {
                    font: {
                        family: 'Mail Sans Roman',
                        size: '12',
                        weight: '400',
                    }    
                }   
            }
        }
    }
});
const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
    labels: ['-  Тюмень', '-  Нур-Султан', '-  Ташкент', '-  Петербург', '-  Алма-Аты'],
    datasets: [{
        labels: 'Страны',
        data: [17, 12, 5, 10, 14],
        backgroundColor: [
            '#9D121A',
            '#DD9622',
            '#474444',
            '#808080',
            '#005FA7'
        ],
        borderWidth: 0,
        rotation: -90,
        hoverOffset: 10,
        hoverBorderWidth: 10,
        hoverBorderColor: [
            '#9D121A',
            '#DD9622',
            '#474444',
            '#808080',
            '#005FA7'
        ],
        borderRadius: 0,
        borderAlign: 'inner'
    }]
    },
    options: {
        cutout: 70,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                fullWidth: 'true',
                labels: {
                    font: {
                        family: 'Mail Sans Roman',
                        size: '12',
                        weight: '400',
                    }    
                }   
            }
        }
    }
});