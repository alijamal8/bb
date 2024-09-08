let title = document.getElementById("title");
let price = document.getElementById("price");
let count = document.getElementById("count");
let data;
let add = document.getElementById("add");
let mood = "cr";
let tmp;
let t = document.getElementById("t");
let h = document.getElementById("h");
let datee = new Date();
let d =
  datee.getDate() +
  "/" +
  (datee.getMonth() + 1) +
  "/" +
  datee.getFullYear() +
  "/" +
  datee.getHours() +
  ":" +
  datee.getMinutes() +
  "";

if (localStorage.data != null) {
  data = JSON.parse(localStorage.data);
} else {
  data = [];
}
function newobj() {
  location.reload();
  let obj = {
    title: title.value,
    price: price.value + "000",
    count: count.value,
    time: JSON.stringify(d),
  };
  if (title.value == "" || price.value == "") {
  } else {
    if (mood === "cr") {
      if (obj.count > 1) {
        for (let j = 0; j < obj.count; j++) {
          data.push(obj);
        }
      } else {
        data.push(obj);
      }
    } else {
      data[tmp] = obj;
      mood = "cr";
      add.innerHTML = "اضافة";
    }
  }
  localStorage.setItem("data", JSON.stringify(data));
  showdata();
  clearInterval();
}
function showdata() {
  let table = "";
  for (let i = 0; i < data.length; i++) {
    table += `<tr>
              <td>${i}</td>
              <td>${data[i].title}</td>
              <td>${data[i].price}</td>
              <td>${data[i].time}</td>
              <td><button onclick="del(${i})" style="background-color: #641220;" class="but"><i style="color: aliceblue;" class='bx bxs-trash'></i></button></td>
              <td><button onclick="updata(${i})" style="background-color:#012a4a;" class="but"><i style="color: aliceblue;" class='bx bx-pencil'></i></button></td>
    </tr>`;
  }
  if (document.getElementById("tbody") != null) {
    document.getElementById("tbody").innerHTML = table;
  }
}
showdata();
function clearInterval() {
  title.value = "";
  price.value = "";
  count.value = "";
}
function deleteall() {
  localStorage.removeItem("data");
  data.splice(0);
  showdata();
}
function del(i) {
  data.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(data));
  showdata();
}
function updata(i) {
  title.value = data[i].title;
  price.value = data[i].price;
  add.innerHTML = "تعديل";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
  mood = "up";
}
function serdata(v) {
  let table = "";
  for (let j = 0; j < data.length; j++) {
    if (data[j].title.includes(v)) {
      table += `<tr>
              <td>${j}</td>
              <td>${data[j].title}</td>
              <td>${data[j].price}</td>
              <td>${data[j].time}</td>
              <td><button onclick="del(${j})" style="background-color: #641220;" class="but"><i style="color: aliceblue;" class='bx bxs-trash'></i></button></td>
              <td><button onclick="updata(${j})" style="background-color:#012a4a;" class="but"><i style="color: aliceblue;" class='bx bx-pencil'></i></button></td>
              </tr>
         
              `;
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
function day() {
  let sum = 0;
  for (let a = 0; a < data.length; a++) {
    sum = +data[a].price + sum;
  }
  t.style.display = "none";
  h.style.display = "block";
  h.innerHTML = "بيع اليوم:" + sum;
  if (sum == null || sum == 0) {
  } else {
    ata();
    datahis();
    deleteall();
  }
  hedden();
}
window.onscroll = function () {
  up();
};
function up() {
  let p = document.getElementById("up");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    p.classList.remove("he");
  } else {
    p.classList.add("he");
  }
}
function topp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let history;
if (localStorage.history != null) {
  history = JSON.parse(localStorage.history);
} else {
  history = [];
}
let l =
  datee.getDate() + "/" + (datee.getMonth() + 1) + "/" + datee.getFullYear();

function ata() {
  let sum = 0;
  for (let a = 0; a < data.length; a++) {
    sum = +data[a].price + sum;
  }
  let obj2 = {
    time2: JSON.stringify(l),
    totle: sum,
    itnum: data.length,
  };
  history.push(obj2);
  localStorage.setItem("history", JSON.stringify(history));
}
function datahis() {
  let tablehis = "";
  for (let r = 0; r < history.length; r++) {
    tablehis += ` <tr>
            <td style="padding: 20px 0px;"></>${history[r].time2}</td>
            <td style="padding: 20px 0px;"></>${history[r].totle}</td>
            <td style="padding: 20px 0px;"></>${history[r].itnum}</td>
          </tr>`;
  }
  if (document.getElementById("tablehis") != null) {
    document.getElementById("tablehis").innerHTML = tablehis;
  }
}
datahis();
function delete2() {
  localStorage.removeItem("history");
  history.splice(0);
  datahis();
}
let x = document.getElementById("blur");
let r = document.getElementById("mm");
function show() {
  r.classList.add("active");
  x.classList.add("mmt");
}
function hedden() {
  x.classList.remove("mmt");
  r.classList.remove("active");
}








document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); 
      let formElements = document.querySelectorAll('#inputt input');
      let index = Array.prototype.indexOf.call(formElements, document.activeElement);
      
      if (index >= 0 && index < formElements.length - 1) {
        
          formElements[index + 1].focus();
      } else {
        
          document.querySelector('button[type="submit"]').click();
      }
    }
  })