let aneg = [
  {
    text: "Муж собирается в бар. Жена ему говорит: сейчас буду уборку делать, сына с собой бери. Себе пива возьми, а ребёнку - лимонад. Приходят в бар, отец по привычке берёт две пинты, поит сына, напивается. Приходят домой, жена нюхает мужа – ладно, понятно. Но от сына почему пахнет, ты что, и ему налил? — Нет. Мы целовались.",
  },
  {
    text: "— Простите, я потерял сынишку в вашем торговом центре. Можно сделаю объявление по радио? — Конечно. Наклоняется к микрофону: — Прощай, маленький уебок.",
  },
  {
    text: "Мальчик заходит в комнату, а там отец перед ноутом дрочит. - Папа, что ты делаешь? - Дрочу, сынок. А скоро и ты будешь. - А почему? - Потому, что у меня рука устала.",
  },
  {
    text: "Познакомились два доктора, беседуют:- Когда-нибудь замечал, что во врачебном халате удобно прятать стояк?- Точно! И правда очень удобно! А вы, выходит, коллега, как и я - гинеколог?- Да нет, педиатр.",
  },
  {
    text: "Мужчина входит в бар. Нет, подождите… Лошадь. Мужчина входит в лошадь",
  },
  {
    text: "- Мой кот по-моему стал голубым. - ??? - Он у меня вчера даже из рук не вырывался",
  },
  {
    text: "Моя жена вошла и увидела, как я трахаю дочь. Не знаю, чему она больше удивилась - этому, или тому, что мне разрешили забрать с собой выкидыш.",
  },
  {
    text: "В чём разница между негром и апельсином? Когда апельсин снимают с дерева - он ещё живой",
  },
  {
    text: "Что вы скажете, увидев негра, по шею закатанного в бетон?",
  },
  {
    text: "Почему негры так плохо пахнут? Чтобы слепые их тоже могли ненавидеть.",
  },
  {
    text: "Как сделать так что бы негр перестал тонуть? Надо просто убрать ногу с его головы",
  },
  { text: "сюда я решил не добавлять анегдот, так что иди на хуй" },
  { text: " " },
  { text: " " },
  { text: " " },
];

let clickCounter = document.getElementById("counter");
let clickBtn = document.getElementById("btn");
let score = document.getElementById("score");

let upgradeBtn1 = document.getElementById("upgrade1");
let upgradeBtn2 = document.getElementById("upgrade2");
let upgradeBtn3 = document.getElementById("upgrade3");
let upgradeBtn4 = document.getElementById("upgrade4");
let upgradeBtn5 = document.getElementById("upgrade5");

let upgrader = 0;

let cou = 1;

let buyUp1 = 100;
let buyUp2 = 650;
let buyUp3 = 2000;
let buyUp4 = 5000;
let buyUp5 = 35000;

clickBtn.addEventListener("click", counters);

upgradeBtn1.addEventListener("mouseup", up1);
upgradeBtn2.addEventListener("mouseup", up2);
upgradeBtn3.addEventListener("mouseup", up3);
upgradeBtn4.addEventListener("mouseup", up4);
upgradeBtn5.addEventListener("mouseup", up5);

function counters() {
  upgrader = upgrader + cou;
  clickCounter.textContent = "надрочено: " + upgrader;
}

function up1() {
  if (upgrader >= buyUp1) {
    upgrader = upgrader - buyUp1;
    cou = cou + 2;
    buyUp1 = Math.floor(buyUp1 * 1.2);
    score.textContent = "донатят за клик: " + cou;
    clickCounter.textContent = "надрочено: " + upgrader;
    upgradeBtn1.textContent = "пенис Никиты +2см - цена: " + buyUp1;
  }
}

function up2() {
  if (upgrader >= buyUp2) {
    upgrader = upgrader - buyUp2;
    cou = cou + 6;
    buyUp2 = Math.floor(buyUp2 * 1.2);
    score.textContent = "донатят за клик: " + cou;
    clickCounter.textContent = "надрочено: " + upgrader;
    upgradeBtn2.textContent = "пенис Олега +6см - цена: " + buyUp2;
  }
}

function up3() {
  if (upgrader >= buyUp3) {
    upgrader = upgrader - buyUp3;
    cou = cou + 10;
    buyUp3 = Math.floor(buyUp3 * 1.2);
    score.textContent = "донатят за клик: " + cou;
    clickCounter.textContent = "надрочено: " + upgrader;
    upgradeBtn3.textContent = "пенис Миши +10см - цена: " + buyUp3;
  }
}

function up4() {
  if (upgrader >= buyUp4) {
    upgrader = upgrader - buyUp4;
    cou = cou + 17;
    buyUp4 = Math.floor(buyUp4 * 1.3);
    score.textContent = "донатят за клик: " + cou;
    clickCounter.textContent = "надрочено: " + upgrader;
    upgradeBtn4.textContent = "пенис Феликса +17см - цена: " + buyUp4;
  }
}

function up5() {
  if (upgrader >= buyUp5) {
    upgrader = upgrader - buyUp5;
    cou = cou + 150;
    buyUp5 = Math.floor(buyUp5 * 1.4);
    score.textContent = "донатят за клик: " + cou;
    clickCounter.textContent = "надрочено: " + upgrader;
    upgradeBtn5.textContent = "пенис Вики +150см - цена: " + buyUp5;
  }
}
