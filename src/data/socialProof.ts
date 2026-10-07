// ---------------------------------------------------------------------------
// SAMPLE social proof entries for the "recent order" toast widget.
//
// These are placeholder entries so the site looks alive on launch.
// The business owner should replace them with real order data over time.
// Each entry: customer first name, city, product line id, product label,
// and a human friendly time label.
// ---------------------------------------------------------------------------

export type SocialProofEntry = {
  name: string;
  city: string;
  line: 'logo-mount' | 'cutout' | 'led' | 'magnet' | 'divine' | 'returngift' | 'corporate';
  product: string;
  time: string;
};

export const SOCIAL_PROOF_ENTRIES: SocialProofEntry[] = [
  { name: 'Ananya', city: 'Bengaluru', line: 'cutout', product: 'Cutout Acrylic Frame', time: '2 hours ago' },
  { name: 'Rohit', city: 'Hyderabad', line: 'logo-mount', product: 'Acrylic Logo Mount', time: '5 hours ago' },
  { name: 'Priya', city: 'Chennai', line: 'led', product: 'LED Photo Frame', time: '8 hours ago' },
  { name: 'Vikram', city: 'Mumbai', line: 'magnet', product: 'Fridge Magnets (50 pcs)', time: '12 hours ago' },
  { name: 'Lakshmi', city: 'Hyderabad', line: 'divine', product: 'Venkateshwara Acrylic Art', time: 'yesterday' },
  { name: 'Arjun', city: 'Delhi', line: 'returngift', product: 'Wedding Return Gifts (200 pcs)', time: 'yesterday' },
  { name: 'Sneha', city: 'Pune', line: 'corporate', product: 'Corporate Gift Sets', time: '2 days ago' },
  { name: 'Karthik', city: 'Chennai', line: 'logo-mount', product: 'Acrylic Logo Mount', time: '2 days ago' },
  { name: 'Divya', city: 'Bengaluru', line: 'returngift', product: 'Birthday Return Gifts', time: '3 days ago' },
  { name: 'Manoj', city: 'Hyderabad', line: 'led', product: 'LED Name Plate', time: '3 days ago' },
  { name: 'Pooja', city: 'Mumbai', line: 'cutout', product: 'Cutout Acrylic Frame', time: '4 days ago' },
  { name: 'Suresh', city: 'Delhi', line: 'divine', product: 'Divine Acrylic Art Set', time: '5 days ago' },
];
