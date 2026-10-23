"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { MapPin, ChevronDown, X, Check, Edit3 } from "lucide-react";
import { MOROCCAN_CITIES } from "@/data/cities";
import { useLanguage } from "@/context/LanguageContext";

interface CitySelectProps {
  value: string;
  onChange: (city: string) => void;
  error?: string;
}

function normalizeCity(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export default function CitySelect({ value, onChange, error }: CitySelectProps) {
  const { isArabic } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(value || "");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [customCity, setCustomCity] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const customInputRef = useRef<HTMLInputElement>(null);

  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    if (!isCustomMode) {
      setQuery(value || "");
    }
  }

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        if (value && !isCustomMode && query !== value) {
          setQuery(value);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value, query, isCustomMode]);

  // Filter cities: prioritize cities that START with typed prefix
  const filteredCities = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed || trimmed === "Autre" || trimmed === "أخرى") {
      return MOROCCAN_CITIES;
    }
    const norm = normalizeCity(trimmed);

    // 1. Cities starting with the typed letter/prefix
    const startsWithMatches = MOROCCAN_CITIES.filter((city) =>
      normalizeCity(city).startsWith(norm)
    );

    if (startsWithMatches.length > 0) {
      return startsWithMatches;
    }

    // Fallback: cities containing the query
    return MOROCCAN_CITIES.filter((city) =>
      normalizeCity(city).includes(norm)
    );
  }, [query]);

  const handleSelect = (city: string) => {
    if (city === "Autre" || city === "أخرى") {
      setIsCustomMode(true);
      setQuery(isArabic ? "أخرى" : "Autre");
      onChange(customCity);
      setIsOpen(false);
      setTimeout(() => customInputRef.current?.focus(), 100);
      return;
    }

    setIsCustomMode(false);
    onChange(city);
    setQuery(city);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCustomMode(false);
    setCustomCity("");
    onChange("");
    setQuery("");
    setIsOpen(true);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredCities.length ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredCities.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < filteredCities.length) {
        handleSelect(filteredCities[activeIndex]);
      } else if (activeIndex === filteredCities.length) {
        handleSelect(isArabic ? "أخرى" : "Autre");
      } else if (query.trim()) {
        handleSelect(query.trim());
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Auto-scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const activeEl = listRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* If in custom mode, show the direct text input field */}
      {isCustomMode ? (
        <div className="p-3 rounded-2xl bg-white border border-[#5C1D2E] shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-[#5C1D2E]">
              {isArabic ? "اكتبي اسم مدينتك يدوياً :" : "Écrivez votre ville manuellement :"}
            </span>
            <button
              type="button"
              onClick={() => {
                setIsCustomMode(false);
                setCustomCity("");
                setQuery("");
                onChange("");
                setIsOpen(true);
              }}
              className="text-[11px] text-[#D45D79] hover:text-[#5C1D2E] underline transition-colors cursor-pointer font-medium"
            >
              {isArabic ? "← الاختيار من القائمة" : "← Choisir dans la liste"}
            </button>
          </div>
          <div className="relative flex items-center">
            <div className={`absolute ${isArabic ? "right-3" : "left-3"} flex items-center pointer-events-none text-[#A56877]`}>
              <Edit3 className="w-4 h-4" />
            </div>
            <input
              ref={customInputRef}
              type="text"
              value={customCity}
              placeholder={isArabic ? "أدخلي اسم مدينتك أو بلدتك..." : "Tapez le nom de votre ville ou commune..."}
              onChange={(e) => {
                const val = e.target.value;
                setCustomCity(val);
                onChange(val);
              }}
              className={`w-full ${isArabic ? "pr-9 pl-3.5" : "pl-9 pr-3.5"} py-2.5 rounded-xl bg-[#F7EEED]/60 border text-sm text-[#5C1D2E] placeholder:text-[#A56877] focus:outline-none focus:ring-2 focus:ring-[#5C1D2E] font-medium transition ${
                error ? "border-red-400 bg-red-50/30" : "border-[#F7D1D8]"
              }`}
              autoFocus
            />
          </div>
        </div>
      ) : (
        /* Regular Search / Dropdown Input */
        <div className="relative flex items-center">
          {/* Left / Right MapPin Icon */}
          <div className={`absolute ${isArabic ? "right-3.5" : "left-3.5"} flex items-center pointer-events-none text-[#A56877]`}>
            <MapPin className="w-4 h-4" />
          </div>

          <input
            ref={inputRef}
            type="text"
            id="ville"
            value={query}
            autoComplete="off"
            placeholder={isArabic ? "اكتبي أو اختاري مدينتك (أو 'أخرى')..." : "Tapez ou choisissez votre ville (ou 'Autre')..."}
            onFocus={() => setIsOpen(true)}
            onChange={(e) => {
              const val = e.target.value;
              setQuery(val);
              onChange(val);
              setIsOpen(true);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className={`w-full ${isArabic ? "pr-10 pl-20" : "pl-10 pr-20"} py-3 rounded-2xl bg-[#F7EEED]/60 border text-sm text-[#5C1D2E] placeholder:text-[#A56877] focus:outline-none focus:ring-2 focus:ring-[#5C1D2E] transition font-medium ${
              error ? "border-red-400 bg-red-50/30" : "border-[#F7D1D8]"
            }`}
          />

          {/* Action Icons (Clear / Dropdown toggle) */}
          <div className={`absolute ${isArabic ? "left-3" : "right-3"} flex items-center gap-1.5`}>
            {query && (
              <button
                type="button"
                onClick={handleClear}
                aria-label={isArabic ? "مسح المدينة" : "Effacer la ville"}
                className="p-1 rounded-full text-[#A56877] hover:text-[#5C1D2E] hover:bg-[#FAE6E7] transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setIsOpen(!isOpen);
                if (!isOpen) inputRef.current?.focus();
              }}
              aria-label={isArabic ? "إظهار القائمة" : "Afficher la liste"}
              className="p-1 rounded-full text-[#A56877] hover:text-[#5C1D2E] transition-transform duration-200 cursor-pointer"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* Floating Suggestions Dropdown */}
      {isOpen && !isCustomMode && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white/98 backdrop-blur-md rounded-2xl border border-[#F7D1D8] shadow-xl shadow-[#5C1D2E]/10 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Quick Option "Autre" at TOP of dropdown */}
          <div className="p-1.5 bg-[#FAF2F4] border-b border-[#F7D1D8]">
            <button
              type="button"
              onClick={() => handleSelect(isArabic ? "أخرى" : "Autre")}
              className={`w-full ${isArabic ? "text-right" : "text-left"} px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between bg-white text-[#5C1D2E] border border-[#F7D1D8] hover:bg-[#FAE6E7] transition-colors cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                <Edit3 className="w-3.5 h-3.5 text-[#D45D79]" />
                <span>{isArabic ? "خيار: « أخرى » (كتابة يدوية)" : "Option : « Autre » (saisir manuellement)"}</span>
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#FAE6E7] text-[#5C1D2E]">
                {isArabic ? "كتابة" : "Écrire"}
              </span>
            </button>
          </div>

          {/* Filtered Cities List */}
          <ul
            ref={listRef}
            className="max-h-52 sm:max-h-56 overflow-y-auto divide-y divide-[#FAE6E7] p-1.5"
          >
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => {
                const isSelected = normalizeCity(city) === normalizeCity(value);
                const isActive = index === activeIndex;
                const startsWith =
                  query.trim() &&
                  query !== "Autre" &&
                  query !== "أخرى" &&
                  normalizeCity(city).startsWith(normalizeCity(query.trim()));

                return (
                  <li key={city}>
                    <button
                      type="button"
                      onClick={() => handleSelect(city)}
                      className={`w-full ${isArabic ? "text-right" : "text-left"} px-3.5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#FAE6E7] text-[#5C1D2E] font-semibold"
                          : isSelected
                          ? "bg-[#FAE6E7]/60 text-[#5C1D2E] font-medium"
                          : "text-[#5C1D2E] hover:bg-[#FAE6E7]/40 hover:text-[#5C1D2E]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected || isActive ? "text-[#5C1D2E]" : "text-[#A56877]"
                          }`}
                        />
                        <span className="flex items-center">
                          {startsWith ? (
                            <>
                              <strong className="text-[#5C1D2E] font-semibold">
                                {city.slice(0, query.trim().length)}
                              </strong>
                              <span>{city.slice(query.trim().length)}</span>
                            </>
                          ) : (
                            city
                          )}
                        </span>
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 text-[#5C1D2E] shrink-0" />
                      )}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="p-3 text-center">
                <p className="text-xs text-[#7A3347]">
                  {isArabic
                    ? `لم يتم العثور على أي مدينة لـ « ${query} »`
                    : `Aucune ville trouvée pour « ${query} »`}
                </p>
                <button
                  type="button"
                  onClick={() => handleSelect(query.trim())}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAE6E7] border border-[#F7D1D8] text-xs font-medium text-[#5C1D2E] hover:bg-white transition-colors cursor-pointer"
                >
                  <MapPin className="w-3 h-3" />
                  <span>
                    {isArabic
                      ? `التوصيل إلى « ${query.trim()} »`
                      : `Livrer à « ${query.trim()} »`}
                  </span>
                </button>
              </li>
            )}

            {/* Also "Autre" at the bottom of the list */}
            <li className="pt-1">
              <button
                type="button"
                onClick={() => handleSelect(isArabic ? "أخرى" : "Autre")}
                className={`w-full ${isArabic ? "text-right" : "text-left"} px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#5C1D2E] hover:bg-[#FAE6E7] flex items-center justify-between transition-colors cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <Edit3 className="w-3.5 h-3.5 text-[#D45D79]" />
                  <span>{isArabic ? "أخرى (كتابة يدوية)" : "Autre (saisir manuellement)"}</span>
                </div>
                <span className="text-[10px] text-[#D45D79] underline">
                  {isArabic ? "اختيار" : "Choisir"}
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
