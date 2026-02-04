import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto prose prose-invert">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website (the “Site”).
        </p>

        <h2>Personal Information We Collect</h2>
        <p>
          When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, email address, and payment information. We refer to this information as “Order Information.”
        </p>

        <h2>How Do We Use Your Personal Information?</h2>
        <p>
          We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, providing you with invoices and/or order confirmations).
        </p>

        <h2>Sharing Your Personal Information</h2>
        <p>
          We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use a payment processor to handle transactions and an analytics provider to understand user behavior.
        </p>
        
        <h2>Your Rights</h2>
        <p>
          If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
