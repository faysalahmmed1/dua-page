// components/Deshboard.jsx
const items = [
  { img: "assets/image/Home.png", tooltip: "Dua" },
  { img: "assets/image/all-duas.png", tooltip: "Home" },
  { img: "assets/image/memorize-1.png", tooltip: "Ideas" },
  { img: "assets/image/Group-4.png", tooltip: "Bookmarks" },
  { img: "assets/image/Ruqyah.png", tooltip: "Tasks" },
  { img: "assets/image/duaa.png", tooltip: "Notifications" },
  { img: "assets/image/Book.png", tooltip: "Settings" }
];

export default function Deshboard() {
  return (
    <div className="bg-white w-16 py-2 flex flex-col items-center space-y-2 shadow-lg h-[100vh]">
      
      <img src="assets/image/dua.png" alt="Main Logo" className="mb-5" />

      
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative p-3 hover:bg-gray-200 rounded-xl transition duration-200 cursor-pointer "
        >
          <img src={item.img} alt={item.tooltip} className="w-6 h-6" />

          
          <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
            {item.tooltip}
          </span>
        </div>
      ))}
      <img className="mt-8" src="assets/image/abc.png" alt=" logo" />
    </div>
  );
}
