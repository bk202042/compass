export default function SearchBar() {
    return (
      <div className="container mx-auto px-6 py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          />
          <button
            type="submit"
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md"
          >
            검색
          </button>
        </div>
      </div>
    );
  }
