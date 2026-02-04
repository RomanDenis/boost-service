import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const metadata: Metadata = {
  title: 'Contact Us | Support & Inquiries',
  description: 'Get in touch with our support team for any questions or inquiries about our services.',
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-12">
          Have a question or need assistance? Fill out the form below or reach out to us via our 24/7 live chat.
        </p>
      </div>
      <form className="max-w-2xl mx-auto space-y-6 bg-gray-900 p-8 rounded-lg">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <Input id="subject" name="subject" type="text" placeholder="Order Inquiry" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full p-2 border rounded-md bg-gray-800 text-white focus:ring-purple-500 focus:border-purple-500 border-gray-700"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        <div className="text-center pt-4">
          <Button type="submit" size="lg" className="w-full">Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
