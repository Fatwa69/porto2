const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option>Category</option>
          <option value="Bodycare">Bodycare</option>
          <option value="Serum">Serum</option>
          <option value="Cosmetic">Cosmetic</option>
          <option value="Powder">Powder</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="harga minimal"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="harga maksimal"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
        >
          <option>Sort By</option>
          <option value="Bodycare">A ke Z</option>
          <option value="Serum">Z ke A</option>
          <option value="Cosmetic">Harga Tertinggi</option>
          <option value="Powder">Harga Terendah</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
