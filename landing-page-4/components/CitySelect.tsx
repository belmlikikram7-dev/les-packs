"use client";

import { useState, useRef, useEffect } from "react";
import { MAIN_CITIES, MOROCCAN_CITIES } from "@/data/cities";
import { ChevronDown, Search, Check, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CitySelectProps {
  value: string;
  onChange: (city: string) => void;
  error?: string;
}

export default function CitySelect({ value, onChange, error }: CitySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isArabic, dir } = useLanguage();

  const otherCityLabel = isArabic ? "مدينة أخرى (كتابة يدوية)" : "Autre ville (écrire manuellement)";
  const selectPlaceholder = isArabic ? "اختاري المدينة ديالك" : "Sélectionnez votre ville";
  const searchPlaceholder = isArabic ? "بحث عن مدينة..." : "Rechercher une ville...";
  const popularCitiesLabel = isArabic ? "المدن الأكثر طلباً" : "Villes populaires";
  const allCitiesLabel = isArabic ? "باقي المدن" : "Toutes les villes";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredMain = MAIN_CITIES.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAll = MOROCCAN_CITIES.filter(
    (c) =>
      !MAIN_CITIES.includes(c) &&
      c.toLowerCase().includes(search.toLowerCase())
  );

  const isCustomCity = value && !MAIN_CITIES.includes(value) && !MOROCCAN_CITIES.includes(value);

  const displayValue = isCustomCity ? otherCityLabel : value || selectPlaceholder;

  return (
    <div className="relative" ref={dropdownRef} dir={dir}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all bg-white text-left cursor-pointer ${
          error
            ? "border-red-400 focus:ring-2 focus:ring-red-200"
            : isOpen
            ? "border-[#0284C7] ring-2 ring-[#BAE0F8]"
            : "border-[#BAE0F8] hover:border-[#0284C7]"
        }`}
      >
        <span className="flex items-center gap-2.5 truncate">
          <MapPin className="w-4 h-4 text-[#0284C7] shrink-0" />
          <span className={`truncate ${!value ? "text-slate-400" : "text-[#0F3554] font-medium"}`}>
            {displayValue}
          </span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#5A7B9A] transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#BAE0F8] overflow-hidden max-h-80 flex flex-col">
          <div className="p-2.5 border-b border-[#E0F2FE] bg-[#F0F7FD]/60">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7B9A]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-white border border-[#BAE0F8] text-[#0F3554] placeholder-slate-400 focus:outline-none focus:border-[#0284C7]"
                autoFocus
              />
            </div>
          </div>

          <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-1">
            {/* "Autre ville" option */}
            <button
              type="button"
              onClick={() => {
                onChange("Autre");
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                value === "Autre" || isCustomCity
                  ? "bg-[#E0F2FE] text-[#0284C7]"
                  : "text-[#0F3554] hover:bg-[#F0F7FD]"
              }`}
            >
              <span>{otherCityLabel}</span>
              {(value === "Autre" || isCustomCity) && <Check className="w-4 h-4 text-[#0284C7]" />}
            </button>

            {/* Popular cities */}
            {filteredMain.length > 0 && (
              <div className="py-1">
                <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5A7B9A]">
                  {popularCitiesLabel}
                </div>
                {filteredMain.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      onChange(city);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                      value === city
                        ? "bg-[#E0F2FE] text-[#0284C7] font-semibold"
                        : "text-[#0F3554] hover:bg-[#F0F7FD]"
                    }`}
                  >
                    <span>{city}</span>
                    {value === city && <Check className="w-4 h-4 text-[#0284C7]" />}
                  </button>
                ))}
              </div>
            )}

            {/* All other cities */}
            {filteredAll.length > 0 && (
              <div className="py-1">
                <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5A7B9A]">
                  {allCitiesLabel}
                </div>
                {filteredAll.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      onChange(city);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                      value === city
                        ? "bg-[#E0F2FE] text-[#0284C7] font-semibold"
                        : "text-[#0F3554] hover:bg-[#F0F7FD]"
                    }`}
                  >
                    <span>{city}</span>
                    {value === city && <Check className="w-4 h-4 text-[#0284C7]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
