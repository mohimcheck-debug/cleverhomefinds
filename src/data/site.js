// ---------------------------------------------------------------
// EDIT THIS FILE FIRST. Everything brand-wide lives here.
// ---------------------------------------------------------------
export const site = {
  name: 'Clever Home Finds',
  tagline: 'Kitchen and home gadgets that actually earn their spot.',
  // Your Amazon Associates tracking ID (looks like yourname-20).
  // Used for any product that doesn't have its own SiteStripe link yet.
  amazonTag: 'YOURTAG-20',
  instagram: 'https://instagram.com/cleverhomefinds',
  tiktok: 'https://tiktok.com/@cleverhomefinds',
  pinterest: 'https://pinterest.com/cleverhomefinds',
  youtube: 'https://youtube.com/@cleverhomefinds',
  facebook: 'https://facebook.com/cleverhomefinds',
  email: 'hello.cleverhomefinds@gmail.com',
};

// Categories. Add smart home / desk setup / tech later by flipping
// hidden to false. Keep the ids in sync with public/admin/config.yml.
export const categories = [
  { id: 'kitchen', name: 'Kitchen gadgets', emoji: '🍳', blurb: 'Tools that make cooking faster, cleaner and less guessy.' },
  { id: 'cleaning', name: 'Cleaning', emoji: '🧽', blurb: 'Stuff that makes the worst chores take half the time.' },
  { id: 'organization', name: 'Organization', emoji: '🗂️', blurb: 'Drawers, cabinets and counters, sorted for good.' },
  { id: 'smart-home', name: 'Smart home', emoji: '💡', blurb: 'Smart plugs, lights and helpers for the house.', hidden: true },
  { id: 'desk-setup', name: 'Desk setup', emoji: '🖥️', blurb: 'Upgrades for the place you work every day.', hidden: true },
  { id: 'tech-finds', name: 'Tech finds', emoji: '🔌', blurb: 'Small tech that solves real annoyances.', hidden: true },
];

export const visibleCategories = categories.filter((c) => !c.hidden);

export function amazonLink(product) {
  if (product.amazonUrl) return product.amazonUrl;
  const q = encodeURIComponent(product.searchQuery || product.title);
  return `https://www.amazon.com/s?k=${q}&tag=${site.amazonTag}`;
}

export const disclosure =
  'As an Amazon Associate I earn from qualifying purchases. If you buy through a link here, I may earn a small commission at no extra cost to you.';
