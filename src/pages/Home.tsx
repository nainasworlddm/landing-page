//import React from 'react';
const heroimg = '/assets/hero.png';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, PenTool, Code, Megaphone, Clock,Users, PhoneCall } from 'lucide-react';

const Home = () => {

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: 'Comprehensive analysis of your current digital presence, identifying strengths, weaknesses, and opportunities to improve visibility and engagement.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a custom roadmap tailored to your business goals, target audience, and market dynamics.'
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'Execute campaigns across channels with continuous optimization for performance, conversions, and ROI.'
    },
    {
      step: '04',
      title: 'Scale',
      description: 'Amplify successful strategies, expand your reach, and maximize growth and revenue.'
    }
  ];

  const blogPosts = [
    {
      title: 'SEO in Kochi: How Local Brands Rank #1',
      excerpt: 'Complete guide to local SEO strategies that work in Kerala markets.',
      readTime: '5 min read',
      category: 'SEO',
      href: '/blog/seo-in-kochi-local-brands-rank-1'
    },
    {
      title: 'Meta Ads in Kerala: Costs, ROAS Benchmarks, and Creative Tips',
      excerpt: 'Everything you need to know about Facebook and Instagram advertising in Kerala.',
      readTime: '7 min read',
      category: 'Meta Ads',
      href: '/blog/meta-ads-kerala-costs-roas-benchmarks'
    },
    {
      title: 'Movie Promotion in Kerala: Digital Strategies That Fill Theatres',
      excerpt: 'How Malayalam films use digital marketing to drive box office success.',
      readTime: '6 min read',
      category: 'Movie Promotion',
      href: '/blog/movie-promotion-kerala-digital-strategies'
    }
  ];

  return (
    <>
    {/* Hero Section */}
<section className="section-padding bg-gray-900 overflow-hidden">
  <div className="max-w-7xl mx-auto container-padding">
    <div className="text-center max-w-4xl mx-auto animate-fade-in">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Syne] font-bold text-white mb-6 text-balance">
        Beyond the Hype. Just Results.
      </h1>
          
      {/* Subheadline */}
      <p className="mx-6 text-lg md:text-xl text-gray-300 mb-8 font-thin">
        From Google Ads and Meta Ads to SEO and social media marketing-our digital marketing strategies put your business in front of the right audience at the right time.
      </p>
      

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link
          to="/contact"
          className="text-lg px-8 py-4 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
        >
          Get Proposal
        </Link>

        <Link
          to="/services"
          className="text-lg px-8 py-4 rounded-md font-semibold border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200"
        >
          View Services
        </Link>
      </div>
    </div>
  </div>

  {/* Image */}
  <div className="relative mt-8 px-6 md:px-12">
    <img
      src={heroimg}
      alt="Digital marketing team working"
      className="w-full h-auto rounded-2xl shadow-xl shadow-black/40"
      loading="lazy"
    />
  </div>
</section>

    {/* Services Section */}
<section className="section-padding bg-gray-900">
  <div className="max-w-7xl mx-auto container-padding">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-[Syne] font-bold text-white mb-4">
        Our Services
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Full-stack digital marketing and SEO solutions powered by Google Ads, Meta Ads, and social media strategies — built to drive traffic, leads, and growth.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {[
        {
          id: 'seo',
          icon: Search,
          title: 'SEO Services',
          description:
            'Grow your brand with on-page, local, and technical SEO that helps your business rank higher, reach more customers, and generate quality leads.',
          href: '/services#seo',
        },
        {
          id: 'content',
          icon: PenTool,
          title: 'Content Writing',
          description:
            'High-impact content writing and SEO blogs that connect with your audience, build trust, and strengthen your brand voice.',
          href: '/services#content',
        },
        {
          id: 'web',
          icon: Code,
          title: 'Website Development',
          description:
            'Fast, modern, and SEO-friendly websites designed to convert visitors into loyal customers and strengthen your online presence.',
          href: '/services#web',
        },
        {
          id: 'ads',
          icon: Megaphone,
          title: 'Meta & Google Ads',
          description:
            'Strategic Google Ads and Meta Ads campaigns designed to attract the right customers, generate quality leads, and maximize ROI.',
          href: '/services#ads',
        },
        {
          id: 'targeted',
          icon: Users,
          title: 'Advertisement on Targeted Audience',
          description:
            'Advertise to the right audience using smart, data-driven campaigns that attract qualified leads and boost conversions.',
          href: '/services#targeted',
        },
        {
          id: 'telecall',
          icon: PhoneCall,
          title: 'Telecall & Lead Closing',
          description:
            'End-to-end telecalling and lead management services that ensure every lead is followed up, nurtured, and converted into a sale.',
          href: '/services#telecall',
        },
      ].map((Services) => {
        const Icon = Services.icon;
        return (
          <div
            key={Services.id}
            className="p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-[Syne] font-semibold text-white text-lg">
                {Services.title}
              </h3>
            </div>
            <p className="text-gray-300 mb-4">{Services.description}</p>
            <Link
              to={Services.href}
              className="inline-flex items-center space-x-2 font-semibold text-primary-500 border-b border-primary-500/30 hover:border-primary-500 transition-all duration-200"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        );
      })}
    </div>

    <div className="text-center">
      <Link
        to="/services"
        className="px-8 py-4 text-lg font-semibold rounded-md border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200 inline-flex items-center space-x-2"
      >
        <span>Explore all services</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section>

    {/* Outcomes Section */}
<section className="section-padding bg-gray-900">
  <div className="max-w-7xl mx-auto container-padding">
    {/* Panel */}
    <div className="bg-gray-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
      <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
        Proven Results
      </h2>
      <p className="text-gray-300 text-lg max-w-xl mx-auto mb-12">
        Real outcomes for Kerala businesses
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl font-[Syne] font-bold text-primary-500 mb-2">
            150+
          </div>
          <div className="text-gray-300">Leads generated in 30 days</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-[Syne] font-bold text-primary-500 mb-2">
            65%
          </div>
          <div className="text-gray-300">Lower cost per acquisition</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-[Syne] font-bold text-primary-500 mb-2">
            4×
          </div>
          <div className="text-gray-300">Organic traffic growth</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Process Section */}
<section className="section-padding bg-gray-900">
  <div className="max-w-7xl mx-auto container-padding">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-[Syne] font-bold text-white mb-4">
        How We Work
      </h2>
      <p className="text-gray-300 text-lg max-w-xl mx-auto">
        Our proven 4-step digital marketing process ensures measurable growth and consistent results:
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processSteps.map((step, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-[Syne] font-bold text-xl">
              {step.step}
            </span>
          </div>
          <h3 className="font-[Syne] font-semibold text-white text-lg mb-2">
            {step.title}
          </h3>
          <p className="text-gray-300 text-sm max-w-xs mx-auto">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Blog Preview */}
<section className="section-padding bg-gray-900">
  <div className="max-w-7xl mx-auto container-padding">
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-[Syne] font-bold text-white mb-4">
          Latest Insights
        </h2>
        <p className="text-gray-300 text-lg">
          Digital marketing strategies for Kerala businesses
        </p>
      </div>
      <Link
        to="/blog"
        className="hidden md:inline-flex items-center space-x-2 px-8 py-3 font-semibold rounded-md border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200"
      >
        <span>View all posts</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {blogPosts.map((post, index) => (
        <article
          key={index}
          className="p-6 border border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group bg-gray-800"
        >
          <div className="flex items-center space-x-2 mb-3">
            <span className="bg-primary-500/10 text-primary-500 px-2 py-1 rounded text-xs font-medium">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </span>
          </div>
          <h3 className="font-[Syne] font-semibold text-white mb-3 group-hover:text-primary-500 transition-colors duration-200">
            <Link to={post.href}>{post.title}</Link>
          </h3>
          <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>

          {/* Short underline only under link text */}
          <Link
            to={post.href}
            className="inline-flex items-center space-x-2 font-semibold text-primary-500 text-sm hover:text-primary-400 transition-all duration-200 group-hover:space-x-3"
          >
            <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-current after:transition-transform after:scale-x-100 group-hover:after:scale-x-100">
              Read more
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </article>
      ))}
    </div>

    <div className="text-center md:hidden">
      <Link
        to="/blog"
        className="px-8 py-3 font-semibold rounded-md border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200 inline-flex items-center space-x-2"
      >
        <span>View all posts</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section>


      {/* Final CTA */}
<section className="section-padding bg-gray-900">
  <div className="max-w-7xl mx-auto container-padding text-center">
    
      <h2 className="text-3xl md:text-4xl font-[Syne] font-bold text-white mb-4">
        Get a free audit in 24 hours
      </h2>
      <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
        Ready to grow your Kerala business? Get a comprehensive digital marketing audit and custom growth strategy.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="text-lg px-8 py-4 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
        >
          Get Proposal
        </Link>
        <a
          href="https://wa.me/+91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg px-8 py-4 rounded-md font-semibold border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200"
        >
          WhatsApp Us
        </a>
      </div>
  </div>
</section>  
    </>
  );
};

export default Home;