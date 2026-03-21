const footerLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Shipping Info', href: '#' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-glow-outline-variant/15 bg-glow-surface-container-low">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-8 py-16">
        <div className="font-jakarta text-lg font-bold text-glow-on-surface">GLOW CURATOR</div>
        <div className="flex flex-wrap justify-center gap-10">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-jakarta text-sm text-glow-on-surface-variant transition-colors hover:text-glow-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-6">
          <span className="material-symbols-outlined cursor-pointer text-glow-on-surface-variant transition-colors hover:text-glow-primary">
            social_leaderboard
          </span>
          <span className="material-symbols-outlined cursor-pointer text-glow-on-surface-variant transition-colors hover:text-glow-primary">
            camera
          </span>
          <span className="material-symbols-outlined cursor-pointer text-glow-on-surface-variant transition-colors hover:text-glow-primary">
            movie
          </span>
        </div>
        <div className="font-jakarta text-sm text-glow-on-surface-variant/60">
          &copy; 2024 GLOW CURATOR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
