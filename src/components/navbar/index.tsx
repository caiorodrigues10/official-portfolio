import { ClientOnly } from "../clientOnly";
import ThemeToggleButton from "./buttonTheme";
import LanguageSwitcher from "./buttonTranslate";

export function Navbar() {
  return (
    <nav className="flex justify-end w-full h-20 items-center px-12 gap-4">
      <ClientOnly
        fallback={
          <div className="flex gap-4">
            <button className="p-2 h-10 w-10 bg-zinc-300 dark:bg-zinc-800 rounded-full animate-pulse" />
            <button className="p-2 h-10 w-10 bg-zinc-300 dark:bg-zinc-800 rounded-full animate-pulse" />
          </div>
        }
      >
        <LanguageSwitcher />
        <ThemeToggleButton />
      </ClientOnly>
    </nav>
  );
}
