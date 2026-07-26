let DB;
const state = { track: 'silverstone', team: 'mercedes', driver: 'george-russell', trackState: 'dry' };
let simulationData = [];
let simulationTimer = null;
let simulationLap = 0;
let selectedStrategyStyle = 0;
let trackAnimationFrame = null;
let recalculationTimer = null;
const weatherCache = new Map();
const historicalCache = new Map();
let activeHistoricalArchive = null;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const tyreKo = { hard: '하드', medium: '미디엄', soft: '소프트', INTERMEDIATE: '인터미디에이트', WET: '웨트' };
const riskKo = { LOW: '낮음', MEDIUM: '보통', 'MEDIUM-HIGH': '다소 높음', HIGH: '높음' };
const trafficKo = { cleanAir: '클린 에어', light: '적은', medium: '보통 수준의', heavy: '많은' };
const countryKo = { 'United Kingdom': '영국', Belgium: '벨기에', Japan: '일본' };
const profileKo = { 'high-speed': '고속형', 'high-speed-mixed': '고속 복합형', 'high-speed-technical': '고속 테크니컬형' };
const criticalKo = { 'front-left': '왼쪽 앞', 'track-condition-dependent': '노면 상태에 따라 변동' };
const circuitKo = {
  'albert-park': { gp: '호주 그랑프리', name: '앨버트 파크 그랑프리 서킷', short: '앨버트 파크' },
  shanghai: { gp: '중국 그랑프리', name: '상하이 인터내셔널 서킷', short: '상하이' },
  silverstone: { gp: '영국 그랑프리', name: '실버스톤 서킷', short: '실버스톤' },
  'spa-francorchamps': { gp: '벨기에 그랑프리', name: '스파-프랑코르샹 서킷', short: '스파' },
  suzuka: { gp: '일본 그랑프리', name: '스즈카 서킷', short: '스즈카' },
  bahrain: { gp: '바레인 그랑프리 · 2026 취소', name: '바레인 인터내셔널 서킷', short: '사키르' },
  jeddah: { gp: '사우디아라비아 그랑프리 · 2026 취소', name: '제다 코니쉬 서킷', short: '제다' },
  miami: { gp: '마이애미 그랑프리', name: '마이애미 인터내셔널 오토드롬', short: '마이애미' },
  villeneuve: { gp: '캐나다 그랑프리', name: '질 빌뇌브 서킷', short: '몬트리올' },
  monaco: { gp: '모나코 그랑프리', name: '모나코 서킷', short: '모나코' },
  catalunya: { gp: '바르셀로나-카탈루냐 그랑프리', name: '바르셀로나-카탈루냐 서킷', short: '바르셀로나' },
  'red-bull-ring': { gp: '오스트리아 그랑프리', name: '레드불 링', short: '슈필베르크' },
  hungaroring: { gp: '헝가리 그랑프리', name: '헝가로링', short: '부다페스트' },
  zandvoort: { gp: '네덜란드 그랑프리', name: '잔드보르트 서킷', short: '잔드보르트' },
  monza: { gp: '이탈리아 그랑프리', name: '몬차 국립 자동차 경주장', short: '몬차' },
  madring: { gp: '스페인 그랑프리', name: '마드링', short: '마드리드' },
  baku: { gp: '아제르바이잔 그랑프리', name: '바쿠 시티 서킷', short: '바쿠' },
  'marina-bay': { gp: '싱가포르 그랑프리', name: '마리나 베이 스트리트 서킷', short: '싱가포르' },
  americas: { gp: '미국 그랑프리', name: '서킷 오브 디 아메리카스', short: '오스틴' },
  rodriguez: { gp: '멕시코시티 그랑프리', name: '에르마노스 로드리게스 자동차 경주장', short: '멕시코시티' },
  interlagos: { gp: '상파울루 그랑프리', name: '호세 카를로스 파세 자동차 경주장', short: '인터라고스' },
  'las-vegas': { gp: '라스베이거스 그랑프리', name: '라스베이거스 스트립 서킷', short: '라스베이거스' },
  losail: { gp: '카타르 그랑프리', name: '루사일 인터내셔널 서킷', short: '루사일' },
  'yas-marina': { gp: '아부다비 그랑프리', name: '야스 마리나 서킷', short: '야스 마리나' }
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
const circuitTurnCounts = {
  'albert-park':14, shanghai:16, suzuka:18, bahrain:15, jeddah:27, miami:19, villeneuve:14,
  monaco:19, catalunya:14, 'red-bull-ring':10, silverstone:18, 'spa-francorchamps':19,
  hungaroring:14, zandvoort:14, monza:11, madring:22, baku:20, 'marina-bay':19, americas:20,
  rodriguez:17, interlagos:15, 'las-vegas':17, losail:16, 'yas-marina':16
};
const pitLaneRanges = { silverstone: [.925, .065], 'spa-francorchamps': [.94, .07], suzuka: [.925, .06] };
const teamThemeColors = {
  mercedes: ['#27f4d2', '#111820'], ferrari: ['#ed1731', '#7b0013'], mclaren: ['#ff8000', '#ffb15b'],
  'red-bull-racing': ['#4f7ddd', '#ffcb24'], 'racing-bulls': ['#82a8ff', '#edf3ff'], audi: ['#ef3340', '#9b111e'],
  alpine: ['#ff76bd', '#2798d8'], haas: ['#e8ecef', '#d92735'], cadillac: ['#c7c9cb', '#c9a84d'],
  williams: ['#64c4ff', '#1e65d6'], 'aston-martin': ['#2eb58a', '#b9e629']
};
const circuitCoordinates = {
  'albert-park': [-37.8497,144.968], shanghai:[31.3389,121.2197], bahrain:[26.0325,50.5106],
  jeddah:[21.6319,39.1044], miami:[25.9581,-80.2389], villeneuve:[45.5,-73.5228],
  monaco:[43.7347,7.4206], catalunya:[41.57,2.2611], 'red-bull-ring':[47.2197,14.7647],
  silverstone: [52.0786, -1.01694],
  'spa-francorchamps': [50.4372, 5.97139],
  suzuka: [34.8431, 136.541], hungaroring:[47.5789,19.2486], zandvoort:[52.3888,4.5409],
  monza:[45.6156,9.2811], madring:[40.463,-3.617], baku:[40.3725,49.8533],
  'marina-bay':[1.2914,103.864], americas:[30.1328,-97.6411], rodriguez:[19.4042,-99.0907],
  interlagos:[-23.7036,-46.6997], 'las-vegas':[36.1147,-115.1728], losail:[25.49,51.4542],
  'yas-marina':[24.4672,54.6031]
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
  const normalized = String(compound || '').trim().toUpperCase();
  if (normalized === 'INTERMEDIATE' || normalized === 'INTER') return 'inter';
  if (normalized === 'WET') return 'wet';
  if (normalized === 'SOFT') return 'soft';
  if (normalized === 'MEDIUM') return 'medium';
  if (normalized === 'HARD') return 'hard';
  return { C1: 'hard', C2: 'medium', C3: 'soft', C4: 'soft', C5: 'soft' }[normalized] || 'hard';
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

function qualifyingScore(track, team, driver, scenario) {
  const teamModel = team.strategyModelSeed;
  const driverModel = driver.strategyModelSeed;
  const profile = String(track.trackModelSeed.speedProfile || '');
  const technicalTrack = /technical|street|traction/.test(profile);
  const highSpeedTrack = /high-speed|low-downforce/.test(profile);
  const carPerformance = Number(teamModel.qualifyingIndex || teamModel.racePaceIndex || 70);
  const driverPerformance = Number(driverModel.qualifyingIndex || driverModel.racePaceIndex || 70);
  const precision = Number(driverModel.trafficAndOvertakingIndex || 75);
  const wetAbility = Number(driverModel.wetSkillIndex || 75);
  const warmup = Number(teamModel.tyreWarmupMultiplier || 1);
  const risk = Number(driverModel.riskTolerance || .5);
  const coldPenalty = Math.max(0, 24 - scenario.trackTemp) * Math.max(0, warmup - .97) * 4.5;
  const heatPenalty = Math.max(0, scenario.trackTemp - 44) * Math.max(0, 1 - warmup) * 2.4;
  const trackFit = technicalTrack ? precision * .055 + risk * 2.2 : highSpeedTrack ? carPerformance * .045 : (precision + carPerformance) * .022;
  const weatherFit = scenario.trackState === 'dry' ? 0 : wetAbility * (scenario.trackState === 'wet' ? .12 : .065);
  return carPerformance * .57 + driverPerformance * .31 + trackFit + weatherFit - coldPenalty - heatPenalty;
}

function estimateQualifyingGrid() {
  const { track } = context();
  const scenario = readScenario();
  const ranking = DB.drivers.map((driver) => {
    const team = DB.teams.find((item) => item.id === driver.teamId);
    return { driver, team, score: qualifyingScore(track, team, driver, scenario) };
  }).sort((a,b) => b.score - a.score || a.driver.name.localeCompare(b.driver.name));
  const poleScore = ranking[0]?.score || 0;
  ranking.forEach((entry,index) => {
    entry.position = index + 1;
    entry.gap = index ? Math.max(.04, (poleScore - entry.score) * .075 + index * .012) : 0;
  });
  return ranking;
}

function updateEstimatedGrid() {
  const ranking = estimateQualifyingGrid();
  const selected = ranking.find((entry) => entry.driver.id === state.driver) || ranking[0];
  $('#gridPos').value = selected.position;
  $('#selectedGridBadge').textContent = `P${selected.position}`;
  $('#gridEstimateMeta').textContent = `예상 예선 P${selected.position} · ${selected.gap ? `폴 대비 +${selected.gap.toFixed(3)}초` : '예상 폴 포지션'}`;
  $('#qualifyingGrid').innerHTML = ranking.map((entry) =>
    `<div class="qualifying-row ${entry.driver.id === state.driver ? 'selected' : ''}"><strong>P${entry.position}</strong><span><b>${entry.driver.name}</b><small>${entry.team.name}</small></span><small>${entry.position === 1 ? 'POLE' : `+${entry.gap.toFixed(3)}`}</small></div>`
  ).join('');
}

function animateContentChange() {
  ['.driver-chip', '.official-car-card', '.results-panel'].forEach((selector) => {
    const element = $(selector);
    element.classList.remove('content-transition');
    void element.offsetWidth;
    element.classList.add('content-transition');
  });
}

const jolpicaCircuitIds = {
  'albert-park':'albert_park',shanghai:'shanghai',suzuka:'suzuka',bahrain:'bahrain',jeddah:'jeddah',
  miami:'miami',villeneuve:'villeneuve',monaco:'monaco',catalunya:'catalunya','red-bull-ring':'red_bull_ring',
  silverstone:'silverstone','spa-francorchamps':'spa',hungaroring:'hungaroring',zandvoort:'zandvoort',
  monza:'monza',madring:'madring',baku:'baku','marina-bay':'marina_bay',americas:'americas',
  rodriguez:'rodriguez',interlagos:'interlagos','las-vegas':'vegas',losail:'losail','yas-marina':'yas_marina'
};

async function fetchAllCircuitResults(apiCircuit) {
  const endpoint = `https://api.jolpi.ca/ergast/f1/circuits/${apiCircuit}/results/`;
  const firstResponse = await fetch(`${endpoint}?limit=100&offset=0`);
  if (!firstResponse.ok) throw new Error('historical results response failed');
  const firstJson = await firstResponse.json();
  const total = Number(firstJson.MRData?.total || 0);
  const pages = [firstJson];
  for (let offset = 100; offset < total; offset += 100) {
    const response = await fetch(`${endpoint}?limit=100&offset=${offset}`);
    if (!response.ok) throw new Error(`historical results page ${offset} failed`);
    pages.push(await response.json());
  }
  const racesByKey = new Map();
  pages.flatMap((page) => page.MRData?.RaceTable?.Races || []).forEach((race) => {
    const key = `${race.season}-${race.round}`;
    if (!racesByKey.has(key)) racesByKey.set(key, { ...race, Results: [] });
    racesByKey.get(key).Results.push(...(race.Results || []));
  });
  return [...racesByKey.values()];
}

async function loadHistoricalArchive(track) {
  const requestedTrack = track.id;
  const apiCircuit = jolpicaCircuitIds[requestedTrack];
  $('#historyMatchBody').innerHTML = '<p>2000년 이후 실제 경기 결과와 피트스톱 기록을 불러오고 있습니다.</p>';
  try {
    let archive = historicalCache.get(requestedTrack) || window.F1_HISTORY?.[requestedTrack];
    if (!archive) {
      const resultRaces = await fetchAllCircuitResults(apiCircuit);
      const racesSince2000 = resultRaces.filter((race) => Number(race.season) >= 2000);
      const pitRaceRequests = racesSince2000.filter((race) => Number(race.season) >= 2011).map(async (race) => {
        const response = await fetch(`https://api.jolpi.ca/ergast/f1/${race.season}/${race.round}/pitstops/?limit=100`);
        if (!response.ok) return null;
        const json = await response.json();
        return (json.MRData?.RaceTable?.Races || [])[0] || null;
      });
      const stopRaces = (await Promise.all(pitRaceRequests)).filter(Boolean);
      archive = {
        races: racesSince2000,
        stops: stopRaces,
        loadedAt: new Date().toISOString()
      };
      historicalCache.set(requestedTrack, archive);
    }
    historicalCache.set(requestedTrack, archive);
    if (state.track !== requestedTrack) return;
    activeHistoricalArchive = archive;
    renderHistoricalArchive(track, archive);
    const selectedPlan = calculatePlans().plans.find((plan) => plan.style === selectedStrategyStyle);
    renderHistoricalMatch(selectedPlan, track);
  } catch (error) {
    if (state.track !== requestedTrack) return;
    activeHistoricalArchive = null;
    $('#historyMatchBody').innerHTML = '<p class="history-error">역사 기록 서버에 연결하지 못했습니다. 잠시 후 서킷을 다시 선택하면 재시도합니다.</p>';
    $('#historyArchiveGrid').innerHTML = '';
  }
}

function renderHistoricalArchive(track, archive) {
  const stopsByRace = new Map(archive.stops.map((race) => [`${race.season}-${race.round}`, race]));
  const races = [...archive.races].sort((a, b) => Number(b.season) - Number(a.season));
  $('#historyArchiveTitle').textContent = `${circuitKo[track.id]?.short} · 2000년 이후 ${races.length}개 그랑프리 전체 기록`;
  $('#historyArchiveGrid').innerHTML = races.map((race) => {
    const winner = (race.Results || []).find((result) => result.position === '1') || race.Results?.[0];
    const name = winner ? `${winner.Driver.givenName} ${winner.Driver.familyName}` : '기록 없음';
    const laps = winner?.laps || race.Results?.[0]?.laps || '–';
    const stopRace = stopsByRace.get(`${race.season}-${race.round}`);
    const stops = stopRace?.PitStops || [];
    const classification = (race.Results || []).map((item) => `<tr><td>${item.positionText === 'R' ? 'DNF' : `P${item.positionText}`}</td><td>${item.Driver.givenName} ${item.Driver.familyName}</td><td>${item.Constructor.name}</td><td>P${item.grid}</td><td>${item.laps}</td><td>${item.status}</td><td>${item.points}</td><td>${item.FastestLap?.Time?.time || '–'}</td></tr>`).join('');
    const pitRows = stops.map((stop) => `<tr><td>${stop.driverId.replaceAll('_', ' ')}</td><td>${stop.stop}</td><td>L${stop.lap}</td><td>${stop.time}</td><td>${stop.duration}</td></tr>`).join('');
    return `<details class="history-race"><summary><b>${race.season}</b><div><strong>${race.raceName}</strong><small>우승 ${name} · ${laps}랩 · ${stopRace ? `기록된 피트 ${stops.length}회` : '피트 기록 미제공'}</small></div><em>+</em></summary><div class="history-tables"><h5>전체 결승 결과</h5><div class="history-table-scroll"><table><thead><tr><th>순위</th><th>드라이버</th><th>팀</th><th>그리드</th><th>랩</th><th>상태</th><th>점수</th><th>최고 랩</th></tr></thead><tbody>${classification}</tbody></table></div><h5>전체 피트스톱 기록</h5>${pitRows ? `<div class="history-table-scroll"><table><thead><tr><th>드라이버 ID</th><th>정차</th><th>랩</th><th>시각</th><th>소요시간</th></tr></thead><tbody>${pitRows}</tbody></table></div>` : '<p>Jolpica에 피트스톱 상세 기록이 제공되지 않는 연도입니다.</p>'}</div></details>`;
  }).join('');
}

function renderHistoricalMatch(plan, track) {
  if (!plan || !activeHistoricalArchive) return;
  const totalLaps = track.official.raceLaps;
  const targetStops = plan.stints.slice(0, -1).map((stint) => stint.end / totalLaps);
  const candidates = [];
  const tyreRaces = window.F1_TYRE_HISTORY?.[track.id] || {};
  Object.entries(tyreRaces).forEach(([raceKey, stintRows]) => {
    const [season, round] = raceKey.split('-');
    if (Number(season) < new Date().getFullYear() - 10) return;
    const race = activeHistoricalArchive.races.find((item) => item.season === season && item.round === round);
    if (!race) return;
    const byDriver = new Map();
    stintRows.forEach((stint) => {
      if (!byDriver.has(stint.driverId)) byDriver.set(stint.driverId, []);
      byDriver.get(stint.driverId).push(stint);
    });
    byDriver.forEach((stints, driverId) => {
      stints.sort((a, b) => Number(a.stint) - Number(b.stint));
      if (stints.length - 1 !== targetStops.length) return;
      const raceLaps = Number(race.Results?.[0]?.laps) || totalLaps;
      const laps = stints.slice(0, -1).map((stint) => Number(stint.lapEnd));
      const score = laps.reduce((sum, lap, index) => sum + Math.abs(lap / raceLaps - targetStops[index]), 0) / Math.max(1, laps.length);
      candidates.push({ race, driverId, laps, score, stints, raceLaps });
    });
  });
  candidates.sort((a, b) => a.score - b.score || Number(b.race.season) - Number(a.race.season));
  const templateMatch = plan.historicalTemplate ? candidates.find((candidate) => `${candidate.race.season}-${candidate.race.round}` === plan.historicalTemplate.raceKey && candidate.driverId === plan.historicalTemplate.driverId) : null;
  const match = templateMatch || candidates[0];
  if (!match) {
    $('#historyMatchBody').innerHTML = `<p>최근 10년의 실제 타이어 데이터에서 ${plan.title}과 같은 ${targetStops.length}회 정차 전략을 찾지 못했습니다.</p>`;
    return;
  }
  const surnameToken = match.driverId.split('-')[0];
  const result = match.race.Results?.find((item) => item.Driver.familyName.toLowerCase().replace(/[^a-z]/g, '').includes(surnameToken.replace(/[^a-z]/g, '')));
  const driverName = result ? `${result.Driver.givenName} ${result.Driver.familyName}` : match.driverId.replaceAll('-', ' ');
  const teamName = result?.Constructor?.name || '팀 기록 미상';
  const finish = result?.positionText ? `P${result.positionText}` : '결과 미상';
  const similarity = templateMatch ? 100 : Math.max(0, Math.round((1 - match.score) * 100));
  const fullStrategy = match.stints.map((stint) => {
    const start = Number(stint.lapStart);
    const end = Number(stint.lapEnd);
    const compound = String(stint.compound || 'UNKNOWN').toUpperCase();
    const type = compound.toLowerCase() === 'intermediate' ? 'inter' : compound.toLowerCase();
    const width = Math.max(7, (end - start + 1) / match.raceLaps * 100);
    return `<div class="real-stint ${type}" style="width:${width}%"><i class="tyre ${type}"></i><span><b>${compound}</b><small>L${start}–${end} · ${end - start + 1}랩${Number(stint.tyreAgeAtStart) ? ` · 시작 수명 ${stint.tyreAgeAtStart}랩` : ''}</small></span></div>`;
  }).join('');
  $('#historyMatchBody').innerHTML = `<div class="history-year">${match.race.season}</div><div class="history-driver"><span>${plan.title} · 실제 기록 기반 ${targetStops.length} STOP</span><h4>${driverName}</h4><p>${match.race.raceName} · ${teamName} · ${finish}</p></div><div class="history-pits"><small>실제 피트 랩</small><b>${match.laps.map((lap) => `L${lap}`).join(' · ') || '무정차'}</b><em>${templateMatch ? '컴파운드·피트 랩 완전 일치 100%' : `타이밍 유사도 ${similarity}%`}</em></div><div class="history-full-strategy"><div class="real-strategy-title"><b>실제 전체 타이어 전략</b><small>RaceHooks/FastF1 타이밍 데이터 · 첫 랩부터 마지막 랩까지</small></div><div class="real-strategy-track">${fullStrategy}</div></div>`;
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

function normaliseName(value) {
  return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
}

async function loadCurrentPerformanceData() {
  try {
    const endpoint = 'https://api.jolpi.ca/ergast/f1/current/results/';
    const firstResponse = await fetch(`${endpoint}?limit=100&offset=0`);
    if (!firstResponse.ok) throw new Error('current results unavailable');
    const first = await firstResponse.json();
    const pages = [first];
    const total = Number(first.MRData?.total || 0);
    for (let offset = 100; offset < total; offset += 100) {
      const response = await fetch(`${endpoint}?limit=100&offset=${offset}`);
      if (!response.ok) throw new Error('current results page unavailable');
      pages.push(await response.json());
    }
    const results = pages.flatMap((page) => page.MRData?.RaceTable?.Races || []).flatMap((race) => race.Results || []);
    const records = new Map();
    results.forEach((result) => {
      const surname = normaliseName(result.Driver?.familyName);
      if (!records.has(surname)) records.set(surname, []);
      records.get(surname).push({
        finish: Number(result.position),
        grid: Number(result.grid),
        completed: /Finished|Lap/.test(result.status || '')
      });
    });
    DB.drivers.forEach((driver) => {
      const surname = normaliseName(driver.name.split(' ').at(-1));
      const samples = records.get(surname);
      if (!samples?.length) return;
      const average = (key) => samples.reduce((sum, item) => sum + item[key], 0) / samples.length;
      const avgFinish = average('finish');
      const avgGrid = average('grid');
      const avgGain = samples.reduce((sum, item) => sum + (item.grid - item.finish), 0) / samples.length;
      const variance = samples.reduce((sum, item) => sum + Math.pow(item.finish - avgFinish, 2), 0) / samples.length;
      const consistency = Math.sqrt(variance);
      const model = driver.strategyModelSeed;
      model.racePaceIndex = Math.round(Math.max(76, Math.min(99, 100 - (avgFinish - 1) * 1.08)));
      model.qualifyingIndex = Number(Math.max(70, Math.min(99, 100 - (avgGrid - 1) * 1.16)).toFixed(1));
      model.average2026Grid = Number(avgGrid.toFixed(2));
      model.trafficAndOvertakingIndex = Math.round(Math.max(74, Math.min(99, 86 + avgGain * 2.2)));
      model.riskTolerance = Number(Math.max(.25, Math.min(.85, .42 + consistency * .028)).toFixed(2));
      model.tyreManagementMultiplier = Number(Math.max(.97, Math.min(1.04, .985 + (consistency - 3) * .003)).toFixed(3));
      model.confidence = samples.length >= 6 ? 'medium' : 'low';
      model.provenance = `currentSeasonResults:${new Date().toISOString().slice(0,10)}`;
      model.calibrationRequired = samples.length < 6;
    });
    DB.teams.forEach((team) => {
      const driverModels = team.drivers.map((id) => DB.drivers.find((driver) => driver.id === id)?.strategyModelSeed).filter(Boolean);
      if (!driverModels.length) return;
      team.strategyModelSeed.racePaceIndex = Math.round(driverModels.reduce((sum, model) => sum + model.racePaceIndex, 0) / driverModels.length);
      team.strategyModelSeed.qualifyingIndex = Number((driverModels.reduce((sum, model) => sum + (model.qualifyingIndex || model.racePaceIndex), 0) / driverModels.length).toFixed(1));
      team.strategyModelSeed.confidence = driverModels.every((model) => model.confidence === 'medium') ? 'medium' : 'low';
      team.strategyModelSeed.provenance = `currentSeasonDriverResults:${new Date().toISOString().slice(0,10)}`;
    });
    renderAll();
  } catch (error) {
    // Keep the bundled model when the live archive is temporarily unavailable.
  }
}

async function init() {
  DB = window.F1_DATA || await fetch('data.json').then((response) => response.json());
  hydrate();
  bind();
  renderAll();
  loadCurrentPerformanceData();
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
  $('#driverSelect').onchange = (event) => { state.driver = event.target.value; renderDriver(); updateEstimatedGrid(); updateTrafficReadout(); animateContentChange(); scheduleRecalculation(); };
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
      updateEstimatedGrid();
      updateTrafficReadout();
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
  status.querySelector('b').textContent = `${circuitKo[track.id]?.short} · ${air}°C · ${state.trackState === 'dry' ? '건조' : state.trackState === 'damp' ? '비 · 인터미디어트' : '폭우 · 풀 웨트'}`;
  status.querySelector('small').textContent = `${weather.time.replace('T',' ')} 현지시각 · 노면 ${estimatedTrack}°C는 일사량 기반 모델 추정`;
  updateEstimatedGrid();
  updateTrafficReadout();
  renderStrategies(false);
  loadHistoricalArchive(track);
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
  updateEstimatedGrid();
  updateTrafficReadout();
  renderDriver();
  renderInventory();
  renderStrategies(false);
}

function rainHistoryStats(trackId) {
  const races = window.F1_TYRE_HISTORY?.[trackId] || {};
  const entries = Object.entries(races);
  const wetEntries = entries.filter(([, rows]) => rows.some((row) => ['WET','INTERMEDIATE'].includes(String(row.compound).toUpperCase())));
  return { total: entries.length, wet: wetEntries.length, rate: entries.length ? Math.round(wetEntries.length / entries.length * 100) : 0, wetEntries };
}

function historicalRainPlans(track, scenario) {
  const stats = rainHistoryStats(track.id);
  const archive = window.F1_HISTORY?.[track.id];
  const candidates = [];
  stats.wetEntries.forEach(([raceKey, rows]) => {
    const [season, round] = raceKey.split('-');
    const race = archive?.races.find((item) => item.season === season && item.round === round);
    const raceLaps = Number(race?.Results?.[0]?.laps);
    if (!race || !raceLaps) return;
    const byDriver = new Map();
    rows.forEach((stint) => {
      if (!byDriver.has(stint.driverId)) byDriver.set(stint.driverId, []);
      byDriver.get(stint.driverId).push(stint);
    });
    byDriver.forEach((stints, driverId) => {
      stints.sort((a,b) => Number(a.stint) - Number(b.stint));
      const compounds = stints.map((stint) => String(stint.compound).toUpperCase());
      const hasWet = compounds.includes('WET');
      const hasInter = compounds.includes('INTERMEDIATE');
      if (!hasInter || stints.length < 2 || stints.length > 5 || Number(stints[0].lapStart) !== 1 || Number(stints.at(-1).lapEnd) < raceLaps * .8) return;
      if (scenario.trackState === 'wet' && !hasWet) return;
      candidates.push({ raceKey, driverId, stints, raceLaps, hasWet });
    });
  });
  if (candidates.length < 3) return null;
  const definitions = [
    {title:'NORMAL',style:0,risk:'MEDIUM',target:.42},
    {title:'OVERCUT',style:1,risk:'LOW',target:.58},
    {title:'UNDERCUT',style:2,risk:'HIGH',target:.27}
  ];
  const used = new Set();
  return definitions.map((definition) => {
    const picked = candidates.map((candidate) => ({
      candidate,
      score: Math.abs(Number(candidate.stints[0].lapEnd) / candidate.raceLaps - definition.target) + (scenario.trackState === 'damp' && candidate.hasWet ? .4 : 0)
    })).sort((a,b) => a.score - b.score).find((item) => !used.has(`${item.candidate.raceKey}-${item.candidate.driverId}`))?.candidate;
    if (!picked) return null;
    used.add(`${picked.raceKey}-${picked.driverId}`);
    return {
      ...definition,
      rainModel:'historical-wet-race',
      historicalTemplate:{raceKey:picked.raceKey,driverId:picked.driverId},
      stints:picked.stints.map((stint,index) => ({compound:stint.compound,end:index === picked.stints.length-1 ? track.official.raceLaps : Number(stint.lapEnd)}))
    };
  }).filter(Boolean);
}

function rainPlans(track, scenario, teamModel, driverModel) {
  const laps = track.official.raceLaps;
  const dryingScore = Math.max(-30, Math.min(30,
    (scenario.trackTemp - 22) * 1.2 +
    (scenario.wind - 10) * .6 +
    (70 - scenario.humidity) * .35 -
    (scenario.rain - 40) * .45
  ));
  const tyreWearBias = Math.max(-3, Math.min(3, Math.round((teamModel.tyreDegradationMultiplier * driverModel.tyreManagementMultiplier - 1) * 24)));
  const clampStop = (lap) => Math.max(5, Math.min(laps - 5, Math.round(lap + tyreWearBias)));

  if (scenario.trackState === 'damp') {
    const persistentRain = scenario.rain >= 72 && dryingScore < 2;
    const crossover = clampStop(laps * (dryingScore > 10 ? .38 : dryingScore > -5 ? .56 : .74));
    if (persistentRain) {
      return [
        { title:'NORMAL', style:0, risk:'MEDIUM', rainModel:'persistent-inter', stints:[{compound:'INTERMEDIATE',end:clampStop(laps*.58)},{compound:'INTERMEDIATE',end:laps}] },
        { title:'OVERCUT', style:1, risk:'LOW', rainModel:'long-inter', stints:[{compound:'INTERMEDIATE',end:clampStop(laps*.72)},{compound:'INTERMEDIATE',end:laps}] },
        { title:'UNDERCUT', style:2, risk:'HIGH', rainModel:'early-refresh', stints:[{compound:'INTERMEDIATE',end:clampStop(laps*.43)},{compound:'INTERMEDIATE',end:laps}] }
      ];
    }
    return [
      { title:'NORMAL', style:0, risk:'MEDIUM', rainModel:'inter-to-slick', stints:[{compound:'INTERMEDIATE',end:crossover},{compound:track.official.weekendTyres.medium,end:laps}] },
      { title:'OVERCUT', style:1, risk:'LOW', rainModel:'late-crossover', stints:[{compound:'INTERMEDIATE',end:clampStop(crossover+5)},{compound:track.official.weekendTyres.hard,end:laps}] },
      { title:'UNDERCUT', style:2, risk:'HIGH', rainModel:'early-crossover', stints:[{compound:'INTERMEDIATE',end:clampStop(crossover-5)},{compound:track.official.weekendTyres.soft,end:laps}] }
    ];
  }

  const wetToInter = clampStop(laps * (dryingScore > 5 ? .22 : dryingScore > -10 ? .34 : .48));
  const slickPossible = dryingScore > 7 && scenario.rain < 70;
  const slickLap = clampStop(laps * (dryingScore > 15 ? .62 : .78));
  const normalStints = [{compound:'WET',end:wetToInter},{compound:'INTERMEDIATE',end:slickPossible ? slickLap : laps}];
  if (slickPossible) normalStints.push({compound:track.official.weekendTyres.medium,end:laps});
  const overcutStints = [{compound:'WET',end:clampStop(wetToInter+5)},{compound:'INTERMEDIATE',end:laps}];
  const undercutInterEnd = slickPossible ? clampStop(slickLap-5) : laps;
  const undercutStints = [{compound:'WET',end:clampStop(wetToInter-4)},{compound:'INTERMEDIATE',end:undercutInterEnd}];
  if (slickPossible) undercutStints.push({compound:track.official.weekendTyres.soft,end:laps});
  return [
    { title:'NORMAL', style:0, risk:'HIGH', rainModel:'wet-inter-crossover', stints:normalStints },
    { title:'OVERCUT', style:1, risk:'MEDIUM-HIGH', rainModel:'safety-first-wet', stints:overcutStints },
    { title:'UNDERCUT', style:2, risk:'HIGH', rainModel:'aggressive-inter', stints:undercutStints }
  ];
}

function relativeCompound(track, compound) {
  const normalized = String(compound || '').toUpperCase();
  if (normalized === 'INTERMEDIATE' || normalized === 'INTER') return 'inter';
  if (normalized === 'WET') return 'wet';
  const allocation = track.official.weekendTyres;
  if (normalized === 'HARD' || normalized === String(allocation.hard).toUpperCase()) return 'hard';
  if (normalized === 'MEDIUM' || normalized === String(allocation.medium).toUpperCase()) return 'medium';
  if (normalized === 'SOFT' || normalized === String(allocation.soft).toUpperCase()) return 'soft';
  return compoundClass(normalized);
}

function dryPlanIsLegal(track, stints) {
  const dryCompounds = new Set(stints.map((stint) => relativeCompound(track, stint.compound)).filter((type) => ['hard','medium','soft'].includes(type)));
  return dryCompounds.size >= 2;
}

function evaluatePlanPerformance(track, plan, scenario, teamModel, driverModel, trafficFactor) {
  const severity = Number(track.trackModelSeed.tyreSeverity || 3);
  const management = teamModel.tyreDegradationMultiplier * driverModel.tyreManagementMultiplier;
  const temperatureDelta = scenario.trackTemp - 32;
  const traits = {
    hard:   { pace:.48, wear:.68, warmup:1.05, ideal:36, life:.62 },
    medium: { pace:0,   wear:1.00, warmup:.48, ideal:32, life:.48 },
    soft:   { pace:-.56,wear:1.48, warmup:.18, ideal:28, life:.34 },
    inter:  { pace:6.8, wear:.72, warmup:.35, ideal:22, life:.50 },
    wet:    { pace:13.5,wear:.54, warmup:.55, ideal:18, life:.44 }
  };
  let previousEnd = 0;
  let tyreTime = 0;
  let cliffRisk = 0;
  plan.stints.forEach((stint) => {
    const type = relativeCompound(track, stint.compound);
    const trait = traits[type] || traits.medium;
    const stintLength = Math.max(1, stint.end - previousEnd);
    const expectedLife = Math.max(8, track.official.raceLaps * trait.life * (1.12 - severity * .035) / Math.max(.86, management));
    const temperatureMismatch = Math.abs(scenario.trackTemp - trait.ideal);
    for (let age = 1; age <= stintLength; age++) {
      const warmup = age <= 2 ? trait.warmup * (3 - age) * (type === 'hard' && temperatureDelta < 0 ? 1.35 : 1) : 0;
      const thermalWear = 1 + Math.max(0, temperatureDelta) * (type === 'soft' ? .018 : .009);
      const ageRatio = age / expectedLife;
      const degradationCost = trait.wear * management * thermalWear * severity * .0105 * age * (1 + Math.max(0, ageRatio - .72) * 1.9);
      const cliff = ageRatio > 1 ? Math.pow(ageRatio - 1, 2) * (type === 'soft' ? 8.5 : 5.2) : 0;
      const temperatureCost = temperatureMismatch * (type === 'hard' ? .010 : type === 'soft' ? .014 : .008);
      tyreTime += trait.pace + warmup + degradationCost + cliff + temperatureCost;
      cliffRisk += cliff;
    }
    previousEnd = stint.end;
  });

  const stops = plan.stints.length - 1;
  const pitBase = track.trackModelSeed.estimatedGreenFlagPitLossSeconds + teamModel.pitStopExecutionSeconds;
  const releaseTraffic = Math.max(0, trafficFactor - 1) * (plan.style === 1 ? 9 : plan.style === 2 ? 15 : 12);
  const undercutGain = plan.style === 2
    ? Math.max(0, 1.8 - severity * .12 + Math.max(0, scenario.trackTemp - 28) * .025) * Math.min(2, stops)
    : 0;
  const overcutGain = plan.style === 1 && scenario.traffic === 'cleanAir'
    ? Math.max(0, 1.4 - management) * 3.2
    : 0;
  const legalityPenalty = scenario.trackState === 'dry' && !dryPlanIsLegal(track, plan.stints) ? 999 : 0;
  return {
    tyreTime,
    pitTime: stops * pitBase,
    tacticalTime: releaseTraffic - undercutGain - overcutGain,
    cliffRisk,
    legalityPenalty
  };
}

function basePlans(track, scenario, teamModel, driverModel) {
  if (scenario.trackState !== 'dry') {
    const recordedPlans = historicalRainPlans(track, scenario);
    return recordedPlans?.length === 3 ? recordedPlans : rainPlans(track, scenario, teamModel, driverModel);
  }
  const tyreRaces = window.F1_TYRE_HISTORY?.[track.id] || {};
  const archive = window.F1_HISTORY?.[track.id];
  const candidates = [];
  Object.entries(tyreRaces).forEach(([raceKey, rows]) => {
    const [season, round] = raceKey.split('-');
    if (Number(season) < new Date().getFullYear() - 10) return;
    const race = archive?.races.find((item) => item.season === season && item.round === round);
    const raceLaps = Number(race?.Results?.[0]?.laps);
    const weatherShortenedRace = scenario.trackState !== 'dry' && raceLaps > 0 && raceLaps < track.official.raceLaps;
    if (!race || (raceLaps !== track.official.raceLaps && !weatherShortenedRace)) return;
    const byDriver = new Map();
    rows.forEach((stint) => {
      if (!byDriver.has(stint.driverId)) byDriver.set(stint.driverId, []);
      byDriver.get(stint.driverId).push(stint);
    });
    byDriver.forEach((stints, driverId) => {
      stints.sort((a, b) => Number(a.stint) - Number(b.stint));
      if (Number(stints[0]?.lapStart) !== 1 || Number(stints.at(-1)?.lapEnd) !== raceLaps || stints.length < 2 || stints.length > 4) return;
      const compounds = stints.map((stint) => String(stint.compound).toUpperCase());
      const isWet = compounds.some((compound) => compound === 'WET' || compound === 'INTERMEDIATE');
      const hasIntermediate = compounds.includes('INTERMEDIATE');
      const hasFullWet = compounds.includes('WET');
      if (scenario.trackState === 'dry' && isWet) return;
      if (scenario.trackState === 'dry' && !dryPlanIsLegal(track, stints)) return;
      if (scenario.trackState === 'damp' && (!hasIntermediate || hasFullWet)) return;
      if (scenario.trackState === 'wet' && !hasFullWet) return;
      candidates.push({ raceKey, season, round, driverId, stints, compounds, race });
    });
  });

  const degradationBias = ((teamModel.tyreDegradationMultiplier * driverModel.tyreManagementMultiplier) - 1) * .18;
  const heatBias = Math.max(-.04, Math.min(.06, (scenario.trackTemp - 34) * -.0025));
  const median = (values, fallback) => {
    if (!values.length) return fallback;
    const sorted = [...values].sort((a,b) => a-b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle-1] + sorted[middle]) / 2;
  };
  const historicalFirstStop = median(candidates.map((candidate) => Number(candidate.stints[0].lapEnd) / track.official.raceLaps), .38);
  const historicalStops = Math.max(1, Math.min(3, Math.round(median(candidates.map((candidate) => candidate.stints.length - 1), 1))));
  const calibratedFirstStop = Math.max(.22, Math.min(.58, historicalFirstStop + heatBias + degradationBias));
  const styles = [
    { title: 'NORMAL', style: 0, risk: 'MEDIUM', targetFirst: calibratedFirstStop, targetStops: scenario.trackTemp > 40 ? Math.max(2, historicalStops) : historicalStops },
    { title: 'OVERCUT', style: 1, risk: 'LOW', targetFirst: Math.min(.68, calibratedFirstStop + .11), targetStops: historicalStops },
    { title: 'UNDERCUT', style: 2, risk: 'HIGH', targetFirst: Math.max(.16, calibratedFirstStop - .10), targetStops: Math.min(3, historicalStops + 1) }
  ];
  const used = new Set();
  const plans = styles.map((style) => {
    const ranked = candidates.map((candidate) => {
      const firstRatio = Number(candidate.stints[0].lapEnd) / track.official.raceLaps;
      const stopPenalty = Math.abs((candidate.stints.length - 1) - style.targetStops) * .32;
      const timingPenalty = Math.abs(firstRatio - style.targetFirst);
      const heatPenalty = scenario.trackTemp > 40 && candidate.compounds.includes('SOFT') ? .12 : 0;
      const coldPenalty = scenario.trackTemp < 24 && candidate.compounds[0] === 'HARD' ? .1 : 0;
      const candidatePlan = {
        ...style,
        stints: candidate.stints.map((stint, index) => ({
          compound: stint.compound,
          end: index === candidate.stints.length - 1 ? track.official.raceLaps : Number(stint.lapEnd)
        }))
      };
      const performance = evaluatePlanPerformance(track, candidatePlan, scenario, teamModel, driverModel, 1);
      const performancePenalty = (performance.tyreTime + performance.pitTime + performance.cliffRisk * 2) / track.official.raceLaps * .018;
      const recencyPenalty = Math.max(0, new Date().getFullYear() - Number(candidate.season)) * .006;
      return { candidate, score: stopPenalty + timingPenalty + heatPenalty + coldPenalty + performancePenalty + recencyPenalty };
    }).sort((a, b) => a.score - b.score || Number(b.candidate.season) - Number(a.candidate.season));
    const picked = ranked.find((item) => !used.has(`${item.candidate.raceKey}-${item.candidate.driverId}`))?.candidate;
    if (!picked) return null;
    used.add(`${picked.raceKey}-${picked.driverId}`);
    return {
      ...style,
      stints: picked.stints.map((stint, index) => ({ compound: stint.compound, end: index === picked.stints.length - 1 ? track.official.raceLaps : Number(stint.lapEnd) })),
      historicalTemplate: { raceKey: picked.raceKey, driverId: picked.driverId }
    };
  }).filter(Boolean);
  if (plans.length === 3) return plans;
  if (scenario.trackState !== 'dry') {
    const primary = scenario.trackState === 'wet' ? 'WET' : 'INTERMEDIATE';
    const secondary = scenario.trackState === 'wet' ? 'INTERMEDIATE' : track.official.weekendTyres.medium;
    return [
      { title:'NORMAL', style:0, risk:'MEDIUM', stints:[{compound:primary,end:Math.round(track.official.raceLaps*.48)},{compound:secondary,end:track.official.raceLaps}] },
      { title:'OVERCUT', style:1, risk:'HIGH', stints:[{compound:primary,end:Math.round(track.official.raceLaps*.62)},{compound:secondary,end:track.official.raceLaps}] },
      { title:'UNDERCUT', style:2, risk:'HIGH', stints:[{compound:primary,end:Math.round(track.official.raceLaps*.32)},{compound:secondary,end:Math.round(track.official.raceLaps*.68)},{compound:primary,end:track.official.raceLaps}] }
    ];
  }
  return track.dryStrategySeeds.map((seed, index) => ({ title: ['NORMAL','OVERCUT','UNDERCUT'][index], style:index, risk:seed.risk.toUpperCase(), stints:seed.stints.map((stint) => ({ compound:stint.compound, end:stint.toRaceEnd ? track.official.raceLaps : Math.round((stint.pitWindow.min + stint.pitWindow.max) / 2) })) }));
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
  const plans = basePlans(track, scenario, teamModel, driverModel).map((plan) => {
    const historicalShift = Math.max(-2, Math.min(2, pitShift + (plan.style === 1 ? 1 : plan.style === 2 ? -1 : 0)));
    const appliedPitShift = plan.historicalTemplate ? historicalShift : pitShift;
    const shiftedStints = plan.stints.map((stint, index) => ({
      ...stint,
      end: index === plan.stints.length - 1 ? track.official.raceLaps : Math.max(5, Math.min(track.official.raceLaps - 3, stint.end + appliedPitShift))
    }));
    const stops = shiftedStints.length - 1;
    const trafficCost = (trafficFactor - 1) * track.official.raceLaps * (plan.style === 1 ? .45 : .7);
    const rainRisk = scenario.trackState === 'dry' ? scenario.rain * (plan.style === 1 ? .015 : .03) : 0;
    const positionEffect = scenario.gridPos > 12 && plan.style === 2 ? -2.4 : scenario.gridPos < 5 && plan.style === 1 ? 1.2 : 0;
    const styleBias = plan.style === 0 ? 0 : plan.style === 1 ? .35 : .55;
    const neutralisationFactor = scenario.trackState === 'wet' ? .55 : scenario.trackState === 'damp' ? .76 : 1;
    const rainCompoundPenalty = scenario.trackState === 'wet'
      ? shiftedStints.reduce((sum, stint, index) => sum + (index === 0 && compoundClass(stint.compound) !== 'wet' ? 45 : 0), 0)
      : scenario.trackState === 'damp'
        ? shiftedStints.reduce((sum, stint, index) => sum + (index === 0 && compoundClass(stint.compound) !== 'inter' ? 30 : 0), 0)
        : 0;
    const suspensionRisk = scenario.trackState === 'wet' ? Math.max(0, scenario.rain - 65) * .22 : 0;
    const performance = evaluatePlanPerformance(track, {...plan, stints:shiftedStints}, scenario, teamModel, driverModel, trafficFactor);
    const adjustedPitTime = performance.pitTime * neutralisationFactor;
    const total = lapBase * track.official.raceLaps + adjustedPitTime + performance.tyreTime + performance.tacticalTime + trafficCost + rainRisk + rainCompoundPenalty + suspensionRisk + positionEffect + styleBias + performance.legalityPenalty;
    return { ...plan, stints: shiftedStints, total, pitShift, degradation, performance };
  }).sort((a, b) => a.total - b.total);
  plans.forEach((plan, index) => { plan.label = ['예상 최속', '안정 우선', '공격적 대안'][index]; });
  return { plans, scenario, degradation, pitShift };
}

function renderStrategies(userGenerated) {
  const { track, team, driver } = context();
  const { plans, scenario, degradation, pitShift } = calculatePlans();
  updateTrafficReadout();
  let confidence = Math.round(69 - Math.abs(scenario.trackTemp - 32) * .25 - (scenario.trackState === 'wet' ? 18 : scenario.trackState === 'damp' ? 11 : 0) - (scenario.traffic === 'heavy' ? 5 : 0) - scenario.rain * .04);
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
    const trigger = scenario.trackState === 'wet'
      ? `Race Control의 웨트 의무 지시와 세이프티카 종료를 확인한 뒤, 인터가 풀 웨트보다 랩당 ${Math.max(2.5, Number(pitLoss)/8).toFixed(1)}초 빨라지는 순간 교체`
      : scenario.trackState === 'damp'
        ? `섹터별 강우와 레이더를 확인하고 슬릭 크로스오버 이득이 ${pitLoss}초를 회수할 때 교체`
        : `타이어 성능 저하가 랩당 ${(Number(expectedDeg) + .025).toFixed(3)}초를 넘으면 2랩 일찍 피트인`;
    const selected = plan.style === selectedStrategyStyle;
    return `<article class="strategy-card ${selected ? 'selected' : ''}" data-plan-style="${plan.style}" tabindex="0" role="button" aria-pressed="${selected}"><div class="selection-badge">${selected ? '✓ 시뮬레이션 전략' : '이 전략 선택'}</div><div class="card-rank"><span>${String(index + 1).padStart(2, '0')} / ${plan.label}</span><b class="risk">위험도 ${riskKo[plan.risk] || plan.risk}</b></div><h3>${plan.title}</h3><div class="stints">${stints}</div><div class="time-row"><span>예상 레이스 시간<b>${formatTime(plan.total)}</b></span><span>차이<b class="delta">${index ? `+${delta.toFixed(1)}초` : '최적'}</b></span></div><div class="strategy-detail"><div><small>첫 피트 윈도우</small><b>${pitWindow}</b></div><div><small>예상 성능 저하</small><b>${expectedDeg}초/랩</b></div><div><small>피트스톱 손실</small><b>${pitLoss}초</b></div><div class="strategy-trigger"><b>전환 조건</b> ${trigger}</div></div><div class="card-footer"><span>신뢰도 <b>${confidence - index * 3}%</b></span><span>✓ FIA 규정 충족</span></div></article>`;
  }).join('');

  renderTimeline(plans, track);
  renderInsights({ track, team, driver, scenario, degradation, pitShift, confidence, userGenerated, plans });
  const selectedPlan = plans.find((plan) => plan.style === selectedStrategyStyle) || plans[0];
  renderHistoricalMatch(selectedPlan, track);
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
  $('#triggerTitle').textContent = scenario.trackState === 'wet' ? '폭우에서는 Race Control이 전략의 일부입니다.' : scenario.trackState === 'damp' ? '인터–슬릭 크로스오버를 판단하세요.' : track.id === 'spa-francorchamps' ? '한 랩이 모든 것을 바꿉니다.' : track.id === 'suzuka' ? '트랙 포지션을 지키세요.' : '왼쪽 앞 타이어를 주시하세요.';
  $('#triggerText').textContent = scenario.trackState === 'wet'
    ? '풀 웨트는 세이프티카 뒤 출발이나 재출발에서 의무화될 수 있습니다. 경주가 시작되면 물이 빠지는 속도와 스프레이를 확인해 가능한 첫 안전 구간에서 인터미디어트로 전환하며, 시야가 확보되지 않으면 레드 플래그 가능성을 반영합니다.'
    : scenario.trackState === 'damp'
      ? '인터미디어트는 변화하는 노면에 가장 유리합니다. 한 랩 늦은 슬릭 전환은 큰 손실이 될 수 있으므로 섹터 타임, 레이더, 노면 온도와 드라이 라인 형성을 함께 확인합니다.'
      : hot ? `노면 온도가 ${scenario.trackTemp}°C입니다. 과열이 시작되면 피트스톱을 앞당기세요.` : `예상 성능 저하 계수는 ${degradation.toFixed(3)}입니다. 첫 피트스톱을 기본값보다 ${Math.abs(pitShift)}랩 ${pitShift < 0 ? '앞당겼습니다' : pitShift > 0 ? '늦췄습니다' : '유지했습니다'}.`;
  const rainHistory = rainHistoryStats(track.id);
  const rainHistoryNote = scenario.trackState === 'dry'
    ? ''
    : rainHistory.rate <= 10
      ? `<li><b>매우 드문 우천:</b> 최근 기록 ${rainHistory.total}경기 중 우천은 ${rainHistory.wet}경기(${rainHistory.rate}%)뿐입니다. 이 서킷은 보통 비가 오지 않습니다.</li>`
      : `<li>최근 타이어 기록 ${rainHistory.total}경기 중 ${rainHistory.wet}경기(${rainHistory.rate}%)에서 인터미디어트 또는 웨트가 사용됐으며, 추천안은 이 실제 기록을 우선합니다.</li>`;
  $('#rankingReasons').innerHTML = `<li>${team.name}와 ${driver.name}의 페이스 및 타이어 관리 값을 반영했습니다.</li><li>노면 ${scenario.trackTemp}°C, 기온 ${scenario.airTemp}°C, 습도 ${scenario.humidity}%, 강수 ${scenario.rain}%를 계산했습니다.</li>${rainHistoryNote}<li>${scenario.gridPos}번 그리드와 ${trafficKo[scenario.traffic]} 트래픽 조건에서 ${plans[0].title}이 가장 빠릅니다.</li>`;
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
      weather: isRainLap ? '비 · 인터미디어트' : scenario.trackState === 'dry' ? '건조' : scenario.trackState === 'damp' ? '비 · 인터미디어트' : '폭우 · 풀 웨트'
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
  const [entryFraction, exitFraction] = pitLaneRanges[trackId] || [.93, .06];
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
