export default function Navbar({ openCart }) {
  return (
    <nav className="w-full py-5 px-8 flex justify-between items-center shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-900">SnapShot 📸</h1>

      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <a className="hover:text-black cursor-pointer">Home</a>
        <a className="hover:text-black cursor-pointer">Products</a>

        {/* Cart button */}
        <button
          onClick={openCart}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Cart
        </button>
      </div>
    </nav>
  );
}
