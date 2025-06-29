const planData = {
 "Атак": {"Стирка":"32%","Средства для мытья посуды":"35%","Чистящие средства":"11%","Подгузники":"33%","Ежедневные прокладки":"30%","Прокладки":"31%","Тампоны":"16%","Уход за волосами":"19%","Дезодоранты":"29%","Гели для душа":"23%","Мыло":"3%","Зубные пасты":"8%","Мануальные зубные щетки":"32%"},
 "Ашан": {"Стирка":"27%","Средства для мытья посуды":"32%","Средства для посудомоечных машин":"14%","Чистящие средства":"9%","Подгузники":"30%","Детские салфетки":"10%","Ежедневные прокладки":"32%","Прокладки":"32%","Тампоны":"19%","Урология":"14%","Уход за волосами":"20%","Дезодоранты":"18%","Гели для душа":"20%","Мыло":"4%"},
 "Гиперглобус": {"Стирка":"25%","Средства для мытья посуды":"19%","Средства для посудомоечных машин":"11%","Чистящие средства":"6%","Подгузники":"22%","Детские салфетки":"6%","Ежедневные прокладки":"36%","Прокладки":"31%","Тампоны":"23%","Урология":"10%","Уход за волосами":"13%","Дезодоранты":"21%","Гели для душа":"22%"},
 "Детский Мир": {"Подгузники":"30%","Детские салфетки":"20%"},
 "Дикси": {"Стирка":"39%","Средства для мытья посуды":"58%","Чистящие средства":"22%","Подгузники":"40%","Ежедневные прокладки":"50%","Прокладки":"52%","Уход за волосами":"22%","Дезодоранты":"34%","Гели для душа":"16%"},
 "Магнит ГМ": {"Стирка":"31%","Средства для мытья посуды":"34%","Средства для посудомоечных машин":"13%","Чистящие средства":"9%","Подгузники":"29%","Детские салфетки":"13%","Ежедневные прокладки":"47%","Прокладки":"48%","Тампоны":"16%","Уход за волосами":"23%","Дезодоранты":"30%"},
 "Магнит ДК": {"Стирка":"28%","Средства для мытья посуды":"45%","Чистящие средства":"13%","Подгузники":"38%","Ежедневные прокладки":"43%","Прокладки":"51%","Тампоны":"20%","Уход за волосами":"15%","Дезодоранты":"29%"},
 "Магнит КМ": {"Стирка":"26%","Средства для мытья посуды":"35%","Средства для посудомоечных машин":"9%","Чистящие средства":"6%","Подгузники":"34%","Ежедневные прокладки":"46%","Прокладки":"43%","Тампоны":"15%","Уход за волосами":"16%","Дезодоранты":"23%","Тест на беременность":"34%"},
 "Метро": {"Стирка":"34%","Средства для мытья посуды":"49%","Средства для посудомоечных машин":"11%","Чистящие средства":"16%","Подгузники":"29%","Ежедневные прокладки":"53%","Прокладки":"51%","Тампоны":"27%","Уход за волосами":"22%","Дезодоранты":"26%"},
 "Окей ГМ": {"Стирка":"29%","Средства для мытья посуды":"37%","Средства для посудомоечных машин":"9%","Чистящие средства":"10%","Подгузники":"23%","Ежедневные прокладки":"41%","Прокладки":"42%","Тампоны":"20%","Урология":"12%","Уход за волосами":"17%","Дезодоранты":"19%","Мыло":"3%"},
 "Перекресток": {"Стирка":"28%","Средства для мытья посуды":"38%","Чистящие средства":"7%","Подгузники":"20%","Ежедневные прокладки":"39%","Прокладки":"37%","Тампоны":"22%","Урология":"17%","Уход за волосами":"17%","Дезодоранты":"25%","Мыло":"7%"},
 "Пятёрочка": {"Стирка":"42%","Средства для мытья посуды":"50%","Средства для посудомоечных машин":"11%","Чистящие средства":"10%","Ежедневные прокладки":"48%","Прокладки":"46%","Тампоны":"39%","Уход за волосами":"20%","Дезодоранты":"25%","Мыло":"6%","Мануальные зубные щетки":"11%"}
};

const categoriesByNetwork = {
 "Атак": ["Стирка","Средства для мытья посуды","Чистящие средства","Подгузники","Ежедневные прокладки","Прокладки","Тампоны","Уход за волосами","Дезодоранты","Гели для душа","Мыло","Зубные пасты","Мануальные зубные щетки"],
 "Ашан": ["Стирка","Средства для мытья посуды","Средства для посудомоечных машин","Чистящие средства","Подгузники","Детские салфетки","Ежедневные прокладки","Прокладки","Тампоны","Урология","Уход за волосами","Дезодоранты","Гели для душа","Мыло"],
 "Гиперглобус": ["Стирка","Средства для мытья посуды","Средства для посудомоечных машин","Чистящие средства","Подгузники","Детские салфетки","Ежедневные прокладки","Прокладки","Тампоны","Урология","Уход за волосами","Дезодоранты","Гели для душа"],
 "Детский Мир": ["Подгузники","Детские салфетки"],
 "Дикси": ["Стирка","Средства для мытья посуды","Чистящие средства","Подгузники","Ежедневные прокладки","Прокладки","Уход за волосами","Дезодоранты","Гели для душа"],
 "Магнит ГМ": ["Стирка","Средства для мытья посуды","Средства для посудомоечных машин","Чистящие средства","Подгузники","Детские салфетки","Ежедневные прокладки","Прокладки","Тампоны","Уход за волосами","Дезодоранты"],
 "Магнит ДК": ["Стирка","Средства для мытья посуды","Чистящие средства","Подгузники","Ежедневные прокладки","Прокладки","Тампоны","Уход за волосами","Дезодоранты"],
 "Магнит КМ": ["Стирка","Средства для мытья посуды","Средства для посудомоечных машин","Чистящие средства","Подгузники","Ежедневные прокладки","Прокладки","Тампоны","Уход за волосами","Дезодоранты","Тест на беременность"],
 "Метро": ["Стирка","Средства для мытья посуды","Средства для посудомоечных машин","Чистящие средства","Подгузники","Ежедневные прокладки","Прокладки","Тампоны","Уход за волосами","Дезодоранты"],
 "Окей ГМ": ["Стирка","Средства для мытья посуды","Средства для посудомоечных машин","Чистящие средства","Подгузники","Ежедневные прокладки","Прокладки","Тампоны","Урология","Уход за волосами","Дезодоранты","Мыло"],
 "Перекресток": ["Стирка","Средства для мытья посуды","Чистящие средства","Подгузники","Ежедневные прокладки","Прокладки","Тампоны","Урология","Уход за волосами","Дезодоранты","Мыло"],
 "Пятёрочка": ["Стирка","Средства для мытья посуды","Средства для посудомоечных машин","Чистящие средства","Ежедневные прокладки","Прокладки","Тампоны","Уход за волосами","Дезодоранты","Мыло","Мануальные зубные щетки"]
};

const networkSelect = document.getElementById('network');
const catListDiv = document.getElementById('cat-list');
const calcListDiv = document.getElementById('calc-list');

// --- State Management ---
let networkDataCache = {};

function loadStateFromCache() {
 const cachedData = localStorage.getItem('networkDataCache');
 if (cachedData) {
 networkDataCache = JSON.parse(cachedData);
 }
}

function saveStateToCache() {
 localStorage.setItem('networkDataCache', JSON.stringify(networkDataCache));
}

function getNetworkState(network) {
 if (!networkDataCache[network]) {
 networkDataCache[network] = {
 selectedCategories: [],
 calcState: {}
 };
 }
 return networkDataCache[network];
}

// --- Helpers ---
const parseFlexibleFloat = (value) => {
 if (typeof value !=='string' || value.trim() ==='') return NaN;
 return parseFloat(value.replace(',', '.'));
};

// --- Calculation ---
function calculateResult(calcId, category) {
 const network = networkSelect.value;
 const state = getNetworkState(network);
 const calcData = state.calcState[calcId];

 const pgInput = document.getElementById(`${calcId}_pg`);
 const totalInput = document.getElementById(`${calcId}_total`);
 const unitSelect = document.getElementById(`${calcId}_unit`);

 const pg = parseFlexibleFloat(pgInput.value);
 const total = parseFlexibleFloat(totalInput.value);
 const unit = unitSelect.value;

 const outputEl = document.getElementById(`${calcId}_output`);
 const addEl = document.getElementById(`${calcId}_add`);
 const addLabelEl = document.getElementById(`${calcId}_add_label`);

 const planString = planData[network]?.[category];
 const planNumber = planString ? parseFloat(planString.replace('%', '')) : NaN;

 let roundedResult = NaN;

 // 1. Result Calculation and View Update
 if (outputEl && !isNaN(pg) && !isNaN(total) && total !== 0) {
 const rawResult = (pg / total) * 100;
 roundedResult = Math.round(rawResult); // Округляем (0.44 -> 0, 0.45 -> 1)

 calcData.output = roundedResult + '%';
 outputEl.textContent = calcData.output;

 if (!isNaN(planNumber) && roundedResult >= planNumber) {
 outputEl.style.color ='#2e7d32'; // Green
 } else {
 outputEl.style.color ='#e53935'; // Red
 }
 } else if (outputEl) {
 calcData.output ='—';
 outputEl.textContent ='—';
 outputEl.style.color ='#e53935'; // Reset color
 }

 // 2. "Add" Value Calculation and View Update
 if (addEl && addLabelEl && !isNaN(planNumber) && !isNaN(pg) && !isNaN(total) && total > 0) {
 const isPlanAchieved = !isNaN(roundedResult) && roundedResult >= planNumber;

 if (isPlanAchieved) {
 addEl.textContent ='Выполнено!';
 addEl.className ='calc-result-value done';
 addLabelEl.style.display ='none';
 calcData.add ='Выполнено!';
 } else {
 const addValue = (total * (planNumber / 100)) - pg;
 let formattedAddValue;

 // Corrected the logic to ensure proper formatting for 'Стелаж'
 if (unit ==='Полка' || unit ==='Стеллаж') {
 formattedAddValue = addValue.toFixed(1);
 } else { // Handles 'Сантиметр' and 'Эталон'
 formattedAddValue = Math.round(addValue).toString();
 }
 
 const displayUnit = unit ==='Сантиметр' ? 'см.' : unit;
 const displayValue = formattedAddValue + ' ' + displayUnit;

 calcData.add = displayValue;
 addEl.textContent = displayValue;
 addEl.className ='calc-result-value';
 addLabelEl.style.display ='';
 }
 } else if (addEl && addLabelEl) {
 calcData.add ='—';
 addEl.textContent ='—';
 addEl.className ='calc-result-value';
 addLabelEl.style.display ='';
 }
 
 saveStateToCache();
}

// --- Rendering ---
function renderCategories(network) {
 catListDiv.innerHTML ='';
 calcListDiv.innerHTML ='';
 if (!network) return;

 const categories = categoriesByNetwork[network] || [];
 const state = getNetworkState(network);
 const selectedCategories = new Set(state.selectedCategories);

 categories.forEach(cat => {
 const isChecked = selectedCategories.has(cat);
 const planValue = planData[network]?.[cat] || '';
 
 const label = document.createElement('label');
 if (isChecked) label.classList.add('selected');

 const checkbox = document.createElement('input');
 checkbox.type ='checkbox';
 checkbox.value = cat;
 checkbox.name ='categories';
 checkbox.checked = isChecked;

 const catNameSpan = document.createElement('span');
 catNameSpan.className ='cat-name';
 catNameSpan.textContent =' ' + cat;

 label.appendChild(checkbox);
 label.appendChild(catNameSpan);

 if (planValue) {
 const planSpan = document.createElement('span');
 planSpan.className ='plan-value';
 planSpan.textContent = `План: ${planValue}`;
 label.appendChild(planSpan);
 }

 catListDiv.appendChild(label);

 checkbox.addEventListener('change', function() {
 label.classList.toggle('selected', this.checked);
 updateCalculators();
 });
 });
}

function createCalculatorElement(network, category) {
 const state = getNetworkState(network);
 const calcId ='calc_' + category.replace(/\s+/g, '_');
 if (!state.calcState[calcId]) {
 state.calcState[calcId] = { pg: '', total: '', output: '—', add: '—', unit: 'Полка' };
 }
 const calcData = state.calcState[calcId];

 // Ensure unit exists for older cache formats
 if (!calcData.unit) {
 calcData.unit ='Полка';
 }

 const planValue = planData[network]?.[category] || '';
 const planNumber = planValue ? parseFloat(planValue.replace('%', '')) : NaN;

 // Logic for initial result color
 const resultNumber = parseFloat(calcData.output);
 const resultColor = (!isNaN(planNumber) && !isNaN(resultNumber) && resultNumber >= planNumber) ? '#2e7d32' : '#e53935'; // Изменено > на >=

 // Logic for initial "add" content and style
 const addNumber = parseFloat(calcData.add);
 let addContent = calcData.add || '—';
 let addClassName ='calc-result-value';
 let addLabelStyle ='';

 if (!isNaN(addNumber) && addNumber <= 0) { // Изменено < на <=
 addContent ='Выполнено!';
 addClassName ='calc-result-value done';
 addLabelStyle ='style="display: none;"';
 }

 const newCalc = document.createElement('div');
 newCalc.className ='calc-block';
 newCalc.id = calcId;
 newCalc.dataset.category = category; // Store category name for easier mapping

 newCalc.innerHTML = `
 <div class="calc-title-row">
 <div class="calc-title">${category}</div>
 ${planValue ? `<span class="plan-value">План: ${planValue}</span>` : ''}
 </div>
 <div class="calc-grid">
 <div class="calc-label">Ед. изм:</div>
 <select class="calc-input" id="${calcId}_unit">
 <option>Полка</option>
 <option>Сантиметр</option>
 <option>Стеллаж</option>
 <option>Эталон</option>
 </select>
 <div class="calc-label">PG:</div>
 <input type="number" class="calc-input" id="${calcId}_pg" value="${calcData.pg || ''}">
 <div class="calc-label">Конкуренты + PG:</div>
 <input type="number" class="calc-input" id="${calcId}_total" value="${calcData.total || ''}">
 </div>
 <div class="calc-result-group">
 <div class="result-line">
 <span class="calc-result-label">Результат:</span>
 <span class="calc-result-value" id="${calcId}_output" style="color: ${resultColor};">${calcData.output || '—'}</span>
 </div>
 <div class="result-line">
 <span class="calc-result-label" id="${calcId}_add_label" ${addLabelStyle}>Добавить:</span>
 <span class="${addClassName}" id="${calcId}_add">${addContent}</span>
 </div>
 </div>
 `;

 const pgInput = newCalc.querySelector(`#${calcId}_pg`);
 const totalInput = newCalc.querySelector(`#${calcId}_total`);
 const unitSelect = newCalc.querySelector(`#${calcId}_unit`);

 const placeholderMap = {
 'Полка': { pg: 'Введите PG в полках', total: 'Введите общее количество в полках' },
 'Стелаж': { pg: 'Введите PG в стеллажах', total: 'Введите общее количество в стеллажах' },
 'Эталон': { pg: 'Введите PG в эталонах', total: 'Введите общие количество в эталонах' },
 'Сантиметр': { pg: 'Введите PG в см.', total: 'Введите общие количество в см.' }
 };

 function updatePlaceholders(unit) {
 const placeholders = placeholderMap[unit] || placeholderMap['Полка'];
 pgInput.placeholder = placeholders.pg;
 totalInput.placeholder = placeholders.total;
 }

 // --- NEW: Input validation logic ---
 function updateInputMode(unit) {
 const isIntegerOnly = unit ==='Сантиметр' || unit ==='Эталон';
 [pgInput, totalInput].forEach(input => {
 input.step = isIntegerOnly ? '1' : 'any';
 if (isIntegerOnly) {
 const currentValue = parseFlexibleFloat(input.value);
 if (!isNaN(currentValue)) {
 const integerValue = Math.floor(currentValue).toString();
 if (input.value !== integerValue) {
 input.value = integerValue;
 }
 }
 }
 });
 }

 function handleIntegerInput(event) {
 const unit = unitSelect.value;
 if (unit ==='Сантиметр' || unit ==='Эталон') {
 // This cleans up the input in real-time, useful for pastes
 event.target.value = event.target.value.replace(/[.,]/g, '');
 }
 }

 // --- Add event listeners for the new element ---
 pgInput.addEventListener('input', function(e) {
 handleIntegerInput(e);
 getNetworkState(network).calcState[calcId].pg = this.value;
 calculateResult(calcId, category); // Recalculate on input
 });

 totalInput.addEventListener('input', function(e) {
 handleIntegerInput(e);
 getNetworkState(network).calcState[calcId].total = this.value;
 calculateResult(calcId, category); // Recalculate on input
 });
 
 unitSelect.value = calcData.unit || 'Полка';
 updatePlaceholders(unitSelect.value); // Set initial placeholders
 updateInputMode(unitSelect.value); // Set initial input mode

 unitSelect.addEventListener('change', function() {
 const selectedUnit = this.value;
 getNetworkState(network).calcState[calcId].unit = selectedUnit;
 updatePlaceholders(selectedUnit);
 updateInputMode(selectedUnit); // Update input mode on change
 calculateResult(calcId, category); // Recalculate on unit change
 });

 return newCalc;
}

function updateCalculators() {
 const network = networkSelect.value;
 if (!network) return;

 const state = getNetworkState(network);
 const selectedCategories = new Set(Array.from(document.querySelectorAll('input[name="categories"]:checked')).map(cb => cb.value));
 
 const renderedCalcs = new Map();
 document.querySelectorAll('.calc-block').forEach(block => {
 renderedCalcs.set(block.dataset.category, block);
 });

 // Remove calculators for unchecked categories
 for (const [category, element] of renderedCalcs.entries()) {
 if (!selectedCategories.has(category)) {
 element.remove();
 }
 }

 // Add calculators for newly checked categories
 for (const category of selectedCategories) {
 if (!renderedCalcs.has(category)) {
 const newCalcEl = createCalculatorElement(network, category);
 calcListDiv.appendChild(newCalcEl);
 calculateResult(newCalcEl.id, category); // Пересчитываем для применения стилей и начальных значений
 }
 }

 // Update selected categories in our state object and save
 state.selectedCategories = Array.from(selectedCategories);
 saveStateToCache();
}


// --- Initialization and Event Listeners ---
networkSelect.addEventListener('change', function() {
 renderCategories(this.value);
 updateCalculators(); // Render calculators for the selected network
});

// Load everything on start
loadStateFromCache();

// Optional: Restore last selected network on page load
const lastSelectedNetwork = localStorage.getItem('lastSelectedNetwork');
if (lastSelectedNetwork && networkSelect.querySelector(`option[value="${lastSelectedNetwork}"]`)) {
 networkSelect.value = lastSelectedNetwork;
 renderCategories(lastSelectedNetwork);
 updateCalculators();
}

// Save last selected network before leaving
window.addEventListener('beforeunload', () => {
 if (networkSelect.value) {
 localStorage.setItem('lastSelectedNetwork', networkSelect.value);
 }
});

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
 if (confirm('Вы уверены, что хотите сбросить все сохраненные данные? Это действие необратимо.')) {
 // Clear storage
 localStorage.removeItem('networkDataCache');
 localStorage.removeItem('lastSelectedNetwork');
 
 // Reset internal state
 networkDataCache = {};

 // Reset UI
 networkSelect.value =''; // Set dropdown to default "Выберите сеть:"
 catListDiv.innerHTML =''; // Clear categories
 calcListDiv.innerHTML =''; // Clear calculators
 }
});

// --- Modal Logic ---
const infoBtn = document.getElementById('info-btn');
const modal = document.getElementById('info-modal');
const closeBtn = document.getElementById('close-btn');

infoBtn.addEventListener('click', () => {
 modal.style.display = "block";
});

closeBtn.addEventListener('click', () => {
 modal.style.display = "none";
});

window.addEventListener('click', (event) => {
 if (event.target == modal) {
 modal.style.display = "none";
 }
});
