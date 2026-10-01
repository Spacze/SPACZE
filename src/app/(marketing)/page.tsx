"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  ChevronDown,
  Menu,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Workflow,
  X,
} from "lucide-react";

const navigation = [
  {
    label: "Product",
    items: ["Storefront", "Catalog", "Orders", "Payments"],
  },
  {
    label: "Solutions",
    items: ["DTC brands", "Wholesale", "B2B", "Operations"],
  },
  {
    label: "Resources",
    items: ["Blog", "Case studies", "Docs", "Partners"],
  },
  { label: "Pricing", href: "#pricing" },
];

const featureCards = [
  {
    icon: Store,
    title: "Storefronts",
    description: "Design, launch, and tailor every storefront to feel unmistakably yours.",
  },
  {
    icon: Boxes,
    title: "Operations",
    description: "Keep products, pricing, and fulfillment moving in one coherent system.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Launch repeatable actions that keep teams moving without friction.",
  },
];

function BrandSymbol() {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={1254}
      height={1254}
      className="brand-symbol"
    />
  );
}

function BrandLockup() {
  return (
    <Image
      src="/images/logo-brand.png"
      alt="SPACZE"
      width={1448}
      height={1086}
      className="brand-lockup"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <main className="page-shell">
      <header className={`site-header${isScrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand-link" href="#top" aria-label="SPACZE home">
            <BrandLockup />
          </a>

          <nav className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) =>
              item.items ? (
                <div className="nav-item dropdown" key={item.label}>
                  <button className="nav-trigger" type="button">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  <div className="mega-menu" aria-label={`${item.label} links`}>
                    {item.items.map((link) => (
                      <a href="#" key={link} onClick={() => setMenuOpen(false)}>
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              )
            )}

            <div className="mobile-actions">
              <a href="#pricing" onClick={() => setMenuOpen(false)}>Log in</a>
              <a className="button button-light" href="#pricing" onClick={() => setMenuOpen(false)}>
                Get early access
                <ArrowUpRight size={15} />
              </a>
            </div>
          </nav>

          <div className="header-actions">
            <a className="login-link" href="#pricing">Log in</a>
            <a className="button button-light header-cta" href="#pricing">
              Get early access
              <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <motion.div className="eyebrow" {...reveal(0.05)}>
            <span className="eyebrow-icon">
              <Sparkles size={13} />
            </span>
            AI commerce operating system
          </motion.div>

          <motion.h1 {...reveal(0.1)}>
            Your commerce,
            <br />
            finally <span>in sync.</span>
          </motion.h1>

          <motion.p className="hero-description" {...reveal(0.18)}>
            Run your storefront, catalog, campaigns, and operations from one quiet,
            intelligent workspace built for modern commerce teams.
          </motion.p>

          <motion.div className="hero-actions" {...reveal(0.24)}>
            <a className="button button-primary" href="#pricing">
              Get early access
              <ArrowUpRight size={16} />
            </a>
            <a className="button button-secondary" href="#product">
              <Play size={15} />
              Watch demo
            </a>
          </motion.div>

          <motion.div className="social-proof" {...reveal(0.3)}>
            <div className="proof-pill">
              <ShieldCheck size={14} />
              Live ops for fast-moving brands
            </div>
            <div className="proof-metric">
              <strong>18%</strong>
              average lift in return shoppers
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-visual" {...reveal(0.18)}>
          <div
            className="hero-scene"
            role="img"
            aria-label="A storefront, product catalog, and order workflow coming together in SPACZE"
          >
            <div className="scene-light" />
            <div className="scene-line scene-line-one" />
            <div className="scene-line scene-line-two" />

            <div className="scene-card scene-storefront">
              <div className="scene-card-top">
                <span className="scene-indicator" />
                STOREFRONT
                <span className="scene-card-dots">•••</span>
              </div>
              <div className="scene-product">
                <div className="product-sculpture" />
                <div className="product-shadow" />
              </div>
              <div className="scene-card-caption">
                <span>STUDIO OBJECTS</span>
                <strong>New collection</strong>
              </div>
            </div>

            <div className="scene-card scene-catalog">
              <div className="scene-card-top">
                <span className="scene-indicator" />
                CATALOG
                <span className="scene-sync">SYNCED</span>
              </div>
              <div className="catalog-summary">
                <strong>128</strong>
                <span>products in sync</span>
              </div>
              <div className="catalog-bars" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>

            <div className="scene-card scene-order">
              <span className="order-icon"><ShoppingBag size={15} /></span>
              <span className="order-copy">
                <small>ORDER #2048</small>
                <strong>Ready to ship</strong>
              </span>
              <span className="order-check">✓</span>
            </div>

            <div className="scene-center">
              <div className="scene-logo">
                <BrandSymbol />
              </div>
              <span>ONE COMMERCE SYSTEM</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="feature-strip" id="product" aria-label="SPACZE platform capabilities">
        <span>Storefront</span>
        <span>Catalog</span>
        <span>Orders</span>
        <span>Campaigns</span>
        <span>Growth</span>
      </section>

      <section className="feature-grid">
        <motion.div className="section-heading" {...reveal()}>
          <div className="section-kicker">
            Built for the full commerce loop
            <span>01 — 03</span>
          </div>
          <h2>
            One system for every move,
            <br />
            from first click to repeat purchase.
          </h2>
        </motion.div>

        <div className="feature-cards">
          {featureCards.map(({ icon: Icon, title, description }, index) => (
            <motion.article className="feature-card" key={title} {...reveal(index * 0.08)}>
              <div className="card-icon">
                <Icon size={18} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#pricing" aria-label={`Learn more about ${title}`}>
                <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="pricing">
        <motion.div className="workflow-copy" {...reveal()}>
          <div className="section-kicker light-kicker">
            <Sparkles size={13} />
            Quietly powerful workflows
          </div>
          <h2>Let the busywork stay in the background.</h2>
          <p>
            Set rules once and let SPACZE handle the handoff between merchandising,
            campaigns, and customer follow-up without extra tools or guesswork.
          </p>
          <a className="button button-primary" href="#pricing">
            Request access
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.div className="workflow-panel" {...reveal(0.12)}>
          <div className="workflow-header">
            <span>
              <span className="live-dot" />
              Workflow live
            </span>
            <button type="button" aria-label="Workflow settings">
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="workflow-item">
            <div className="workflow-icon bag">
              <ShoppingBag size={16} />
            </div>
            <div>
              <small>Order placed</small>
              <strong>Customer completes checkout</strong>
            </div>
            <span className="workflow-check">✓</span>
          </div>

          <div className="workflow-line" aria-hidden="true" />

          <div className="workflow-item">
            <div className="workflow-icon spark">
              <Sparkles size={16} />
            </div>
            <div>
              <small>SPACZE takes over</small>
              <strong>Wait 48 hours, then send follow-up</strong>
            </div>
            <span className="workflow-check">✓</span>
          </div>

          <div className="workflow-line" aria-hidden="true" />

          <div className="workflow-item result-item">
            <div className="workflow-icon chart">
              <BarChart3 size={16} />
            </div>
            <div>
              <small>Outcome</small>
              <strong>Personalized thank-you flow sent</strong>
            </div>
            <span className="workflow-status">sent</span>
          </div>
        </motion.div>
      </section>

      <section className="closing-section">
        <motion.div className="closing-card" {...reveal()}>
          <span className="closing-kicker">A little more room to grow</span>
          <h2>
            Make space
            <br />
            for what&apos;s next.
          </h2>
          <p>SPACZE is opening its doors to a first wave of brands ready for a calmer way to scale.</p>
          <a className="button button-primary" href="mailto:hello@spacze.com?subject=SPACZE%20early%20access">
            Ask for early access
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
