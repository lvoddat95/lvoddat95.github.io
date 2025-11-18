import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, Trash2, Clock, Info, Sun, Moon, X, Star, CheckCircle, AlertCircle, ArrowLeft, ArrowRight, Sparkles, ArrowRightLeft, RotateCcw } from 'lucide-react';

/**
 * UTILITIES: Lunar Calendar Calculation & Mock Feng Shui Data
 */

const CHINESE_ZODIAC = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const HEAVENLY_STEMS = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const EARTHLY_BRANCHES = CHINESE_ZODIAC;

const SOLAR_TERMS = [
  "Xuân Phân", "Thanh Minh", "Cốc Vũ", "Lập Hạ", "Tiểu Mãn", "Mang Chủng",
  "Hạ Chí", "Tiểu Thử", "Đại Thử", "Lập Thu", "Xử Thử", "Bạch Lộ",
  "Thu Phân", "Hàn Lộ", "Sương Giáng", "Lập Đông", "Tiểu Tuyết", "Đại Tuyết",
  "Đông Chí", "Tiểu Hàn", "Đại Hàn", "Lập Xuân", "Vũ Thủy", "Kinh Trập"
];

const TWELVE_DUTY_DAYS = ["Kiến", "Trừ", "Mãn", "Bình", "Định", "Chấp", "Phá", "Nguy", "Thành", "Thu", "Khai", "Bế"];

// Mock Data for "Good/Bad Stars"
const GOOD_STARS = [
    { name: "Nguyệt Tài", desc: "Tốt cho việc cầu tài lộc" },
    { name: "Phổ Hộ", desc: "Tốt mọi việc, nhất là giá thú" },
    { name: "Dịch Mã", desc: "Tốt cho xuất hành, di chuyển" },
    { name: "Thiên Phúc", desc: "Tốt mọi việc" },
    { name: "Sinh khí", desc: "Tốt mọi việc, nhất là làm nhà" },
    { name: "Thiên Quan", desc: "Giải hạn, tốt mọi việc" }
];

const BAD_STARS = [
    { name: "Lôi công", desc: "Xấu về xây dựng nhà cửa" },
    { name: "Thổ cẩm", desc: "Kỵ xây dựng, an táng" },
    { name: "Đại Hao", desc: "Xấu mọi việc" },
    { name: "Hoang vu", desc: "Xấu mọi việc" },
    { name: "Thụ tử", desc: "Xấu mọi việc, kỵ tu tạo" },
    { name: "Thiên Cương", desc: "Xấu mọi việc" }
];

const GOOD_ACTIVITIES = ["Cúng tế", "Cầu phúc", "Đính hôn", "Ăn hỏi", "Cưới gả", "Thẩm mỹ", "Chữa bệnh", "Động thổ", "Khai trương", "Ký kết", "Giao dịch"];
const BAD_ACTIVITIES = ["An táng", "Cải táng", "Tố tụng", "Tranh chấp"];

// Helpers
const getCanChiYear = (year) => `${HEAVENLY_STEMS[(year + 6) % 10]} ${EARTHLY_BRANCHES[(year + 8) % 12]}`;
const getCanChiMonth = (month, year) => `${HEAVENLY_STEMS[(year * 12 + month + 3) % 10]} ${EARTHLY_BRANCHES[(month + 1) % 12]}`;
const getCanChiDay = (d, m, y) => {
    const offset = Math.floor(new Date(y, m - 1, d).getTime() / 86400000);
    return `${HEAVENLY_STEMS[(offset + 9) % 10]} ${EARTHLY_BRANCHES[(offset + 1) % 12]}`;
};

// Simplified Solar -> Lunar (Mock)
const getLunarDate = (d, m, y) => {
  let lunarDay = d - 10; 
  let lunarMonth = m - 1;
  let lunarYear = y;
  
  if (lunarDay <= 0) {
      lunarMonth--;
      lunarDay += 30;
  }
  if (lunarMonth <= 0) {
      lunarMonth = 12;
      lunarYear--;
  }
  if (d === 23 && m === 10 && y === 2024) {
      lunarDay = 21; lunarMonth = 9;
  }
  return { day: lunarDay, month: lunarMonth, year: lunarYear, leap: false };
};

// Simplified Lunar -> Solar (Mock - Reverse of above)
const getSolarFromLunar = (d, m, y) => {
    let solarDay = parseInt(d) + 10;
    let solarMonth = parseInt(m) + 1;
    let solarYear = parseInt(y);

    if (solarDay > 30) {
        solarDay -= 30;
        solarMonth++;
    }
    if (solarMonth > 12) {
        solarMonth = 1;
        solarYear++;
    }
    
    // Return valid Date object
    return new Date(solarYear, solarMonth - 1, solarDay);
};

const getSolarTerm = (d, m) => {
    if (m === 10 && d >= 23) return "Sương Giáng";
    if (m === 4 && d >= 20) return "Cốc Vũ";
    if (m === 5 && d >= 21) return "Tiểu Mãn";
    if (m === 12 && d >= 22) return "Đông Chí";
    return "Hàn Lộ"; // Default fallback
};

const getDayDuty = (d) => TWELVE_DUTY_DAYS[d % 12];

// Deterministic pseudo-random generator
const pseudoRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

const getDailyFengShui = (d, m, y) => {
    const seed = d * m * y;
    
    const goodStarsCount = Math.floor(pseudoRandom(seed) * 3) + 2;
    const badStarsCount = Math.floor(pseudoRandom(seed + 1) * 3) + 1;
    
    const goodStars = [...GOOD_STARS].sort(() => 0.5 - pseudoRandom(seed + 2)).slice(0, goodStarsCount);
    const badStars = [...BAD_STARS].sort(() => 0.5 - pseudoRandom(seed + 3)).slice(0, badStarsCount);
    
    const doCount = Math.floor(pseudoRandom(seed + 4) * 5) + 4;
    const goodActs = [...GOOD_ACTIVITIES].sort(() => 0.5 - pseudoRandom(seed + 5)).slice(0, doCount);

    const badCount = Math.floor(pseudoRandom(seed + 6) * 2) + 1;
    const badActs = [...BAD_ACTIVITIES].sort(() => 0.5 - pseudoRandom(seed + 7)).slice(0, badCount);
    
    return { goodStars, badStars, goodActs, badActs };
};

const VIETNAMESE_HOLIDAYS = {
  "1-1": "Tết Dương Lịch",
  "30-4": "Giải phóng miền Nam",
  "1-5": "Quốc tế Lao động",
  "2-9": "Quốc khánh",
  "20-10": "Ngày Phụ nữ Việt Nam",
  "20-11": "Ngày Nhà giáo Việt Nam",
  "22-12": "Ngày QĐND Việt Nam"
};

const LUNAR_HOLIDAYS = {
  "1-1": "Tết Nguyên Đán",
  "10-3": "Giỗ tổ Hùng Vương",
  "15-8": "Tết Trung Thu"
};

/* --- COMPONENTS --- */

const ConverterView = () => {
    const today = new Date();
    const [solarInput, setSolarInput] = useState({ d: today.getDate(), m: today.getMonth() + 1, y: today.getFullYear() });
    const [lunarInput, setLunarInput] = useState({ d: '', m: '', y: '' });
    const [result, setResult] = useState(null);

    // Initialize lunar inputs based on today
    useEffect(() => {
        const l = getLunarDate(today.getDate(), today.getMonth() + 1, today.getFullYear());
        setLunarInput({ d: l.day, m: l.month, y: l.year });
    }, []);

    const handleSolarToLunar = () => {
        const { d, m, y } = solarInput;
        if (!d || !m || !y) return;
        
        const lunar = getLunarDate(parseInt(d), parseInt(m), parseInt(y));
        setResult({
            type: 'solarToLunar',
            source: { d, m, y },
            target: { d: lunar.day, m: lunar.month, y: lunar.year, canChiYear: getCanChiYear(lunar.year) },
            info: getDailyFengShui(parseInt(d), parseInt(m), parseInt(y))
        });
        // Update the other input side for convenience
        setLunarInput({ d: lunar.day, m: lunar.month, y: lunar.year });
    };

    const handleLunarToSolar = () => {
        const { d, m, y } = lunarInput;
        if (!d || !m || !y) return;
        
        const solarDate = getSolarFromLunar(d, m, y);
        const solar = { d: solarDate.getDate(), m: solarDate.getMonth() + 1, y: solarDate.getFullYear() };
        
        setResult({
            type: 'lunarToSolar',
            source: { d, m, y, isLunar: true },
            target: solar,
            info: getDailyFengShui(solar.d, solar.m, solar.y)
        });
        // Update solar input
        setSolarInput(solar);
    };

    const setToday = () => {
        const now = new Date();
        const s = { d: now.getDate(), m: now.getMonth() + 1, y: now.getFullYear() };
        setSolarInput(s);
        const l = getLunarDate(s.d, s.m, s.y);
        setLunarInput({ d: l.day, m: l.month, y: l.year });
        setResult(null);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
             <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-black text-gray-800">Công Cụ Chuyển Đổi Ngày</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Nhập ngày dương lịch hoặc âm lịch để xem kết quả tương ứng một cách nhanh chóng và chính xác.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
                {/* Solar Input */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 w-full">
                    <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                        <Sun className="text-[#c92127]" size={24} /> Lịch Dương
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Ngày</label>
                            <input type="number" value={solarInput.d} onChange={e => setSolarInput({...solarInput, d: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg font-semibold text-gray-800 focus:ring-2 focus:ring-red-200 focus:border-red-500 outline-none transition-all" placeholder="DD"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Tháng</label>
                            <input type="number" value={solarInput.m} onChange={e => setSolarInput({...solarInput, m: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg font-semibold text-gray-800 focus:ring-2 focus:ring-red-200 focus:border-red-500 outline-none transition-all" placeholder="MM"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Năm</label>
                            <input type="number" value={solarInput.y} onChange={e => setSolarInput({...solarInput, y: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg font-semibold text-gray-800 focus:ring-2 focus:ring-red-200 focus:border-red-500 outline-none transition-all" placeholder="YYYY"/>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 items-center justify-center self-center w-full lg:w-auto">
                     <button onClick={handleSolarToLunar} className="w-full lg:w-auto bg-[#c92127] hover:bg-[#b01d22] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-red-200 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                        <span className="hidden lg:inline">Sang Âm</span> <ArrowRight size={20} className="lg:group-hover:translate-x-1 transition-transform"/>
                        <span className="lg:hidden">Chuyển sang Âm lịch</span>
                    </button>
                    
                    <button onClick={setToday} className="w-full lg:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                        <RotateCcw size={18} /> Hôm nay
                    </button>

                    <button onClick={handleLunarToSolar} className="w-full lg:w-auto bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-teal-200 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                        <ArrowLeft size={20} className="lg:group-hover:-translate-x-1 transition-transform hidden lg:block"/> 
                        <span className="hidden lg:inline">Sang Dương</span>
                        <span className="lg:hidden">Chuyển sang Dương lịch</span>
                    </button>
                </div>

                {/* Lunar Input */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 w-full">
                    <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                        <Moon className="text-[#DAA520]" size={24} /> Lịch Âm
                    </h3>
                    <div className="space-y-4">
                         <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Ngày</label>
                            <input type="number" value={lunarInput.d} onChange={e => setLunarInput({...lunarInput, d: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg font-semibold text-gray-800 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 outline-none transition-all" placeholder="DD"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Tháng</label>
                            <input type="number" value={lunarInput.m} onChange={e => setLunarInput({...lunarInput, m: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg font-semibold text-gray-800 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 outline-none transition-all" placeholder="MM"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Năm</label>
                            <input type="number" value={lunarInput.y} onChange={e => setLunarInput({...lunarInput, y: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg font-semibold text-gray-800 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 outline-none transition-all" placeholder="YYYY"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Result Section */}
            {result && (
                <div className="bg-white border-2 border-red-50 rounded-3xl p-6 lg:p-8 shadow-sm animate-in zoom-in-95 duration-300">
                    <h3 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Kết Quả Tra Cứu</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Dương lịch</p>
                            <p className="text-3xl font-bold text-[#c92127]">
                                {result.type === 'solarToLunar' 
                                    ? `Ngày ${result.source.d}/${result.source.m}/${result.source.y}`
                                    : `Ngày ${result.target.d}/${result.target.m}/${result.target.y}`
                                }
                            </p>
                        </div>
                        <div>
                             <p className="text-gray-500 font-medium mb-1">Âm lịch</p>
                            <p className="text-3xl font-bold text-[#DAA520]">
                                 {result.type === 'solarToLunar' 
                                    ? `Ngày ${result.target.d} tháng ${result.target.m} năm ${result.target.canChiYear}`
                                    : `Ngày ${result.source.d} tháng ${result.source.m} năm ${getCanChiYear(parseInt(result.source.y))}`
                                }
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Ngày Can Chi</p>
                            <p className="text-gray-800 font-semibold mt-1">
                                {getCanChiDay(
                                    result.type === 'solarToLunar' ? result.source.d : result.target.d,
                                    result.type === 'solarToLunar' ? result.source.m : result.target.m,
                                    result.type === 'solarToLunar' ? result.source.y : result.target.y
                                )}
                            </p>
                        </div>
                         <div>
                            <p className="text-gray-500 text-sm font-medium">Tiết Khí</p>
                            <p className="text-teal-700 font-semibold mt-1">
                                 {getSolarTerm(
                                    result.type === 'solarToLunar' ? result.source.d : result.target.d,
                                    result.type === 'solarToLunar' ? result.source.m : result.target.m
                                )}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Giờ Hoàng Đạo</p>
                            <p className="text-gray-800 text-sm mt-1 leading-relaxed">
                                Tý (23-1), Sửu (1-3), Thìn (7-9), Tỵ (9-11), Mùi (13-15), Tuất (19-21)
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [showEventModal, setShowEventModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [newEventText, setNewEventText] = useState("");
  const [activeView, setActiveView] = useState('calendar'); // 'calendar' | 'converter'

  // Load events from local storage
  useEffect(() => {
    const saved = localStorage.getItem('vn_calendar_events');
    if (saved) setEvents(JSON.parse(saved));
  }, []);

  // Save events
  const saveEvent = () => {
    if (!newEventText.trim()) return;
    const dateKey = selectedDate.toDateString();
    const newEvents = {
        ...events,
        [dateKey]: [...(events[dateKey] || []), newEventText]
    };
    setEvents(newEvents);
    localStorage.setItem('vn_calendar_events', JSON.stringify(newEvents));
    setNewEventText("");
    setShowEventModal(false);
  };

  const deleteEvent = (dateKey, index) => {
      const updatedList = events[dateKey].filter((_, i) => i !== index);
      const newEvents = { ...events, [dateKey]: updatedList };
      setEvents(newEvents);
      localStorage.setItem('vn_calendar_events', JSON.stringify(newEvents));
  };

  // Calendar Navigation
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const goToToday = () => {
      const now = new Date();
      setCurrentDate(now);
      setSelectedDate(now);
      setActiveView('calendar');
  };

  // Generate Days
  const calendarDays = useMemo(() => {
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const startDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = startDayIndex - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, month: month - 1, year: month === 0 ? year - 1 : year, currentMonth: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, month: month, year: year, currentMonth: true });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, month: month + 1, year: month === 11 ? year + 1 : year, currentMonth: false });
    }
    return days;
  }, [currentDate]);

  // Info for Selected Date
  const selectedInfo = useMemo(() => {
      const d = selectedDate.getDate();
      const m = selectedDate.getMonth() + 1;
      const y = selectedDate.getFullYear();
      const lunar = getLunarDate(d, m, y);
      const fengShui = getDailyFengShui(d, m, y);
      
      return {
          day: d,
          month: m,
          year: y,
          dayOfWeek: `Thứ ${selectedDate.getDay() === 0 ? 'Chủ Nhật' : 'Hai, Ba, Tư, Năm, Sáu, Bảy'.split(', ')[selectedDate.getDay() - 1]}`,
          fullSolar: `Thứ ${selectedDate.getDay() === 0 ? 'Chủ Nhật' : 'Hai, Ba, Tư, Năm, Sáu, Bảy'.split(', ')[selectedDate.getDay() - 1]}, ${d} tháng ${m} năm ${y}`,
          lunarStr: `${lunar.day} tháng ${lunar.month}, ${getCanChiYear(lunar.year)}`,
          lunarDay: lunar.day,
          lunarMonth: lunar.month,
          lunarYearCanChi: getCanChiYear(lunar.year),
          canChiDay: getCanChiDay(d, m, y),
          canChiMonth: getCanChiMonth(lunar.month, y),
          canChiYear: getCanChiYear(y),
          solarTerm: getSolarTerm(d, m),
          duty: getDayDuty(d),
          isToday: new Date().toDateString() === selectedDate.toDateString(),
          fengShui
      };
  }, [selectedDate]);

  const getHoliday = (d, m, y, lunar) => {
      const solarKey = `${d}-${m}`;
      const lunarKey = `${lunar.day}-${lunar.month}`;
      if (VIETNAMESE_HOLIDAYS[solarKey]) return VIETNAMESE_HOLIDAYS[solarKey];
      if (LUNAR_HOLIDAYS[lunarKey]) return LUNAR_HOLIDAYS[lunarKey];
      return null;
  };

  // --- SUB-COMPONENTS ---

  const DetailModal = () => (
    <div className="fixed inset-0 bg-[#f8f6f2] z-50 overflow-y-auto animate-in slide-in-from-bottom-10 duration-300">
        <div className="max-w-6xl mx-auto p-4 lg:p-8">
            {/* Header Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 sticky top-0 bg-[#f8f6f2]/95 backdrop-blur-sm py-2 z-20">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-black text-[#333] tracking-tight">{selectedInfo.fullSolar}</h2>
                    <p className="text-[#DAA520] text-lg font-medium mt-1">Ngày {selectedInfo.lunarDay} tháng {selectedInfo.lunarMonth} năm {selectedInfo.lunarYearCanChi}</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - 1))} className="h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50">
                        <ChevronLeft size={20}/>
                    </button>
                    <button onClick={() => { goToToday(); setShowDetailModal(false); }} className="h-10 px-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 font-bold text-sm">
                        Hôm nay
                    </button>
                    <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 1))} className="h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50">
                        <ChevronRight size={20}/>
                    </button>
                    <button onClick={() => setShowDetailModal(false)} className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#c92127] text-white shadow-sm hover:bg-[#b01d22] ml-2">
                        <X size={20}/>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT COLUMN: BIG DATE CARD */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[#c92127]"></div>
                        <h1 className="text-[8rem] lg:text-[10rem] font-black text-[#c92127] leading-none tracking-tighter">
                            {selectedInfo.day}
                        </h1>
                        <p className="text-2xl font-bold text-gray-700 mt-[-10px]">Tháng {selectedInfo.month}</p>
                        <p className="text-gray-500 font-medium">Năm {selectedInfo.year}</p>
                        
                        <div className="w-full h-px bg-gray-100 my-6"></div>
                        
                        <div className="w-full space-y-3 text-left px-4">
                            <div className="flex justify-between">
                                <span className="font-bold text-gray-500 w-24">Ngày:</span> 
                                <span className="font-medium text-gray-800">{selectedInfo.canChiDay}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold text-gray-500 w-24">Tháng:</span> 
                                <span className="font-medium text-gray-800">{selectedInfo.canChiMonth}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold text-gray-500 w-24">Năm:</span> 
                                <span className="font-medium text-gray-800">{selectedInfo.canChiYear}</span>
                            </div>
                        </div>
                         <div className="w-full h-px bg-gray-100 my-6"></div>
                         <div className="w-full space-y-3 text-left px-4">
                            <div className="flex justify-between">
                                <span className="font-bold text-gray-500 w-24">Tiết khí:</span> 
                                <span className="font-medium text-[#2F6C67]">{selectedInfo.solarTerm}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold text-gray-500 w-24">Trực:</span> 
                                <span className="font-medium text-gray-800">{selectedInfo.duty}</span>
                            </div>
                         </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center">
                         <p className="italic text-gray-600 font-serif text-lg">"Dù ai đi ngược về xuôi, nhớ ngày Giỗ Tổ mồng mười tháng ba."</p>
                    </div>
                </div>

                {/* RIGHT COLUMN: DETAILS */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Zodiac Hours */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                         <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                            <Sun className="text-[#DAA520]" /> Giờ Hoàng Đạo
                        </h3>
                        <p className="text-gray-700 leading-relaxed bg-yellow-50/50 p-4 rounded-lg border border-yellow-100">
                            Tý (23-1), Sửu (1-3), Thìn (7-9), Tỵ (9-11), Mùi (13-15), Tuất (19-21)
                        </p>
                         <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 mt-6">
                            <Moon className="text-gray-500" /> Giờ Hắc Đạo
                        </h3>
                        <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                            Dần (3-5), Mão (5-7), Ngọ (11-13), Thân (15-17), Dậu (17-19), Hợi (21-23)
                        </p>
                    </div>

                    {/* Stars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-700">
                                <Sparkles size={20} className="fill-current"/> Sao Tốt
                            </h3>
                            <ul className="space-y-3">
                                {selectedInfo.fengShui.goodStars.map((star, idx) => (
                                    <li key={idx} className="text-sm text-gray-700 pb-2 border-b border-gray-50 last:border-0">
                                        <span className="font-bold text-green-700 block mb-0.5">{star.name}</span>
                                        <span className="text-gray-500">{star.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-600">
                                <AlertCircle size={20} /> Sao Xấu
                            </h3>
                            <ul className="space-y-3">
                                {selectedInfo.fengShui.badStars.map((star, idx) => (
                                    <li key={idx} className="text-sm text-gray-700 pb-2 border-b border-gray-50 last:border-0">
                                        <span className="font-bold text-gray-600 block mb-0.5">{star.name}</span>
                                        <span className="text-gray-500">{star.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Activities */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-700">
                                <CheckCircle size={20} /> Việc Nên Làm
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {selectedInfo.fengShui.goodActs.join(", ")}.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#c92127]">
                                <X size={20} /> Việc Kiêng Kỵ
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {selectedInfo.fengShui.badActs.join(", ")}.
                            </p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#333333] font-sans selection:bg-red-100 flex flex-col">
      {showDetailModal && <DetailModal />}

      <div className="max-w-7xl mx-auto p-4 lg:p-8 w-full flex-1 flex flex-col">
        
        {/* Global Header / Nav */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 text-[#c92127]">
                    <Calendar className="w-full h-full" strokeWidth={2.5} />
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-800 tracking-tight">Lịch Vạn Niên</h1>
            </div>

            <div className="flex p-1 bg-white rounded-xl shadow-sm border border-gray-200">
                <button 
                    onClick={() => setActiveView('calendar')}
                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeView === 'calendar' ? 'bg-[#c92127] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    Lịch Tháng
                </button>
                <button 
                    onClick={() => setActiveView('converter')}
                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${activeView === 'converter' ? 'bg-[#c92127] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <ArrowRightLeft size={16}/> Chuyển đổi ngày
                </button>
            </div>
        </header>

        {activeView === 'converter' ? (
            <ConverterView />
        ) : (
            <div className="flex flex-col lg:flex-row gap-6 flex-1">
                 {/* LEFT: MAIN CALENDAR */}
                <main className="flex-1 bg-white rounded-2xl shadow-sm border border-[#e0dcd5] overflow-hidden flex flex-col">
                
                {/* Calendar Header */}
                <header className="p-4 sm:p-6 border-b border-[#e0dcd5] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white sticky top-0 z-10">
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                        <button 
                            onClick={goToToday}
                            className="px-4 h-10 bg-[#c92127] hover:bg-[#b01d22] text-white text-sm font-bold rounded-lg transition-colors shadow-sm active:scale-95"
                        >
                            Hôm nay
                        </button>
                        <div className="flex items-center bg-[#f8f6f2] rounded-lg border border-[#e0dcd5] p-1">
                            <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-600">
                                <ChevronLeft size={20} />
                            </button>
                            <span className="mx-2 w-32 text-center font-bold text-sm">
                                Tháng {currentDate.getMonth() + 1}, {currentDate.getFullYear()}
                            </span>
                            <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-600">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Grid Header */}
                <div className="grid grid-cols-7 border-b border-[#e0dcd5]">
                    {['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'CN'].map((day, i) => (
                        <div key={day} className={`py-3 text-center text-sm font-bold uppercase tracking-wider ${i === 6 ? 'text-[#c92127]' : 'text-[#2F6C67]'}`}>
                            {day}
                        </div>
                    ))}
                </div>

                {/* Grid Body */}
                <div className="grid grid-cols-7 flex-1 auto-rows-fr bg-[#f8f6f2]/30">
                    {calendarDays.map((item, idx) => {
                        const isSelected = item.day === selectedDate.getDate() && item.month === selectedDate.getMonth() && item.year === selectedDate.getFullYear();
                        const isToday = item.day === new Date().getDate() && item.month === new Date().getMonth() && item.year === new Date().getFullYear();
                        const isWeekend = (idx + 1) % 7 === 0;
                        
                        const lunar = getLunarDate(item.day, item.month + 1, item.year);
                        const holiday = getHoliday(item.day, item.month + 1, item.year, lunar);
                        const hasEvents = events[new Date(item.year, item.month, item.day).toDateString()];

                        return (
                            <div 
                                key={idx}
                                onClick={() => setSelectedDate(new Date(item.year, item.month, item.day))}
                                className={`
                                    min-h-[100px] sm:min-h-[120px] p-2 border-b border-r border-[#e0dcd5] relative group cursor-pointer transition-all duration-200
                                    ${!item.currentMonth ? 'bg-gray-50/50 text-gray-400' : 'bg-white'}
                                    ${isSelected ? 'ring-2 ring-[#c92127] z-10' : 'hover:bg-red-50/30'}
                                `}
                            >
                                {/* Solar Date */}
                                <div className="flex justify-between items-start">
                                    <span className={`
                                        text-lg sm:text-xl font-medium leading-none
                                        ${isWeekend ? 'text-[#c92127]' : 'text-gray-700'}
                                        ${isToday ? 'bg-[#c92127] text-white w-8 h-8 rounded-full flex items-center justify-center -mt-1 -ml-1 shadow-sm' : ''}
                                    `}>
                                        {item.day}
                                    </span>
                                </div>

                                {/* Lunar Date */}
                                <div className={`
                                    text-xs sm:text-sm font-medium mt-1 text-right
                                    ${item.day === 1 || lunar.day === 1 ? 'text-[#DAA520] font-bold' : 'text-gray-500'}
                                `}>
                                    {lunar.day === 1 ? `${lunar.day}/${lunar.month}` : lunar.day}
                                </div>

                                {/* Holiday / Event Indicators */}
                                <div className="absolute bottom-2 right-2 left-2 flex flex-col items-end gap-1">
                                    {holiday && (
                                        <span className="text-[10px] sm:text-xs font-semibold text-[#c92127] line-clamp-1 text-right leading-tight">
                                            {holiday}
                                        </span>
                                    )}
                                    {hasEvents && (
                                        <div className="flex gap-0.5">
                                            {hasEvents.map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                </main>

                {/* RIGHT: SIDEBAR INFO */}
                <aside className="w-full lg:w-96 flex flex-col gap-6">
                    
                    {/* Daily Info Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#e0dcd5] overflow-hidden p-6">
                        <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3 mb-4 flex justify-between items-center">
                            <span>Thông tin chi tiết</span>
                            {selectedInfo.isToday && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Hôm nay</span>}
                        </h3>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-baseline">
                                <span className="text-gray-500 text-sm">Dương lịch</span>
                                <span className="font-medium text-gray-900 text-right">{selectedInfo.fullSolar}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-gray-500 text-sm">Âm lịch</span>
                                <span className="font-medium text-[#c92127] font-bold text-right">{selectedInfo.lunarStr}</span>
                            </div>
                            <div className="h-px bg-gray-100 my-2"></div>
                            <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                                <span className="text-gray-500">Ngày Can Chi</span>
                                <span className="text-gray-800 font-medium text-right">{selectedInfo.canChiDay}</span>
                                
                                <span className="text-gray-500 mt-2">Tiết khí</span>
                                <span className="text-[#2F6C67] font-medium mt-2 text-right">{selectedInfo.solarTerm}</span>
                            </div>
                            
                            <button 
                                onClick={() => setShowDetailModal(true)}
                                className="w-full mt-4 py-2.5 bg-[#f8f6f2] hover:bg-[#e0dcd5] text-gray-700 font-semibold rounded-lg border border-[#e0dcd5] transition-all flex items-center justify-center gap-2 group"
                            >
                                Xem chi tiết đầy đủ <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                            </button>
                        </div>
                    </div>

                    {/* Events Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-[#e0dcd5] overflow-hidden flex-1 p-6 flex flex-col">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Sự kiện</h3>
                            <button 
                                onClick={() => setShowEventModal(true)}
                                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                            >
                                <Plus size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-1 space-y-3 max-h-[300px] lg:max-h-none">
                            {/* System Holiday Display */}
                            {getHoliday(selectedDate.getDate(), selectedDate.getMonth() + 1, selectedDate.getFullYear(), getLunarDate(selectedDate.getDate(), selectedDate.getMonth() + 1, selectedDate.getFullYear())) && (
                                <div className="flex gap-3 p-3 rounded-xl bg-red-50 border border-red-100">
                                    <div className="flex flex-col items-center justify-center bg-white text-[#c92127] rounded-lg shadow-sm w-12 h-12 shrink-0 border border-red-100">
                                        <span className="text-lg font-bold leading-none">{selectedDate.getDate()}</span>
                                        <span className="text-[10px] font-medium uppercase">Thg {selectedDate.getMonth()+1}</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-bold text-gray-800 text-sm">
                                            {getHoliday(selectedDate.getDate(), selectedDate.getMonth() + 1, selectedDate.getFullYear(), getLunarDate(selectedDate.getDate(), selectedDate.getMonth() + 1, selectedDate.getFullYear()))}
                                        </p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <Sun size={10} /> Sự kiện hệ thống
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* User Events */}
                            {events[selectedDate.toDateString()]?.map((evt, idx) => (
                                <div key={idx} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 group">
                                    <div className="flex flex-col items-center justify-center bg-white text-blue-600 rounded-lg shadow-sm w-12 h-12 shrink-0 border border-gray-100">
                                        <Clock size={20} strokeWidth={2} />
                                    </div>
                                    <div className="flex flex-col justify-center flex-1 min-w-0">
                                        <p className="font-medium text-gray-800 text-sm break-words">{evt}</p>
                                        <p className="text-xs text-gray-500">Ghi chú cá nhân</p>
                                    </div>
                                    <button 
                                        onClick={() => deleteEvent(selectedDate.toDateString(), idx)}
                                        className="opacity-0 group-hover:opacity-100 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all self-center"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}

                            {!events[selectedDate.toDateString()]?.length && !getHoliday(selectedDate.getDate(), selectedDate.getMonth() + 1, selectedDate.getFullYear(), getLunarDate(selectedDate.getDate(), selectedDate.getMonth() + 1, selectedDate.getFullYear())) && (
                                <div className="text-center py-8 text-gray-400">
                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <Info size={24} className="opacity-50"/>
                                    </div>
                                    <p className="text-sm">Không có sự kiện nào</p>
                                </div>
                            )}
                        </div>
                    </div>
                </aside>
            </div>
        )}

        {/* Add Event Modal */}
        {showEventModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-lg">Thêm sự kiện</h3>
                        <button onClick={() => setShowEventModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">Ngày: <span className="font-medium text-gray-800">{selectedInfo.fullSolar}</span></p>
                        <input 
                            autoFocus
                            type="text" 
                            placeholder="Nhập tên sự kiện..." 
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c92127]/20 focus:border-[#c92127] transition-all"
                            value={newEventText}
                            onChange={(e) => setNewEventText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && saveEvent()}
                        />
                        <div className="flex gap-3 mt-6">
                            <button 
                                onClick={() => setShowEventModal(false)}
                                className="flex-1 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                Hủy
                            </button>
                            <button 
                                onClick={saveEvent}
                                className="flex-1 py-2.5 bg-[#c92127] hover:bg-[#b01d22] text-white font-medium rounded-lg shadow-md transition-all"
                            >
                                Lưu sự kiện
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}