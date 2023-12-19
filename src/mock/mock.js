export const months = [
  { value: 1, label: "yanvar" },
  { value: 2, label: "fevral" },
  { value: 3, label: "mart" },
  { value: 4, label: "aprel" },
  { value: 5, label: "may" },
  { value: 6, label: "iyun" },
  { value: 7, label: "iyul" },
  { value: 8, label: "avgust" },
  { value: 9, label: "sentyabr" },
  { value: 10, label: "oktyabr" },
  { value: 11, label: "noyabr" },
  { value: 12, label: "dekabr" },
];

export const repair = [
  { value: 1, label: "TT-1" },
  { value: 2, label: "TT-2" },
  { value: 3, label: "TIT" },
  { value: 4, label: "TQT" },
  { value: 5, label: "TJ-3" },
];

export const registrDepo = [
  { value: 1, label: "Ўзбекистон" },
  { value: 2, label: "Кўнгирот" },
  { value: 3, label: "Қарши" },
  { value: 4, label: "Урганч" },
  { value: 5, label: "Термиз" },
];

export const models = [
  { value: "UzTE16M", label: "UzTE16M" },
  { value: "ТЭ10М", label: "ТЭ10М" },
  { value: "ТЭ10У", label: "ТЭ10У" },
  { value: "ТЭП70БС", label: "ТЭП70БС" },
  { value: "ТЭ116", label: "ТЭ116" },
  { value: "ТЭМ2", label: "ТЭМ2" },
  { value: "ЧМЭ-3", label: "ЧМЭ-3" },
  { value: "ВЛ 60", label: "ВЛ 60" },
  { value: "ВЛ 80", label: "ВЛ 80" },
  { value: "АДМ", label: "АДМ" },
  { value: "UZY", label: "UZY" },
  { value: "O'zbekiston", label: "O'zbekiston" },
  { value: "UZEL", label: "UZEL" },
  { value: "UZELR", label: "UZELR" },
];

export const teplovozModel = [
  "UzTE16M",
  "ТЭ10М",
  "ТЭ10У",
  "ТЭП70БС",
  "ТЭ116",
  "ТЭМ2",
  "ЧМЭ-3",
];

export const elektrovozModel = [
  "ВЛ 60",
  "ВЛ 80",
  "UZY",
  "UZEL",
  "UZELR",
  "Uzbekiston",
];

export const depo = [{ value: "Uzbekiston", label: "Uzbekiston" }];

export const drezinaModel = ["АДМ", "АДМ"];

export const locomativ = [
  { value: 1, label: "Elektrovoz" },
  { value: 2, label: "Teplovoz" },
  { value: 3, label: "Drezina" },
];

export const check = (loc) => {
  if (elektrovozModel.includes(loc)) return 1;
  if (teplovozModel.includes(loc)) return 2;
  if (drezinaModel.includes(loc)) return 3;
};

export const getQuarter = (month) => {
  if (month <= 3) return 1;
  else if (month > 3 && month <= 6) return 2;
  else if (month > 6 && month <= 9) return 3;
  else if (month > 9 && month <= 12) return 4;
};

export const getMonth = (month) => {
  const res = months.find((e) => e.value == month);
  return res?.label;
};
