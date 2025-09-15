import { Link } from "react-router-dom";
import { useWishlist } from "../WishlistContext";

const ProductCard = ({ product, searchTerm }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  if (!product) return null; // safety check
  const { title, price, image } = product;

  // const isInCart = cartItems.some((item) => item.id === product.id);
  // If searchTerm is provided, filter out cards that don't match
  if (
    searchTerm &&
    !product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !(
      product.description &&
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) {
    return null;
  }

  const toggleWishlist = () => {
    isInWishlist(product.id)
      ? removeFromWishlist(product.id)
      : addToWishlist(product);
  };

  return (
    <div className="relative border p-4 rounded-lg shadow hover:shadow-xl transition flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain rounded"
      />
      <h2 className="text-lg font-semibold mt-2 flex-grow">{title}</h2>
      <p className="text-gray-700 font-medium mt-1">${price}</p>

      <Link
        to={`/product/${product.id}`}
        className="text-sm text-blue-600 hover:underline"
      >
        View Details
      </Link>

      {/* Wishlist Heart */}
      <button
        onClick={toggleWishlist}
        className={`absolute top-2 right-2 text-xl cursor-pointer ${
          isInWishlist(product.id) ? "text-red-500" : "text-gray-400"
        }`}
      >
        ♥
      </button>
    </div>
  );
};

export default ProductCard;
