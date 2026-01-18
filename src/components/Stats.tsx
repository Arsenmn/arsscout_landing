"use client";
import React from "react";
import GetButton from "./UI/GetButton";

const StatsSection = () => {
  return (
    <div className="w-full h-[300px] md:h-[350px] bg-gradient-to-br from-white via-slate-100 to-white dark:from-slate-900 dark:via-slate-950 dark:to-black p-4 md:p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl transition-colors" id="#demo">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10 dark:from-teal-400/20 dark:to-teal-500/20" />

      {/* Left Section: Main Title */}
      <div className="relative z-10 text-left md:w-1/3 transition-colors">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 dark:from-teal-400 dark:via-teal-500 dark:to-teal-400 bg-clip-text text-transparent leading-tight">
          DEMPING BOT
        </h1>
        <p className="text-slate-900 dark:text-slate-300 text-sm md:text-base mt-4 font-medium leading-relaxed">
          Автоматизация продаж
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-2 leading-tight">
          Станьте лидером
          <br />
          на маркетплейсе
        </p>
        <ul className="text-green-600 dark:text-teal-400 text-sm md:text-base mt-6 space-y-1 font-semibold list-none">
          <li>• Проверка конкурентов каждые 3 минуты</li>
          <li>• Авто-снижение цены на 1 ₸</li>
        </ul>
      </div>

      {/* Middle Section */}
      <div className="relative z-10 hidden md:flex flex-col items-center w-1/3 h-full justify-center space-y-4 transition-colors">
        {/* Dots logo/graphic */}
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full opacity-80 shadow-lg shadow-red-500/50 dark:shadow-red-400/50 animate-pulse" />
          <div className="w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full opacity-80 shadow-lg shadow-purple-500/50 dark:shadow-purple-400/50 animate-pulse" style={{animationDelay: '0.1s'}} />
          <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full opacity-80 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 animate-pulse" style={{animationDelay: '0.2s'}} />
        </div>

        <GetButton />

        <p className="text-slate-900/80 dark:text-slate-200/80 text-center text-sm font-medium">
          Подключение за 10 минут
        </p>
      </div>

      {/* Right Section */}
      <div className="relative z-10 text-right md:w-1/3 md:text-left transition-colors">
        <p className="text-slate-900/90 dark:text-slate-300/90 text-sm md:text-base font-medium mb-4">
          Бот работает без участия человека
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
          Продажи +150%
          <br />
          Удержание топ-позиций
        </h2>

      </div>

      {/* Bottom overlay text */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-4 text-xs md:text-sm text-green-600/80 dark:text-teal-400/80 font-semibold whitespace-nowrap">
        Проверка конкурентов 24/7 • Авто-снижение цены • Рост продаж до 150%
      </div>
    </div>
  );
};

export default StatsSection;
