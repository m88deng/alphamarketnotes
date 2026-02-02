import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - loaded from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Debug: Log if environment variables are missing (only in development)
if (import.meta.env.DEV) {
  console.log('EmailJS Config Check:', {
    serviceId: EMAILJS_SERVICE_ID ? '✓ Set' : '✗ Missing',
    templateId: EMAILJS_TEMPLATE_ID ? '✓ Set' : '✗ Missing',
    publicKey: EMAILJS_PUBLIC_KEY ? '✓ Set' : '✗ Missing',
  });
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    title: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check if environment variables are configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error('Configuration Error', {
        description: 'Email service is not properly configured. Please contact the administrator.',
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Send email using EmailJS
      // These field names must match your EmailJS template variables
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        title: formData.title,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success!
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.',
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        title: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly at contact@cdeng.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-[var(--color-bg-subtle)] border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-[var(--color-navy)] mb-4">Get in Touch</h1>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
            Have questions about our research or interested in learning more? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[var(--color-charcoal)] mb-3 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Full name"
                  required
                  className="w-full bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded px-5 py-4 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:bg-white focus:border-[var(--color-navy)] focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-opacity-20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-charcoal)] mb-3 uppercase tracking-wide">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  required
                  className="w-full bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded px-5 py-4 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:bg-white focus:border-[var(--color-navy)] focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-opacity-20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 3: Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-[var(--color-charcoal)] mb-3 uppercase tracking-wide">
                Reason For Contacting
              </label>
              <input
                id="subject"
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter subject here"
                required
                className="w-full bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded px-5 py-4 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:bg-white focus:border-[var(--color-navy)] focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-opacity-20 outline-none transition-all"
              />
            </div>

            {/* Row 4: Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-charcoal)] mb-3 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message here"
                required
                rows={7}
                className="w-full bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded px-5 py-4 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:bg-white focus:border-[var(--color-navy)] focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-opacity-20 outline-none transition-all resize-none"
              />
            </div>

            {/* reCAPTCHA Notice */}
            <div className="text-sm text-[var(--color-text-muted)] pt-2">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-navy)] hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[var(--color-navy)] hover:underline">
                Terms of Service
              </a>{' '}
              apply.
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--color-navy)] text-white px-10 py-4 rounded font-semibold hover:bg-[var(--color-charcoal)] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}