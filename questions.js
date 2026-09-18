window.QUESTION_BANK = [
  {
    id:"stall-1", topic:"Aerodynamics",
    q:"飞机失速的直接原因是什么？",
    options:["Airspeed 低于某个固定值","Engine power 不足","Angle of attack 超过 critical AoA","Pitch attitude 太高"],
    answer:2,
    explain:"失速的直接原因是超过临界迎角。它可以发生在不同 airspeed 下。"
  },
  {
    id:"turn-1", topic:"Aerodynamics",
    q:"建立约 20° right bank 后，想保持 bank，通常如何处理 aileron？",
    options:["持续向右压","大致回 neutral，再小幅修正","向左打到底","主要用 elevator 保持 bank"],
    answer:1,
    explain:"Aileron 主要用来建立/改变 bank。建立后通常回近中立位并做小修正。"
  },
  {
    id:"turn-2", topic:"Aerodynamics",
    q:"为什么 level turn 中 stall speed 会升高？",
    options:["因为 ground speed 一定下降","因为总 lift 需求增大、load factor 上升","因为 rudder 会减小升力","因为 altimeter setting 改变"],
    answer:1,
    explain:"升力向量倾斜后，垂直分量仍需平衡 weight，故总 lift 需求增加，load factor 和所需 AoA 上升。"
  },
  {
    id:"fog-1", topic:"Weather",
    q:"晴朗、潮湿、微风的夜里，T=16°C、Td=15°C，最值得警觉什么？",
    options:["Radiation fog","Advection fog","空气过干","Hail"],
    answer:0,
    explain:"clear night 有利于地面辐射降温；T/Td 很接近，近地面空气容易达到饱和。"
  },
  {
    id:"cloudbase-1", topic:"Weather",
    q:"机场 800 ft MSL，T=27°C，Td=17°C。按粗略公式估算 cumulus cloud base MSL 约为？",
    options:["3200 ft","4000 ft","4800 ft","5600 ft"],
    answer:2,
    explain:"(27-17)/2.5×1000≈4000 ft AGL；加机场 800 ft，约 4800 ft MSL。"
  },
  {
    id:"metar-1", topic:"METAR",
    q:"BKN008 表示什么？",
    options:["800 ft AGL broken layer","800 ft MSL broken layer","8000 ft AGL broken layer","800 ft AGL overcast"],
    answer:0,
    explain:"云层高度码乘 100 ft，METAR 云底按 AGL 报告。"
  },
  {
    id:"metar-2", topic:"METAR",
    q:"FEW005 SCT010 BKN018 的 ceiling 是？",
    options:["500 ft","1000 ft","1800 ft","没有 ceiling"],
    answer:2,
    explain:"Ceiling 看最低的 BKN / OVC / VV；FEW 和 SCT 不构成 ceiling。"
  },
  {
    id:"wind-1", topic:"METAR",
    q:"31014G23KT 的 gust factor 是多少？",
    options:["9 kt","14 kt","23 kt","37 kt"],
    answer:0,
    explain:"gust factor = gust speed − sustained speed = 23 − 14 = 9 kt。"
  },
  {
    id:"time-1", topic:"METAR",
    q:"181130Z 的正确含义是？",
    options:["18:11:30 UTC","18 日 11:30 UTC，无秒","18 日 11:30 当地时间","11 月 30 日 18:00"],
    answer:1,
    explain:"METAR 时间格式是 DDHHMMZ；Z = UTC / Zulu。"
  },
  {
    id:"alt-1", topic:"METAR",
    q:"A2988 表示的 altimeter setting 是？",
    options:["29.88 inHg","2988 hPa","29.88 ft Hg","2.988 inHg"],
    answer:0,
    explain:"美国 METAR 的 Axxxx 以 inches of mercury 报告，这里是 29.88 inHg。"
  },
  {
    id:"metar-3", topic:"METAR",
    q:"00000KT 表示什么？",
    options:["风向不定","calm wind","5 kt wind","风速未知"],
    answer:1,
    explain:"00000KT = calm。"
  },
  {
    id:"metar-4", topic:"METAR",
    q:"VRB05KT 表示什么？",
    options:["风向不定，5 kt","风从 005° 来","阵风 5 kt","能见度 5 SM"],
    answer:0,
    explain:"VRB = variable wind direction。"
  },
  {
    id:"judgment-1", topic:"Judgment",
    q:"T=13°C / Td=12°C，同时 BR、4SM，首要判断更接近哪项？",
    options:["空气很干","接近饱和，visibility 可能继续恶化","一定会有雷暴","一定不能飞"],
    answer:1,
    explain:"spread 仅 1°C 且已有 mist，表示空气接近饱和；但是否能飞仍需结合完整天气与规则判断。"
  }
];