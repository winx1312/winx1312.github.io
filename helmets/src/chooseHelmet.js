  const textHelmet = document.getElementById("color-1")
  const textVisor = document.getElementById("color-2")
  const textHolder = document.getElementById("color-3")
  const texthelg = document.getElementById("hel-text-g")
  const texthelm = document.getElementById("hel-text-m")
  const texthelw = document.getElementById("hel-text-w")
  const textv1 = document.getElementById("v-text-1")
  const textv2 = document.getElementById("v-text-2")
  const textv3 = document.getElementById("v-text-3")
  const textv4 = document.getElementById("v-text-4")
  const textv5 = document.getElementById("v-text-5")
  const textv6 = document.getElementById("v-text-6")
  const textHol = document.querySelectorAll('.style__opt-name_holder')
  const hel1 = document.getElementById("hel-g")
  const hel2 = document.getElementById("hel-m")
  const hel3 = document.getElementById("hel-w")
  const visors = Array.from(document.querySelectorAll(".const__visors"));
  const targetVis = Array.from(document.querySelectorAll(".style__opt-img-v"));
  const targetHol = Array.from(document.querySelectorAll(".style__opt-img-h"));
  console.log(targetHol);

  const holderss = Array.from(document.querySelectorAll(".const__holder"));
  console.log(holderss)
  const tarHel1 = document.getElementById("t-hel-g")
  tarHel1.addEventListener('click', () => chooseHelmet(hel1, texthelg))
  const tarHel2 = document.getElementById("t-hel-m")
  tarHel2.addEventListener('click', () => chooseHelmet(hel2, texthelm))
  const tarHel3 = document.getElementById("t-hel-w")
  tarHel3.addEventListener('click', () => chooseHelmet(hel3, texthelw))
  const helmets = Array.from(document.querySelectorAll(".const__helmet"));
  targetVis[0].addEventListener('click', () => chooseVisor(visors[0], textv1));
  targetVis[1].addEventListener('click', () => chooseVisor(visors[1], textv2));
  targetVis[2].addEventListener('click', () => chooseVisor(visors[2], textv3));
  targetVis[3].addEventListener('click', () => chooseVisor(visors[3], textv4));
  targetVis[4].addEventListener('click', () => chooseVisor(visors[4], textv5));
  targetVis[5].addEventListener('click', () => chooseVisor(visors[5], textv6));
  targetHol[0].addEventListener('click', () => chooseHolders(holderss[0], textHol[0]));
  targetHol[1].addEventListener('click', () => chooseHolders(holderss[1], textHol[1]));
  targetHol[2].addEventListener('click', () => chooseHolders(holderss[2], textHol[2]));
  targetHol[3].addEventListener('click', () => chooseHolders(holderss[3], textHol[3]));
  targetHol[4].addEventListener('click', () => chooseHolders(holderss[4], textHol[4]));
  targetHol[5].addEventListener('click', () => chooseHolders(holderss[5], textHol[5]));
  targetHol[6].addEventListener('click', () => chooseHolders(holderss[6], textHol[6]));
  let hide = false;

  function chooseHelmet(helmet, text) {
      hideall()
      showHelmet(helmet)
      showVisor()
      chooseTextHelmet(text);
      showholder();
      let hide = true;
  }

  function hideall() {
      helmets.forEach(i => i.style.opacity = 0);
      hideHolders();
  }

  function showHelmet(helmet = hel1) {
      helmet.classList.add('helmet-chosen')
      helmet.style.opacity = 1;
      let choose = true;
  }

  function showVisor(visor = visors[0]) {
      visor.classList.add("nvisor-chose")
      visor.style.opacity = 1;
      visors[0].style.top = (-902) + 'px';
      visors[1].style.top = (-1095) + 'px';
      visors[2].style.top = (-1286) + 'px';
      visors[3].style.top = (-1480) + 'px';
      visors[4].style.top = (-1672) + 'px';
      visors[5].style.top = (-1867) + 'px';
  }


  function showholder(holder = holderss[0]) {
      holder.classList.add("holder-chosen")
      holder.style.opacity = 1;
      holderss[0].classList.add("hol-1")
      holderss[0].style.left = (-368) + 'px';
      holderss[1].style.left = (-410) + 'px';
      holderss[2].style.left = (59) + 'px';
      holderss[2].style.bottom = (2022) + 'px';
      holderss[3].style.left = (20) + 'px';
      holderss[3].style.bottom = (2025) + 'px';
      holderss[4].style.left = (-18) + 'px';
      holderss[4].style.bottom = (2028) + 'px';
      holderss[5].style.left = (-66) + 'px';
      holderss[5].style.bottom = (2017) + 'px';
      holderss[6].style.left = (-95) + 'px';
      holderss[6].style.bottom = (2014) + 'px';
      let chooseHol = true
  }

  function chooseTextHelmet(text) {
      textHelmet.textContent = text.textContent;
  }

  function chooseTextVisor(text) {
      textVisor.textContent = text.textContent;
  }

  function chooseTextHolders(text) {
      textHolder.textContent = text.textContent;
  }

  function chooseVisor(visor, text) {

      hideVisors()
      hideHolders()
      showVisor(visor)
      showholder()
      chooseTextVisor(text)
  }

  function hideVisors() {
      visors.forEach(i => i.style.opacity = 0)


  }

  function chooseHolders(holder, text) {
      hideHolders()
      showholder(holder)
      chooseTextHolders(text)
      showVisor()

  }

  function hideHolders() {
      holderss.forEach(i => i.style.opacity = 0);
  }