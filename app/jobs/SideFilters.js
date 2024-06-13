function SideFilters() {
  return (
    <div className="bg-white   p-4 rounded shadow-xl">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      {/* Experience Filter */}
      <div className="mb-6">
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-700"
        >
          Experience (years)
        </label>
        <input
          type="range"
          id="experience"
          name="experience"
          min="0"
          max="20"
          className="mt-1 w-full"
        />
      </div>

      {/* Salary Filter */}
      <div className="mb-6">
        <label
          htmlFor="salary"
          className="block text-sm font-medium text-gray-700"
        >
          Minimum Salary
        </label>
        <input
          type="number"
          id="salary"
          name="salary"
          min="0"
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Enter amount"
        />
      </div>

      {/* Additional filters can be added here */}
    </div>
  );
}

export default SideFilters;
