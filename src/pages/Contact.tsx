import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2, X, Copy } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    message: '',
    consent: false,
  });

  const [showThanks, setShowThanks] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const serviceOptions = [
    'SEO Services',
    'Content Writing',
    'Website Development',
    'Meta & Google Ads',
    'Social Media Management',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const t = e.target as HTMLInputElement;
      setFormData((p) => ({ ...p, [name]: t.checked }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleServiceChange = (service: string) =>
    setFormData((p) => ({
      ...p,
      services: p.services.includes(service)
        ? p.services.filter((s) => s !== service)
        : [...p.services, service],
    }));

  // Build a plaintext summary for Copy fallback
  const buildPlainSummary = () => {
    return [
      'New contact request from ntdigital.in',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone/WhatsApp: ${formData.phone}`,
      formData.company ? `Company: ${formData.company}` : null,
      `Services: ${formData.services.join(', ') || '—'}`,
      '',
      'Message:',
      formData.message || '—',
      '',
      'Consent: ' + (formData.consent ? 'Agreed' : 'Not agreed'),
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(buildPlainSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  // Submit via FormSubmit AJAX endpoint to stay on page
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || '',
        services: formData.services.join(', '),
        message: formData.message,
        consent: formData.consent ? 'Agreed' : 'Not agreed',
        // FormSubmit options
        _subject: 'NT Digital — New Contact Request',
        _template: 'table',
        _captcha: 'false',
        _replyto: formData.email,
        _honey: '', // honeypot
      };

      const res = await fetch('https://formsubmit.co/ajax/spamsg003@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({} as any));
        throw new Error(data?.message || 'Failed to submit form');
      }

      // Success — show modal, reset form
      setShowThanks(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        message: '',
        consent: false,
      });
    } catch (err: any) {
      setSubmitError(err?.message || 'Something went wrong. Please try again or email us.');
      setShowThanks(true); // still show modal so user can copy details
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="pt-20 pb-8 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-0">
            Tell us your goals. Get a free growth audit within 24 hours.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-6 border border-gray-700 rounded-2xl shadow-sm bg-gray-800">
                <h2 className="text-2xl font-[Syne] font-bold mb-6 text-white">
                  Get Your Free Growth Audit
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* name / email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Name *</label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  {/* phone / company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Phone / WhatsApp *
                      </label>
                      <input
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">
                      Services Interested In (select all)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((s) => (
                        <label key={s} className="flex items-center space-x-3 cursor-pointer text-gray-300">
                          <input
                            type="checkbox"
                            name={`services-${s}`}
                            checked={formData.services.includes(s)}
                            onChange={() => handleServiceChange(s)}
                            className="w-4 h-4 text-primary-500 border-gray-500 rounded focus:ring-primary-500 focus:ring-1"
                          />
                          <span className="text-sm">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Tell us about your goals
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="What are you looking to achieve?"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      value="Agreed"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-500 border-gray-500 rounded focus:ring-primary-500 focus:ring-1 mt-1"
                    />
                    <span className="text-sm text-gray-400">
                      I agree to receive marketing communications from NT Digital. You can unsubscribe any time.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full text-lg px-8 py-4 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting…' : 'Get Free Audit & Strategy'}
                  </button>

                  {submitError && (
                    <p className="text-sm text-red-400 mt-2">
                      {submitError}
                    </p>
                  )}
                </form>

                <p className="text-center text-gray-400 text-sm mt-4">
                  You'll receive a response within 24 hours with your custom growth audit.
                </p>
              </div>
            </div>

            {/* Contact Info (unchanged) */}
            <div className="space-y-8">
              <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800 shadow-sm">
                <h3 className="font-[Syne] font-semibold text-lg mb-6 text-white">
                  Get in Touch
                </h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="hidden">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-white">Address</p>
                        <p>
                          [ADDRESS_LINE]
                          <br />
                          Kochi, Kerala [PIN]
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <a href="tel:+918891498676" className="hover:underline">
                        +91‑8891498676
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href="mailto:nainasworlddm@gmail.com" className="hover:underline">
                        nainasworlddm@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">WhatsApp</p>
                      <a
                        href="https://wa.me/+918891498676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91‑8891498676
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Business Hours</p>
                      <p>Mon – Sat, 9:30 AM – 6:30 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800 shadow-sm">
                <h3 className="font-[Syne] font-semibold text-lg mb-4 text-white">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  For urgent queries, contact us directly below.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+918891498676"
                    className="w-full block text-center px-6 py-3 rounded-md font-semibold border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/+918891498676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank‑you modal */}
      <div
        className={`fixed inset-0 z-50 transition ${
          showThanks ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!showThanks}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setShowThanks(false)} />
        <div className="relative flex items-center justify-center min-h-full p-4">
          <div className="w-full max-w-md rounded-2xl bg-gray-800 border border-gray-700 shadow-xl p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/15 text-primary-500">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-semibold mb-2">
              Thanks — your request has been submitted!
            </h4>
            {submitError ? (
              <p className="text-gray-300 mb-4">
                It looks like email couldn’t be opened automatically. You can copy your message and
                email us at{' '}
                <a href="mailto:spamsg003@gmail.com" className="text-primary-500 underline">
                  spamsg003@gmail.com
                </a>.
              </p>
            ) : (
              <p className="text-gray-300 mb-4">
                We’ve received your details and will get back to you within 24 hours.
              </p>
            )}

            <div className="flex items-center justify-center gap-3 mb-2">
              <button
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy message'}
              </button>
              <button
                onClick={() => setShowThanks(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>

            <p className="text-xs text-gray-400">
              Tip: The first time you use FormSubmit with this email, check your inbox for their verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;