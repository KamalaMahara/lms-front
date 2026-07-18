import { ShieldCheck, CreditCard } from "lucide-react";

export default function PaymentMethods() {
  const payments = [
    {
      name: "eSewa",
      logo: "/payments/esewa.png",
    },
    {
      name: "Khalti",
      logo: "/payments/khalti.png",
    },
    {
      name: "Fonepay",
      logo: "/payments/fonepay.png",
    },
    {
      name: "Stripe",
      logo: "/payments/stripe.png",
    },
    {
      name: "PayPal",
      logo: "/payments/paypal.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#BC002D]">

            <ShieldCheck size={18} />

            Safe & Secure Payments

          </div>

          <h2 className="mt-5 text-4xl font-black text-gray-900">
            We Accept Multiple Payment Methods
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Enroll in your Japanese language course with your preferred
            payment option. Every transaction is encrypted and secure.
          </p>

        </div>

        {/* Payment Cards */}

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {payments.map((payment) => (
            <div
              key={payment.name}
              className="group flex h-36 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BC002D]/30 hover:shadow-xl"
            >

              <img
                src={payment.logo}
                alt={payment.name}
                className="h-12 object-contain transition duration-300 group-hover:scale-110"
              />

              <p className="mt-4 font-semibold text-gray-700">
                {payment.name}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Trust Box */}

        <div className="mt-14 rounded-3xl bg-white p-8 shadow-md">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-red-50 p-4">

                <CreditCard
                  size={28}
                  className="text-[#BC002D]"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold text-gray-900">
                  Secure Payment Guarantee
                </h3>

                <p className="mt-1 text-gray-600">
                  All payments are processed securely using trusted
                  payment gateways. Your personal and financial
                  information remains protected.
                </p>

              </div>

            </div>

            <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              🔒 100% Secure Transactions
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}