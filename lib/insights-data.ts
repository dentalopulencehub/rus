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
    slug: 'spring-budget-2025-key-takeaways-for-businesses',
    title: 'Spring Budget 2025: Key Takeaways for UK Businesses',
    excerpt: 'Our expert analysis of the Chancellor\'s Spring Budget 2025 and what it means for your business. Corporation tax changes, capital allowances and more.',
    category: insightCategories[0], // Tax Insights
    author: insightAuthors[1], // Tax Director
    publishedAt: '2025-03-15',
    updatedAt: '2025-03-16',
    readTime: 15,
    featuredImage: 'https://images.unsplash.com/photo-1554224311-beee460c201a?w=1200&h=630&fit=crop',
    featuredImageAlt: 'UK Parliament and budget documents representing Spring Budget 2025',
    featured: true,
    trending: true,
    views: 2341,
    tags: ['spring budget', 'corporation tax', 'capital allowances', 'HMRC', 'tax planning'],
    relatedServices: ['/services/taxation-services', '/services/taxation-services/business-tax'],
    seo: {
      metaTitle: 'Spring Budget 2025 Analysis for UK Businesses | RUS Chartered Accountants',
      metaDescription: 'Expert analysis of Spring Budget 2025 tax changes. What UK businesses need to know about corporation tax, allowances and new measures.',
      canonicalUrl: 'https://rus.co.uk/insights/tax-insights/spring-budget-2024-key-takeaways-for-businesses'
    },
    content: `
      <h2>Spring Budget 2025: What Changed?</h2>
      <p>The Chancellor's Spring Budget 2025 introduced several significant measures affecting UK businesses across all sectors. Our specialist tax team has conducted a comprehensive analysis of every key change and their practical implications for our clients. This detailed guide breaks down each major announcement, providing actionable insights to help you maximise available reliefs whilst ensuring full compliance.</p>

      <p>From corporation tax adjustments to enhanced capital allowances, R&D incentives to environmental investments, the Spring Budget 2025 presents both challenges and substantial opportunities for strategic tax planning. Understanding these changes is crucial for businesses of all sizes looking to optimise their tax position in the coming financial year.</p>

      <h2>Corporation Tax: The Complete Picture</h2>
      <p>The main rate of corporation tax remains at 25% for profits exceeding £250,000, maintaining stability for medium and large businesses. However, the Spring Budget 2025 introduced important new measures designed to support small businesses through enhanced capital allowances and targeted tax reliefs.</p>

      <h3>Small Profits Rate and Marginal Relief</h3>
      <p>The small profits rate of 19% continues to apply for companies with profits up to £50,000. For businesses with profits between £50,000 and £250,000, marginal relief ensures a gradual transition between the two rates. The effective tax rate increases progressively rather than jumping directly to 25%, preventing cliff-edge tax charges as profits grow.</p>

      <p>This marginal relief calculation can be complex, particularly for companies with associated companies or short accounting periods. Our tax team can model your effective corporation tax rate and identify opportunities to minimise your liability through timing strategies and profit extraction planning.</p>

      <h3>Key Corporation Tax Changes for 2025/26</h3>
      <ul>
        <li><strong>Full Expensing Extended:</strong> The super-deduction replacement has been extended to 31 March 2026, allowing 100% first-year relief on qualifying plant and machinery investments</li>
        <li><strong>Annual Investment Allowance (AIA):</strong> Permanently maintained at £1 million, providing long-term certainty for business investment planning and capital expenditure decisions</li>
        <li><strong>Enhanced R&D Tax Credits:</strong> SME R&D relief rates increased to 27% for loss-making companies, with the enhanced deduction rate providing effective relief of 46.5p per £1 invested in qualifying research</li>
        <li><strong>Digital Economy Support:</strong> New enhanced allowances specifically for investment in artificial intelligence, machine learning, and automation technologies</li>
        <li><strong>Green Investment Incentives:</strong> Accelerated allowances for environmental equipment, renewable energy installations, and carbon reduction technologies</li>
      </ul>

      <h2>Capital Allowances: Maximising Your Tax Relief</h2>
      <p>Capital allowances remain one of the most valuable and frequently underutilised tax reliefs available to UK businesses. The Spring Budget 2025 reinforced the Government's commitment to supporting business investment through generous allowances that can deliver immediate tax relief.</p>

      <h3>Full Expensing Explained</h3>
      <p>Companies investing in new plant and machinery can claim 100% relief in the year of purchase for main pool assets. This applies to most equipment, machinery, vehicles (excluding cars), and computer hardware. The relief provides immediate tax savings worth 25p for every £1 invested for companies paying the main corporation tax rate.</p>

      <p>For example, a manufacturing business investing £100,000 in new production equipment would receive a corporation tax deduction of £100,000 in year one, generating a tax saving of £25,000. This significantly improves cash flow compared to the previous system of annual writing-down allowances spread over many years.</p>

      <h3>50% First-Year Allowance for Special Rate Assets</h3>
      <p>Special rate assets, including integral features like heating and cooling systems, electrical installations, and water systems, qualify for a 50% first-year allowance. This represents a substantial improvement over the previous 6% writing-down allowance and can generate significant tax savings on major refurbishments or new builds.</p>

      <h3>Annual Investment Allowance Strategy</h3>
      <p>With the AIA permanently set at £1 million, businesses can plan larger investments with confidence. The AIA covers most capital expenditure, making it accessible to businesses of all sizes. Strategic considerations include:</p>
      <ul>
        <li>Timing purchases to maximise tax efficiency, particularly if approaching the £1 million threshold</li>
        <li>Planning for multiple group companies, as each company receives its own AIA (subject to anti-avoidance rules)</li>
        <li>Coordinating purchases with accounting period changes to potentially claim multiple years' allowances</li>
        <li>Reviewing lease versus purchase decisions, as only purchased assets qualify for capital allowances</li>
      </ul>

      <h2>Impact on Small and Medium Enterprises</h2>
      <p>SMEs form the backbone of the UK economy, employing over 16 million people. The Spring Budget 2025 included several measures specifically designed to support smaller businesses navigating challenging economic conditions whilst encouraging growth and investment.</p>

      <h3>Cash Flow Support Through Tax Reliefs</h3>
      <p>The combination of the 19% small profits rate and enhanced capital allowances provides significant cash flow advantages for growing businesses. A company with £40,000 profit investing £50,000 in qualifying equipment could reduce its corporation tax liability to zero in year one, with losses available to carry forward or back against other profits.</p>

      <h3>Employment Allowance Increase</h3>
      <p>The Employment Allowance increased to £5,000 for the 2025/26 tax year, allowing eligible employers to reduce their Class 1 secondary National Insurance contributions. This change particularly benefits small businesses with modest payroll costs, effectively exempting the first £5,000 of employer NI from liability.</p>

      <p>To qualify, your business must have had employer NI liabilities of less than £100,000 in the previous tax year. Single-director companies and those providing personal services are excluded, but most trading businesses with employees can claim this valuable relief.</p>

      <h3>Business Rates Relief Extended</h3>
      <p>Retail, hospitality, and leisure businesses continue to receive 75% business rates relief for 2025/26, capped at £110,000 per business. This provides crucial support for high-street businesses facing challenging trading conditions and increased cost pressures.</p>

      <h2>Research and Development Tax Relief</h2>
      <p>The R&D tax credit regime underwent further refinement in the Spring Budget 2025, with enhanced rates, simplified claims processes, and increased HMRC scrutiny. Understanding the rules and maintaining proper documentation is essential for successful claims.</p>

      <h3>SME R&D Scheme</h3>
      <p>The SME R&D relief now provides a 27% tax credit for loss-making companies engaged in qualifying R&D activities. For profitable companies, the enhanced deduction remains at 186% of qualifying expenditure, providing effective relief of 46.5p per £1 spent on R&D after accounting for the corporation tax saving.</p>

      <p>Qualifying expenditure includes staff costs, consumables, software, subcontractor costs (certain restrictions apply), and externally provided workers directly engaged in R&D. Many businesses undertake qualifying R&D without realising they can claim relief for product development, process improvements, or technical problem-solving.</p>

      <h3>RDEC (Research and Development Expenditure Credit)</h3>
      <p>The RDEC rate increased to 20% of qualifying R&D expenditure, benefiting larger companies and those unable to claim under the SME scheme. The credit is treated as taxable income, giving an effective benefit of 15% after corporation tax. This change makes UK R&D investment more competitive internationally whilst maintaining support for innovation.</p>

      <h3>Claiming R&D Relief Successfully</h3>
      <p>HMRC has significantly tightened compliance requirements for R&D claims following concerns about fraudulent and speculative claims. To ensure your claim succeeds:</p>
      <ul>
        <li>Maintain detailed technical explanations of each project, demonstrating scientific or technological uncertainty</li>
        <li>Document the systematic investigation or experimental development undertaken</li>
        <li>Keep contemporaneous records of time spent, costs incurred, and technical decisions made</li>
        <li>Ensure advance notification is submitted to HMRC where required (first-time claimants and certain other situations)</li>
        <li>Consider obtaining specialist advice before submitting claims, particularly for complex technical projects</li>
      </ul>

      <p>Our specialist R&D team includes qualified scientists and engineers who can review your projects, prepare technically robust claims, and liaise with HMRC enquiries to maximise your relief whilst ensuring full compliance.</p>

      <h2>Environmental and Green Investment Incentives</h2>
      <p>The Spring Budget 2025 introduced enhanced support for businesses investing in environmental improvements and sustainable practices, aligning tax policy with the UK's net-zero commitments.</p>

      <h3>Enhanced Capital Allowances for Green Equipment</h3>
      <p>Businesses investing in energy-efficient equipment qualify for 100% first-year allowances. Qualifying technologies include:</p>
      <ul>
        <li>Solar photovoltaic panels and wind turbines for on-site renewable energy generation</li>
        <li>Air source and ground source heat pumps for heating and cooling</li>
        <li>Electric vehicle charging infrastructure for business and employee use</li>
        <li>Battery storage systems for renewable energy</li>
        <li>Energy-efficient refrigeration and air conditioning systems</li>
        <li>LED lighting and intelligent lighting control systems</li>
        <li>Building management systems for energy optimisation</li>
      </ul>

      <h3>Zero-Emission Vehicle Benefits</h3>
      <p>Company car tax rates for zero-emission vehicles remain at 2% of list price for 2025/26, rising gradually to just 5% by 2027/28. This makes electric vehicles increasingly attractive for business fleets compared to petrol or diesel alternatives taxed at rates up to 37%.</p>

      <p>Businesses purchasing zero-emission vehicles can also claim 100% first-year allowances, providing immediate corporation tax relief. When combined with low benefit-in-kind rates for employees, electric vehicles offer substantial tax advantages for company car fleets.</p>

      <h2>VAT and Indirect Tax Changes</h2>
      <p>While the standard VAT rate remains at 20%, the Spring Budget 2025 introduced important changes to registration thresholds and compliance requirements.</p>

      <h3>VAT Registration Threshold</h3>
      <p>The VAT registration threshold increased to £90,000 for 2025/26, providing relief for growing businesses and reducing administrative burdens for smaller enterprises. This change affects businesses approaching the threshold and those with seasonal trading patterns who previously faced registration purely due to temporary sales spikes.</p>

      <p>The deregistration threshold increased to £88,000, providing a buffer zone to prevent businesses repeatedly registering and deregistering due to minor fluctuations in turnover.</p>

      <h3>Making Tax Digital for VAT</h3>
      <p>All VAT-registered businesses must now maintain digital records and submit VAT returns using MTD-compatible software. HMRC's compliance checks have intensified significantly, with penalty points issued for late submissions and substantial fines for non-compliance.</p>

      <p>Ensure your systems include proper digital links between all stages of VAT accounting. Manual data entry or spreadsheet transfers may breach the digital links requirement, even if you use MTD-compatible software for final submission.</p>

      <h2>What This Means for Your Business</h2>
      <p>The Spring Budget 2025 presents both challenges and opportunities requiring strategic planning to maximise available reliefs whilst minimising tax liabilities.</p>

      <h3>Investment Planning Strategies</h3>
      <p>With full expensing available until March 2026, businesses should carefully consider the timing of capital investments. Major equipment purchases, technology upgrades, or facility improvements planned for the next few years could generate immediate and substantial tax relief if accelerated before the deadline.</p>

      <p>However, don't let the tax tail wag the commercial dog. Investment decisions should always be driven primarily by business need and commercial return, with tax relief treated as an additional benefit rather than the primary justification.</p>

      <h3>Structure and Profit Extraction Review</h3>
      <p>The varying corporation tax rates make business structure increasingly important for tax efficiency. Companies with profits fluctuating around £50,000 or £250,000 should consider:</p>
      <ul>
        <li>Restructuring options to separate different trading activities</li>
        <li>Profit extraction strategies balancing salary, dividends, and pension contributions</li>
        <li>Group planning for businesses with multiple companies</li>
        <li>Timing of major transactions or asset disposals</li>
      </ul>

      <h3>R&D Opportunities</h3>
      <p>Many businesses undertake qualifying R&D without realising they can claim substantial tax relief. Product development, process improvements, software development, and technical problem-solving often qualify, even if you don't consider your business to be conducting "research".</p>

      <p>Our specialists can review your activities and identify previously unclaimed relief going back two years, potentially generating significant unexpected tax refunds.</p>

      <h2>Sector-Specific Implications</h2>

      <h3>Manufacturing and Production</h3>
      <p>Manufacturing businesses benefit significantly from full expensing on production equipment and enhanced capital allowances. Investment in automation, robotics, and efficiency improvements should be prioritised before the March 2026 deadline. Consider also whether process improvements or new product development qualify for R&D relief.</p>

      <h3>Professional Services</h3>
      <p>Professional service firms should focus on optimising the small profits rate and consider equipment investments qualifying for AIA. Technology infrastructure investments, including cloud services, cybersecurity improvements, and AI-powered tools, may qualify for enhanced allowances.</p>

      <h3>Retail and Hospitality</h3>
      <p>Continued business rates relief provides crucial support for retail, hospitality, and leisure businesses. Consider investments in point-of-sale systems, refrigeration equipment, customer-facing technology, and energy-efficient lighting to improve efficiency whilst claiming valuable tax relief.</p>

      <h3>Healthcare and Medical</h3>
      <p>Healthcare businesses should review medical equipment purchases and facility improvements for capital allowances. GP practices may benefit from reviewing NHS pension tax planning in light of continuing annual allowance complications.</p>

      <h2>Action Points for Business Owners</h2>
      <ol>
        <li><strong>Review your capital expenditure plans:</strong> Identify investments that could be accelerated to benefit from full expensing before March 2026</li>
        <li><strong>Assess your R&D activities:</strong> Many qualifying projects go unclaimed. Our team can review your operations and identify opportunities</li>
        <li><strong>Check your VAT compliance:</strong> Ensure MTD software is properly configured, all digital links are maintained, and submissions are timely</li>
        <li><strong>Consider profit extraction strategies:</strong> With varying corporation tax rates, how you extract profits significantly impacts overall tax liability</li>
        <li><strong>Review employment structures:</strong> The increased Employment Allowance may benefit businesses using PAYE rather than dividends for owner remuneration</li>
        <li><strong>Plan for 2026 and beyond:</strong> With full expensing ending in March 2026, develop a long-term investment and tax planning strategy</li>
        <li><strong>Consider environmental investments:</strong> Enhanced allowances for green technology can deliver tax savings alongside cost reductions</li>
        <li><strong>Review your business structure:</strong> Ensure your corporate structure remains tax-efficient under the current rates</li>
      </ol>

      <h2>How RUS Can Help</h2>
      <p>Our specialist tax team provides comprehensive Spring Budget planning services tailored to your specific circumstances:</p>
      <ul>
        <li><strong>Corporation Tax Optimisation:</strong> Structure reviews, profit extraction planning, and tax rate modelling</li>
        <li><strong>Capital Allowances:</strong> Claims preparation, qualifying expenditure reviews, and maximisation strategies</li>
        <li><strong>R&D Tax Credits:</strong> Technical reviews, claim preparation, and HMRC enquiry support</li>
        <li><strong>VAT Compliance:</strong> MTD implementation, digital links reviews, and penalty mitigation</li>
        <li><strong>Investment Appraisal:</strong> Tax-efficient investment planning and timing strategies</li>
        <li><strong>Sector-Specific Planning:</strong> Industry-focused tax strategies for healthcare, retail, manufacturing, and professional services</li>
      </ul>

      <h2>Next Steps and Free Consultation</h2>
      <p>The Spring Budget 2025 changes affect every UK business, whether through new opportunities for tax relief or additional compliance requirements. Don't miss valuable tax planning opportunities or inadvertently fall foul of new compliance rules.</p>

      <p>Contact our tax team today for a complimentary Spring Budget review. We'll analyse your specific circumstances, identify opportunities for tax savings, and develop a tailored strategy to minimise your liabilities whilst ensuring full compliance with all HMRC requirements.</p>

      <p><strong>Book your free consultation today:</strong></p>
      <p>Call our Birmingham office on 0121 XXX XXXX or email <a href="mailto:tax@rus.co.uk">tax@rus.co.uk</a> to arrange your personal Spring Budget planning meeting with one of our qualified Chartered Tax Advisers.</p>

      <p>Don't let tax planning opportunities slip away. Contact RUS today and discover how the Spring Budget 2025 changes can benefit your business.</p>
    `
  },
  {
    id: '2',
    slug: 'making-tax-digital-vat-what-you-need-to-know',
    title: 'Making Tax Digital for VAT: Essential Guide for 2025',
    excerpt: 'Everything you need to know about MTD for VAT compliance. Software requirements, penalties and how to prepare your business for digital record-keeping.',
    category: insightCategories[2], // Accounting Updates
    author: insightAuthors[0], // Senior Partner
    publishedAt: '2025-03-10',
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
    publishedAt: '2025-03-05',
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
    publishedAt: '2025-02-28',
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
    publishedAt: '2025-02-20',
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
    publishedAt: '2025-02-15',
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
