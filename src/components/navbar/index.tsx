import ThemeToggleButton from "./buttonTheme";
import LanguageSwitcher from "./buttonTranslate";

export function Navbar() {
  return (
    <nav className="flex justify-end w-full h-20 items-center px-12 gap-4">
      <LanguageSwitcher />
      <ThemeToggleButton />
    </nav>
  );
}
