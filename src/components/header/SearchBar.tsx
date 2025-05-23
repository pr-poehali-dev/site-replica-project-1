const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Поиск..."
        className="custom-input pr-10 w-40 md:w-60 text-sm"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
        <i className="ri-search-line"></i>
      </div>
    </div>
  );
};

export default SearchBar;
