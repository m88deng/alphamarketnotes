import { useState, type FormEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function ContactPage() {
  // Keeping your state logic intact
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    title: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Your submit logic here
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent!');
    }, 1000);
  };

  const inputClasses = "w-full bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:bg-white focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)] outline-none transition-all duration-200";

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 border-b border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl leading-relaxed text-[var(--color-text-secondary)]">
            Have questions about our research or interested in learning more? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[var(--color-charcoal)] font-medium">
                Email Address <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
                className={inputClasses}
              />
            </div>

            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[var(--color-charcoal)] font-medium">
                  First Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="John"
                  required
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[var(--color-charcoal)] font-medium">
                  Last Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Doe"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-[var(--color-charcoal)] font-medium">
                Title / Organization
              </Label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Portfolio Manager, Example Capital"
                className={inputClasses}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-[var(--color-charcoal)] font-medium">
                Message <span className="text-red-600">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please share your inquiry or let us know how we can help..."
                required
                rows={6}
                className={`${inputClasses} resize-none min-h-[160px]`}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--color-navy)] hover:bg-[var(--color-charcoal)] text-white px-8 py-4 rounded-md transition-colors w-full md:w-auto font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}