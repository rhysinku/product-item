import { FiShoppingCart } from "react-icons/fi";

function ProductCard() {
  return (
    <div className="md:col-6 xl:col-4">
      <div className=" p-3 rounded-md flex flex-col gap-4">
        <figure className="overflow-hidden rounded-md m-auto bg-white p-2 flex items-center justify-center">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </figure>
        <section className="flex-1 relative">
          <small>Waffle</small>
          <h4>Waffle with Berries</h4>
          <span>$6.50</span>
          <a
            href=""
            className="absolute bottom-full flex items-center gap-2 max-w-max bg-orange-400 text-white py-2 px-4 rounded-full left-0 right-0 m-auto"
          >
            <span>
              <FiShoppingCart />
            </span>
            <span>Add to Cart</span>
          </a>
        </section>
      </div>
    </div>
  );
}

export default ProductCard;
