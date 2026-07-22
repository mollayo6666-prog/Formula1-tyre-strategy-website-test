let DB;
const state = { track: 'silverstone', team: 'mercedes', driver: 'george-russell', trackState: 'dry' };
let simulationData = [];
let simulationTimer = null;
let simulationLap = 0;
let selectedStrategyStyle = 0;
let trackAnimationFrame = null;
let recalculationTimer = null;
const weatherCache = new Map();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const tyreKo = { hard: '하드', medium: '미디엄', soft: '소프트', INTERMEDIATE: '인터미디에이트', WET: '웨트' };
const riskKo = { LOW: '낮음', MEDIUM: '보통', 'MEDIUM-HIGH': '다소 높음', HIGH: '높음' };
const trafficKo = { cleanAir: '클린 에어', light: '적은', medium: '보통 수준의', heavy: '많은' };
const countryKo = { 'United Kingdom': '영국', Belgium: '벨기에', Japan: '일본' };
const profileKo = { 'high-speed': '고속형', 'high-speed-mixed': '고속 복합형', 'high-speed-technical': '고속 테크니컬형' };
const criticalKo = { 'front-left': '왼쪽 앞', 'track-condition-dependent': '노면 상태에 따라 변동' };
const circuitKo = {
  silverstone: { gp: '영국 그랑프리', name: '실버스톤 서킷', short: '실버스톤' },
  'spa-francorchamps': { gp: '벨기에 그랑프리', name: '스파-프랑코르샹 서킷', short: '스파' },
  suzuka: { gp: '일본 그랑프리', name: '스즈카 서킷', short: '스즈카' }
};
const fallbackCircuitPaths = {
  silverstone: 'M 650 390 C 590 430 470 420 390 390 C 330 365 310 310 240 295 C 170 280 100 235 125 180 C 145 135 220 150 260 115 C 300 80 370 105 410 75 C 470 35 530 90 590 80 C 670 65 760 95 770 150 C 780 200 715 220 700 260 C 680 305 720 350 650 390 Z',
  'spa-francorchamps': 'M 200 380 C 130 330 110 270 170 220 C 220 180 310 205 340 160 C 380 105 350 55 430 45 C 520 35 560 95 550 150 C 540 205 620 185 690 200 C 790 220 800 300 740 345 C 680 390 600 350 540 380 C 450 425 290 430 200 380 Z',
  suzuka: 'M 180 340 C 110 310 100 240 170 210 C 240 180 310 210 365 245 C 420 280 470 330 550 345 C 640 360 760 325 760 260 C 760 195 665 180 600 215 C 525 255 485 320 410 335 C 335 350 275 320 250 275 C 225 230 260 170 330 135 C 400 100 470 100 530 70 C 590 40 680 70 700 125 C 720 180 665 225 600 215 C 520 190 440 150 360 170 C 280 190 240 250 220 300 C 210 330 200 340 180 340 Z'
};
const circuitPaths = {
  ...fallbackCircuitPaths,
  ...Object.fromEntries(Object.entries(window.REAL_TRACK_DATA || {}).map(([id, data]) => [id, data.path]))
};
const carAssetIds = ['ferrari','mercedes','mclaren','red-bull-racing','racing-bulls','audi','alpine','haas','cadillac','williams','aston-martin'];
const officialTeamFolders = { ferrari:'ferrari',mercedes:'mercedes',mclaren:'mclaren','red-bull-racing':'redbullracing','racing-bulls':'racingbulls',audi:'audi',alpine:'alpine',haas:'haasf1team',cadillac:'cadillac',williams:'williams','aston-martin':'astonmartin' };
const officialDriverCodes = {
  'george-russell':'georus01','kimi-antonelli':'andant01','charles-leclerc':'chalec01','lewis-hamilton':'lewham01',
  'lando-norris':'lannor01','oscar-piastri':'oscpia01','max-verstappen':'maxver01','isack-hadjar':'isahad01',
  'pierre-gasly':'piegas01','franco-colapinto':'fracol01','liam-lawson':'lialaw01','arvid-lindblad':'arvlin01',
  'esteban-ocon':'estoco01','oliver-bearman':'olibea01','carlos-sainz':'carsai01','alexander-albon':'alealb01',
  'nico-hulkenberg':'nichul01','gabriel-bortoleto':'gabbor01','fernando-alonso':'feralo01','lance-stroll':'lanstr01',
  'sergio-perez':'serper01','valtteri-bottas':'valbot01'
};
const circuitTurnCounts = { silverstone: 18, 'spa-francorchamps': 19, suzuka: 18 };
const pitLaneRanges = { silverstone: [.925, .065], 'spa-francorchamps': [.94, .07], suzuka: [.925, .06] };
const teamThemeColors = {
  mercedes: ['#27f4d2', '#111820'], ferrari: ['#ed1731', '#7b0013'], mclaren: ['#ff8000', '#ffb15b'],
  'red-bull-racing': ['#4f7ddd', '#ffcb24'], 'racing-bulls': ['#82a8ff', '#edf3ff'], audi: ['#ef3340', '#9b111e'],
  alpine: ['#ff76bd', '#2798d8'], haas: ['#e8ecef', '#d92735'], cadillac: ['#c7c9cb', '#c9a84d'],
  williams: ['#64c4ff', '#1e65d6'], 'aston-martin': ['#2eb58a', '#b9e629']
};
const circuitCoordinates = {
  silverstone: [52.0786, -1.01694],
  'spa-francorchamps': [50.4372, 5.97139],
  suzuka: [34.8431, 136.541]
};

function officialCarUrl(teamId) {
  const folder = officialTeamFolders[teamId];
  return `https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/${folder}/2026${folder}carright.webp`;
}

function officialLogoUrl(teamId) {
  const folder = officialTeamFolders[teamId];
  return `https://media.formula1.com/image/upload/c_lfill,w_96/q_auto/v1740000001/common/f1/2026/${folder}/2026${folder}logowhite.webp`;
}

function officialDriverUrl(driverId, teamId) {
  const folder = officialTeamFolders[teamId];
  const code = officialDriverCodes[driverId];
  return `https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/${folder}/${code}/2026${folder}${code}right.webp`;
}

function compoundClass(compound) {
  if (compound === 'INTERMEDIATE') return 'inter';
  if (compound === 'WET') return 'wet';
  return { C1: 'hard', C2: 'medium', C3: 'soft', C4: 'soft', C5: 'soft' }[compound] || 'hard';
}

function compoundThemeColor(compound) {
  return { soft: '#ff394f', medium: '#ffd431', hard: '#f1f4f6', inter: '#4dd6a8', wet: '#4da6ff' }[compoundClass(compound)];
}

function weekendLabelKo(compound, track) {
  const entry = Object.entries(track.official.weekendTyres).find(([, value]) => value === compound);
  return tyreKo[entry?.[0]] || tyreKo[compound] || compound;
}

// 공식 F1 최근 10개 개최분의 레이스 하이라이트와 결과에서 반복된 필드 밀집도를
// 서킷과 출발 위치별 고정 프로필로 모델링한다. 사용자가 임의 변경할 수 없다.
const trafficByCircuit = {
  'silverstone': ['light','light','medium','medium','medium','heavy','heavy','medium','medium','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy'],
  'spa-francorchamps': ['cleanAir','light','light','medium','medium','medium','medium','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy'],
  'suzuka': ['cleanAir','light','light','light','medium','medium','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy','heavy']
};

function automaticTraffic(trackId, gridPos) {
  const index = Math.max(0, Math.min(21, Math.round(gridPos || 1) - 1));
  return (trafficByCircuit[trackId] || trafficByCircuit.silverstone)[index];
}

function updateTrafficReadout() {
  const traffic = automaticTraffic(state.track, Number($('#gridPos').value));
  $('#trafficAutoLabel').textContent = trafficKo[traffic];
  $('#trafficAutoMeta').textContent = `${circuitKo[state.track]?.short} · P${$('#gridPos').value} 고정 프로필`;
}

function animateContentChange() {
  ['.driver-chip', '.official-car-card', '.results-panel'].forEach((selector) => {
    const element = $(selector);
    element.classList.remove('content-transition');
    void element.offsetWidth;
    element.classList.add('content-transition');
  });
}

function context() {
  return {
    track: DB.circuits.circuits.find((item) => item.id === state.track),
    team: DB.teams.find((item) => item.id === state.team),
    driver: DB.drivers.find((item) => item.id === state.driver)
  };
}

function readScenario() {
  return {
    trackTemp: Number($('#trackTemp').value),
    airTemp: Number($('#airTemp').value),
    humidity: Number($('#humidity').value),
    wind: Number($('#wind').value),
    rain: Number($('#rain').value),
    gridPos: Number($('#gridPos').value),
    traffic: automaticTraffic(state.track, Number($('#gridPos').value)),
    trackState: state.trackState
  };
}

async function init() {
  DB = window.F1_DATA || await fetch('data.json').then((response) => response.json());
  hydrate();
  bind();
  renderAll();
  loadLiveWeather(context().track);
  setInterval(() => loadLiveWeather(context().track, true), 600000);
}

function hydrate() {
  $('#circuitSelect').innerHTML = DB.circuits.circuits.map((circuit) =>
    `<option value="${circuit.id}">${circuitKo[circuit.id]?.gp || circuit.grandPrix}</option>`
  ).join('');
  $('#teamSelect').innerHTML = DB.teams.map((team) =>
    `<option value="${team.id}">${team.name}</option>`
  ).join('');
  $('#circuitSelect').value = state.track;
  $('#teamSelect').value = state.team;
  updateDrivers();
}

function updateDrivers() {
  const team = DB.teams.find((item) => item.id === state.team);
  if (!team.drivers.includes(state.driver)) state.driver = team.drivers[0];
  $('#driverSelect').innerHTML = team.drivers.map((id) => {
    const driver = DB.drivers.find((item) => item.id === id);
    return `<option value="${id}">${driver.name}</option>`;
  }).join('');
  $('#driverSelect').value = state.driver;
}

function bind() {
  $('#circuitSelect').onchange = (event) => { state.track = event.target.value; renderAll(); animateContentChange(); loadLiveWeather(context().track, true); };
  $('#teamSelect').onchange = (event) => { state.team = event.target.value; updateDrivers(); renderAll(); animateContentChange(); };
  $('#driverSelect').onchange = (event) => { state.driver = event.target.value; renderDriver(); animateContentChange(); scheduleRecalculation(); };
  $('#trackTemp').oninput = (event) => { $('#trackTempOut').value = `${event.target.value}°C`; scheduleRecalculation(); };
  ['#airTemp', '#humidity', '#wind', '#rain', '#gridPos'].forEach((selector) => {
    $(selector).addEventListener('input', scheduleRecalculation);
    $(selector).addEventListener('change', scheduleRecalculation);
  });
  $('#resetBtn').onclick = () => location.reload();
  $('#runSimulationBtn').onclick = () => runSimulation(true);
  $('#simPlayPause').onclick = () => toggleSimulation();
  $('#simStop').onclick = () => { stopSimulation(); $('#simStatus').textContent = `${simulationData.plan.title} · ${simulationLap}랩에서 정지`; };
  $('#simRestart').onclick = () => { stopSimulation(); setSimulationLap(0); };
  $('#simScrubber').oninput = (event) => { stopSimulation(); setSimulationLap(Number(event.target.value)); };
  $$('#trackState button').forEach((button) => {
    button.onclick = () => {
      $$('#trackState button').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      state.trackState = button.dataset.value;
      scheduleRecalculation();
    };
  });
}

function scheduleRecalculation() {
  if (recalculationTimer) clearTimeout(recalculationTimer);
  recalculationTimer = setTimeout(() => renderStrategies(false), 140);
}

async function loadLiveWeather(track, force = false) {
  const status = $('#liveWeatherStatus');
  const cached = weatherCache.get(track.id);
  if (!force && cached && Date.now() - cached.savedAt < 300000) {
    applyLiveWeather(cached.data, track);
    return;
  }
  status.classList.remove('error');
  status.querySelector('b').textContent = `${circuitKo[track.id]?.short} 현재 날씨 불러오는 중`;
  status.querySelector('small').textContent = 'Open-Meteo 15분 단위 최신 모델 데이터';
  const [latitude, longitude] = circuitCoordinates[track.id];
  const current = ['temperature_2m','relative_humidity_2m','precipitation','rain','weather_code','cloud_cover','wind_speed_10m','shortwave_radiation','precipitation_probability'].join(',');
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=${current}&timezone=auto`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather API ${response.status}`);
    const data = await response.json();
    weatherCache.set(track.id, { savedAt: Date.now(), data });
    applyLiveWeather(data, track);
  } catch (error) {
    status.classList.add('error');
    status.querySelector('b').textContent = '실시간 날씨 연결 실패 · 수동 입력 사용 중';
    status.querySelector('small').textContent = '인터넷 연결 후 서킷을 다시 선택하면 재시도합니다';
  }
}

function applyLiveWeather(data, track) {
  const weather = data.current;
  const air = Math.round(weather.temperature_2m);
  const radiation = Number(weather.shortwave_radiation || 0);
  const estimatedTrack = Math.round(air + Math.min(18, radiation / 55));
  const rainChance = Math.round(weather.precipitation_probability ?? (weather.precipitation > 0 ? 80 : 10));
  $('#airTemp').value = air;
  $('#humidity').value = Math.round(weather.relative_humidity_2m);
  $('#wind').value = Math.round(weather.wind_speed_10m);
  $('#rain').value = rainChance;
  $('#trackTemp').value = Math.max(10, Math.min(60, estimatedTrack));
  $('#trackTempOut').value = `${$('#trackTemp').value}°C`;
  const code = Number(weather.weather_code || 0);
  state.trackState = weather.precipitation >= .8 || code >= 63 ? 'wet' : weather.precipitation > 0 || code >= 51 ? 'damp' : 'dry';
  $$('#trackState button').forEach((button) => button.classList.toggle('active', button.dataset.value === state.trackState));
  const status = $('#liveWeatherStatus');
  status.classList.remove('error');
  status.querySelector('b').textContent = `${circuitKo[track.id]?.short} · ${air}°C · ${state.trackState === 'dry' ? '건조' : state.trackState === 'damp' ? '습윤' : '젖음'}`;
  status.querySelector('small').textContent = `${weather.time.replace('T',' ')} 현지시각 · 노면 ${estimatedTrack}°C는 일사량 기반 모델 추정`;
  renderStrategies(false);
}

function renderDriver() {
  const { team, driver } = context();
  document.documentElement.style.setProperty('--team', team.presentation.uiAccentHex);
  const theme = teamThemeColors[team.id] || [team.presentation.uiAccentHex, team.presentation.uiAccentHex];
  document.documentElement.style.setProperty('--accent', theme[0]);
  document.documentElement.style.setProperty('--team-secondary', theme[1]);
  document.documentElement.dataset.team = team.id;
  $('#driverNumber').textContent = driver.raceNumber;
  $('#driverName').textContent = driver.name;
  $('#driverMeta').textContent = `${team.name.toUpperCase()} · ${driver.nationality.code}`;
  $('#driverPortrait').src = officialDriverUrl(driver.id, team.id);
  $('#driverPortrait').alt = `${driver.name} 2026 공식 드라이버 사진`;
  $('#teamLogo').src = officialLogoUrl(team.id);
  $('#teamLogo').alt = `${team.name} 2026 공식 팀 로고`;
  $('#officialTeamCar').src = officialCarUrl(team.id);
  $('#officialTeamCar').alt = `${team.name} 2026 공식 차량`;
}

function renderAll() {
  const { track } = context();
  $('#gpName').textContent = circuitKo[track.id]?.gp || track.grandPrix;
  $('#circuitName').textContent = circuitKo[track.id]?.name || track.name;
  $('#lapCount').textContent = track.official.raceLaps;
  $('#trackLength').textContent = track.official.lengthKm.toFixed(3);
  $('#pitLoss').textContent = track.trackModelSeed.estimatedGreenFlagPitLossSeconds.toFixed(1);
  $('#resultEvent').textContent = circuitKo[track.id]?.short || track.name;
  $('#spaWeather').classList.toggle('hidden', track.id !== 'spa-francorchamps');
  $('#simScrubber').max = track.official.raceLaps;
  updateTrafficReadout();
  renderDriver();
  renderInventory();
  renderStrategies(false);
  renderCircuits();
}

function basePlans(track) {
  if (state.trackState !== 'dry') {
    return [
      { title: 'NORMAL', stints: [{ compound: 'INTERMEDIATE', end: Math.round(track.official.raceLaps * .38) }, { compound: track.official.weekendTyres.medium, end: track.official.raceLaps }], risk: 'MEDIUM', style: 0 },
      { title: 'OVERCUT', stints: [{ compound: 'WET', end: Math.round(track.official.raceLaps * .28) }, { compound: 'INTERMEDIATE', end: Math.round(track.official.raceLaps * .62) }, { compound: track.official.weekendTyres.hard, end: track.official.raceLaps }], risk: 'LOW', style: 1 },
      { title: 'UNDERCUT', stints: [{ compound: 'INTERMEDIATE', end: Math.round(track.official.raceLaps * .22) }, { compound: track.official.weekendTyres.medium, end: track.official.raceLaps }], risk: 'HIGH', style: 2 }
    ];
  }
  return track.dryStrategySeeds.map((seed, index) => ({
    title: ['NORMAL', 'OVERCUT', 'UNDERCUT'][index],
    stints: seed.stints.map((stint) => ({
      compound: stint.compound,
      end: stint.toRaceEnd ? track.official.raceLaps : Math.round((stint.pitWindow.min + stint.pitWindow.max) / 2)
    })),
    risk: seed.risk.toUpperCase(),
    style: index
  }));
}

function calculatePlans() {
  const { track, team, driver } = context();
  const scenario = readScenario();
  const teamModel = team.strategyModelSeed;
  const driverModel = driver.strategyModelSeed;
  const trafficFactor = DB.modelConfig.conditionFactors.traffic[scenario.traffic] || 1;
  const pacePenalty = (100 - teamModel.racePaceIndex) * .18 + (100 - driverModel.racePaceIndex) * .12;
  const gridPenalty = Math.max(0, scenario.gridPos - 1) * .07;
  const weatherPenalty = Math.abs(scenario.trackTemp - 32) * .035 + Math.abs(scenario.airTemp - 22) * .012;
  const windPenalty = Math.max(0, scenario.wind - 12) * .018;
  const humidityPenalty = Math.max(0, scenario.humidity - 65) * .008;
  const wetPenalty = scenario.trackState === 'dry' ? 0 : (100 - driverModel.wetSkillIndex) * .08;
  const lapBase = 88.8 + track.official.lengthKm * .62 + pacePenalty + gridPenalty + weatherPenalty + windPenalty + humidityPenalty + wetPenalty;
  const degradation = teamModel.tyreDegradationMultiplier * driverModel.tyreManagementMultiplier * (1 + Math.max(0, scenario.trackTemp - 36) * .008) * trafficFactor;
  const pitShift = Math.max(-4, Math.min(4, Math.round((1 - degradation) * 35 - (scenario.trackTemp - 34) * .16)));
  const plans = basePlans(track).map((plan) => {
    const shiftedStints = plan.stints.map((stint, index) => ({
      ...stint,
      end: index === plan.stints.length - 1 ? track.official.raceLaps : Math.max(5, Math.min(track.official.raceLaps - 3, stint.end + pitShift))
    }));
    const stops = shiftedStints.length - 1;
    const softCount = shiftedStints.filter((stint) => compoundClass(stint.compound) === 'soft').length;
    const hardCount = shiftedStints.filter((stint) => compoundClass(stint.compound) === 'hard').length;
    const trafficCost = (trafficFactor - 1) * track.official.raceLaps * (plan.style === 1 ? .45 : .7);
    const hotSoftCost = Math.max(0, scenario.trackTemp - 38) * softCount * .65;
    const coldHardCost = Math.max(0, 22 - scenario.trackTemp) * hardCount * .38;
    const rainRisk = scenario.trackState === 'dry' ? scenario.rain * (plan.style === 1 ? .015 : .03) : 0;
    const positionEffect = scenario.gridPos > 12 && plan.style === 2 ? -2.4 : scenario.gridPos < 5 && plan.style === 1 ? 1.2 : 0;
    const styleBias = plan.style === 0 ? 0 : plan.style === 1 ? 1.7 : 2.5;
    const total = lapBase * track.official.raceLaps + stops * (track.trackModelSeed.estimatedGreenFlagPitLossSeconds + teamModel.pitStopExecutionSeconds) + trafficCost + hotSoftCost + coldHardCost + rainRisk + positionEffect + styleBias;
    return { ...plan, stints: shiftedStints, total, pitShift, degradation };
  }).sort((a, b) => a.total - b.total);
  plans.forEach((plan, index) => { plan.label = ['예상 최속', '안정 우선', '공격적 대안'][index]; });
  return { plans, scenario, degradation, pitShift };
}

function renderStrategies(userGenerated) {
  const { track, team, driver } = context();
  const { plans, scenario, degradation, pitShift } = calculatePlans();
  updateTrafficReadout();
  let confidence = Math.round(69 - Math.abs(scenario.trackTemp - 32) * .25 - (scenario.trackState === 'dry' ? 0 : 8) - (scenario.traffic === 'heavy' ? 5 : 0) - scenario.rain * .04);
  confidence = Math.max(38, Math.min(69, confidence));
  const bestTime = plans[0].total;

  $('#strategyCards').innerHTML = plans.map((plan, index) => {
    let start = 1;
    const stints = plan.stints.map((stint) => {
      const html = `<div class="stint-box"><div><i class="tyre ${compoundClass(stint.compound)}"></i></div><b>${weekendLabelKo(stint.compound, track)} · ${stint.compound}</b><small>${start}–${stint.end}랩 · ${stint.compound}-N${start === 1 ? 1 : 2}</small></div>`;
      start = stint.end + 1;
      return html;
    }).join('<span class="arrow">›</span>');
    const delta = plan.total - bestTime;
    const firstStop = plan.stints[0].end;
    const pitWindow = `${Math.max(2, firstStop - 3)}–${Math.min(track.official.raceLaps - 2, firstStop + 3)}랩`;
    const expectedDeg = ((plan.degradation - .94) * .65 + .055 + plan.style * .009).toFixed(3);
    const pitLoss = (track.trackModelSeed.estimatedGreenFlagPitLossSeconds + team.strategyModelSeed.pitStopExecutionSeconds).toFixed(1);
    const trigger = scenario.trackState !== 'dry' ? `노면 습도와 레이더를 확인하고 크로스오버 이득이 ${pitLoss}초를 넘으면 교체` : `타이어 성능 저하가 랩당 ${(Number(expectedDeg) + .025).toFixed(3)}초를 넘으면 2랩 일찍 피트인`;
    const selected = plan.style === selectedStrategyStyle;
    return `<article class="strategy-card ${index === 0 ? 'best' : ''} ${selected ? 'selected' : ''}" data-plan-style="${plan.style}" tabindex="0" role="button" aria-pressed="${selected}"><div class="selection-badge">${selected ? '✓ 시뮬레이션 전략' : '이 전략 선택'}</div><div class="card-rank"><span>${String(index + 1).padStart(2, '0')} / ${plan.label}</span><b class="risk">위험도 ${riskKo[plan.risk] || plan.risk}</b></div><h3>${plan.title}</h3><div class="stints">${stints}</div><div class="time-row"><span>예상 레이스 시간<b>${formatTime(plan.total)}</b></span><span>차이<b class="delta">${index ? `+${delta.toFixed(1)}초` : '최적'}</b></span></div><div class="strategy-detail"><div><small>첫 피트 윈도우</small><b>${pitWindow}</b></div><div><small>예상 성능 저하</small><b>${expectedDeg}초/랩</b></div><div><small>피트스톱 손실</small><b>${pitLoss}초</b></div><div class="strategy-trigger"><b>전환 조건</b> ${trigger}</div></div><div class="card-footer"><span>신뢰도 <b>${confidence - index * 3}%</b></span><span>✓ FIA 규정 충족</span></div></article>`;
  }).join('');

  renderTimeline(plans, track);
  renderInsights({ track, team, driver, scenario, degradation, pitShift, confidence, userGenerated, plans });
  const selectedPlan = plans.find((plan) => plan.style === selectedStrategyStyle) || plans[0];
  buildSimulation(selectedPlan, scenario);
  bindStrategySelection();
  localStorage.setItem('apexScenario', JSON.stringify({ ...state, ...scenario }));
}

function bindStrategySelection() {
  $$('.strategy-card').forEach((card) => {
    const choose = () => {
      const nextStyle = Number(card.dataset.planStyle);
      if (nextStyle === selectedStrategyStyle) return;
      selectedStrategyStyle = nextStyle;
      renderStrategies(false);
      $('#assumptionNotice').innerHTML = `<span>✓</span><p><b>${simulationData.plan.title}</b>을 시뮬레이션 전략으로 선택했습니다. 아래 시뮬레이터가 이 전략의 스틴트와 피트스톱 일정으로 다시 구성되었습니다.</p>`;
      $('#simulation').classList.remove('strategy-switched');
      void $('#simulation').offsetWidth;
      $('#simulation').classList.add('strategy-switched');
    };
    card.onclick = choose;
    card.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        choose();
      }
    };
  });
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(Math.round(seconds % 60)).padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
}

function renderInsights({ track, team, driver, scenario, degradation, pitShift, confidence, userGenerated, plans }) {
  const hot = scenario.trackTemp > 42;
  $('#triggerTitle').textContent = scenario.trackState !== 'dry' ? '크로스오버 시점을 판단하세요.' : track.id === 'spa-francorchamps' ? '한 랩이 모든 것을 바꿉니다.' : track.id === 'suzuka' ? '트랙 포지션을 지키세요.' : '왼쪽 앞 타이어를 주시하세요.';
  $('#triggerText').textContent = scenario.trackState !== 'dry' ? '모든 섹터의 노면 상태와 크로스오버 이득을 확인한 뒤 교체하세요.' : hot ? `노면 온도가 ${scenario.trackTemp}°C입니다. 과열이 시작되면 피트스톱을 앞당기세요.` : `예상 성능 저하 계수는 ${degradation.toFixed(3)}입니다. 첫 피트스톱을 기본값보다 ${Math.abs(pitShift)}랩 ${pitShift < 0 ? '앞당겼습니다' : pitShift > 0 ? '늦췄습니다' : '유지했습니다'}.`;
  $('#rankingReasons').innerHTML = `<li>${team.name}와 ${driver.name}의 페이스 및 타이어 관리 값을 반영했습니다.</li><li>노면 ${scenario.trackTemp}°C, 기온 ${scenario.airTemp}°C, 습도 ${scenario.humidity}%, 강수 ${scenario.rain}%를 계산했습니다.</li><li>${scenario.gridPos}번 그리드와 ${trafficKo[scenario.traffic]} 트래픽 조건에서 ${plans[0].title}이 가장 빠릅니다.</li>`;
  $('#confidenceValue').textContent = `${confidence}%`;
  $('#confidenceMeter').style.width = `${confidence}%`;
  $('#confidenceNote').textContent = `${confidence > 60 ? '낮음~보통' : '낮음'} · 범용 페이스 초기값`;
  if (userGenerated) {
    $('#assumptionNotice').innerHTML = `<span>✓</span><p><b>${driver.name} · ${circuitKo[track.id]?.short}</b> 설정으로 다시 계산했습니다. 노면 ${scenario.trackTemp}°C, ${scenario.gridPos}번 그리드, 트래픽 ${trafficKo[scenario.traffic]} 조건이 적용되었습니다.</p>`;
  }
}

function buildSimulation(plan, scenario) {
  stopSimulation();
  const { track, team, driver } = context();
  const totalLaps = track.official.raceLaps;
  const pitLaps = plan.stints.slice(0, -1).map((stint) => stint.end);
  const paceStrength = (team.strategyModelSeed.racePaceIndex + driver.strategyModelSeed.racePaceIndex) / 2;
  let position = Math.max(1, Math.min(22, scenario.gridPos));
  let gap = Math.max(0, (position - 1) * 1.35);
  let stintStart = 1;
  let stintIndex = 0;
  const events = [{ lap: 0, type: 'START', text: `${position}번 그리드에서 ${weekendLabelKo(plan.stints[0].compound, track)} 타이어로 출발 준비` }];
  simulationData = [];

  for (let lap = 0; lap <= totalLaps; lap += 1) {
    if (lap > 0 && pitLaps.includes(lap)) {
      const oldCompound = plan.stints[stintIndex].compound;
      stintIndex += 1;
      const newCompound = plan.stints[stintIndex].compound;
      const positionsLost = Math.min(4, 2 + Math.round(track.trackModelSeed.estimatedGreenFlagPitLossSeconds / 12));
      position = Math.min(22, position + positionsLost);
      gap += track.trackModelSeed.estimatedGreenFlagPitLossSeconds;
      stintStart = lap + 1;
      events.push({ lap, type: 'PIT', text: `${weekendLabelKo(oldCompound, track)} → ${weekendLabelKo(newCompound, track)} 교체, ${positionsLost}개 순위 하락` });
    }

    const currentStint = plan.stints[Math.min(stintIndex, plan.stints.length - 1)];
    const tyreAge = Math.max(0, lap - stintStart + 1);
    const compoundWear = compoundClass(currentStint.compound) === 'soft' ? 2.15 : compoundClass(currentStint.compound) === 'hard' ? 1.15 : 1.55;
    const heatWear = Math.max(0, scenario.trackTemp - 36) * .055;
    const trafficWear = { cleanAir: 0, light: .08, medium: .18, heavy: .32 }[scenario.traffic];
    const tyreHealth = Math.max(12, 100 - tyreAge * (compoundWear + heatWear + trafficWear) * plan.degradation);
    const lapPace = 92 + (100 - paceStrength) * .12 + tyreAge * .035 + (100 - tyreHealth) * .012;

    if (lap > 1 && !pitLaps.includes(lap)) {
      const attackChance = (paceStrength - 78) / 22 - (scenario.traffic === 'heavy' ? .18 : 0);
      const cycle = Math.sin((lap + driver.raceNumber) * 1.73);
      if (cycle > .72 - attackChance * .22 && position > 1) {
        position -= 1;
        gap = Math.max(0, gap - 2.4);
        events.push({ lap, type: 'PASS', text: `타이어 페이스를 활용해 P${position}로 추월` });
      } else if (cycle < -.9 && tyreHealth < 45 && position < 22) {
        position += 1;
        gap += 2.1;
        events.push({ lap, type: 'LOSS', text: `타이어 성능 저하로 P${position}까지 순위 하락` });
      }
    }

    const rainArrival = scenario.rain >= 55 ? Math.round(totalLaps * (.38 + (100 - scenario.rain) / 250)) : -1;
    const isRainLap = lap === rainArrival && scenario.trackState === 'dry';
    if (isRainLap) events.push({ lap, type: 'WEATHER', text: `약한 비 도착 예상. 강수 확률 ${scenario.rain}% — 크로스오버 판단 필요` });
    const fieldDelta = (lapPace - 92.1) + (position <= 3 ? .1 : -.08);
    if (lap > 0) gap = Math.max(0, gap + fieldDelta);
    simulationData.push({
      lap, position, gap, tyreHealth, compound: currentStint.compound,
      tyreAge, lapTime: lapPace, stint: stintIndex + 1,
      weather: isRainLap ? '약한 비' : scenario.trackState === 'dry' ? '건조' : scenario.trackState === 'damp' ? '습윤' : '젖음'
    });
  }

  simulationData.events = events;
  simulationData.plan = plan;
  simulationData.scenario = scenario;
  $('#simScrubber').max = totalLaps;
  renderCircuitView();
  setSimulationLap(0);
  renderRacePlan(plan, track);
}

function renderCircuitView() {
  const { track, team, driver } = context();
  const pathData = circuitPaths[track.id];
  ['#circuitShadow', '#circuitPath', '#circuitCenter'].forEach((selector) => $(selector).setAttribute('d', pathData));
  $('#liveCircuitName').textContent = circuitKo[track.id]?.name || track.name;
  $('#liveTeamName').textContent = team.name.toUpperCase();
  $('#liveDriverName').textContent = driver.name;
  $('#liveTeamColor').style.background = team.presentation.uiAccentHex;
  $('#liveCarImage').setAttribute('href', officialCarUrl(team.id));
  const path = $('#circuitPath');
  const start = path.getPointAtLength(0);
  $('#startLine').innerHTML = `<line class="start-mark" x1="${start.x - 18}" y1="${start.y - 18}" x2="${start.x + 18}" y2="${start.y + 18}"/>`;
  $('#carMarker').setAttribute('transform', `translate(${start.x} ${start.y})`);
  renderPitLane(path, track.id);
  renderTurnMarkers(path, circuitTurnCounts[track.id]);
  const nameMap = Object.fromEntries(DB.teams.map((item) => [item.id, item.name]));
  $('#teamCarGallery').innerHTML = carAssetIds.map((id) => `<div class="${id === team.id ? 'active' : ''}"><img src="${officialCarUrl(id)}" alt="${nameMap[id]} 2026 공식 차량"><span>${nameMap[id]}</span></div>`).join('');
}

function pathPoint(path, fraction) {
  const length = path.getTotalLength();
  const distance = ((fraction % 1) + 1) % 1 * length;
  return path.getPointAtLength(distance);
}

function renderPitLane(path, trackId) {
  const [entryFraction, exitFraction] = pitLaneRanges[trackId];
  const entry = pathPoint(path, entryFraction);
  const start = pathPoint(path, 0);
  const exit = pathPoint(path, exitFraction);
  const before = pathPoint(path, .992);
  const after = pathPoint(path, .008);
  const tangentX = after.x - before.x;
  const tangentY = after.y - before.y;
  const magnitude = Math.hypot(tangentX, tangentY) || 1;
  const normalX = -tangentY / magnitude;
  const normalY = tangentX / magnitude;
  const side = trackId === 'spa-francorchamps' ? -1 : 1;
  const offset = 42 * side;
  const pitMidX = start.x + normalX * offset;
  const pitMidY = start.y + normalY * offset;
  const pitData = `M${entry.x.toFixed(1)},${entry.y.toFixed(1)} Q${pitMidX.toFixed(1)},${pitMidY.toFixed(1)} ${exit.x.toFixed(1)},${exit.y.toFixed(1)}`;
  $('#pitLanePath').setAttribute('d', pitData);
  $('#pitLaneLabels').innerHTML = `<g class="pit-label"><circle cx="${entry.x}" cy="${entry.y}" r="5"/><text x="${entry.x + 9}" y="${entry.y - 8}">PIT IN</text></g><g class="pit-label"><circle cx="${pitMidX}" cy="${pitMidY}" r="5"/><text x="${pitMidX + 9}" y="${pitMidY - 8}">PIT LANE</text></g><g class="pit-label"><circle cx="${exit.x}" cy="${exit.y}" r="5"/><text x="${exit.x + 9}" y="${exit.y - 8}">PIT OUT</text></g>`;
}

function renderTurnMarkers(path, count) {
  const totalLength = path.getTotalLength();
  const samples = 720;
  const candidates = [];
  for (let index = 2; index < samples - 2; index += 1) {
    const distance = index / samples * totalLength;
    const previous = path.getPointAtLength(distance - totalLength / samples * 2);
    const point = path.getPointAtLength(distance);
    const next = path.getPointAtLength(distance + totalLength / samples * 2);
    const angleA = Math.atan2(point.y - previous.y, point.x - previous.x);
    const angleB = Math.atan2(next.y - point.y, next.x - point.x);
    const curvature = Math.abs(Math.atan2(Math.sin(angleB - angleA), Math.cos(angleB - angleA)));
    candidates.push({ distance, point, curvature });
  }
  const chosen = [];
  const minimumSpacing = totalLength / (count * 3.2);
  candidates.sort((a, b) => b.curvature - a.curvature).forEach((candidate) => {
    const separated = chosen.every((item) => {
      const direct = Math.abs(item.distance - candidate.distance);
      return Math.min(direct, totalLength - direct) > minimumSpacing;
    });
    if (separated && chosen.length < count) chosen.push(candidate);
  });
  chosen.sort((a, b) => a.distance - b.distance);
  $('#turnMarkers').innerHTML = chosen.map((turn, index) => {
    const radialX = turn.point.x - 450;
    const radialY = turn.point.y - 240;
    const length = Math.hypot(radialX, radialY) || 1;
    const x = turn.point.x + radialX / length * 20;
    const y = turn.point.y + radialY / length * 20;
    return `<g class="turn-marker"><line x1="${turn.point.x}" y1="${turn.point.y}" x2="${x}" y2="${y}"/><circle cx="${x}" cy="${y}" r="10"/><text x="${x}" y="${y + 3.5}">${index + 1}</text></g>`;
  }).join('');
}

function animateCarAroundTrack(lap) {
  if (trackAnimationFrame) cancelAnimationFrame(trackAnimationFrame);
  const isPitLap = simulationData.events.some((event) => event.lap === lap && event.type === 'PIT');
  const path = isPitLap ? $('#pitLanePath') : $('#circuitPath');
  if (!path?.getTotalLength) return;
  const totalLength = path.getTotalLength();
  const duration = lap === 0 ? 1 : Math.max(320, Number($('#simSpeed').value) * (isPitLap ? 1.62 : .72));
  const started = performance.now();
  const marker = $('#carMarker');
  const current = simulationData[lap];
  const frame = (now) => {
    const progress = lap === 0 ? 0 : Math.min(1, (now - started) / duration);
    const distance = progress * totalLength;
    const point = path.getPointAtLength(distance);
    const ahead = path.getPointAtLength(Math.min(totalLength, distance + 3));
    const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180 / Math.PI;
    marker.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle})`);
    $('#carPositionLabel').textContent = `P${current.position}`;
    $('#trackSector').textContent = `SECTOR ${Math.min(3, Math.floor(progress * 3) + 1)}`;
    $('#trackSpeed').textContent = `${isPitLap ? Math.round(75 + 5 * Math.sin(progress * Math.PI)) : Math.round(255 + 82 * Math.abs(Math.sin(progress * Math.PI * 5)) - current.tyreAge * .35)} KM/H`;
    if (progress < 1) trackAnimationFrame = requestAnimationFrame(frame);
  };
  trackAnimationFrame = requestAnimationFrame(frame);
}

function renderPositionChart(currentLap) {
  if (!simulationData.length) return;
  const width = 900, height = 230, left = 42, right = 18, top = 18, bottom = 28;
  const chartWidth = width - left - right, chartHeight = height - top - bottom;
  const maxLap = simulationData.length - 1;
  const x = (lap) => left + lap / maxLap * chartWidth;
  const y = (position) => top + (position - 1) / 21 * chartHeight;
  const points = simulationData.map((item) => `${x(item.lap).toFixed(1)},${y(item.position).toFixed(1)}`).join(' ');
  const pitMarks = simulationData.events.filter((event) => event.type === 'PIT').map((event) => `<circle class="pit-marker" cx="${x(event.lap)}" cy="${y(simulationData[event.lap].position)}" r="5"/><text class="pit-text" x="${x(event.lap) + 7}" y="${y(simulationData[event.lap].position) - 7}">PIT L${event.lap}</text>`).join('');
  const horizontal = [1, 5, 10, 15, 20].map((position) => `<line class="chart-grid" x1="${left}" y1="${y(position)}" x2="${width - right}" y2="${y(position)}"/><text class="chart-label" x="8" y="${y(position) + 4}">P${position}</text>`).join('');
  const cursor = simulationData[currentLap];
  $('#positionChart').innerHTML = `<defs><linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8ff32"/><stop offset="1" stop-color="#e8ff32" stop-opacity="0"/></linearGradient></defs>${horizontal}<polyline class="chart-line" points="${points}"/>${pitMarks}<line class="chart-cursor" x1="${x(currentLap)}" y1="${top}" x2="${x(currentLap)}" y2="${height - bottom}"/><circle class="chart-point" cx="${x(currentLap)}" cy="${y(cursor.position)}" r="6"/><text class="chart-label" x="${left}" y="${height - 7}">1랩</text><text class="chart-label" x="${width - 55}" y="${height - 7}">${maxLap}랩</text>`;
}

function setSimulationLap(lap) {
  if (!simulationData.length) return;
  simulationLap = Math.max(0, Math.min(simulationData.length - 1, lap));
  const current = simulationData[simulationLap];
  $('#simScrubber').value = simulationLap;
  $('#simLap').textContent = `${simulationLap} / ${simulationData.length - 1}`;
  $('#simPosition').textContent = `P${current.position}`;
  $('#simGap').textContent = current.position === 1 ? '선두' : `+${current.gap.toFixed(1)}초`;
  $('#simTyreHealth').textContent = `${Math.round(current.tyreHealth)}%`;
  $('#simCompound').textContent = weekendLabelKo(current.compound, context().track);
  const tyreType = compoundClass(current.compound);
  $('#simulation').style.setProperty('--sim-accent', compoundThemeColor(current.compound));
  $('#simulation').dataset.tyre = tyreType;
  $('#simWeather').textContent = `${current.weather} · 노면 ${simulationData.scenario.trackTemp}°C`;
  const isPitLap = simulationData.events.some((event) => event.lap === simulationLap && event.type === 'PIT');
  $('#simStatus').textContent = simulationLap === 0 ? `${simulationData.plan.title} · 출발 준비` : simulationLap === simulationData.length - 1 ? `${simulationData.plan.title} · 레이스 종료 · P${current.position}` : isPitLap ? `${simulationData.plan.title} · PIT STOP · 타이어 교체` : `${simulationData.plan.title} · ${current.stint}번째 스틴트 · 타이어 ${current.tyreAge}랩 사용`;
  $('#trackLapReadout').textContent = `LAP ${simulationLap} / ${simulationData.length - 1}`;
  animateCarAroundTrack(simulationLap);
  renderPositionChart(simulationLap);
  renderEventLog(simulationLap);
  ['#simLap', '#simPosition', '#simGap', '#simTyreHealth', '#simCompound'].forEach((selector) => {
    $(selector).classList.remove('sim-highlight');
    void $(selector).offsetWidth;
    $(selector).classList.add('sim-highlight');
  });
}

function renderEventLog(lap) {
  const events = simulationData.events.filter((event) => event.lap <= lap).slice(-12).reverse();
  $('#eventLog').innerHTML = events.length ? events.map((event) => `<div class="event-row"><span>${event.lap ? `${event.lap}랩` : '출발'}</span><b>${event.type}</b><p>${event.text}</p></div>`).join('') : '<div class="event-row"><span>대기</span><b>READY</b><p>시뮬레이션을 실행하면 주요 이벤트가 표시됩니다.</p></div>';
}

function renderRacePlan(plan, track) {
  let start = 1;
  $('#racePlanTable').innerHTML = plan.stints.map((stint, index) => {
    const end = stint.end;
    const stop = index < plan.stints.length - 1 ? `${Math.max(start + 3, end - 3)}–${end + 3}랩 피트` : '결승선까지';
    const html = `<div class="plan-row"><i class="tyre ${compoundClass(stint.compound)}"></i><div><b>${index + 1}스틴트 · ${weekendLabelKo(stint.compound, track)} ${stint.compound}</b><small>${start}–${end}랩 · ${end - start + 1}랩 주행</small></div><span>${stop}</span></div>`;
    start = end + 1;
    return html;
  }).join('');
}

function runSimulation(autoplay) {
  renderStrategies(true);
  setSimulationLap(0);
  $('#simulation').scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (autoplay) startSimulation();
}

function startSimulation() {
  stopSimulation();
  $('#simPlayPause').textContent = 'Ⅱ 일시정지';
  const tick = () => {
    if (simulationLap >= simulationData.length - 1) { stopSimulation(); return; }
    const nextLap = simulationLap + 1;
    setSimulationLap(nextLap);
    const isPitLap = simulationData.events.some((event) => event.lap === nextLap && event.type === 'PIT');
    const delay = Number($('#simSpeed').value) * (isPitLap ? 1.72 : .82);
    simulationTimer = setTimeout(tick, delay);
  };
  simulationTimer = setTimeout(tick, 180);
}

function stopSimulation() {
  if (simulationTimer) clearTimeout(simulationTimer);
  simulationTimer = null;
  if ($('#simPlayPause')) $('#simPlayPause').textContent = '▶ 재생';
}

function toggleSimulation() {
  if (simulationTimer) stopSimulation();
  else {
    if (simulationLap >= simulationData.length - 1) setSimulationLap(0);
    startSimulation();
  }
}

function renderTimeline(plans, track) {
  $('#timeline').innerHTML = plans.map((plan) => {
    let previous = 0;
    const segments = plan.stints.map((stint, stintIndex) => {
      const width = (stint.end - previous) / track.official.raceLaps * 100;
      const start = previous + 1;
      previous = stint.end;
      const tyreType = compoundClass(stint.compound);
      const wheelColor = compoundThemeColor(stint.compound);
      const isLast = stintIndex === plan.stints.length - 1;
      const window = isLast ? '' : `<span class="broadcast-window">LAP ${Math.max(start + 2, stint.end - 3)} TO ${Math.min(track.official.raceLaps, stint.end + 3)}</span>`;
      const wheel = `<i class="broadcast-wheel" style="color:${wheelColor}"></i>`;
      return `<div class="broadcast-segment ${tyreType}" style="width:${width}%">${window}${wheel}</div>`;
    }).join('');
    return `<div class="broadcast-row ${plan.style === selectedStrategyStyle ? 'selected' : ''}"><div class="broadcast-line">${segments}</div><div class="broadcast-copy"><b>${plan.title}</b><small>${plan.stints.length - 1} STOPPER · ${plan.label}</small></div></div>`;
  }).join('') + `<div class="broadcast-scale"><span>LAP 1</span><span>LAP ${Math.round(track.official.raceLaps / 2)}</span><span>LAP ${track.official.raceLaps}</span></div>`;
}

function renderInventory() {
  const { track } = context();
  $('#inventory').innerHTML = Object.entries(track.official.weekendTyres).map(([label, compound]) =>
    `<div class="set"><i class="tyre ${compoundClass(compound)}"></i>${tyreKo[label] || label}<small>${compound}-N1 · 새 타이어</small></div>`
  ).join('');
}

function renderCircuits() {
  $('#circuitCards').innerHTML = DB.circuits.circuits.map((circuit, index) =>
    `<article style="--glow:${['#6b582b33', '#204d7133', '#9b2f4233'][index]}"><span class="number">0${index + 1}</span><p class="eyebrow">${countryKo[circuit.country] || circuit.country} · ${circuit.official.raceLaps}랩</p><h3>${circuitKo[circuit.id]?.name || circuit.name}</h3><p>${profileKo[circuit.trackModelSeed.speedProfile] || circuit.trackModelSeed.speedProfile} · 핵심 타이어: ${criticalKo[circuit.trackModelSeed.criticalTyre] || circuit.trackModelSeed.criticalTyre}</p><footer>${Object.entries(circuit.official.weekendTyres).map(([key, value]) => `${tyreKo[key] || key} ${value}`).join(' · ')}</footer></article>`
  ).join('');
}

init().catch((error) => {
  document.body.innerHTML = `<main style="padding:40px;color:white"><h1>데이터를 불러올 수 없습니다</h1><p>페이지를 새로고침한 뒤 다시 시도해 주세요.</p><pre>${error}</pre></main>`;
});
