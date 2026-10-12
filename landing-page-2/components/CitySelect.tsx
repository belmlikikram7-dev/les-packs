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

  // Filter cities : prioritize cities that START with typed prefix
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
        {/* Left/Right Location Icon */}
        <div
          className={`absolute ${
            isArabic ? "right-3.5" : "left-3.5"
          } flex items-center pointer-events-none text-[#74070D]`}
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
              ? "اكتبي أو ابحثي عن مدينتك..."
              : "Tapez ou cherchez votre ville..."
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
            isArabic ? "pr-10 pl-16 text-right" : "pl-10 pr-16 text-left"
          } py-3 rounded-xl bg-[#F4EEDC] border text-sm text-[#310F10] placeholder-[#46462A]/60 focus:bg-white focus:border-[#74070D] transition-all font-medium ${
            error ? "border-rose-400 bg-rose-50/30" : "border-[#F3E3B2]"
          }`}
        />

        {/* Action Icons (Clear / Dropdown toggle) */}
        <div
          className={`absolute ${
            isArabic ? "left-2.5" : "right-2.5"
          } flex items-center gap-1`}
        >
          {(query || isCustomMode) && (
            <button
              type="button"
              onClick={handleClear}
              aria-label={isArabic ? "مسح المدينة" : "Effacer la ville"}
              className="p-1 rounded-full text-[#46462A]/70 hover:text-[#74070D] hover:bg-[#F3E3B2]/50 transition-colors cursor-pointer"
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
            className="p-1 rounded-full text-[#46462A] hover:text-[#74070D] transition-transform duration-200 cursor-pointer"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Manual Input when 'Autre' is selected */}
      {isCustomMode && (
        <div className="mt-2 p-2.5 rounded-xl bg-white border border-[#74070D] shadow-sm animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-[11px] uppercase tracking-wider font-bold text-[#74070D]">
              {isArabic ? "اسم مدينتك يدوياً" : "Votre ville manuellement"} *
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
              className="text-[10px] text-[#46462A] hover:text-[#74070D] underline cursor-pointer"
            >
              {isArabic ? "الرجوع للقائمة" : "← Choisir dans la liste"}
            </button>
          </div>
          <div className="relative flex items-center">
            <Edit3
              className={`w-3.5 h-3.5 text-[#74070D] absolute ${
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
                  : "Nom de votre ville ou village..."
              }
              onChange={(e) => {
                const val = e.target.value;
                setCustomCity(val);
                onChange(val);
              }}
              className={`w-full ${
                isArabic ? "pr-8 pl-3 text-right" : "pl-8 pr-3 text-left"
              } py-2 rounded-lg bg-[#FAF7EE] border border-[#F3E3B2] text-xs text-[#310F10] focus:border-[#74070D] font-medium`}
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Compact, Polished Floating Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-[#FAF7EE] rounded-xl border border-[#F3E3B2] shadow-xl shadow-black/10 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          
          {/* Top Option : Autre */}
          <div className="p-1.5 bg-[#F4EEDC] border-b border-[#F3E3B2]">
            <button
              type="button"
              onClick={() => handleSelect(isArabic ? "أخرى" : "Autre")}
              className={`w-full ${
                isArabic ? "text-right" : "text-left"
              } px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                isCustomMode
                  ? "bg-[#74070D] text-[#F3E3B2]"
                  : "bg-white text-[#74070D] border border-[#F3E3B2] hover:bg-[#F3E3B2]/50"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5" />
                <span>
                  {isArabic ? "مدينة أخرى (إدخال يدوي)" : "Autre ville (saisir manuellement)"}
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#74070D]">
                {isArabic ? "كتابة" : "Écrire"}
              </span>
            </button>
          </div>

          {/* Compact Scrollable List (max 44 / ~170px height for sleek elegance) */}
          <ul
            ref={listRef}
            className="max-h-44 overflow-y-auto divide-y divide-[#F3E3B2]/40 p-1 text-xs"
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
                      } px-3 py-1.5 rounded-md text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#F3E3B2] text-[#310F10] font-bold"
                          : isSelected
                          ? "bg-[#F3E3B2]/70 text-[#74070D] font-bold"
                          : "text-[#310F10] hover:bg-[#F3E3B2]/40"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin
                          className={`w-3 h-3 shrink-0 ${
                            isSelected || isActive ? "text-[#74070D]" : "text-[#46462A]/60"
                          }`}
                        />
                        <span>
                          {startsWith ? (
                            <>
                              <strong className="text-[#74070D] font-bold">
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
                        <Check className="w-3.5 h-3.5 text-[#74070D] shrink-0" />
                      )}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="p-3 text-center">
                <p className="text-[11px] text-[#46462A]">
                  {isArabic
                    ? `لم يتم العثور على «${query}»`
                    : `Aucune ville pour «${query}»`}
                </p>
                <button
                  type="button"
                  onClick={() => handleSelect(query.trim())}
                  className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#74070D] text-[#F3E3B2] text-[10px] font-bold cursor-pointer"
                >
                  <MapPin className="w-2.5 h-2.5" />
                  <span>
                    {isArabic
                      ? `اختيار «${query.trim()}»`
                      : `Valider «${query.trim()}»`}
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
