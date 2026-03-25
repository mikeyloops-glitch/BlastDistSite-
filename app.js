const personas = [
  { name: 'Nico · Lightweight street', spec: '7.9" deck · 129 trucks · 52mm 97a wheels · 88a bushings', why: 'Toe-to-toe coverage for US 6 feet while staying flicky.' },
  { name: 'Maya · All-around commuter', spec: '8.25" deck · 144 hollows · 54mm 97a · Zealous built-ins', why: 'Cruise the city then drop into a park with the same setup.' },
  { name: 'Luis · Bowl authority', spec: '8.6" deck · 151 trucks · 57mm 97a · 94a bushings', why: 'Mid-duro wheels + wide platform keep speed in deep transitions.' },
  { name: 'Eva · Vert machine', spec: '8.75" VX · 159 titanium · 59mm 99a · 95a bushings', why: 'Built for coping locks and huge landings.' },
  { name: 'Jules · Tech ledge', spec: '8.0" deck · 139 lows · 53mm 101a · 91a bushings', why: 'Responsive pop and predictable lock-ins for ledges/manuals.' },
  { name: 'Kai · Stable starter', spec: '8.3" deck · 144 mids · 54mm 97a · 90a bushings', why: 'Extra width + slightly softer wheels to build confidence.' }
];

const categories = [
  { title: 'Decks', desc: 'VX, maple, shaped, kids', icon: '01' },
  { title: 'Trucks', desc: 'TKP, RKP, forged, hollow', icon: '02' },
  { title: 'Wheels', desc: 'Street, bowl, cruiser', icon: '03' },
  { title: 'Bearings', desc: 'Built-ins, ceramics, Swiss', icon: '04' },
  { title: 'Hardware', desc: 'Bolts, risers, spacers', icon: '05' },
  { title: 'Bushings', desc: 'Bones, Venom, custom duros', icon: '06' },
  { title: 'Completes', desc: 'Youth, ready-to-ride, cruisers', icon: '07' },
  { title: 'Protection', desc: 'Helmets, pads, gloves', icon: '08' }
];

const brands = ['Opera VX', 'Independent', 'Krux', 'OJ Wheels', 'Ricta', 'Bones', 'TSG', 'Landyachtz', 'Creature', 'Santa Cruz', 'The Heart Supply', 'Zero'];

const grad = (a, b) => `linear-gradient(135deg, ${a}, ${b})`;

const catalog = [
  {
    sku: 'OPR-VX-825', category: 'Decks', brand: 'Opera VX', title: 'VX Team Spectrum 8.25', spec: '8.25" · 14.25" WB · VX fiber', style: ['Street', 'All-around'], width: 8.25, stock: 'in', thumb: grad('#ff9a9e','#fad0c4')
  },
  {
    sku: 'OPR-VX-875', category: 'Decks', brand: 'Opera VX', title: 'VX Shaped 8.75', spec: '8.75" · 14.5" WB · point nose', style: ['Bowl', 'Vert'], width: 8.75, stock: 'low', thumb: grad('#a18cd1','#fbc2eb')
  },
  {
    sku: 'OPR-EGG-800', category: 'Decks', brand: 'Opera VX', title: 'Egg Tech 8.0', spec: '8.0" · 14" WB · mellow', style: ['Street'], width: 8.0, stock: 'in', thumb: grad('#f6d365','#fda085')
  },
  {
    sku: 'IND-HOLLOW-139', category: 'Trucks', brand: 'Independent', title: 'Stage XI Forged Hollow 139', spec: 'Mid · 8.0-8.25" decks', style: ['Street', 'All-around'], width: 139, stock: 'in', thumb: grad('#667eea','#764ba2')
  },
  {
    sku: 'IND-HOLLOW-144', category: 'Trucks', brand: 'Independent', title: 'Stage XI Forged Hollow 144', spec: 'Mid · 8.25-8.4" decks', style: ['All-around'], width: 144, stock: 'low', thumb: grad('#89f7fe','#66a6ff')
  },
  {
    sku: 'KRUX-DL-8.5', category: 'Trucks', brand: 'Krux DLK', title: 'DLK Hi 8.5', spec: 'Hi · 8.5" decks · park ready', style: ['Bowl', 'Vert'], width: 149, stock: 'in', thumb: grad('#cfd9df','#e2ebf0')
  },
  {
    sku: 'OJ-ELITE-53', category: 'Wheels', brand: 'OJ Elite', title: 'Elite Hardline 53mm 99a', spec: 'Street profile · V-cut', style: ['Street'], diameter: 53, duro: 99, stock: 'in', thumb: grad('#f093fb','#f5576c')
  },
  {
    sku: 'OJ-ELITE-56', category: 'Wheels', brand: 'OJ Elite', title: 'Elite Mini Combo 56mm 97a', spec: 'Bowl profile · rounded lip', style: ['All-around', 'Bowl'], diameter: 56, duro: 97, stock: 'low', thumb: grad('#5ee7df','#b490ca')
  },
  {
    sku: 'CRUISER-60-78', category: 'Wheels', brand: 'Flare', title: 'Flare Cruiser 60mm 78a', spec: 'Soft urethane · stoneground', style: ['Cruise'], diameter: 60, duro: 78, stock: 'in', thumb: grad('#43e97b','#38f9d7')
  },
  {
    sku: 'BONES-SS', category: 'Bearings', brand: 'Bones', title: 'Bones Super Swiss 6', spec: 'Built for speed', style: ['All-around', 'Vert'], stock: 'low', thumb: grad('#fa709a','#fee140')
  },
  {
    sku: 'FIREBALL-BUILT', category: 'Bearings', brand: 'Fireball', title: 'Dragon BUILT Ceramic', spec: 'Built-in spacers', style: ['Cruise', 'Downhill'], stock: 'in', thumb: grad('#30cfd0','#330867')
  },
  {
    sku: 'VENOM-HPF-92', category: 'Bushings', brand: 'Venom', title: 'HPF Street 92a', spec: 'Barrel/Cone set', style: ['Street'], stock: 'in', thumb: grad('#bdc2e8','#e6dee9')
  },
  {
    sku: 'VENOM-HPF-94', category: 'Bushings', brand: 'Venom', title: 'HPF Downhill 94a', spec: 'Double barrel', style: ['Bowl', 'Vert'], stock: 'backorder', thumb: grad('#f8b195','#f67280')
  },
  {
    sku: 'GRIP-MOB-11', category: 'Hardware', brand: 'Mob', title: 'Mob Grip 11" Roll', spec: 'Perforated · clear backing', style: ['All-around'], stock: 'in', thumb: grad('#2980B9','#6DD5FA')
  },
  {
    sku: 'KIT-STARTER', category: 'Hardware', brand: 'Blast Kits', title: 'Starter Hardware Kit', spec: 'Bolts + spacers + risers', style: ['Street', 'Cruise'], stock: 'in', thumb: grad('#f7971e','#ffd200')
  },
  {
    sku: 'TSG-HELMET', category: 'Apparel', brand: 'TSG', title: 'TSG Evolution Matte', spec: 'Certified helmet', style: ['Bowl', 'Vert'], stock: 'low', thumb: grad('#d9a7c7','#fffcdc')
  }
];

const categoriesElIds = ['category-grid','brand-row','ticker-track','catalog-grid'];

function renderPersonas() {
  const grid = document.getElementById('persona-grid');
  grid.innerHTML = '';
  personas.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card persona-card';
    card.innerHTML = `<h3>${p.name}</h3><p><strong>${p.spec}</strong>${p.why}</p>`;
    grid.appendChild(card);
  });
}

function renderCategories() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';
  categories.forEach(cat => {
    const tile = document.createElement('article');
    tile.className = 'category-tile';
    tile.innerHTML = `<h3>${cat.title}</h3><p>${cat.desc}</p><span>${cat.icon}</span>`;
    grid.appendChild(tile);
  });
}

function renderBrands() {}
function renderLogoStrip() {
  const strip = document.getElementById('logo-strip');
  if (!strip) return;
  strip.innerHTML = '';
  brands.slice(0, 8).forEach(brand => {
    const chip = document.createElement('div');
    chip.className = 'logo-chip';
    chip.textContent = brand;
    strip.appendChild(chip);
  });
}

</span><button class="btn ghost" style="padding:0.35rem 0.9rem;font-size:0.75rem;">View</button>`;
    row.appendChild(card);
  });
}

function renderTicker() {
  const track = document.getElementById('ticker-track');
  const items = [...catalog, ...catalog].slice(0, 18);
  track.innerHTML = '';
  items.forEach(item => {
    const pill = document.createElement('div');
    pill.className = 'ticker__item';
    pill.innerHTML = `<strong>${item.sku}</strong> ${item.brand} · ${item.title} <span class="ticker__pill ${item.stock}">${stockLabel(item.stock)}</span>`;
    track.appendChild(pill);
  });
}

function stockLabel(status) {
  switch (status) {
    case 'in': return 'In stock';
    case 'low': return 'Low stock';
    case 'backorder': return 'Backorder';
    default: return status;
  }
}

function renderCatalog(filter = {}) {
  const grid = document.getElementById('catalog-grid');
  grid.innerHTML = '';
  const filtered = catalog.filter(item => {
    const styleOk = filter.style === 'all' || !filter.style ? true : item.style?.includes(filter.style);
    const stockOk = filter.stock === 'all' || !filter.stock ? true : item.stock === filter.stock;
    const catOk = filter.category === 'all' || !filter.category ? true : item.category === filter.category;
    return styleOk && stockOk && catOk;
  });
  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'product-card';
    const badges = [];
    if (item.width) badges.push(`${item.width}"`);
    if (item.diameter) badges.push(`${item.diameter}mm`);
    if (item.duro) badges.push(`${item.duro}a`);
    const thumb = `<div class="product-thumb" style="background:${item.thumb}"></div>`;
    card.innerHTML = `
      ${thumb}
      <div class="stock-pill ${item.stock}">${stockLabel(item.stock)}</div>
      <h4>${item.brand}</h4>
      <h3>${item.title}</h3>
      <p class="product-meta">${item.category}</p>
      <p class="product-meta">${item.spec}</p>
      <div class="badges">${badges.map(b => `<span class="badge">${b}</span>`).join('')}</div>
      <div class="quick-actions">
        <button onclick="openCalculator('${item.category}','${item.sku}')">Calc</button>
        <button>Quick view</button>
        <button>Add to quote</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openCalculator() {
  document.getElementById('finder').scrollIntoView({ behavior: 'smooth' });
}

const ranges = {
  trucks(deckMid) {
    if (deckMid <= 8) return '129–139 mm';
    if (deckMid <= 8.4) return '139–144 mm';
    if (deckMid <= 8.7) return '149 mm';
    return '151–159 mm';
  },
  wheels(style) {
    switch (style) {
      case 'street': return '52–54 mm · 99a';
      case 'all': return '53–55 mm · 97a';
      case 'bowl': return '56–58 mm · 97a';
      case 'vert': return '58–60 mm · 99a';
      case 'cruise': return '60–65 mm · 78–85a';
      default: return '53–55 mm · 97a';
    }
  },
  bearings(skill) {
    if (skill === 'advanced') return 'Ceramic / Swiss tier';
    if (skill === 'intermediate') return 'Bones Reds / ABEC-7';
    return 'Sealed ABEC-5 (low maintenance)';
  },
  bushings(weight) {
    if (weight < 60) return '88a–90a';
    if (weight < 80) return '90a–92a';
    if (weight < 95) return '92a–94a';
    return '94a–96a';
  }
};

function computeDeckRange(shoe, weight) {
  if (shoe <= 7) return '7.75–8.0"';
  if (shoe <= 9.5) return weight > 80 ? '8.25–8.375"' : '8.0–8.25"';
  if (shoe <= 11) return weight > 85 ? '8.375–8.5"' : '8.25–8.375"';
  return weight > 90 ? '8.5–8.75"' : '8.375–8.5"';
}

function deckMid(range) {
  const parts = range.replace(/"/g, '').split('–');
  if (parts.length === 2) return (parseFloat(parts[0]) + parseFloat(parts[1])) / 2;
  return parseFloat(parts[0]) || 8.25;
}

function buildResultCards({ deckRange, truckRange, wheelRange, bearings, bushings, profile, height }) {
  const cards = [
    { title: 'Deck width', body: deckRange, note: 'Sized from shoe + weight inputs.' },
    { title: 'Trucks', body: `${truckRange} · ${profile.toUpperCase()}`, note: profile === 'low' ? 'Lower kingpin for flip speed.' : profile === 'hi' ? 'Hi / RKP clearance for big wheels.' : 'Mid profile default.' },
    { title: 'Wheels', body: wheelRange, note: 'Match duro to comfort vs. snap.' },
    { title: 'Bearings & bushings', body: `${bearings} · Bushings ${bushings}`, note: 'Swap durometer when rider weight changes.' }
  ];
  if (height > 185) cards.push({ title: 'Wheelbase hint', body: '14.5"+', note: 'Tall riders prefer longer wheelbase / pintail.' });
  return cards;
}

function matchesDeck(range, item) {
  if (!item.width) return false;
  const parts = range.replace(/"/g, '').split('–');
  if (parts.length === 2) {
    const min = parseFloat(parts[0]);
    const max = parseFloat(parts[1]);
    return item.width >= min && item.width <= max;
  }
  return Math.abs(item.width - parseFloat(parts[0])) < 0.1;
}

function mapStyle(styleKey) {
  const map = { street: 'Street', all: 'All-around', bowl: 'Bowl', vert: 'Vert', cruise: 'Cruise' };
  return map[styleKey] || 'Street';
}

function findBestMatches(styleKey, deckRange) {
  const styleLabel = mapStyle(styleKey);
  const deck = catalog.find(item => item.category === 'Decks' && matchesDeck(deckRange, item) && item.style?.includes(styleLabel));
  const truck = catalog.find(item => item.category === 'Trucks' && item.style?.includes(styleLabel));
  const wheel = catalog.find(item => item.category === 'Wheels' && item.style?.includes(styleLabel));
  const bearings = catalog.find(item => item.category === 'Bearings');
  return { deck, truck, wheel, bearings };
}

function renderResult(cards) {
  const container = document.getElementById('result-cards');
  container.innerHTML = '';
  cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'result-card';
    div.innerHTML = `<h4>${card.title}</h4><p><strong>${card.body}</strong></p><p>${card.note}</p>`;
    container.appendChild(div);
  });
}

function renderPicks(picks) {
  const container = document.getElementById('result-picks');
  container.innerHTML = '';
  Object.entries(picks).forEach(([key, item]) => {
    if (!item) {
      const fallback = document.createElement('div');
      fallback.className = 'pick-card';
      fallback.innerHTML = `<div><strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong>No direct match · show alternatives</div>`;
      container.appendChild(fallback);
      return;
    }
    const div = document.createElement('div');
    div.className = 'pick-card';
    div.innerHTML = `<div><strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong>${item.brand} · ${item.title}</div><div class="stock-pill ${item.stock}">${stockLabel(item.stock)}</div>`;
    container.appendChild(div);
  });
}

function scrollToFinder() {
  document.getElementById('finder').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const shoe = parseFloat(formData.get('shoe'));
  const weight = parseFloat(formData.get('weight'));
  const height = parseFloat(formData.get('height'));
  const style = formData.get('style');
  const profile = formData.get('profile');
  const skill = formData.get('skill');

  const deckRange = computeDeckRange(shoe, weight);
  const truckRange = ranges.trucks(deckMid(deckRange));
  const wheelRange = ranges.wheels(style);
  const bearings = ranges.bearings(skill);
  const bushings = ranges.bushings(weight);

  renderResult(buildResultCards({ deckRange, truckRange, wheelRange, bearings, bushings, profile, height }));
  renderPicks(findBestMatches(style, deckRange));
  document.getElementById('results').classList.remove('hidden');
}

function initFilters() {
  const styleSelect = document.getElementById('filter-style');
  const stockSelect = document.getElementById('filter-stock');
  const categorySelect = document.getElementById('filter-category');
  const applyFilters = () => {
    renderCatalog({
      style: styleSelect.value === 'all' ? null : styleSelect.value,
      stock: stockSelect.value === 'all' ? null : stockSelect.value,
      category: categorySelect.value === 'all' ? null : categorySelect.value
    });
  };
  [styleSelect, stockSelect, categorySelect].forEach(select => select.addEventListener('change', applyFilters));
}

window.addEventListener('DOMContentLoaded', () => {
  renderPersonas();
  renderCategories();
  renderBrands();
  renderLogoStrip();
  renderTicker();
  renderCatalog();
  initFilters();
  document.getElementById('setup-form').addEventListener('submit', handleFormSubmit);
});
