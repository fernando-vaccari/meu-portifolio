import './demos.css';
import { escape, icon, setupMenu } from './shared.js';
import { profile } from './profile.js';

const base = import.meta.env.BASE_URL;
const image = name => `${base}images/${name}`;
const configs = {
  sorriso: {
    name: 'sorriso', mark: '✳', nav: [['#cuidados', 'Nossos cuidados'], ['#sobre', 'A clínica'], ['#duvidas', 'Dúvidas']], action: 'Agendar avaliação',
    eyebrow: 'ODONTOLOGIA COM LEVEZA', title: 'Seu melhor sorriso<br>começa com <em>cuidado.</em>', intro: 'Um atendimento próximo, no seu tempo. Da prevenção a uma nova forma de sorrir, estamos aqui para cuidar de você.',
    hero: 'dental-hero.png', alt: 'Profissional de odontologia em um ambiente clínico', secondary: 'Conheça nossos cuidados', secondaryUrl: '#cuidados', foot: ['Escuta de verdade', 'Cuidado individual', 'Ambiente acolhedor'],
    serviceTitle: 'Para cada sorriso,<br><em>um cuidado.</em>', serviceIntro: 'Um plano de cuidado pensado para você, com informação clara em cada etapa.',
    services: [{ title:'Prevenção & limpeza', text:'Pequenos cuidados que fazem uma grande diferença na saúde do seu sorriso.', symbol:'✳' }, { title:'Estética do sorriso', text:'Clareamento e soluções estéticas com avaliação e planejamento individual.', symbol:'◈' }, { title:'Alinhamento dental', text:'Opções de tratamento para alinhar os dentes e cuidar da sua mordida.', symbol:'⌁' }, { title:'Reabilitação oral', text:'Planejamento para recuperar conforto, função e confiança ao sorrir.', symbol:'✧' }],
    aboutTitle:'Mais acolhimento.<br><em>Menos receio.</em>', aboutText:'Uma visita ao dentista pode ser uma experiência tranquila. Por isso, nossa proposta é ouvir primeiro, explicar cada etapa e construir um plano de cuidado junto com você.', aboutImage:'dental-about.png', aboutAlt:'Atendimento odontológico em consultório',
    aboutItems:['Tratamentos explicados de forma simples','Tempo para ouvir suas dúvidas','Planejamento individual para cada pessoa'],
    questions:[['Como funciona a primeira consulta?','Começamos com uma conversa e uma avaliação. O profissional explica as necessidades encontradas e as opções de cuidado antes de qualquer procedimento.'],['Posso conhecer as opções de tratamento?','Sim. A avaliação é o momento de conversar sobre suas expectativas e entender quais alternativas podem ser adequadas ao seu caso.'],['Este agendamento é real?','Não. Esta clínica é fictícia e este site faz parte do portfólio de Fernando Vaccari. O formulário apenas demonstra a experiência de solicitar uma consulta.']],
    bookingTitle:'O primeiro passo para<br><em>um novo sorriso.</em>', bookingText:'Escolha o cuidado e um horário de preferência. Veja como seria simples solicitar uma avaliação.', formService:'Cuidado de interesse', options:['Avaliação inicial','Prevenção & limpeza','Estética do sorriso','Alinhamento dental','Reabilitação oral'], formButton:'Simular solicitação',
    schedule:'Segunda a sexta, das 8h às 18h', place:'Uma clínica perto de você', footerLine:'Cuidado que aproxima. Sorrisos que ficam.',
  },
  brasa: {
    name:'MESA & BRASA', mark:'', nav:[['#cardapio','Cardápio'],['#sobre','Nossa essência'],['#duvidas','Antes de vir']], action:'Reservar uma mesa',
    eyebrow:'BOA COMIDA. BOAS CONVERSAS.', title:'O tempo passa.<br>O sabor <em>fica.</em>', intro:'Ingredientes de verdade, o calor da brasa e o prazer de estar à mesa. Uma pausa para os seus melhores encontros.',
    hero:'restaurant-hero.jpg', alt:'Mesa com pratos preparados e ingredientes frescos', secondary:'Explore o cardápio', secondaryUrl:'#cardapio', foot:['Feito com calma', 'Ingredientes frescos', 'Para compartilhar'],
    aboutTitle:'O melhor ingrediente<br>é <em>estar junto.</em>', aboutText:'Acreditamos na comida que aproxima. No ponto certo da brasa, no ingrediente bem escolhido e na mesa que vira conversa. Nossa cozinha celebra os encontros, sem pressa de ir embora.', aboutImage:'restaurant-about.jpg', aboutAlt:'Interior acolhedor de um restaurante',
    aboutItems:['Cozinha feita na hora','Sabores para todos os momentos','Um ambiente para ficar mais um pouco'],
    questions:[['Há opções vegetarianas?','O cardápio demonstrativo inclui opções vegetarianas identificadas. Em um restaurante real, a equipe pode orientar sobre ingredientes e adaptações.'],['Como funcionaria a reserva?','Você escolheria dia, horário e quantidade de pessoas. A confirmação dependeria da disponibilidade e do retorno da equipe.'],['Posso fazer uma reserva real aqui?','Este restaurante é fictício. O formulário simula uma solicitação e não envia dados nem confirma uma reserva real.']],
    bookingTitle:'A sua próxima<br>boa memória <em>à mesa.</em>', bookingText:'Escolha um dia, reúna suas pessoas favoritas e imagine o encontro. A gente mostra o caminho.', formService:'Pessoas à mesa', options:['2 pessoas','3 pessoas','4 pessoas','5 pessoas','6 pessoas','7 ou mais pessoas'], formButton:'Simular reserva',
    schedule:'Terça a domingo, das 18h às 23h', place:'Um lugar para os bons encontros', footerLine:'Feito com tempo. Servido com alma.',
  },
  vertice: {
    name:'VÉRTICE', mark:'®', nav:[['#servicos','Serviços'],['#sobre','Nosso espaço'],['#duvidas','Perguntas']], action:'Marcar meu horário',
    eyebrow:'BARBER CLUB / ESTILO SEM ATALHOS', title:'PRESENÇA EM<br>CADA <em>DETALHE.</em>', intro:'Um bom corte não muda quem você é. Mostra. Técnica, atenção e um tempo reservado só para você.',
    hero:'barber-hero.jpg', alt:'Barbeiro trabalhando em um corte de cabelo', secondary:'Conheça os serviços', secondaryUrl:'#servicos', foot:['Precisão no corte', 'Respeito ao seu estilo', 'Seu tempo bem cuidado'],
    serviceTitle:'SEU ESTILO.<br><em>DO SEU JEITO.</em>', serviceIntro:'Do clássico ao contemporâneo, o detalhe faz a diferença. Escolha seu próximo cuidado.',
    services:[{ title:'Corte personalizado', text:'Na tesoura, na máquina ou no degradê. Um corte pensado para o seu estilo.', price:'R$ 55', duration:'45 min', symbol:'01' },{ title:'Barba & acabamento', text:'Desenho, alinhamento e cuidado para uma barba com presença.', price:'R$ 40', duration:'30 min', symbol:'02' },{ title:'Corte + barba', text:'O cuidado completo, com tempo para acertar cada detalhe.', price:'R$ 85', duration:'75 min', symbol:'03' },{ title:'Acabamento', text:'Pezinho e contornos em dia para manter o corte no ponto.', price:'R$ 25', duration:'20 min', symbol:'04' }],
    aboutTitle:'MAIS QUE UM CORTE.<br><em>SEU MOMENTO.</em>', aboutText:'Uma cadeira, uma boa conversa e atenção de verdade. Nosso espaço foi pensado para você desacelerar enquanto cuidamos do que faz diferença: um resultado com a sua identidade.', aboutImage:'barber-detail.jpg', aboutAlt:'Detalhe de um serviço de barbearia',
    aboutItems:['Conversa antes de começar','Ferramentas e espaço bem cuidados','Técnica que respeita seu estilo'],
    questions:[['Preciso agendar antes?','O agendamento ajuda a reservar o tempo de cada atendimento. Em uma barbearia real, você também pode consultar a disponibilidade de encaixes.'],['Como escolher o meu corte?','Traga uma referência ou converse sobre o que você gosta. A proposta é encontrar um resultado que combine com seu estilo e rotina.'],['Os preços e agendamentos são reais?','Não. Esta é uma barbearia fictícia. Os valores são exemplos e o formulário apenas simula uma solicitação de horário.']],
    bookingTitle:'SEU PRÓXIMO CORTE.<br><em>COMEÇA AQUI.</em>', bookingText:'Escolha o serviço e o melhor dia para você. Sem complicação, do primeiro clique ao acabamento.', formService:'Escolha o serviço', options:['Corte personalizado — R$ 55','Barba & acabamento — R$ 40','Corte + barba — R$ 85','Acabamento — R$ 25'], formButton:'Simular agendamento',
    schedule:'Terça a sábado, das 9h às 19h', place:'Seu novo ponto de encontro', footerLine:'CORTE. BARBA. ATITUDE.',
  },
};
const id = document.body.dataset.demo;
const c = configs[id];
const wordmark = `<span class="wordmark">${escape(c.name)}<span>${c.mark}</span></span>`;
const nav = c.nav.map(([url,label])=>`<a href="${url}">${label}</a>`).join('');
function services() {
  if (id === 'brasa') return `<section id="cardapio" class="demo-section wrap menu-section"><div class="section-heading"><p class="overline">DA COZINHA PARA A SUA MESA</p><h2>Escolhas que dão<br><em>água na boca.</em></h2><p>Uma seleção de sabores para aproveitar, compartilhar e repetir.</p></div><div class="menu-tabs" role="group" aria-label="Categorias do cardápio"><button class="active" data-menu="principais" aria-pressed="true">Principais</button><button data-menu="entradas" aria-pressed="false">Entradas</button><button data-menu="sobremesas" aria-pressed="false">Sobremesas</button></div><div id="menu-items" class="menu-items"></div><p class="menu-disclaimer">Cardápio e preços ilustrativos. Em um restaurante real, consulte ingredientes e alérgenos com a equipe.</p><p class="sr-only" role="status" id="menu-status"></p></section>`;
  return `<section id="${id === 'sorriso' ? 'cuidados' : 'servicos'}" class="demo-section wrap services-section"><div class="section-heading"><p class="overline">${id === 'sorriso' ? 'O CUIDADO QUE VOCÊ PROCURA' : 'A ATENÇÃO QUE VOCÊ MERECE'}</p><h2>${c.serviceTitle}</h2><p>${c.serviceIntro}</p></div><div class="service-grid">${c.services.map(s=>`<article class="service-card"><span class="service-symbol">${s.symbol}</span><h3>${s.title}</h3><p>${s.text}</p>${s.price ? `<div class="service-price"><strong>${s.price}</strong><span>${icon('clock')}${s.duration}</span></div>` : ''}<button class="service-select" data-service="${escape(s.title)}">${id === 'sorriso' ? 'Quero saber mais' : 'Escolher serviço'} ${icon('arrow')}</button></article>`).join('')}</div>${id === 'vertice' ? '<p class="menu-disclaimer">Serviços, valores e durações são exemplos de uma empresa fictícia.</p>' : ''}</section>`;
}
document.querySelector('#app').innerHTML = `
<aside class="demo-banner"><span>SITE DEMONSTRATIVO <b>·</b> EMPRESA FICTÍCIA</span><a href="${base}#projetos">Portfólio de Fernando ${icon('arrow')}</a></aside>
<header class="business-header"><div class="wrap business-header-inner"><a href="#inicio" aria-label="${escape(c.name)} — início">${wordmark}</a><nav class="business-nav" aria-label="Navegação principal">${nav}</nav><a class="demo-button header-cta" href="#agendar">${c.action} ${icon('arrow')}</a><button class="menu-toggle icon-button" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-nav">${icon('menu')}</button></div><nav id="mobile-nav" class="mobile-nav" hidden aria-label="Navegação para celular">${nav}<a href="#agendar">${c.action} ${icon('arrow')}</a></nav></header>
<main id="conteudo"><section id="inicio" class="business-hero"><div class="hero-photo ${id === 'sorriso' ? 'wrap' : ''}"><img src="${image(c.hero)}" alt="${c.alt}" fetchpriority="high" width="${id === 'sorriso' ? 587 : 1880}" height="${id === 'sorriso' ? 839 : 950}"></div><div class="wrap hero-content"><p class="overline">${c.eyebrow}</p><h1>${c.title}</h1><p class="hero-intro">${c.intro}</p><div class="hero-links"><a class="demo-button" href="#agendar">${c.action} ${icon('arrow')}</a><a class="secondary-link" href="${c.secondaryUrl}">${c.secondary} ${icon('right')}</a></div>${id === 'sorriso' ? '<span class="hero-flower" aria-hidden="true">✳</span>' : ''}</div><div class="hero-features wrap">${c.foot.map(f=>`<span>${icon('check')}${f}</span>`).join('')}</div>${id === 'brasa' ? '<span class="hero-vertical" aria-hidden="true">SABORES QUE MERECEM UMA PAUSA.</span>' : ''}</section>
${services()}
<section id="sobre" class="demo-about"><div class="wrap about-layout"><div class="about-image"><img src="${image(c.aboutImage)}" alt="${c.aboutAlt}" loading="lazy" width="570" height="570"><span class="image-caption">${id === 'sorriso' ? 'CUIDADO EM CADA DETALHE.' : id === 'brasa' ? 'DA BRASA À MESA, COM ALMA.' : 'O DETALHE É A NOSSA ASSINATURA.'}</span></div><div class="about-content"><p class="overline">${id === 'sorriso' ? 'UM JEITO MAIS PRÓXIMO DE CUIDAR' : id === 'brasa' ? 'ESSA É A NOSSA ESSÊNCIA' : 'BEM-VINDO AO CLUBE'}</p><h2>${c.aboutTitle}</h2><p>${c.aboutText}</p><ul>${c.aboutItems.map(t=>`<li>${icon('check')}${t}</li>`).join('')}</ul><a class="secondary-link" href="#agendar">${c.action} ${icon('arrow')}</a></div></div></section>
<section id="duvidas" class="demo-section wrap faq-section"><div class="section-heading"><p class="overline">${id === 'brasa' ? 'ANTES DO PRÓXIMO ENCONTRO' : 'PODE PERGUNTAR'}</p><h2>${id === 'vertice' ? 'SEM DÚVIDAS.<br><em>SEM COMPLICAÇÃO.</em>' : 'Tudo começa com<br><em>uma boa conversa.</em>'}</h2></div><div class="faq-list">${c.questions.map(([q,a])=>`<details><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('')}</div></section>
<section id="agendar" class="booking-section"><div class="wrap booking-layout"><div class="booking-copy"><p class="overline">${id === 'brasa' ? 'RESERVE UM BOM MOMENTO' : 'RESERVE UM TEMPO PARA VOCÊ'}</p><h2>${c.bookingTitle}</h2><p>${c.bookingText}</p><div class="booking-info"><span>${icon('clock')}${c.schedule}</span><span>${icon('pin')}${c.place}</span></div><p class="simulation-note">Este é um exemplo interativo de site. A empresa é fictícia, os horários são ilustrativos e nenhum dado é enviado.</p></div><form class="booking-form"><div class="form-title"><strong>${id === 'brasa' ? 'Sua mesa espera por você.' : 'Vamos encontrar um horário?'}</strong><span>SIMULAÇÃO · NÃO É UMA RESERVA REAL</span></div><label for="customer-name">Seu nome<input id="customer-name" name="name" placeholder="Como podemos chamar você?" autocomplete="given-name" maxlength="80" required></label><label for="service-select">${c.formService}<select id="service-select" name="service" required>${c.options.map(o=>`<option>${escape(o)}</option>`).join('')}</select></label><div class="form-row"><label for="booking-date">Dia de preferência<input id="booking-date" type="date" name="date" required></label><label for="booking-time">Horário<select id="booking-time" name="time" required>${(id === 'brasa' ? ['18:00','19:00','20:00','21:00'] : ['09:00','10:00','11:00','14:00','15:00','16:00']).map(t=>`<option>${t}</option>`).join('')}</select></label></div><button class="demo-button" type="submit">${c.formButton} ${icon('arrow')}</button><p class="form-privacy">Não solicitamos telefone ou outros dados de contato nesta demonstração.</p><div id="booking-result" class="booking-result" role="status" hidden></div></form></div></section>
</main><footer class="business-footer wrap"><a href="#inicio">${wordmark}</a><p>${c.footerLine}</p><a href="${base}#contato">Quero um site assim ${icon('arrow')}</a><div class="footer-bottom"><span>Empresa fictícia · Site demonstrativo · Imagens ilustrativas</span><a href="${base}">Design & desenvolvimento por ${escape(profile.shortName)} ${icon('arrow')}</a></div></footer>`;

setupMenu();
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  const select = document.querySelector('#service-select');
  const option = [...select.options].find(o => o.text.startsWith(button.dataset.service));
  if (option) select.value = option.value;
  document.querySelector('#agendar').scrollIntoView({ behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  document.querySelector('#customer-name').focus({ preventScroll:true });
}));

const today = new Date();
const localDate = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const dateInput = document.querySelector('#booking-date');
dateInput.min = localDate(today);
document.querySelector('.booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const nameInput = form.elements.name;
  const name = nameInput.value.trim();
  if (!name) { nameInput.setCustomValidity('Informe um nome para testar a simulação.'); nameInput.reportValidity(); return; }
  dateInput.min = localDate(new Date());
  if (!form.reportValidity()) return;
  const date = new Date(`${dateInput.value}T12:00:00`);
  const weekDay = date.getDay();
  const closed = id === 'sorriso' ? weekDay === 0 || weekDay === 6 : id === 'brasa' ? weekDay === 1 : weekDay === 0 || weekDay === 1;
  if (closed) { dateInput.setCustomValidity('Escolha um dia dentro do horário de funcionamento informado.'); dateInput.reportValidity(); return; }
  const formattedDate = date.toLocaleDateString('pt-BR', { day:'2-digit', month:'long', year:'numeric' });
  const result = document.querySelector('#booking-result');
  result.innerHTML = `${icon('check')}<div><strong>Simulação concluída, ${escape(name)}!</strong><p>${escape(form.elements.service.value)} · ${formattedDate} · ${escape(form.elements.time.value)}.</p><p>Em um site real, a equipe receberia sua solicitação e confirmaria a disponibilidade. Nenhum dado foi enviado e nenhum horário foi reservado.</p></div>`;
  result.hidden = false;
  result.scrollIntoView({ behavior:'smooth', block:'nearest' });
});
document.querySelector('#customer-name').addEventListener('input', e => e.target.setCustomValidity(''));
dateInput.addEventListener('input', () => dateInput.setCustomValidity(''));
document.querySelector('.booking-form').addEventListener('input', () => { document.querySelector('#booking-result').hidden = true; });

if (id === 'brasa') {
  const menu = {
    principais:[{name:'Salmão da casa',desc:'Salmão grelhado, legumes da estação e molho de ervas.',price:'R$ 79',image:'dish-3.png',tag:'DA BRASA'}, {name:'Massa do jardim',desc:'Massa fresca, tomates assados e pesto de manjericão.',price:'R$ 58',image:'dish-2.png',tag:'VEGETARIANO'}, {name:'Risoto de cogumelos',desc:'Arroz arbóreo, mix de cogumelos e finalização de parmesão.',price:'R$ 64',image:'dish-4.png',tag:'VEGETARIANO'}, {name:'Salada mediterrânea',desc:'Folhas, tomates, queijo, azeitonas e azeite de ervas.',price:'R$ 42',image:'dish-1.png',tag:'LEVE & FRESCO'}],
    entradas:[{name:'Burrata & tomates',desc:'Burrata cremosa, tomates confitados e pão artesanal.',price:'R$ 46',image:'dish-1.png',tag:'PARA COMPARTILHAR'}, {name:'Bruschettas da casa',desc:'Pão tostado, tomate, manjericão e azeite extravirgem.',price:'R$ 32',image:'dish-2.png',tag:'VEGETARIANO'}],
    sobremesas:[{name:'Chocolate & afeto',desc:'Brownie morno com sorvete de baunilha.',price:'R$ 29',tag:'FEITO NA CASA'}, {name:'Doce de encontro',desc:'Creme de baunilha, frutas da estação e crocante de castanhas.',price:'R$ 27',tag:'PARA TERMINAR BEM'}],
  };
  function renderMenu(category) {
    document.querySelector('#menu-items').innerHTML = menu[category].map(d=>`<article class="menu-item">${d.image ? `<img src="${image(d.image)}" alt="Imagem ilustrativa de um prato do cardápio" width="100" height="100" loading="lazy">` : '<span class="dessert-symbol" aria-hidden="true">✧</span>'}<div><span class="dish-tag">${d.tag}</span><div class="dish-title"><h3>${d.name}</h3><span></span><strong>${d.price}</strong></div><p>${d.desc}</p></div></article>`).join('');
    document.querySelector('#menu-status').textContent = `${menu[category].length} opções exibidas.`;
  }
  renderMenu('principais');
  document.querySelectorAll('[data-menu]').forEach(button=>button.addEventListener('click',()=> { document.querySelectorAll('[data-menu]').forEach(b=> { b.classList.toggle('active',b===button); b.setAttribute('aria-pressed',String(b===button)); }); renderMenu(button.dataset.menu); }));
}
