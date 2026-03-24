"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ThemeLogic() {
  const searchParams = useSearchParams();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 1. Пріоритет №1: Параметр у посиланні (?theme=dark)
    const urlTheme = searchParams.get("theme");
    // 2. Пріоритет №2: Збережена тема в браузері
    const savedTheme = localStorage.getItem("theme");

    // Визначаємо фінальну тему
    const finalTheme = urlTheme || savedTheme || "light";

    setTheme(finalTheme);
    document.documentElement.setAttribute("data-theme", finalTheme);

    // Якщо прийшла через URL — зберігаємо її як основну
    if (urlTheme) {
      localStorage.setItem("theme", urlTheme);
    }
  }, [searchParams]);

  return null; // Цей компонент тільки керує логікою
}

// В Next.js використання useSearchParams вимагає Suspense
export default function ThemeManager() {
  return (
    <Suspense fallback={null}>
      <ThemeLogic />
    </Suspense>
  );
}
