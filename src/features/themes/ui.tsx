import { useTheme } from "@/shared";
import { themes } from "@/features/themes/constants";

export const Themes = () => {
  const { setTheme } = useTheme()
  return (
    <div className="py-5 md:px-24 flex items-center justify-end gap-2 bg-[#1F2937]">
      <span className="text-white">
        Фон:
      </span>
      {themes.map((theme) => (
        <div
          key={theme.theme}
          className="w-14 h-14 text-2xl border-green-300 rounded flex items-center justify-center cursor-pointer text-primary"
          style={{ color: theme.color, background: theme.bg, ...(theme?.border ? { border: `2px solid ${theme.border}` } : {}) }}
          onClick={() => setTheme(theme.theme)}
        >
          Ц
        </div>
      ))}
    </div>
  );
};