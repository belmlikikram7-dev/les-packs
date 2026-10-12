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
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(value || "");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [customCity, setCustomCity] = useState("");

  const { isArabic } = useLanguage();

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const customInputRef = useRef<HTMLInputElement>(null);

  // Sync external value
  useEffect(() => {
    if (!isCustomMode) {
      setQuery(value || "");
    }
  }, [value, isCustomMode]);

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

  // Filter cities: show all cities if query is empty
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

    // Fallback if no city starts with the query: cities containing it
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
      setActiveIndex((prev) =>
        prev < filteredCities.length ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCities.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < filteredCities.length) {
        handleSelect(filteredCities[activeIndex]);
      } else if (activeIndex === filteredCities.length) {
        handleSelect("Autre");
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
      {/* Search Input Box */}
      <div className="relative flex items-center">
        {/* Left Icon with subtle rose tint */}
        <div
          className={`absolute ${
            isArabic ? "right-3.5" : "left-3.5"
          } flex items-center pointer-events-none text-[#A55166]`}
        >
          <MapPin className="w-4 h-4" />
        </div>

        <input
          ref={inputRef}
          type="text"
          id="ville"
          value={query}
          autoComplete="off"
          placeholder={
            isArabic
              ? "اكتبي أو اختاري مدينتك من القائمة..."
              : "Tapez ou choisissez votre ville (ou 'Autre')..."
          }
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            const val = e.target.value;
            setQuery(val);
            if (!isCustomMode) {
              onChange(val);
            }
            setIsOpen(true);
            setActiveIndex(0);
          }}
          onKeyDown={handleKeyDown}
          className={`w-full ${
            isArabic ? "pr-10 pl-20 text-right" : "pl-10 pr-20 text-left"
          } py-3.5 rounded-2xl bg-[#FAF8F6] border text-sm text-[#3A1826] placeholder-[#A4969C] focus:outline-none focus:ring-2 focus:ring-[#D38C9D]/30 focus:border-[#A55166] transition-all font-medium ${
            error ? "border-rose-400 bg-rose-50/30" : "border-[#E2B4C1]/60"
          }`}
        />

        {/* Right Action Icons (Clear / Dropdown toggle) */}
        <div
          className={`absolute ${
            isArabic ? "left-3" : "right-3"
          } flex items-center gap-1.5`}
        >
          {(query || isCustomMode) && (
            <button
              type="button"
              onClick={handleClear}
              aria-label={isArabic ? "مسح المدينة" : "Effacer la ville"}
              className="p-1 rounded-full text-[#9E8B92] hover:text-[#A55166] hover:bg-[#F7DAE7]/50 transition-colors cursor-pointer"
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
            className="p-1 rounded-full text-[#8F7E84] hover:text-[#A55166] transition-transform duration-200 cursor-pointer"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Manual text input field when 'Autre' is selected */}
      {isCustomMode && (
        <div className="mt-2.5 p-3 rounded-2xl bg-white border border-[#A55166] shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-[11px] uppercase tracking-wider font-bold text-[#A55166]">
              {isArabic ? "اكتبي اسم مدينتك يدوياً" : "Entrez votre ville manuellement"}{" "}
              <span className="text-[#A55166]">*</span> :
            </label>
            <button
              type="button"
              onClick={() => {
                setIsCustomMode(false);
                setCustomCity("");
                setQuery("");
                onChange("");
                setIsOpen(true);
              }}
              className="text-[10px] text-[#8C7D82] hover:text-[#A55166] underline transition-colors cursor-pointer"
            >
              {isArabic ? "الرجوع للقائمة" : "← Choisir dans la liste"}
            </button>
          </div>
          <div className="relative flex items-center">
            <Edit3
              className={`w-4 h-4 text-[#A55166] absolute ${
                isArabic ? "right-3" : "left-3"
              } pointer-events-none`}
            />
            <input
              ref={customInputRef}
              type="text"
              value={customCity}
              placeholder={
                isArabic
                  ? "اكتبي اسم مدينتك أو قريتك..."
                  : "Écrivez le nom de votre ville ou commune..."
              }
              onChange={(e) => {
                const val = e.target.value;
                setCustomCity(val);
                onChange(val);
              }}
              className={`w-full ${
                isArabic ? "pr-9 pl-3.5 text-right" : "pl-9 pr-3.5 text-left"
              } py-2.5 rounded-xl bg-[#FAF8F6] border border-[#E2B4C1] text-sm text-[#3A1826] placeholder-[#A4969C] focus:outline-none focus:ring-2 focus:ring-[#D38C9D]/30 focus:border-[#A55166] font-medium`}
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Floating Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white/98 backdrop-blur-md rounded-2xl border border-[#E2B4C1]/70 shadow-xl shadow-[#A55166]/12 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Quick Option "Autre" at top of dropdown */}
          <div className="p-1.5 bg-[#FAF5F7] border-b border-[#F2E5EA]">
            <button
              type="button"
              onClick={() => handleSelect(isArabic ? "أخرى" : "Autre")}
              className={`w-full ${
                isArabic ? "text-right" : "text-left"
              } px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                isCustomMode
                  ? "bg-[#A55166] text-white shadow-xs"
                  : "bg-white text-[#A55166] border border-[#E2B4C1] hover:bg-[#F7DAE7]/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Edit3 className="w-3.5 h-3.5" />
                <span>
                  {isArabic
                    ? "خيار : «أخرى» (إدخال يدوي)"
                    : "Option : «Autre» (entrer manuellement)"}
                </span>
              </div>
              <span
                className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                  isCustomMode
                    ? "bg-white/20 text-white"
                    : "bg-[#F7DAE7] text-[#A55166]"
                }`}
              >
                {isArabic ? "كتابة" : "Écrire"}
              </span>
            </button>
          </div>

          {/* Compact Filtered Cities List */}
          <ul
            ref={listRef}
            className="max-h-52 sm:max-h-56 overflow-y-auto divide-y divide-[#F7EFF2] p-1.5 scrollbar-thin scrollbar-thumb-[#E2B4C1]"
          >
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => {
                const isSelected =
                  !isCustomMode && normalizeCity(city) === normalizeCity(value);
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
                      className={`w-full ${
                        isArabic ? "text-right" : "text-left"
                      } px-3.5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#F7DAE7]/50 text-[#A55166] font-semibold"
                          : isSelected
                          ? "bg-[#F7DAE7]/35 text-[#A55166] font-medium"
                          : "text-[#3A1826] hover:bg-[#F7DAE7]/25 hover:text-[#A55166]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected || isActive
                              ? "text-[#A55166]"
                              : "text-[#B5A5AB]"
                          }`}
                        />
                        <span className="flex items-center">
                          {startsWith ? (
                            <>
                              <strong className="text-[#A55166] font-semibold">
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
                        <Check className="w-4 h-4 text-[#A55166] shrink-0" />
                      )}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="p-3 text-center">
                <p className="text-xs text-[#7A6C71] font-light">
                  {isArabic
                    ? `لم يتم العثور على مدينة مطابقة لـ «${query}»`
                    : `Aucune ville trouvée pour «${query}»`}
                </p>
                <button
                  type="button"
                  onClick={() => handleSelect(query.trim())}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7DAE7]/50 border border-[#E2B4C1] text-xs font-medium text-[#A55166] hover:bg-[#F7DAE7] transition-colors cursor-pointer"
                >
                  <MapPin className="w-3 h-3" />
                  <span>
                    {isArabic
                      ? `التوصيل إلى «${query.trim()}»`
                      : `Livrer à «${query.trim()}»`}
                  </span>
                </button>
              </li>
            )}

            {/* Option "Autre" also pinned at bottom of list */}
            <li className="pt-1">
              <button
                type="button"
                onClick={() => handleSelect(isArabic ? "أخرى" : "Autre")}
                className={`w-full ${
                  isArabic ? "text-right" : "text-left"
                } px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#A55166] hover:bg-[#F7DAE7]/40 flex items-center justify-between transition-colors cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>
                    {isArabic
                      ? "أخرى (إدخال يدوي)"
                      : "Autre (saisir manuellement)"}
                  </span>
                </div>
                <span className="text-[10px] text-[#A55166] underline">
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
