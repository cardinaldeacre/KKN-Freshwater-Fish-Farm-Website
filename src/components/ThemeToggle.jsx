import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full w-10 h-10 transition-all hover:bg-blue-100 dark:hover:bg-blue-900"
        >
            {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400 animate-in zoom-in duration-300" />
            ) : (
                <Moon className="h-5 w-5 text-blue-700 animate-in zoom-in duration-300" />
            )}
        </Button>
    );
}