import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { ShoppingCart, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import MainContainer from "../components/MainContainer";
import Layout from "../components/Layout";
// button
export default function Cart() {
  const { cartItems, removeFromCart, totalItems } = useCart();
  let totalPrice = 0;
  // Cart
  for (const item of cartItems) {
    totalPrice += item.price;
  }
  return (
    <Layout>
      <div className="py-12 md:py-20">
        <MainContainer>
          <h1 className="text-3xl md:text-4xl font-secondary font-bold  mb-8 flex items-center">
            <ShoppingCart className="inline-block w-8 h-8 mr-3 text-primary" />
            <span>Your Cart</span>
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted" />
              </div>
              <h2 className="text-2xl font-display font-semibold  mb-4">
                Your cart is empty
              </h2>
              <p className="text-muted mb-8 max-w-md mx-auto">
                Looks like you haven't added any courses yet. Explore our
                catalog and find your next learning adventure.
              </p>
              <Link to="/courses">
                <button className="bg-primary mx-auto text-white flex items-center gap-x-2 px-8 py-3 rounded-2xl transition  hover:-translate-y-1 font-bold">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-card p-4 md:p-6 rounded-2xl  flex flex-col md:flex-row gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full md:w-40 h-32 md:h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                        <div>
                          <Link to={`/courses/${item.id}`}>
                            <h3 className="font-secondary font-semibold text-lg  hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted mt-1">
                            by {item.instructor}
                          </p>
                          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-muted/10 text-muted rounded-full">
                            {item.level}
                          </span>
                        </div>
                        <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                          <span className="text-xl font-secondary font-bold text-primary">
                            ${item.price}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 flex items-center gap-x-2  hover:bg-red-600/10 transition px-3 py-1 rounded-2xl"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card p-6 rounded-2xl  sticky top-24">
                  <h2 className="text-xl font-secondary font-semibold  mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-3 pb-6 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Courses ({totalItems})</span>
                      <span className="">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Discount</span>
                      <span className="text-blue-400">-$0</span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 mb-6">
                    <span className="font-semibold ">Total</span>
                    <span className="text-2xl font-secondary font-bold text-primary">
                      ${totalPrice}
                    </span>
                  </div>

                  <button className="w-full flex items-center gap-x-2 justify-center bg-primary text-white font-bold py-3 rounded-2xl transition hover:translate-y-[-1px] hover:bg-primary/90">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-muted text-center mt-4">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          )}
        </MainContainer>
      </div>
    </Layout>
  );
}
