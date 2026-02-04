export const FAQ = () => {
    return (
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="p-6 rounded-lg bg-gray-800 cursor-pointer group">
              <summary className="font-semibold text-lg list-none flex justify-between items-center">
                Is this service secure?
                <span className="transform transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-gray-400">
                We prioritize your account's security. Our team uses premium VPNs and follows strict protocols to ensure a secure process during the service.
              </p>
            </details>
            <details className="p-6 rounded-lg bg-gray-800 cursor-pointer group">
              <summary className="font-semibold text-lg list-none flex justify-between items-center">
                Can I spectate the process?
                <span className="transform transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-gray-400">
                Yes, you can request a private stream to watch your order being completed live. This option is available as a service add-on.
              </p>
            </details>
            <details className="p-6 rounded-lg bg-gray-800 cursor-pointer group">
              <summary className="font-semibold text-lg list-none flex justify-between items-center">
                How long will my order take?
                <span className="transform transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-gray-400">
                Completion time depends on the order details. After you configure your service, an estimated delivery time will be displayed in the price summary. Express options are available.
              </p>
            </details>
          </div>
        </div>
      </section>
    );
  };
