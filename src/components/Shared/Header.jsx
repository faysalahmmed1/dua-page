export default function Header() {
  return (
    <header className="bg-gray-50 px-4   py-3 flex items-center justify-between shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800 ml-14">Dua Page</h1>

      <div className="flex-1 mx-12 max-w-sm ml-80">
  <div className="relative">
    <input
      type="text"
      placeholder="Search by Dua Name"
      className="w-full pl-4 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 5a7.5 7.5 0 010 10.65z"
        />
      </svg>
    </button>
  </div>
</div>


      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
          <img
            src="assets/image/Vector.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
