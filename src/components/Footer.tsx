import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

// import the white logo SVG
import NTLogoWhite from '/assets/NT Logo Black.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    { path: '/services#seo', label: 'SEO Services' },
    { path: '/services#content', label: 'Content Writing' },
    { path: '/services#web', label: 'Website Development' },
    { path: '/services#ads', label: 'Meta & Google Ads' },
  ];

  const socialLinks = [
    {
      href: 'https://facebook.com/nainasdigitalworld',
      icon: Facebook,
      label: 'Facebook',
    },
    {
      href: 'https://instagram.com/nainasdigitalworld',
      icon: Instagram,
      label: 'Instagram',
    },
    {
      href: 'https://linkedin.com/company/nainasdigitalworld',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://youtube.com/@nainasdigitalworld',
      icon: Youtube,
      label: 'YouTube',
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src={NTLogoWhite}
                alt="Nainas Digital World Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="sr-only">Nainas Digital World</span>
            </Link>

            <p className="text-gray-400 mb-6 max-w-md">
              Digital marketing agency in Kerala — specialists in SEO, Google & Meta Ads, website development, and content creation that help grow your brand and online presence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className='hidden'>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span>[ADDRESS_LINE], Kochi, Kerala [PIN]</span>
              </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a
                  href="tel:+918891498676"
                  className="hover:text-white transition-colors duration-200"
                >
                  +91 8891498676
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a
                  href="mailto:nainasworlddm@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  nainasworlddm@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[Syne] font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <div className='hidden'>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              </div>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[Syne] font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <div className='hidden'>
            <div className="flex items-center space-x-4 mb-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-md hover:bg-gray-800"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            </div>
            <p className="text-xs text-gray-500">
              Business Hours: Mon–Sat, 9:30 AM–6:30 PM IST
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500 mb-1">
              Serving your growth with powerful digital marketing solutions. 
            </p>
            <p className="text-xs text-gray-500">
              © {currentYear} NT Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;