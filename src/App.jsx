import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <div className="container py-5">
        <div className="row ">
          <div className="md:col-9">
            <h1>Desserts</h1>
            <div className="row gap-y-2">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div className="md:col-3">
            <section className=" bg-white rounded-md p-5">
              <h1 className="text-orange-500">Your Cart(0)</h1>
              <div className="text-amber-900">
                <i>Your cart is empty</i>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
