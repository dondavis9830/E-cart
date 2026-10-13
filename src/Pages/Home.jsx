import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();



  return (
    <div className="bg-white ">

 {/* HERO SECTION */}
<section className="bg-white px-4 py-10 md:px-8 lg:px-12">

  <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gray-100">

    <div className="grid min-h-600px items-center md:grid-cols-2">

      {/* LEFT CONTENT */}
      <div className="px-7 py-14 sm:px-12 md:px-14 lg:px-16">


        <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-sky-900 md:text-6xl lg:text-7xl">
          Things you'll
          <span className="block text-sky-600">
            love to own.
          </span>
        </h1>

        <p className="mt-7 max-w-lg text-base leading-7  md:text-lg">
          From everyday essentials to something a little special,
          discover products chosen to make your day better, easier,
          and a little more enjoyable.
        </p>

        {/* BUTTON */}
        <div className="mt-9 flex flex-wrap items-center gap-5">

          <button
            onClick={() => navigate("/products")}
            className="group flex items-center gap-3 rounded-full bg-gray-900 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600"
          >
            Explore Collection
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              500+ Products
            </p>

            <p className="text-xs text-gray-500">
              Ready to discover
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-full min-h-500px">

        <img
          src="https://img.freepik.com/premium-photo/3d-rendered-photos-shopping-cart-vibrant-colorism-background-online-shopping-theme_1096167-10833.jpg"
          alt="Our collection"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>

      </div>

    </div>

  </div>

</section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="font-semibold text-indigo-600">
              WHY CHOOSE US
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Shopping Made Simple
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="text-center">
              <FaTruck className="mx-auto text-4xl text-indigo-600" />
              <h3 className="mt-4 text-xl font-bold">
                Fast Delivery
              </h3>
              <p className="mt-2 text-gray-500">
                Get your favorite products delivered quickly.
              </p>
            </div>

            <div className="text-center">
              <FaShieldAlt className="mx-auto text-4xl text-indigo-600" />
              <h3 className="mt-4 text-xl font-bold">
                Secure Payment
              </h3>
              <p className="mt-2 text-gray-500">
                Your payments and personal information are protected.
              </p>
            </div>

            <div className="text-center">
              <FaShoppingBag className="mx-auto text-4xl text-indigo-600" />
              <h3 className="mt-4 text-xl font-bold">
                Quality Products
              </h3>
              <p className="mt-2 text-gray-500">
                Carefully selected products at great prices.
              </p>
            </div>

            <div className="text-center">
              <FaHeadset className="mx-auto text-4xl text-indigo-600" />
              <h3 className="mt-4 text-xl font-bold">
                24/7 Support
              </h3>
              <p className="mt-2 text-gray-500">
                Our support team is always ready to help.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="bg-indigo-600 px-6 py-16 text-center text-white">

        <p className="font-semibold uppercase tracking-widest">
          Limited Time Offer
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Get Up To 40% Off
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-indigo-100">
          Don't miss our exclusive deals. Shop your favorite products before
          the offer ends.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-8 rounded-lg bg-white px-8 py-3 font-bold text-indigo-600 hover:bg-gray-100"
        >
          Shop Offers
        </button>

      </section>


      {/* NEWSLETTER */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-3 ">
            Subscribe to receive new product updates, special offers and
            exclusive discounts.
          </p>

          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
            />

            <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
              Subscribe
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}