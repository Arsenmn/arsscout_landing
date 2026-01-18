import Bars from "./statistics/Bars";
import BarsText from "./statistics/BarsText";
import Radar from "./statistics/Radar";
import RadarText from "./statistics/RadarText";

const Statistics = () => {
  return (
    <div className="w-full w-full px-6 py-20 dark:bg-slate-950" id="#about">
      {/* Grid: left column bigger, right column smaller */}
      <div className="grid grid-cols-[3fr_1fr] grid-rows-2 w-full gap-0">
        {/* Top Left */}
        <div className="p-6">
          <RadarText />
        </div>

        {/* Top Right - align right */}
        <div className="border-l border-dashed border-teal-600 dark:border-teal-400 dark:border-teal-400 p-6">
          <Radar />
        </div>

        {/* Bottom Left */}
        <div className="border-t border-dashed border-teal-600 dark:border-teal-400 p-6">
          <Bars />
        </div>

        {/* Bottom Right - align right */}
        <div className="border-t border-l border-dashed border-teal-600 dark:border-teal-400 p-6 flex justify-end">
          <BarsText />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
