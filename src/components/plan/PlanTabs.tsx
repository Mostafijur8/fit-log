"use client";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
  planCount: number;
  savedCount: number;
  sortBy: string;
  setSortBy: (value: string) => void;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
  planCount,
  savedCount,
  sortBy,
  setSortBy,
}: PlanTabsProps) => {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      {/* Tabs */}
      <div className="flex gap-2 rounded-xl border border-white/10 bg-[#15171d] p-1">
        <button
          type="button"
          onClick={() => setActiveTab("plan")}
          className={`rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${
            activeTab === "plan"
              ? "bg-[#c2f800] text-black"
              : "text-[#9ca3af] hover:text-white"
          }`}
        >
          Today's Plan ({planCount})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${
            activeTab === "saved"
              ? "bg-[#c2f800] text-black"
              : "text-[#9ca3af] hover:text-white"
          }`}
        >
          Saved ({savedCount})
        </button>
      </div>

      {/* Sort Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-lg border border-white/10 bg-[#15171d] px-3 py-2 text-xs font-medium text-white outline-none transition focus:border-[#c2f800]/50"
      >
        <option value="default">Sort by</option>
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default PlanTabs;