'use client';

import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Library', href: '#continue-watching' },
  { label: 'About', href: '#about' },
  { label: 'Résumé', href: '#' },
];

const STORY_PARAGRAPHS = [
  'I’m building a life with intention: a meaningful career, financial independence, and a lasting foundation for my son.',
  'Legacy Heiress is a reflection of that vision and of the woman I’m becoming as I work toward it.',
  'I’m ambitious about my future. I want to lead, own, create, and have a voice in the rooms where decisions are made. I value excellence, preparation, and the confidence that comes from knowing your work. For me, success includes the freedom to choose how I spend my time and the ability to create opportunities for the people I care about.',
  'Motherhood gives that ambition a deeper purpose. When I think about what I want to leave my son, I think about security and opportunity, but also understanding. I want him to know how to make informed decisions, recognize possibilities, and take responsibility for his future. I want the example I set to be part of what he inherits.',
  'That purpose extends to the way I want to help others. I care about making financial knowledge more approachable so people can take an active role in their own lives whether they’re learning to invest, preparing for their children’s education, or thinking seriously about what their family will need in the years ahead.',
  'I’m still building toward these goals. This space follows that progress: the work, the learning, the decisions, and the personal growth behind it all.',
  'As you explore Legacy Heiress, you’ll get to know what I’m creating and what matters to me. My hope is that you leave with a clearer sense of who I am—and a little more confidence in what you can build for yourself.',
];

const MORE_INFO_PARAGRAPHS = [
  'Legacy Heiress brings together my professional work, personal ambitions, and commitment to financial empowerment.',
  'Explore the library for individual projects and their stories. You’ll find completed work alongside ideas still taking shape, with each project’s current status identified.',
  'Browse the Featured Projects below.',
];

const ROWS = [
  {
    id: 'continue-watching',
    title: 'Continue Watching',
    tag: null,
    cards: [
      {
        title: 'Probate Foreclosure Acquisition',
        category: 'Real Estate',
        status: 'Active',
        image: '/project-probate-foreclosure.jpg',
        progress: 40,
        gradient: 'linear-gradient(135deg, #2a1418 0%, #0d0d0d 100%)',
      },
      {
        title: 'NC Probate Intelligence System',
        category: 'Technology',
        status: 'In Development',
        image: '/project-nc-probate-intel.jpg',
        progress: 70,
        gradient: 'linear-gradient(135deg, #14202a 0%, #0d0d0d 100%)',
      },
      {
        title: 'Duplicate Application Review',
        category: 'Automation',
        status: 'In Development',
        image: '/project-duplicate-review.png',
        progress: 50,
        gradient: 'linear-gradient(135deg, #241016 0%, #0d0d0d 100%)',
      },
      {
        title: 'TPA Pipeline',
        category: 'Data Engineering',
        status: 'Active',
        image: '/project-tpa-pipeline.jpg',
        progress: 85,
        gradient: 'linear-gradient(135deg, #14202a 0%, #0d0d0d 100%)',
      },
    ],
  },
  {
    id: 'featured-projects',
    title: 'Featured Projects',
    tag: null,
    cards: [
      {
        title: 'Probate Foreclosure Acquisition',
        category: 'Real Estate',
        status: 'Active',
        image: '/project-probate-foreclosure.jpg',
        gradient: 'linear-gradient(135deg, #2a1418 0%, #0d0d0d 100%)',
        description:
          'Identifying and acquiring foreclosures tied to active probate cases across North Carolina. Automated heir identification, deal pipeline management, and strategic negotiation to unlock equity in estate properties.',
        businessProblem:
          "Finding probate foreclosures is manual and time-consuming. Most foreclosure listings don't indicate if they're tied to active probate/estate cases where heirs are motivated to sell. Current process requires manual research across multiple data sources (80% of research time spent here).",
        solution:
          'Developed a systematic approach to identify foreclosures connected to probate cases. Automated heir identification, property valuation, and deal negotiation. Created a deal pipeline management system to track leads from discovery to closure.',
        github: 'https://github.com/Znovia',
      },
      {
        title: 'NC Probate Intelligence System',
        category: 'Technology',
        status: 'In Development',
        image: '/project-nc-probate-intel.jpg',
        gradient: 'linear-gradient(135deg, #14202a 0%, #0d0d0d 100%)',
        description:
          'Full-stack automation platform for identifying probate foreclosures. Combines public records data, probate case matching, and lead scoring to automate lead discovery and deal pipeline.',
        businessProblem:
          'Manual foreclosure filtering to find probate cases is the biggest bottleneck in real estate acquisition. Currently takes 80% of research time and is prone to human error when handling 20+ properties.',
        solution:
          'Built a full-stack automation platform that combines public records data, probate case matching algorithms, and lead scoring. Pulls from NC courthouse records, property databases, and foreclosure listings. Automatically identifies probate-connected foreclosures and ranks them by deal potential.',
        techStack: ['Next.js', 'Python', 'FastAPI', 'SQLite'],
        github: 'https://github.com/Znovia',
      },
      {
        title: 'Duplicate Application Review',
        category: 'Automation',
        status: 'In Development',
        image: '/project-duplicate-review.png',
        gradient: 'linear-gradient(135deg, #241016 0%, #0d0d0d 100%)',
        description:
          'Automating duplicate application detection and comparison at TD Bank. Replaces manual Excel-based process for identifying duplicates among 20+ applications with a streamlined automation tool.',
        businessProblem:
          'At TD Bank, identifying duplicate loan applications is manual and time-consuming. Current process uses Excel sheets to manually compare the current application against 20+ potential duplicates. Error-prone, repetitive, takes hours per batch.',
        solution:
          'Building an automated tool to detect and compare duplicate applications. Flags matching applicants, accounts, phone numbers, and addresses. Compares application details side-by-side, reducing manual comparison time from hours to minutes.',
        github: 'https://github.com/Znovia',
      },
      {
        title: 'TPA Pipeline',
        category: 'Data Engineering',
        status: 'Active',
        image: '/project-tpa-pipeline.jpg',
        gradient: 'linear-gradient(135deg, #14202a 0%, #0d0d0d 100%)',
        description:
          'ETL pipeline for data extraction, transformation, and loading. Normalizes schema, performs SQL analysis, transforms logs into structured data with PII handling, cost tracking logic, and validation.',
        businessProblem:
          'Raw data from third-party administrators comes in unstructured, inconsistent formats. Manual processing is slow and introduces errors. Data contains sensitive PII requiring masking. Cost tracking and validation logic are manual and error-prone.',
        solution:
          'Built a complete ETL pipeline that extracts raw data, normalizes schema, performs SQL analysis, and transforms logs into structured data. Automated PII detection and masking. Integrated cost logic and validation rules. Handles schema evolution and data quality checks.',
        features: [
          'Schema normalization',
          'SQL analysis',
          'PII detection and masking',
          'Cost tracking logic',
          'Data validation',
        ],
        techStack: ['Python', 'SQL', 'ETL Framework'],
        github: 'https://github.com/Znovia',
      },
    ],
  },
  {
    id: 'building-empire',
    title: 'Building the Empire',
    comingSoon: true,
    accent: '#0066ff',
    cards: [
      {
        title: 'Empire Architects',
        image: '/coming-the-authority.jpg',
        genre: 'Drama',
        description:
          'Follow the masterminds behind billion-dollar real estate empires. Where syndication strategy meets ruthless ambition.',
        businessProblem:
          'Real estate investors spend months navigating syndication complexity, legal requirements, and investor relations. Current process is manual, fragmented across email and spreadsheets.',
        solution:
          'Building a comprehensive syndication management platform. Automates investor onboarding, cap table management, deal documentation, and distribution tracking. Streamlines the entire investment lifecycle.',
      },
      {
        title: 'The Inheritance Code',
        image: '/coming-inheritance-code.png',
        genre: 'Mystery',
        description:
          'Uncover hidden wealth in forgotten estates. A forensic analysis of probate portfolios and estate secrets.',
        businessProblem:
          'Estate attorneys manually review probate portfolios to identify liquidation priorities and tax optimization strategies. Process is time-consuming and prone to missed opportunities.',
        solution:
          'Developed an analytics engine that scans probate assets, identifies high-value properties, calculates estate taxes, and recommends liquidation strategy. Provides attorneys with instant portfolio insights.',
      },
      {
        title: 'Wealth Protocol',
        image: '/coming-data-revolution.jpg',
        genre: 'Sci-Fi',
        description:
          'The future of wealth assessment. AI-powered algorithms decode net worth and unlock personalized financial pathways.',
        businessProblem:
          'Financial advisors spend hours categorizing clients by wealth tier and calculating net worth. Manual process creates bottlenecks in client onboarding and service delivery.',
        solution:
          'Built an automated net worth calculator that pulls from multiple data sources, categorizes clients by wealth tier, identifies service gaps, and recommends advisory packages. Instant, accurate assessments.',
      },
      {
        title: 'The Portfolio',
        image: '/coming-the-portfolio.jpg',
        genre: 'Reality',
        description:
          "Track every property. Control every dollar. A real estate investor's command center for portfolio mastery.",
        businessProblem:
          'Investors managing multiple properties across states struggle with centralized tracking of cash flow, expenses, maintenance, and tax documentation.',
        solution:
          'Created a unified investment dashboard that consolidates property data, tracks cash flow by property, manages maintenance schedules, and generates tax-ready reports. Complete visibility across portfolio.',
      },
    ],
  },
  {
    id: 'wealth-legacy',
    title: 'Wealth & Legacy',
    comingSoon: true,
    accent: '#2d9d7f',
    cards: [
      {
        title: 'Dynasty',
        image: '/coming-dynasty.jpg',
        genre: 'Family Drama',
        description:
          "Generational wealth isn't inherited—it's architected. Watch families secure their legacy for centuries.",
        businessProblem:
          'High-net-worth families lack structured frameworks for wealth transfer planning. Without clear strategy, generational wealth erodes through taxes, poor decisions, and family conflict.',
        solution:
          'Designed a comprehensive wealth transition blueprint. Covers tax optimization, estate planning, asset protection, and family governance. Provides families with a multi-generational wealth preservation strategy.',
      },
      {
        title: 'Index Mastery',
        image: '/coming-index-mastery.png',
        genre: 'Documentary',
        description:
          'The truth about wealth building. How ordinary people achieved extraordinary returns through index strategy.',
        businessProblem:
          'Retail investors are intimidated by index investing and lack education on portfolio construction, rebalancing, and long-term strategy. High fees and misinformation cost them millions.',
        solution:
          'Created an interactive course teaching index investing fundamentals, portfolio allocation, tax-loss harvesting, and risk management. Empowers investors to build wealth independently.',
      },
      {
        title: 'College Bound',
        image: '/coming-college-bound.jpg',
        genre: 'Inspirational',
        description:
          'Every child deserves education without debt. The strategy that transforms college dreams into tax-efficient reality.',
        businessProblem:
          'Parents struggle to understand 529 plan mechanics, contribution limits, state tax benefits, and distribution strategies. Many miss tax advantages worth thousands.',
        solution:
          'Built an interactive 529 planning tool that calculates optimal contributions, identifies state tax breaks, projects college costs, and manages distribution strategy. Maximizes tax savings.',
      },
      {
        title: 'Protected',
        image: '/coming-protected.jpg',
        genre: 'Thriller',
        description:
          "Your family's financial security starts here. Architect the insurance strategy that protects everything you've built.",
        businessProblem:
          "People don't understand life insurance structure—term vs. permanent, underwriting, beneficiary planning, and tax implications. Poor decisions cost families financial security.",
        solution:
          'Developed a comprehensive life insurance planning workshop. Teaches policy structure, coverage calculation, underwriting strategy, and tax-efficient ownership structures. Clients leave with clear insurance architecture.',
      },
    ],
  },
  {
    id: 'career-moves',
    title: 'Career Moves',
    comingSoon: true,
    accent: '#9d4edd',
    cards: [
      {
        title: 'The Promotion',
        image: '/coming-the-promotion-new.jpg',
        genre: 'Thriller',
        description: 'From manager to executive. Watch ambition become authority in the corporate climb.',
        businessProblem:
          'Mid-career professionals moving into leadership roles lack mentorship on executive presence, strategic thinking, and organizational dynamics. Many plateau or fail in new roles.',
        solution:
          'Developed an executive coaching program focused on leadership mindset, decision-making frameworks, stakeholder management, and personal brand. Accelerates transition to executive level.',
      },
      {
        title: 'Data Revolution',
        image: '/coming-wealth-protocol.png',
        genre: 'Tech Thriller',
        description: 'Career pivot from finance to tech. The untold story of data engineers building the future.',
        businessProblem:
          'Finance professionals want to transition into data roles but lack a clear path, have skill gaps, and lack portfolio projects. Career pivot feels impossible without guidance.',
        solution:
          'Created a structured 6-month program bridging finance to data engineering. Includes SQL, Python, project portfolio, and job placement support. Proven path into fintech data roles.',
      },
      {
        title: 'The Authority',
        image: '/coming-empire-architects.png',
        genre: 'Drama',
        description: 'Build your brand. Own your narrative. Become the voice everyone wants to hear.',
        businessProblem:
          "Ambitious professionals lack personal branding strategy. Without visibility and authority, they're overlooked for promotions, speaking engagements, and leadership opportunities.",
        solution:
          'Built a personal branding framework covering LinkedIn strategy, content creation, thought leadership positioning, and network building. Establishes professional authority in industry.',
      },
      {
        title: 'The Negotiation',
        image: '/coming-the-negotiation.jpg',
        genre: 'Action',
        description: 'Know your worth. Master the conversation that changes your career trajectory forever.',
        businessProblem:
          'Professionals leave hundreds of thousands on the table due to poor negotiation skills and lack of market data. Hesitation costs careers millions over a lifetime.',
        solution:
          'Developed a negotiation masterclass with salary research tools, negotiation frameworks, counteroffering strategies, and confidence building. Proven to increase offers by 15-25%.',
      },
    ],
  },
  {
    id: 'becoming-her',
    title: 'The Becoming Her Collection',
    comingSoon: true,
    accent: '#d4af37',
    cards: [
      {
        title: 'Empire State of Mind',
        image: '/coming-empire-state-of-mind.jpg',
        genre: 'Epic',
        description:
          'The mindset shift that transforms ordinary ambition into extraordinary empire-building power.',
        businessProblem:
          'Ambitious women entrepreneurs lack mentorship on empire-building vision, risk tolerance, and decision-making under uncertainty. Self-doubt and limiting beliefs hold them back.',
        solution:
          'Created an intensive experience focused on mindset transformation, vision clarity, decision-making confidence, and strategic thinking. Women leave with empire-building clarity.',
      },
      {
        title: 'Freedom',
        image: '/coming-the-promotion.jpg',
        genre: 'Adventure',
        description: 'Design your financial independence. The blueprint that liberates you from limits.',
        businessProblem:
          'Women want financial independence but lack clear strategy and milestones. Vague goals and confusion about wealth-building mechanics delay action.',
        solution:
          'Designed a personalized FI blueprint with net worth goals, investment strategy, career optimization, and lifestyle design. Clear roadmap from today to financial independence.',
      },
      {
        title: 'Her Story',
        image: '/coming-her-story.png',
        genre: 'Cinematic Drama',
        description: 'Your narrative. Your power. The art of storytelling that moves empires.',
        businessProblem:
          'High-achieving women struggle to articulate their story, vision, and impact in compelling ways. Inability to communicate limits influence and opportunity.',
        solution:
          'Developed a storytelling framework for crafting personal narrative. Teaches positioning, communication strategy, and authentic brand expression. Women learn to inspire and influence.',
      },
      {
        title: 'Command the Room',
        image: '/coming-command-the-room.jpg',
        genre: 'Action',
        description: 'Executive presence that demands respect. The transformation from good to unforgettable.',
        businessProblem:
          "Talented women are overlooked for senior roles due to presence gaps—communication style, confidence, boardroom dynamics. Merit alone doesn't guarantee advancement.",
        solution:
          'Created an executive presence program focusing on communication, boardroom dynamics, decision-making visibility, and strategic communication. Women command attention and respect.',
      },
    ],
  },
];

function Card({ card, rowTag, onOpen }) {
  const [imgFailed, setImgFailed] = useState(false);
  const category = card.category || rowTag;
  const status = card.status || 'Legacy Heiress Original';
  const showImage = Boolean(card.image) && !imgFailed;

  const interactionProps = onOpen
    ? {
        role: 'button',
        'aria-haspopup': 'dialog',
        onClick: onOpen,
        onKeyDown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen();
          }
        },
      }
    : {};

  return (
    <article className="card" tabIndex={0} {...interactionProps}>
      <div className="card-media" style={showImage ? undefined : { background: card.gradient }}>
        {showImage ? (
          <img
            src={card.image}
            alt=""
            className="card-img"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="card-texture" aria-hidden="true" />
        )}
      </div>

      {category && <span className="card-category">{category}</span>}

      <div className="card-base">
        <h3 className="card-base-title">{card.title}</h3>
      </div>

      <div className="card-hover">
        <h3 className="card-hover-title">{card.title}</h3>
        <p className="card-hover-status">{status}</p>
      </div>

      {typeof card.progress === 'number' && (
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${card.progress}%` }} />
        </div>
      )}
    </article>
  );
}

function ComingSoonMovieCard({ card, accent, onOpen }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(card.image) && !imgFailed;

  const interactionProps = onOpen
    ? {
        role: 'button',
        tabIndex: 0,
        'aria-haspopup': 'dialog',
        onClick: onOpen,
        onKeyDown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen();
          }
        },
      }
    : {};

  return (
    <article className="movie-card" style={{ '--accent': accent }} {...interactionProps}>
      <div className="movie-card-media">
        {showImage ? (
          <img
            src={card.image}
            alt=""
            className="card-img"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className="movie-card-fallback"
            style={{ background: `linear-gradient(135deg, ${accent}33 0%, #0d0d0d 100%)` }}
          />
        )}
      </div>

      <span className="movie-coming-soon-badge">Coming Soon</span>

      {card.genre && (
        <span className="movie-genre-tag" style={{ backgroundColor: accent }}>
          {card.genre}
        </span>
      )}

      <div className="movie-title-overlay">
        <h3 className="movie-title">{card.title}</h3>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          &#10005;
        </button>

        <div className="modal-image-wrap">
          {project.image ? (
            <img src={project.image} alt={project.title} className="modal-image" />
          ) : project.comingSoon ? (
            <div
              className="modal-coming-soon-banner"
              style={{
                background: `linear-gradient(135deg, ${project.accent}33 0%, #0d0d0d 100%)`,
                borderBottomColor: project.accent,
              }}
            >
              <span className="modal-coming-soon-text">Coming Soon</span>
            </div>
          ) : (
            <div className="modal-image-fallback" style={{ background: project.gradient }} />
          )}
        </div>

        <div className="modal-body">
          <div className="modal-badges">
            {project.comingSoon ? (
              <span className="coming-soon-pill" style={{ color: project.accent, borderColor: project.accent }}>
                Coming Soon
              </span>
            ) : (
              <>
                {project.category && <span className="card-category modal-category">{project.category}</span>}
                {project.status && <span className="modal-status">{project.status}</span>}
              </>
            )}
          </div>

          <h2 id="modal-title" className="modal-title">
            {project.title}
          </h2>

          <p className="modal-description">{project.description}</p>

          {project.businessProblem && (
            <div className="modal-block">
              <h3 className="modal-block-title">Business Problem</h3>
              <p>{project.businessProblem}</p>
            </div>
          )}

          {project.solution && (
            <div className="modal-block">
              <h3 className="modal-block-title">Solution</h3>
              <p>{project.solution}</p>
            </div>
          )}

          {project.features && (
            <div className="modal-block">
              <h3 className="modal-block-title">Features</h3>
              <ul className="modal-features">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && (
            <div className="modal-tech">
              {project.techStack.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary modal-github"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoModal({ title, paragraphs, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop info-modal-backdrop" onClick={onClose}>
      <div
        className="modal-panel info-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          &#10005;
        </button>
        <div className="modal-body">
          <h2 id="info-modal-title" className="modal-title">
            {title}
          </h2>
          <div className="about-prose">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ id, title, tag, cards, onCardClick, comingSoon, accent }) {
  const trackRef = useRef(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

  const scrollByAmount = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 700, behavior: 'smooth' });
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByAmount(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByAmount(-1);
    }
  };

  const onMouseDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { active: true, startX: e.pageX, scrollLeft: track.scrollLeft, moved: false };
  };

  const onMouseMove = (e) => {
    const state = dragState.current;
    const track = trackRef.current;
    if (!state.active || !track) return;
    const dx = e.pageX - state.startX;
    if (Math.abs(dx) > 4) state.moved = true;
    track.scrollLeft = state.scrollLeft - dx;
  };

  const endDrag = () => {
    dragState.current.active = false;
  };

  const onClickCapture = (e) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id={id} className="row" aria-labelledby={`${id}-title`}>
      <h2 className="row-title" id={`${id}-title`}>
        {title}
      </h2>

      <div className="row-viewport">
        <button
          type="button"
          className="row-arrow row-arrow-left"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll left"
        >
          &#8249;
        </button>

        <div
          className="row-track"
          ref={trackRef}
          tabIndex={0}
          role="group"
          aria-label={`${title} carousel`}
          onKeyDown={onKeyDown}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {cards.map((card, i) =>
            comingSoon ? (
              <ComingSoonMovieCard
                key={`${id}-${i}`}
                card={card}
                accent={accent}
                onOpen={onCardClick ? () => onCardClick({ ...card, accent, comingSoon: true }) : undefined}
              />
            ) : (
              <Card
                key={`${id}-${i}`}
                card={card}
                rowTag={tag}
                onOpen={onCardClick ? () => onCardClick(card) : undefined}
              />
            )
          )}
        </div>

        <button
          type="button"
          className="row-arrow row-arrow-right"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll right"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

const HERO_VIDEO_URL =
  'https://res.cloudinary.com/lcc2jgak/video/upload/v1789088796/Agent_Video_-_SCENE_1Image_1_depicts_the_luxury_penthouse_interior__and_the_woman_and_young_boy_stan.mp4';
const HERO_MUSIC_URL =
  'https://res.cloudinary.com/lcc2jgak/video/upload/v1789088784/Agent_Music_-_Epic_cinematic_movie-trailer_score__21_seconds__building_from_a_hushed__tense_low_stri.mp3';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [heroModal, setHeroModal] = useState(null); // null | 'story' | 'info'
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Browsers auto-pause off-screen/background video but don't auto-resume
  // it — bring it back when the tab is visible again so it keeps autoplaying.
  useEffect(() => {
    const onVisibilityChange = () => {
      const video = videoRef.current;
      if (video && document.visibilityState === 'visible' && video.paused) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  // The video is the authoritative clock. It has no native `loop` — when it
  // ends, we manually rewind both video and audio to 0 and restart them
  // together, so the audio never drifts onto its own independent loop cycle
  // (its native duration is ~21s vs. the video's ~20s, which would slowly
  // desync them if each looped on its own timeline).
  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return undefined;

    const restartTogether = () => {
      video.currentTime = 0;
      if (audio) audio.currentTime = 0;
      video.play().catch(() => {});
      if (audio && !muted) audio.play().catch(() => {});
    };

    // Safety net against mid-cycle drift (buffering stalls, differing
    // playback rates, etc.) — keep audio's position pinned to the video's.
    const resyncDrift = () => {
      if (!audio || audio.paused) return;
      const drift = Math.abs(video.currentTime - audio.currentTime);
      if (drift > 0.25) {
        audio.currentTime = video.currentTime;
      }
    };

    // Audio must never keep playing while the video isn't (e.g. the browser
    // auto-pausing background/off-screen video) — mirror video's play state
    // onto audio so it's never running on its own.
    const onVideoPause = () => {
      if (audio) audio.pause();
    };
    const onVideoPlay = () => {
      if (audio && !muted) {
        audio.currentTime = video.currentTime;
        audio.play().catch(() => {});
      }
    };

    video.addEventListener('ended', restartTogether);
    video.addEventListener('timeupdate', resyncDrift);
    video.addEventListener('pause', onVideoPause);
    video.addEventListener('play', onVideoPlay);
    return () => {
      video.removeEventListener('ended', restartTogether);
      video.removeEventListener('timeupdate', resyncDrift);
      video.removeEventListener('pause', onVideoPause);
      video.removeEventListener('play', onVideoPlay);
    };
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!audio) return;
    if (muted) {
      audio.pause();
    } else {
      // Jump audio to the video's current position so unmuting mid-loop
      // joins in sync rather than starting the track over from 0.
      if (video) audio.currentTime = video.currentTime;
      audio.play().catch(() => {
        // Autoplay with sound can still be blocked by the browser; the
        // button remains available for the visitor to try again.
      });
    }
  }, [muted]);

  return (
    <main>
      {/* NAV */}
      <header
        className="nav"
        style={{
          backgroundColor: scrolled ? '#0f0f0f' : 'transparent',
          borderBottomColor: scrolled ? '#333333' : 'transparent',
        }}
      >
        <div className="nav-inner">
          <a href="#top" className="logo">
            LEGACY HEIRESS
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.label === 'About' ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => setHeroModal('story')}
                  className="nav-link"
                  aria-haspopup="dialog"
                >
                  {link.label}
                </button>
              ) : (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              )
            )}

            <div className="nav-more">
              <button type="button" className="nav-link nav-more-toggle">
                More
              </button>
              <div className="nav-more-menu">
                <a href="#contact" className="nav-more-link">
                  Work With Me
                </a>
              </div>
            </div>

            <a href="#contact" className="nav-link nav-work-with-me">
              Work With Me
            </a>

            <button type="button" className="icon-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>
            <button type="button" className="icon-btn" aria-label="Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
              </svg>
            </button>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-overlay" role="dialog" aria-modal="true">
          <button
            type="button"
            className="mobile-overlay-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &#10005;
          </button>
          <nav className="mobile-overlay-nav">
            {[...NAV_LINKS, { label: 'Work With Me', href: '#contact' }].map((link) =>
              link.label === 'About' ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setHeroModal('story');
                  }}
                  className="mobile-overlay-link"
                  aria-haspopup="dialog"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-overlay-link"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}

      {/* HERO */}
      <section id="top" className="hero">
        {videoFailed ? (
          <img
            className="hero-image"
            src="/hero-penthouse.png"
            alt="A woman in a cream dress stands with her son, arm around his shoulder, looking out over the New York City skyline at golden hour from a high-rise penthouse."
          />
        ) : (
          <video
            ref={videoRef}
            className="hero-image"
            src={HERO_VIDEO_URL}
            poster="/hero-penthouse.png"
            autoPlay
            muted
            playsInline
            onError={() => setVideoFailed(true)}
            aria-label="Cinematic footage of a woman and her son overlooking the New York City skyline from a high-rise penthouse."
          />
        )}
        <audio ref={audioRef} src={HERO_MUSIC_URL} preload="auto" />
        <div className="hero-overlay-left" />
        <div className="hero-overlay-bottom" />

        <div className="hero-content">
          <p className="hero-tag">An Original Portfolio</p>
          <h1 className="hero-title">LEGACY HEIRESS</h1>
          <p className="hero-tagline">Career. Capital. Confidence. Legacy.</p>
          <div className="hero-actions">
            <button
              type="button"
              onClick={() => setHeroModal('story')}
              className="btn btn-primary"
              aria-haspopup="dialog"
            >
              Explore My Story
            </button>
            <button
              type="button"
              onClick={() => setHeroModal('info')}
              className="btn btn-secondary"
              aria-haspopup="dialog"
            >
              More Info
            </button>
          </div>
        </div>

        <button
          type="button"
          className="sound-toggle"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? 'Unmute' : 'Mute'}
          aria-pressed={!muted}
        >
          {muted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 9v6h4l5 5V4L8 9H4z" strokeLinejoin="round" />
              <line x1="16" y1="9" x2="22" y2="15" strokeLinecap="round" />
              <line x1="22" y1="9" x2="16" y2="15" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 9v6h4l5 5V4L8 9H4z" strokeLinejoin="round" />
              <path d="M16 8a5 5 0 0 1 0 8" strokeLinecap="round" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </section>

      {/* STREAMING ROWS */}
      {ROWS.map((row) => (
        <Row
          key={row.id}
          id={row.id}
          title={row.title}
          tag={row.tag}
          cards={row.cards}
          comingSoon={row.comingSoon}
          accent={row.accent}
          onCardClick={row.id === 'featured-projects' || row.comingSoon ? setActiveProject : undefined}
        />
      ))}

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      {heroModal === 'story' && (
        <InfoModal title="Explore My Story" paragraphs={STORY_PARAGRAPHS} onClose={() => setHeroModal(null)} />
      )}
      {heroModal === 'info' && (
        <InfoModal title="More Info" paragraphs={MORE_INFO_PARAGRAPHS} onClose={() => setHeroModal(null)} />
      )}

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <h4 className="footer-brand">LEGACY HEIRESS</h4>
        <a href="https://github.com/Znovia" target="_blank" rel="noreferrer" className="footer-github">
          GitHub
        </a>
        <p className="footer-copyright">&copy; 2026 LEGACY HEIRESS</p>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        main {
          background: #0f0f0f;
          min-height: 100vh;
        }

        /* NAV */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid transparent;
          transition: background-color 250ms ease-out, border-color 250ms ease-out;
        }

        .nav-inner {
          max-width: 1800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 60px;
        }

        .logo {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.01em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          background: none;
          border: none;
        }

        .nav-link:hover {
          color: #c41e3a;
          text-decoration: underline;
        }

        .nav-more {
          position: relative;
          display: none;
        }

        .nav-more-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          background: #0f0f0f;
          border: 1px solid #333333;
          border-radius: 4px;
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 150ms ease-out;
        }

        .nav-more:hover .nav-more-menu,
        .nav-more:focus-within .nav-more-menu {
          opacity: 1;
          visibility: visible;
        }

        .nav-more-link {
          display: block;
          white-space: nowrap;
          font-size: 14px;
          color: #ffffff;
          padding: 6px 10px;
        }

        .nav-more-link:hover {
          color: #c41e3a;
        }

        .icon-btn {
          background: none;
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          padding: 0;
        }

        .icon-btn:hover {
          color: #c41e3a;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          padding: 0;
          background: none;
          border: none;
        }

        .menu-toggle span {
          width: 22px;
          height: 2px;
          background: #ffffff;
        }

        /* MOBILE FULL-SCREEN MENU */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: #0f0f0f;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .mobile-overlay-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 22px;
        }

        .mobile-overlay-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .mobile-overlay-link {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          background: none;
          border: none;
        }

        .mobile-overlay-link:hover {
          color: #c41e3a;
        }

        /* HERO */
        .hero {
          position: relative;
          height: 700px;
          width: 100%;
          display: flex;
          align-items: center;
          padding-left: 60px;
          overflow: hidden;
          background-color: #0f0f0f;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .hero-overlay-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 35%, transparent 65%);
        }

        .hero-overlay-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 55%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 560px;
        }

        .hero-tag {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #d4af37;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 80px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
          text-align: left;
        }

        .hero-tagline {
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 36px;
          text-align: left;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .btn {
          font-size: 16px;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 4px;
          transition: transform 150ms ease-out, background-color 150ms ease-out;
          display: inline-flex;
          align-items: center;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .btn-primary {
          background: #c41e3a;
          color: #ffffff;
          border: none;
        }

        .btn-primary:hover {
          background: #a01731;
        }

        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .sound-toggle {
          position: absolute;
          right: 20px;
          bottom: 20px;
          z-index: 3;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(0, 0, 0, 0.4);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sound-toggle:hover {
          border-color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
        }

        /* ABOUT (modal prose, used by InfoModal) */
        .about-prose {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .about-prose p {
          font-size: 18px;
          font-weight: 400;
          color: #b3b3b3;
          line-height: 1.75;
        }

        /* ROWS */
        .row {
          padding: 80px 0 0;
        }

        .row-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px 60px;
        }

        .row-viewport {
          position: relative;
        }

        .row-viewport:hover .row-arrow {
          opacity: 1;
        }

        .row-track {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 0 60px;
          scrollbar-width: none;
          cursor: grab;
        }

        .row-track:active {
          cursor: grabbing;
        }

        .row-track::-webkit-scrollbar {
          display: none;
        }

        .row-arrow {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 56px;
          border: none;
          background: rgba(15, 15, 15, 0.7);
          color: #ffffff;
          font-size: 24px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 200ms ease-out, color 200ms ease-out;
          z-index: 10;
        }

        .row-arrow:hover {
          color: #c41e3a;
        }

        .row-arrow-left {
          left: 0;
        }

        .row-arrow-right {
          right: 0;
        }

        /* CARDS */
        .card {
          position: relative;
          flex: 0 0 320px;
          width: 320px;
          height: 180px;
          border-radius: 4px;
          overflow: visible;
          transition: transform 250ms ease-out;
          cursor: pointer;
          user-select: none;
        }

        .card:hover,
        .card:focus-visible {
          transform: scale(1.1);
          z-index: 20;
          outline: none;
        }

        .card-media {
          position: absolute;
          inset: 0;
          border-radius: 4px;
          overflow: hidden;
          background-color: #1a1a1a;
        }

        .card-texture {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: repeating-linear-gradient(
            135deg,
            #ffffff 0px,
            #ffffff 1px,
            transparent 1px,
            transparent 12px
          );
        }

        .card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card:hover .card-media,
        .card:focus-visible .card-media {
          border: 2px solid #c41e3a;
        }

        .card-category {
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: 2;
          background: #c41e3a;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 8px;
          line-height: 1;
          border-radius: 2px;
        }

        .card-base {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 14px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 55%);
          opacity: 1;
          transition: opacity 200ms ease-out;
          border-radius: 4px;
        }

        .card-base-title {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .card-hover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 4px;
          padding: 16px;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 250ms ease-out;
          border-radius: 4px;
        }

        .card:hover .card-base,
        .card:focus-visible .card-base {
          opacity: 0;
        }

        .card:hover .card-hover,
        .card:focus-visible .card-hover {
          opacity: 1;
        }

        .card-hover-title {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .card-hover-status {
          font-size: 13px;
          color: #ffffff;
        }

        .progress-track {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: rgba(255, 255, 255, 0.25);
          overflow: hidden;
          z-index: 3;
          border-radius: 0 0 4px 4px;
        }

        .progress-fill {
          height: 100%;
          background: #c41e3a;
        }

        /* COMING SOON MOVIE CARDS (rows 3-6) */
        .movie-card {
          position: relative;
          flex: 0 0 320px;
          width: 320px;
          height: 180px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: transform 250ms ease-out, border-color 250ms ease-out;
        }

        .movie-card:hover,
        .movie-card:focus-visible {
          transform: scale(1.05);
          border-color: var(--accent, #ffffff);
          z-index: 20;
          outline: none;
        }

        .movie-card-media {
          position: absolute;
          inset: 0;
          background-color: #1a1a1a;
        }

        .movie-card-fallback {
          width: 100%;
          height: 100%;
        }

        .movie-coming-soon-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          background: rgba(0, 0, 0, 0.5);
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 2px;
        }

        .movie-genre-tag {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 2;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 8px;
          line-height: 1;
          border-radius: 2px;
        }

        .movie-title-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 14px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 50%);
        }

        .movie-title {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .modal-coming-soon-banner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 4px solid #333333;
        }

        .modal-coming-soon-text {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
        }

        .coming-soon-pill {
          display: inline-flex;
          align-items: center;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border-radius: 999px;
          border: 1px solid currentColor;
        }

        /* FOOTER */
        .footer {
          background: #0f0f0f;
          border-top: 1px solid #333333;
          padding: 60px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .footer-brand {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.05em;
        }

        .footer-github {
          font-size: 14px;
          color: #ffffff;
        }

        .footer-github:hover {
          color: #c41e3a;
          text-decoration: underline;
        }

        .footer-copyright {
          margin-top: 12px;
          font-size: 11px;
          color: #b3b3b3;
        }

        /* PROJECT MODAL */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 3000;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modal-fade-in 200ms ease-out;
        }

        .modal-panel {
          position: relative;
          width: 100%;
          max-width: 720px;
          max-height: 90vh;
          overflow-y: auto;
          background: #1a1a1a;
          border: 1px solid #333333;
          border-radius: 6px;
          animation: modal-panel-in 220ms ease-out;
        }

        @keyframes modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-panel-in {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .modal-backdrop,
          .modal-panel {
            animation: none;
          }
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.6);
          color: #ffffff;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: #c41e3a;
        }

        .modal-image-wrap {
          width: 100%;
          aspect-ratio: 16 / 9;
          background-color: #0d0d0d;
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-image-fallback {
          width: 100%;
          height: 100%;
        }

        .modal-body {
          padding: 32px;
        }

        .modal-badges {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .modal-category {
          position: static;
        }

        .modal-status {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #c41e3a;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .modal-description {
          font-size: 16px;
          color: #b3b3b3;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .modal-block {
          margin-bottom: 20px;
        }

        .modal-block-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #d4af37;
          margin-bottom: 8px;
        }

        .modal-block p {
          font-size: 15px;
          color: #b3b3b3;
          line-height: 1.6;
        }

        .modal-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-features li {
          font-size: 15px;
          color: #b3b3b3;
          line-height: 1.5;
          padding-left: 16px;
          position: relative;
        }

        .modal-features li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 9px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c41e3a;
        }

        .modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tech-pill {
          font-size: 12px;
          font-weight: 500;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid #333333;
          padding: 5px 12px;
          border-radius: 999px;
        }

        .modal-github {
          font-size: 14px;
          padding: 12px 28px;
        }

        /* RESPONSIVE */
        @media (max-width: 1199px) {
          .nav-inner {
            padding: 14px 30px;
          }

          .nav-work-with-me {
            display: none;
          }

          .nav-more {
            display: block;
          }

          .hero {
            height: 600px;
          }

          .hero-title {
            font-size: 72px;
          }

          .row-title {
            font-size: 22px;
          }

          .nav-link {
            font-size: 15px;
          }
        }

        @media (max-width: 767px) {
          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .about-prose p {
            font-size: 16px;
          }

          .hero {
            height: 100vh;
            padding-left: 20px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-title {
            font-size: 48px;
          }

          .hero-tagline {
            font-size: 18px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .btn {
            justify-content: center;
          }

          .row-title {
            font-size: 18px;
            margin-left: 20px;
          }

          .row-track {
            padding: 0 20px;
          }

          .row-arrow {
            display: none;
          }

          .card-base-title,
          .card-hover-title,
          .movie-title {
            font-size: 14px;
          }

          .movie-coming-soon-badge {
            font-size: 14px;
            top: 12px;
            left: 12px;
          }

          .movie-genre-tag {
            top: 6px;
            right: 6px;
          }

          .footer {
            padding: 48px 20px 32px;
          }

          .modal-body {
            padding: 24px 20px;
          }

          .modal-title {
            font-size: 22px;
          }
        }
      `}</style>
    </main>
  );
}
