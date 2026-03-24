const personas = [
  {
    name: 'Nico · Lightweight street',
    spec: '7.9" deck · 129 trucks · 52mm 97a wheels · 88a bushings',
    why: 'Keeps flicks quick for US 6 feet while adding enough width for stability.'
  },
  {
    name: 'Maya · All-around commuter',
    spec: '8.25" deck · 144 hollows · 54mm 97a · Zealous built-ins',
    why: 'Balances street tricks and rolling to work with softer bushings and mid wheels.'
  },
  {
    name: 'Luis · Bowl authority',
    spec: '8.6" deck · 151 trucks · 57mm 97a · 94a bushings',
    why: 'Extra platform and mid-duro wheels keep speed on deep transitions.'
  },
  {
    name: 'Eva · Vert machine',
    spec: '8.75" VX · 159 titanium · 59mm 99a · 95a bushings',
    why: 'Landing support + high-speed wheels for coping locks.'
  },
  {
    name: 'Jules · Tech ledge',
    spec: '8.0" deck · 139 lows · 53mm 101a · 91a bushings',
    why: 'Responsive pop with harder wheels for ledges and manuals.'
  },
  {
    name: 'Kai · Stable starter',
    spec: '8.3" deck · 144 mids · 54mm 97a · 90a bushings',
    why: 'Wider stance and grippy wheels for confidence while learning.'
  }
];

function renderPersonas() {
  const grid = document.getElementById('persona-grid');
  personas.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${p.name}</h3><p><strong>${p.spec}</strong></p><p>${p.why}</p>`;
    grid.appendChild(card);
  });
}

const ranges = {
  deck(widthPrompt) {
    return widthPrompt;
  },
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
    if (skill === 'advanced') return 'Ceramic or Swiss';
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

function getStyleNote(style) {
  const notes = {
    street: 'Trimmed width for fast flicks, harder wheels, TKP trucks.',
    all: 'Balanced deck with hybrid wheels so you can street skate and cruise.',
    bowl: 'Wider platform + mid wheels keep speed in transitions.',
    vert: 'Max platform and stiff bushings for coping stability.',
    cruise: 'Softer wheels + optional RKP trucks for commute comfort.'
  };
  return notes[style] || '';
}

function buildResultCards({ deck, trucks, wheels, bearings, bushings, skill, style, height }) {
  const cards = [
    { title: 'Deck width', body: `${deck} · tuned for your shoe size`, note: getStyleNote(style) },
    { title: 'Trucks', body: `${trucks} hanger (${style === 'cruise' ? 'RKP optional' : 'TKP standard'})`, note: 'Matches deck width for rail alignment.' },
    { title: 'Wheels', body: wheels, note: style === 'cruise' ? 'Soft urethane smooths cracks.' : 'Harder formulas keep speed on tricks.' },
    { title: 'Bearings & Bushings', body: `${bearings} · Bushings ${bushings}`, note: skill === 'beginner' ? 'Softer setup for easier turning.' : 'Higher durometer for landing support.' }
  ];
  if (height > 185) {
    cards.push({ title: 'Wheelbase hint', body: '14.5"+', note: 'Longer riders feel better on extended wheelbases.' });
  }
  return cards;
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
  document.getElementById('results').classList.remove('hidden');
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
  const skill = formData.get('skill');

  const deck = computeDeckRange(shoe, weight);
  const cards = buildResultCards({
    deck,
    trucks: ranges.trucks(deckMid(deck)),
    wheels: ranges.wheels(style),
    bearings: ranges.bearings(skill),
    bushings: ranges.bushings(weight),
    style,
    skill,
    height
  });
  renderResult(cards);
}

window.addEventListener('DOMContentLoaded', () => {
  renderPersonas();
  document.getElementById('setup-form').addEventListener('submit', handleFormSubmit);
});
