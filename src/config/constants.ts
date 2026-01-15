export const DEFAULT_PARAMETERS = {
  pricePerKg: 100,
  pricePerHour: 2,
  flatWorkFee: 3,
  electricityConsumption: 150,
  electricityPrice: 1.5,
  markup: 20,
};

export const DEFAULT_ENABLED = {
  pricePerKg: true,
  pricePerHour: true,
  flatWorkFee: true,
  electricityConsumption: true,
  electricityPrice: true,
  markup: true,
};

export type Language = "en" | "ro";

export const UI_TEXT_EN = {
  COMMON: {
    SAVE_BUTTON: "Save",
    CANCEL_BUTTON: "Cancel",
    RESET_BUTTON: "Default",
  },
  WORK_DETAILS: {
    TITLE: "File details",
    PROJECT_NAME: "Project name",
    PROJECT_NAME_PLACEHOLDER: "3dbenchy.gcode",
    FILAMENT_WEIGHT: "Filament weight",
    PRINT_TIME: "Print time",
    OPEN_GCODE: "Open G-code",
  },
  PARAMETERS: {
    TITLE: "Parameters",
    EDIT_BUTTON: "Edit",
    PER_KG: "Price per kg",
    PER_HOUR: "Price per hour",
    WORK_FEE: "Maintenance fee",
    ELECTRICITY_CONSUMPTION: "Power consumption",
    ELECTRICITY_PRICE: "Power price",
    MARKUP: "Markup",
    DISCOUNT: "Discount",
  },
  COST_DETAILS: {
    TITLE: "Price details",
    MATERIAL_COST: "♻️ Material cost:",
    TIME_COST: "⏳ Time cost:",
    ELECTRICITY_COST: "⚡ Power cost:",
    WORK_FEE: "🛠️ Maintenance fee:",
    SUBTOTAL: "🪙 Subtotal:",
    MARKUP_LABEL: (value: number) => `📈 Markup (${value}%):`,
    DISCOUNT_LABEL: (value: number) => `📉 Discount (${value}%):`,
    TOTAL: "💲 Total:",
  },
  VALIDATION: {
    POSITIVE_NUMBER: "Enter a positive number",
    MINUTES_RANGE: "Between 0 and 59 minutes",
  },
  PARAMETER_LABELS: {
    PRICE_PER_KG: "Price per kg",
    PRICE_PER_HOUR: "Price per hour",
    FLAT_WORK_FEE: "Maintenance fee",
    ELECTRICITY_CONSUMPTION: "Power consumption",
    ELECTRICITY_PRICE: "Power cost",
    MARKUP: "Markup",
    DISCOUNT: "Discount",
  },
  COST_BREAKDOWN: {
    MATERIAL_COST: "♻️ Material cost:",
    TIME_COST: "⏳ Time cost:",
    ELECTRICITY_COST: "⚡ Power cost:",
    WORK_FEE: "🛠️ Maintenance fee:",
  },
  UNITS: {
    GRAMS: "g",
    HOURS: "hrs",
    MINUTES: "min",
    PER_KG: "RON/kg",
    PER_HOUR: "RON/h",
    WORK_FEE: "RON",
    ELECTRICITY: "W",
    ELECTRICITY_PRICE: "RON/kWh",
    PERCENT: "%",
  },
};

export const UI_TEXT_RO = {
  COMMON: {
    PRINT_BUTTON: "Printează",
    SAVE_BUTTON: "Salvează",
    CANCEL_BUTTON: "Anulează",
    RESET_BUTTON: "Implicit",
  },
  WORK_DETAILS: {
    TITLE: "Detalii fișier",
    PRINT_TITLE: "Calcul cost imprimare 3D",
    PROJECT_NAME: "Nume proiect",
    PROJECT_NAME_PLACEHOLDER: "3dbenchy.gcode",
    FILAMENT_WEIGHT: "Greutate filament",
    PRINT_TIME: "Timp de printare",
    OPEN_GCODE: "Deschide G-code",
  },
  PARAMETERS: {
    TITLE: "Parametri",
    EDIT_BUTTON: "Editează",
    PER_KG: "Preț pe kg",
    PER_HOUR: "Preț pe oră",
    WORK_FEE: "Taxă întreținere",
    ELECTRICITY_CONSUMPTION: "Consum energie",
    ELECTRICITY_PRICE: "Preț energie",
    MARKUP: "Adaos",
    DISCOUNT: "Reducere",
  },
  COST_DETAILS: {
    TITLE: "Detalii cost",
    TOTAL_COST: "Cost final",
    MATERIAL_COST: "♻️ Cost material:",
    TIME_COST: "⏳ Cost timp:",
    ELECTRICITY_COST: "⚡ Cost energie:",
    WORK_FEE: "🛠️ Taxă întreținere:",
    SUBTOTAL: "🪙 Subtotal:",
    MARKUP_LABEL: (value: number) => `📈 Adaos (${value}%):`,
    DISCOUNT_LABEL: (value: number) => `📉 Reducere (${value}%):`,
    TOTAL: "💲 Total:",
    SHOW_DETAILS: "Vezi detalii complete",
  },
  VALIDATION: {
    POSITIVE_NUMBER: "Introduceți un număr pozitiv",
    MINUTES_RANGE: "Între 0 și 59 minute",
  },
  PARAMETER_LABELS: {
    PRICE_PER_KG: "Preț pe kg",
    PRICE_PER_HOUR: "Preț pe oră",
    FLAT_WORK_FEE: "Taxă întreținere",
    ELECTRICITY_CONSUMPTION: "Consum energie",
    ELECTRICITY_PRICE: "Cost energie",
    MARKUP: "Adaos",
    DISCOUNT: "Reducere",
  },
  COST_BREAKDOWN: {
    MATERIAL_COST: "♻️ Cost material:",
    TIME_COST: "⏳ Cost timp:",
    ELECTRICITY_COST: "⚡ Cost energie:",
    WORK_FEE: "🛠️ Taxă întreținere:",
  },
  UNITS: {
    GRAMS: "g",
    HOURS: "ore",
    MINUTES: "min",
    PER_KG: "RON/kg",
    PER_HOUR: "RON/oră",
    WORK_FEE: "RON",
    ELECTRICITY: "W",
    ELECTRICITY_PRICE: "RON/kWh",
    PERCENT: "%",
  },
};

export const UI_TEXTS = {
  en: UI_TEXT_EN,
  ro: UI_TEXT_RO,
};
