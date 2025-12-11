// RUS Insights Blog Data Structure

// Blog Types
export interface InsightAuthor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications?: string[];
  specialties?: string[];
  experience?: string;
}

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Full HTML content
  category: InsightCategory;
  author: InsightAuthor;
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // in minutes
  featuredImage: string;
  featuredImageAlt: string;
  featured: boolean;
  trending: boolean;
  views: number;
  tags: string[];
  relatedServices?: string[]; // Links to service pages (for smart tagging later)
  seo?: InsightSEO;
}

export interface InsightCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export interface InsightSEO {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

// Insight Categories - Aligned with RUS Services
export const insightCategories: InsightCategory[] = [
  {
    id: 'tax-insights',
    name: 'Tax Insights',
    slug: 'tax-insights',
    description: 'Expert tax planning advice, HMRC updates and strategic tax guidance',
    icon: 'Calculator',
    color: 'bg-blue-600 text-white'
  },
  {
    id: 'business-advice',
    name: 'Business Advice',
    slug: 'business-advice',
    description: 'Strategic business planning, growth strategies and financial management',
    icon: 'TrendingUp',
    color: 'bg-green-600 text-white'
  },
  {
    id: 'accounting-updates',
    name: 'Accounting Updates',
    slug: 'accounting-updates',
    description: 'Latest accounting standards, compliance requirements and best practices',
    icon: 'FileText',
    color: 'bg-purple-600 text-white'
  },
  {
    id: 'sector-specific',
    name: 'Sector Specific',
    slug: 'sector-specific',
    description: 'Industry insights for healthcare, retail, hospitality and more',
    icon: 'Building',
    color: 'bg-amber-600 text-white'
  },
  {
    id: 'legislation-updates',
    name: 'Legislation Updates',
    slug: 'legislation-updates',
    description: 'New laws, regulatory changes and what they mean for your business',
    icon: 'Scale',
    color: 'bg-red-600 text-white'
  },
  {
    id: 'firm-news',
    name: 'Firm News',
    slug: 'firm-news',
    description: 'Updates from RUS, new services, team news and client success stories',
    icon: 'Newspaper',
    color: 'bg-gray-600 text-white'
  }
];

// RUS Chartered Accountants Team (Authors)
export const insightAuthors: InsightAuthor[] = [
  {
    id: 'senior-partner',
    name: 'Senior Partner',
    role: 'Managing Partner & Tax Specialist',
    bio: 'With over 30 years of experience in taxation and business advisory, our Senior Partner leads RUS with a commitment to excellence and client-focused service.',
    image: '/team/senior-partner.jpg',
    qualifications: ['ACA', 'CTA', 'FCCA'],
    specialties: ['Tax Planning', 'Business Advisory', 'Strategic Planning'],
    experience: '30+ years in Chartered Accountancy and Tax'
  },
  {
    id: 'tax-director',
    name: 'Tax Director',
    role: 'Director of Taxation Services',
    bio: 'Specialist in complex tax matters, HMRC disputes and strategic tax planning for businesses and high-net-worth individuals.',
    image: '/team/tax-director.jpg',
    qualifications: ['ACA', 'CTA'],
    specialties: ['Corporation Tax', 'IHT Planning', 'R&D Tax Credits'],
    experience: '20+ years in Taxation'
  },
  {
    id: 'healthcare-specialist',
    name: 'Healthcare Sector Lead',
    role: 'Partner - Healthcare Specialization',
    bio: 'Dedicated to supporting healthcare professionals with specialist accounting, tax and practice management advice.',
    image: '/team/healthcare-specialist.jpg',
    qualifications: ['ACA', 'FCCA'],
    specialties: ['Medical Practice Accounting', 'NHS Pensions', 'Practice Valuations'],
    experience: '25+ years supporting healthcare professionals'
  }
];

// Sample Insight Posts
export const insightPosts: InsightPost[] = [
  {
    id: '1',
    slug: 'ir35-status-key-factors',
    title: 'The Key Factors Which Determine Your IR35 Status',
    excerpt: 'Understanding control, substitution, mutuality of obligation, and other crucial factors that establish whether your contract work is caught by IR35.',
    category: insightCategories[0], // Tax Insights
    author: insightAuthors[1], // Tax Director
    publishedAt: '2025-12-11',
    readTime: 12,
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop',
    featuredImageAlt: 'Business professional working on IR35 compliance documentation',
    featured: true,
    trending: true,
    views: 2500,
    tags: ['IR35', 'contractor tax', 'employment status', 'HMRC', 'off payroll', 'limited company'],
    relatedServices: ['/services/taxation-services', '/sectors/contractors-professional-services'],
    seo: {
      metaTitle: 'IR35 Status: Key Factors for Contractors | RUS Chartered Accountants',
      metaDescription: 'Expert guide to IR35 status determination. Understand control, substitution, and mutuality of obligation for contractors and limited companies.',
      canonicalUrl: 'https://rus.co.uk/insights/tax-insights/ir35-status-key-factors'
    },
    content: `      <h2>What is IR35?</h2>
      <p>The Intermediaries Legislation (IR35) was created in 2000 to clampdown on 'disguised employment' via the use of 'personal service companies'. A traditional 'employee' would leave their job one day, only to return to work in the same or a similar role shortly afterwards, but work via a limited company structure.</p>

      <p>The IR35 rules aim to tax 'disguised employees' who enjoy the favourable tax treatment of their own companies but still work in a similar manner to normal employees.</p>

      <h2>Off Payroll Rules</h2>
      <p>Off Payroll rules were implemented in 2017 (public sector) and 2021 (private sector). This major change places the responsibility for working out whether a person is caught by IR35 or not into the hands of the end-client. Originally, limited company contractors self-certified their IR35 status.</p>

      <h2>Contract Wording and Working Practices</h2>
      <p>Importantly, the big picture of how an assignment or contract is carried out in practice is taken into account. This means that both the terms of any contracts as well as an individual's working practices must all demonstrate that the person is in business on their own account in order to escape IR35.</p>

      <p>There is little point in having a watertight, 'IR35 free' contract between a contractor and the agency unless the terms of the contract match the individual's working practices.</p>

      <h2>The Key IR35 Factors</h2>
      <p>Here are the key factors HMRC considers when establishing whether or not an assignment would be deemed to be IR35 caught or not. The first three (control, substitution and mutuality of obligation) are acknowledged by industry experts to be the most important factors.</p>

      <h3>1. Control & Direction</h3>
      <p>One of the most important determinants of IR35 status revolves around the extent to which a client controls where, when and how an individual performs their work.</p>

      <p>In most cases where professional services are provided, it is important that a contractor can demonstrate a certain amount of autonomy in the way they undertake a project. Employees are typically under the direct supervision and control of their employers, however the truly self-employed will have more influence over how they complete their work.</p>

      <p>For a contractor to successfully demonstrate that they are not under the direct supervision and control of the client, both the written contract and working practices must show that the client has no influence over how the contractor performs their services.</p>

      <h4>Control – Things to Look Out For</h4>
      <p>Contractual pointers towards a classic 'employment scenario' include:</p>
      <ul>
        <li>Indicating that the contractor will be supervised by a line manager or similar company employee</li>
        <li>Including work start and end times, and even break times in the contract</li>
        <li>Including any 'staff' perks, including provisions for holidays or sickness</li>
        <li>Any clauses that specify any rights of control or supervision over the contractor</li>
      </ul>

      <h3>2. Personal Service / Substitution</h3>
      <p>The right to provide a substitute in a contractual agreement has long been deemed to be an important factor when demonstrating that a contract assignment falls outside the scope of IR35.</p>

      <p>An employee provides their personal services to an employer (client), whereas a business would provide its services to a client, rather than the exclusive services of an individual. As a result, all professionally drawn-up 'IR35 friendly' contracts will include a substitution clause.</p>

      <h4>The Right of Substitution – Important Points</h4>
      <ul>
        <li>The right to supply a substitute must be a genuine one, otherwise HMRC may conclude that the clause is a 'sham'</li>
        <li>An 'unfettered' right of substitution means that a client must accept a substitute if the contracted worker is unavailable</li>
        <li>If a substitute has actually been used during the course of an assignment, this is a strong pointer towards self-employment</li>
        <li>Your company should always pay for any costs relating to providing a substitute worker</li>
        <li>End clients will often maintain a veto to accepting a substitute, on reasonable grounds</li>
      </ul>

      <h3>3. Mutuality of Obligation</h3>
      <p>A mutuality of obligation exists when an employer expects a worker to undertake work when asked to do so, and the worker expects to be given work on a constant basis. For self-employed people, they would expect a client to hire them to undertake a specific task, with no expectation of further work being provided after the initial task expires.</p>

      <p>The mutuality of obligation question arises not during the course of the initial contract, but what happens when this contract expires. It is possible that, by having an IT contract renewed many times, then this could be a pointer towards 'employment'.</p>

      <h3>4. Provision of Equipment</h3>
      <p>Does the individual use equipment provided by the client, or do they use their own?</p>

      <h3>5. Financial Risk</h3>
      <p>How much financial risk does the individual undertake in their work? If all the risk lies with the client, then this is an indicator of 'employment' rather than 'self-employment'.</p>

      <h3>6. Basis of Payment</h3>
      <p>The regularity of payment may have some influence on IR35 status. Self-employed people are often paid by the job, rather than a fixed hourly/daily rate.</p>

      <h3>7. Part & Parcel</h3>
      <p>To what extent has the individual become part of the organisation? Do they have access to staff facilities, attend staff meetings, attend staff social events or receive staff benefits?</p>

      <h3>8. Exclusive Service</h3>
      <p>Does the individual work for just one client, and have their contracts been renewed many times? The self-employed typically work for a number of clients at once.</p>

      <h3>9. The Intention of the Parties</h3>
      <p>Even if no formal written contract exists, HMRC would want to determine what the true status of the relationship between the parties is – one of employment or self-employment.</p>

      <h3>10. In Business On Your Own Account</h3>
      <p>Here are some typical pointers to behaving and acting like a 'real business' for IR35 purposes:</p>
      <ul>
        <li>Do you have multiple clients? This is a strong pointer towards self-employment</li>
        <li>Does your company have any income from non-contracting sources?</li>
        <li>Do you have your own business website and company email address?</li>
        <li>Do you have company stationery, letterheads, a logo, and customised invoices?</li>
        <li>Do you use any of your own equipment for contract purposes?</li>
        <li>Is your company registered for Value Added Tax (VAT)?</li>
        <li>Has your company ever employed anyone else or used sub-contractors?</li>
        <li>Do you have business liability and professional indemnity insurance in place?</li>
        <li>Has your company invested in training, or improving its marketability?</li>
        <li>Does your contracting business ever advertise its services?</li>
        <li>Do you have dedicated office space for contract-related work?</li>
        <li>Do you regularly tender for contract work or apply for contract positions?</li>
        <li>Is your company registered under the Data Protection Act?</li>
      </ul>

      <h2>IR35 Factors – Final Thoughts</h2>
      <p>These factors will be used to paint an overall picture of your employment status, and therefore whether an assignment is caught by IR35 or not.</p>

      <p><strong>Our recommendations:</strong></p>
      <ul>
        <li>Always consult an IR35 contract review specialist to examine each new contract you take on</li>
        <li>Consider taking out IR35 insurance in case you are selected for investigation by HMRC</li>
        <li>Maintain clear evidence of your self-employed status through business practices</li>
        <li>Keep detailed records of all contracts and working arrangements</li>
      </ul>

      <h2>How RUS Can Help</h2>
      <p>Our specialist tax team has extensive experience in IR35 compliance and contractor taxation. We can help you:</p>
      <ul>
        <li>Review your contracts for IR35 compliance</li>
        <li>Assess your employment status and working practices</li>
        <li>Structure your business to demonstrate genuine self-employment</li>
        <li>Defend HMRC investigations with professional representation</li>
        <li>Plan tax-efficient remuneration strategies</li>
      </ul>

      <p>Contact our team today for expert guidance on IR35 and contractor taxation matters.</p>`
  },
  {
    id: '2',
    slug: 'making-tax-digital-vat-what-you-need-to-know',
    title: 'Making Tax Digital for VAT: Essential Guide for 2025',
    excerpt: 'Everything you need to know about MTD for VAT compliance. Software requirements, penalties and how to prepare your business for digital record-keeping.',
    category: insightCategories[2], // Accounting Updates
    author: insightAuthors[0], // Senior Partner
    publishedAt: '2025-12-08',
    readTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=630&fit=crop',
    featuredImageAlt: 'Digital accounting software showing VAT compliance dashboard',
    featured: true,
    trending: true,
    views: 1876,
    tags: ['making tax digital', 'VAT', 'HMRC', 'compliance', 'digital accounting'],
    relatedServices: ['/services/taxation-services/business-tax', '/services/bookkeeping'],
    seo: {
      metaTitle: 'Making Tax Digital for VAT 2024 Guide | RUS Accountants Birmingham',
      metaDescription: 'Complete MTD for VAT guide. Software requirements, compliance deadlines and how RUS can help your business meet HMRC digital record-keeping obligations.',
      canonicalUrl: 'https://rus.co.uk/insights/accounting-updates/making-tax-digital-vat-what-you-need-to-know'
    },
    content: `
      <h2>What is Making Tax Digital?</h2>
      <p>Making Tax Digital (MTD) is HMRC's initiative to digitalise the UK tax system. For VAT-registered businesses, this means maintaining digital records and submitting VAT returns using MTD-compatible software.</p>

      <h2>Who Must Comply?</h2>
      <p>All VAT-registered businesses must now use MTD-compatible software for their VAT returns, regardless of turnover. This applies to all taxable periods starting on or after 1 April 2022.</p>

      <h2>Choosing Compatible Software</h2>
      <p>HMRC maintains a list of approved software providers. We can help you select the right solution for your business size and sector.</p>
      <ul>
        <li>Cloud-based accounting platforms</li>
        <li>Bridging software for existing systems</li>
        <li>API connections for bespoke solutions</li>
      </ul>

      <h2>Penalties for Non-Compliance</h2>
      <p>HMRC has introduced a points-based penalty system for late VAT returns. Understanding these penalties is crucial for maintaining compliance.</p>

      <h2>How RUS Can Help</h2>
      <p>Our team can assist with MTD implementation, software selection, training and ongoing VAT compliance. Contact us for a free MTD readiness assessment.</p>
    `
  },
  {
    id: '3',
    slug: 'gp-practice-accounting-nhs-pension-planning-guide',
    title: 'GP Practice Accounting: NHS Pension Planning Essentials',
    excerpt: 'Comprehensive guide to NHS pension planning for GPs. Annual allowance, lifetime allowance and tax-efficient strategies for medical practitioners.',
    category: insightCategories[3], // Sector Specific
    author: insightAuthors[2], // Healthcare Specialist
    publishedAt: '2025-12-08',
    readTime: 10,
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=630&fit=crop',
    featuredImageAlt: 'Medical stethoscope and financial documents representing GP pension planning',
    featured: false,
    trending: true,
    views: 1234,
    tags: ['NHS pensions', 'GP accounting', 'medical practitioners', 'pension tax', 'healthcare'],
    relatedServices: ['/sectors/healthcare', '/sectors/healthcare/medical'],
    seo: {
      metaTitle: 'NHS Pension Planning for GPs | Expert Guide | RUS Chartered Accountants',
      metaDescription: 'Essential NHS pension planning guide for GPs and medical practitioners. Annual allowance, tax charges and strategies from specialist healthcare accountants.',
      canonicalUrl: 'https://rus.co.uk/insights/sector-specific/gp-practice-accounting-nhs-pension-planning-guide'
    },
    content: `
      <h2>Understanding NHS Pension Schemes</h2>
      <p>The NHS Pension Scheme provides valuable retirement benefits for GPs and medical practitioners. However, complex annual allowance rules can result in unexpected tax charges if not managed carefully.</p>

      <h2>Annual Allowance and Tapered Allowance</h2>
      <p>For high-earning GPs, the tapered annual allowance reduces the standard £60,000 allowance by £1 for every £2 of adjusted income over £260,000, down to a minimum of £10,000.</p>

      <h2>Common Pension Tax Issues for GPs</h2>
      <ul>
        <li>Unexpected annual allowance charges</li>
        <li>Scheme pays elections and deadlines</li>
        <li>Pension growth calculations</li>
        <li>Private practice income effects</li>
      </ul>

      <h2>Tax Planning Strategies</h2>
      <p>Proactive pension planning can help mitigate tax charges. Options include controlling pensionable income, utilizing carry-forward relief and strategic timing of partnership profit allocations.</p>

      <h2>How We Support GP Practices</h2>
      <p>Our healthcare team provides specialist NHS pension advice, superannuation certificate preparation and annual allowance planning for GPs across the UK.</p>
    `
  },
  {
    id: '4',
    slug: 'inheritance-tax-planning-strategies-2024',
    title: 'Inheritance Tax Planning: 7 Strategies to Protect Your Estate',
    excerpt: 'Expert strategies to minimize inheritance tax and protect your family wealth. Lifetime gifts, trusts, business property relief and more.',
    category: insightCategories[0], // Tax Insights
    author: insightAuthors[1], // Tax Director
    publishedAt: '2025-11-20',
    readTime: 12,
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop',
    featuredImageAlt: 'Estate planning documents and family home representing inheritance tax planning',
    featured: false,
    trending: false,
    views: 987,
    tags: ['inheritance tax', 'IHT planning', 'estate planning', 'wealth protection', 'trusts'],
    relatedServices: ['/services/taxation-services/inheritance-tax'],
    seo: {
      metaTitle: 'Inheritance Tax Planning Strategies 2025 | IHT Advice | RUS Accountants',
      metaDescription: 'Expert IHT planning strategies to protect your estate. Trusts, lifetime gifts, BPR and tax-efficient wealth transfer from specialist accountants.',
      canonicalUrl: 'https://rus.co.uk/insights/tax-insights/inheritance-tax-planning-strategies-2024'
    },
    content: `
      <h2>The Inheritance Tax Challenge</h2>
      <p>With frozen nil rate bands and rising property values, more estates are facing inheritance tax (IHT) at 40%. Strategic planning can significantly reduce or eliminate this liability.</p>

      <h2>7 Effective IHT Planning Strategies</h2>

      <h3>1. Lifetime Gifting</h3>
      <p>Gifts made more than seven years before death are exempt from IHT. Annual exemptions and gifts out of income provide immediate relief.</p>

      <h3>2. Trusts and Settlements</h3>
      <p>Discretionary trusts, life interest trusts and bare trusts each offer different IHT advantages depending on your circumstances.</p>

      <h3>3. Business Property Relief (BPR)</h3>
      <p>Qualifying business assets can receive 100% or 50% relief, making BPR one of the most powerful IHT planning tools.</p>

      <h3>4. Pension Planning</h3>
      <p>Pensions fall outside your estate for IHT purposes, making them a tax-efficient way to pass wealth to beneficiaries.</p>

      <h3>5. Residence Nil Rate Band</h3>
      <p>Optimize the additional £175,000 allowance when passing your main residence to direct descendants.</p>

      <h3>6. Agricultural Property Relief</h3>
      <p>Farmland and agricultural property can qualify for significant IHT relief if structured correctly.</p>

      <h3>7. Life Insurance in Trust</h3>
      <p>Life policies written in trust provide IHT-free funds to pay tax liabilities or support beneficiaries.</p>

      <h2>Take Action Today</h2>
      <p>IHT planning requires careful consideration and early action. Our tax team can review your estate and recommend tailored strategies. Contact us for a confidential consultation.</p>
    `
  },
  {
    id: '5',
    slug: 'r-and-d-tax-credits-complete-guide-for-smes',
    title: 'R&D Tax Credits: Complete Guide for UK SMEs',
    excerpt: 'Unlock thousands in R&D tax relief. What qualifies, how to claim and maximizing your innovation tax credits under the new merged scheme.',
    category: insightCategories[0], // Tax Insights
    author: insightAuthors[1], // Tax Director
    publishedAt: '2025-11-20',
    readTime: 9,
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop',
    featuredImageAlt: 'Innovation and technology representing R&D tax credits for SMEs',
    featured: true,
    trending: false,
    views: 1543,
    tags: ['R&D tax credits', 'innovation', 'SME', 'tax relief', 'HMRC claims'],
    relatedServices: ['/services/taxation-services/business-tax'],
    seo: {
      metaTitle: 'R&D Tax Credits Guide for UK SMEs 2024 | RUS Chartered Accountants',
      metaDescription: 'Complete guide to claiming R&D tax credits. Qualifying activities, merged scheme rates and how RUS can maximize your innovation tax relief.',
      canonicalUrl: 'https://rus.co.uk/insights/tax-insights/r-and-d-tax-credits-complete-guide-for-smes'
    },
    content: `
      <h2>What Are R&D Tax Credits?</h2>
      <p>R&D tax credits reward UK companies for investing in innovation. From April 2024, the SME and RDEC schemes have merged into a single Research and Development Expenditure Credit (RDEC) scheme.</p>

      <h2>What Qualifies as R&D?</h2>
      <p>R&D for tax purposes means projects that seek to achieve an advance in science or technology through resolving scientific or technological uncertainties.</p>
      <ul>
        <li>Developing new products, processes or services</li>
        <li>Appreciably improving existing products or processes</li>
        <li>Using science or technology in a new way</li>
        <li>Overcoming technical challenges</li>
      </ul>

      <h2>The New Merged R&D Scheme (2024)</h2>
      <p>The merged scheme offers a 20% credit on qualifying R&D expenditure, calculated as an above-the-line credit rather than an enhanced deduction.</p>

      <h2>Qualifying Expenditure</h2>
      <p>You can claim relief on staff costs, software, consumables, subcontractor costs and certain other expenses directly attributable to R&D activities.</p>

      <h2>Common Sectors Claiming R&D</h2>
      <ul>
        <li>Software development and IT</li>
        <li>Manufacturing and engineering</li>
        <li>Food and beverage production</li>
        <li>Construction and architecture</li>
        <li>Pharmaceuticals and biotechnology</li>
      </ul>

      <h2>How We Can Help</h2>
      <p>Our R&D tax credit specialists can identify qualifying projects, prepare technical reports, quantify eligible costs and liaise with HMRC throughout the claim process. Contact us for a free R&D eligibility assessment.</p>
    `
  },
  {
    id: '6',
    slug: 'welcome-to-rus-insights',
    title: 'Welcome to RUS Insights: Your Trusted Source for Accounting and Tax Expertise',
    excerpt: 'Introducing RUS Insights - expert advice, industry updates and practical guidance from Birmingham\'s trusted chartered accountants. Stay informed with our specialist team.',
    category: insightCategories[5], // Firm News
    author: insightAuthors[0], // Senior Partner
    publishedAt: '2025-11-20',
    readTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop',
    featuredImageAlt: 'RUS Chartered Accountants Birmingham office and team',
    featured: false,
    trending: false,
    views: 432,
    tags: ['firm news', 'RUS updates', 'chartered accountants Birmingham'],
    relatedServices: ['/who-we-are'],
    seo: {
      metaTitle: 'Welcome to RUS Insights | Expert Accounting & Tax Blog | Birmingham',
      metaDescription: 'Introducing RUS Insights - your source for expert tax advice, business guidance and accounting updates from Birmingham\'s trusted chartered accountants.',
      canonicalUrl: 'https://rus.co.uk/insights/firm-news/welcome-to-rus-insights'
    },
    content: `
      <h2>Welcome to RUS Insights</h2>
      <p>We are delighted to launch RUS Insights, our new platform for sharing expert knowledge, industry updates and practical advice with our clients and the wider business community.</p>

      <h2>What to Expect</h2>
      <p>Our team of chartered accountants, tax specialists and sector experts will regularly publish insights covering:</p>
      <ul>
        <li>Tax planning strategies and HMRC updates</li>
        <li>Business advisory and growth strategies</li>
        <li>Accounting standards and compliance</li>
        <li>Sector-specific guidance for healthcare, retail and more</li>
        <li>Legislation changes and what they mean for you</li>
        <li>Firm news and team updates</li>
      </ul>

      <h2>Our Commitment to You</h2>
      <p>For over 30 years, RUS has supported businesses and individuals across Birmingham and the UK with high-quality accountancy, tax and advisory services. RUS Insights extends this commitment by providing valuable knowledge to help you make informed financial decisions.</p>

      <h2>Stay Connected</h2>
      <p>Bookmark this page and visit regularly for new insights. If you have questions about any topic we cover, our team is always here to help.</p>

      <p>Thank you for trusting RUS as your accounting partner.</p>
    `
  }
];

// Helper functions
export function getPostsByCategory(categorySlug: string): InsightPost[] {
  return insightPosts.filter(post => post.category.slug === categorySlug);
}

export function getRelatedPosts(currentPost: InsightPost, limit: number = 3): InsightPost[] {
  return insightPosts
    .filter(post =>
      post.id !== currentPost.id &&
      (post.category.id === currentPost.category.id ||
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort((a, b) => {
      // Prioritize same category
      if (a.category.id === currentPost.category.id && b.category.id !== currentPost.category.id) return -1;
      if (b.category.id === currentPost.category.id && a.category.id !== currentPost.category.id) return 1;
      // Then by views
      return b.views - a.views;
    })
    .slice(0, limit);
}

export function getPopularPosts(limit: number = 5): InsightPost[] {
  return insightPosts
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getFeaturedPosts(): InsightPost[] {
  return insightPosts.filter(post => post.featured);
}

export function getTrendingPosts(limit: number = 5): InsightPost[] {
  return insightPosts
    .filter(post => post.trending)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getPostsByTag(tag: string): InsightPost[] {
  return insightPosts.filter(post =>
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

export function searchPosts(query: string): InsightPost[] {
  const searchLower = query.toLowerCase();
  return insightPosts.filter(post =>
    post.title.toLowerCase().includes(searchLower) ||
    post.excerpt.toLowerCase().includes(searchLower) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
    post.author.name.toLowerCase().includes(searchLower) ||
    post.category.name.toLowerCase().includes(searchLower)
  );
}

export function getPostBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find(post => post.slug === slug);
}
