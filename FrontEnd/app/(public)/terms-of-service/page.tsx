import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Please read our terms of service carefully before using our website and services.',
};

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto prose prose-invert">
        <h1>Terms of Service</h1>
        
        <h2>1. Overview</h2>
        <p>
          This website is operated by our company. Throughout the site, the terms “we”, “us” and “our” refer to our company. We offer this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
        </p>

        <h2>2. General Conditions</h2>
        <p>
          We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.
        </p>

        <h2>3. Modifications to the Service and Prices</h2>
        <p>
          Prices for our services are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
        </p>
        
        <h2>4. User Account</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.
        </p>

        <h2>5. Refund Policy</h2>
        <p>
          All sales are final. Refunds are only issued in specific circumstances at our sole discretion. If an order has not been started, you may be eligible for a full refund.
        </p>

        <h2>6. Prohibited Uses</h2>
        <p>
          You are prohibited from using the site or its content for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances.
        </p>
      </article>
    </div>
  );
};

export default TermsOfServicePage;
