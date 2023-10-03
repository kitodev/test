const data = [
  {
    title: "Örizetbe vétel",
    desc: "A  tárgyalást megelőző vagy a felfedezés szakaszában az Ön ügyvédje (link) információt cserél az ellenfél ügyvédjével. Megbeszéljük a tárgyalás során felhasználni kívánt információkat és bizonyítékokat (link). Egyes esetekben tárgyalás előtti indítványt (link) lehet benyújtani, amely bizonyos vádakat elutasíthat, vagy bizonyos bizonyítékokat kihagyhat a tárgyalásból.",
  },
  {
    title: "Örizetbe vétel2",
    desc: "A  tárgyalást m2egelőző vagy a felfedezés szakaszában az Ön ügyvédje (link) információt cserél az ellenfél ügyvédjével. Megbeszéljük a tárgyalás során felhasználni kívánt információkat és bizonyítékokat (link). Egyes esetekben tárgyalás előtti indítványt (link) lehet benyújtani, amely bizonyos vádakat elutasíthat, vagy bizonyos bizonyítékokat kihagyhat a tárgyalásból.",
  },
  {
    title: "Örizetbe vétel3",
    desc: "A  tárgyalást m2egelőző vagy a felfedezés szakaszában az Ön ügyvédje (link) információt cserél az ellenfél ügyvédjével. Megbeszéljük a tárgyalás során felhasználni kívánt információkat és bizonyítékokat (link). Egyes esetekben tárgyalás előtti indítványt (link) lehet benyújtani, amely bizonyos vádakat elutasíthat, vagy bizonyos bizonyítékokat kihagyhat a tárgyalásból.",
  },
  {
    title: "Örizetbe vétel4",
    desc: "A  tárgyalást m2egelőző vagy a felfedezés szakaszában az Ön ügyvédje (link) információt cserél az ellenfél ügyvédjével. Megbeszéljük a tárgyalás során felhasználni kívánt információkat és bizonyítékokat (link). Egyes esetekben tárgyalás előtti indítványt (link) lehet benyújtani, amely bizonyos vádakat elutasíthat, vagy bizonyos bizonyítékokat kihagyhat a tárgyalásból.",
  },
];

let currentSelection = null;

const generateSelectedDesc = (index) => {
  currentSelection = index;
  document.querySelector(".title").innerHTML = data[currentSelection].title;
  document.querySelector(".desc").innerHTML = data[currentSelection].desc;
};

const generateData = () => {
  const element = document.querySelector(".circleContainer");

  let lines = "";
  data.forEach((element, index) => {
    lines += `
        <div class="circle" data-index="${index}">${element.title}</div>
        `;
  });

  element.innerHTML += lines;
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.addEventListener("click", (e) => {
      generateSelectedDesc(e.target.dataset.index);
      // Itt végezheted el a kívánt műveleteket az elemre történő kattintásnál
    });
  });
};

document.querySelector(".right").addEventListener("click", function () {
  console.log(currentSelection);
  if (currentSelection != null || currentSelection == 0) {
    generateSelectedDesc(currentSelection + 1);
  } else {
    currentSelection = 0;
  }
});
document.querySelector(".fa-arrow-left").addEventListener("click", function () {
  if (currentSelection != null || currentSelection == 0) {
    generateSelectedDesc(currentSelection - 1);
  } else {
    currentSelection = data.length - 1;
  }
});

generateData();
