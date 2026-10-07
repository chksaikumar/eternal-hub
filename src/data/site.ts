export const PHONE_DISPLAY = '+91 85228 10360';
export const PHONE_RAW = '918522810360';
export const WHATSAPP = 'https://wa.me/918522810360';
export const INSTAGRAM = 'https://www.instagram.com/eternalhub.est2026';

export function waLink(message: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  id: string;
  name: string;
  line: string;
  blurb: string;
  detail: string;
  priceNote: string;
  art: 'logo-mount' | 'cutout' | 'led' | 'magnet' | 'divine' | 'returngift' | 'corporate';
  featured?: boolean;
};

export const LINES = [
  {
    id: 'logo-mounts',
    name: 'Acrylic Logo Mounts',
    tagline: 'Our hero product. From Rs 599.',
    blurb:
      'Premium 3D acrylic logos for shops, offices, clinics and showrooms. Raised letters with standoff mounts that make your brand look established from day one.',
    art: 'logo-mount' as const,
  },
  {
    id: 'cutout-frames',
    name: 'Cutout Acrylic Frames',
    tagline: 'Statement pieces, up to 1 ft x 2 ft.',
    blurb:
      'Photos, names and dates precision cut into stunning shapes. Bold 1 ft x 2 ft statement frames that become the centrepiece of any room.',
    art: 'cutout' as const,
  },
  {
    id: 'led-frames',
    name: 'LED Frames',
    tagline: 'Gifts that glow.',
    blurb:
      'Premium glowing frames with warm LED light. Your photo illuminated on crystal acrylic, a gift that lights up the room literally.',
    art: 'led' as const,
  },
  {
    id: 'magnets',
    name: 'Fridge Magnets',
    tagline: 'Small gifts, big smiles.',
    blurb:
      'Custom acrylic fridge magnets in any shape with strong hold and glossy finish. A customer favourite for everyday gifting.',
    art: 'magnet' as const,
  },
  {
    id: 'divine',
    name: 'Divine Collection',
    tagline: 'Lord Venkateshwara Swamy acrylic art.',
    blurb:
      'Premium acrylic art of Lord Venkateshwara Swamy for puja rooms and prayer corners. Crafted with devotion, finished with a divine golden glow.',
    art: 'divine' as const,
  },
  {
    id: 'return-gifts',
    name: 'Return Gifts',
    tagline: 'Weddings, birthdays, housewarmings.',
    blurb:
      'Thoughtful return gifts in any quantity. Personalised keepsakes your guests will actually keep, at prices that respect your event budget.',
    art: 'returngift' as const,
  },
  {
    id: 'corporate',
    name: 'Corporate and Bulk Gifting',
    tagline: 'Gifting at scale.',
    blurb:
      'Branded gifts for teams, clients and events. Logo engraved mementos, desk accessories and festive hampers with special bulk pricing.',
    art: 'corporate' as const,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'premium-logo-mount',
    name: 'Premium Acrylic Logo Mount',
    line: 'logo-mounts',
    blurb: 'Your business logo in raised 3D acrylic.',
    detail:
      'Our bestselling product. Laser cut 3D acrylic letters and logos with premium standoff mounts for reception walls, shop fronts and office cabins. From Rs 599. The fastest way to make any business look established.',
    priceNote: 'From Rs 599. Bulk pricing for shops and chains.',
    art: 'logo-mount',
    featured: true,
  },
  {
    id: 'cutout-statement-frame',
    name: 'Cutout Acrylic Photo Frame',
    line: 'cutout-frames',
    blurb: 'Bold 1 ft x 2 ft statement pieces.',
    detail:
      'Precision cutout frames in custom shapes, names, dates and silhouettes. The 1 ft x 2 ft statement size turns your favourite photo into wall art. Diamond polished edges, glass like shine.',
    priceNote: 'Budget friendly, custom shapes at no extra design cost.',
    art: 'cutout',
    featured: true,
  },
  {
    id: 'led-glow-frame',
    name: 'LED Photo Frame',
    line: 'led-frames',
    blurb: 'Your photo, beautifully illuminated.',
    detail:
      'Premium LED frame with your photo glowing on optical acrylic. Warm even light, clean concealed wiring and an elegant base. A gift that genuinely wows when the lights go down.',
    priceNote: 'Bestseller for birthdays and anniversaries.',
    art: 'led',
    featured: true,
  },
  {
    id: 'acrylic-fridge-magnets',
    name: 'Custom Acrylic Fridge Magnets',
    line: 'magnets',
    blurb: 'Photo magnets in any shape.',
    detail:
      'Custom shaped acrylic magnets with vivid UV print and strong hold. Perfect for everyday gifting, party favours and brand promotions in any quantity.',
    priceNote: 'Special rates for bulk orders.',
    art: 'magnet',
    featured: true,
  },
  {
    id: 'venkateshwara-art',
    name: 'Lord Venkateshwara Swamy Acrylic Art',
    line: 'divine',
    blurb: 'Divine art for puja rooms.',
    detail:
      'Premium acrylic art of Lord Venkateshwara Swamy, crafted for puja rooms and prayer corners. Rich golden tones on deep maroon, finished with a radiant divine glow. A sacred centrepiece for your home.',
    priceNote: 'Premium devotional finish, made with devotion.',
    art: 'divine',
    featured: true,
  },
  {
    id: 'wedding-return-gifts',
    name: 'Wedding Return Gifts',
    line: 'return-gifts',
    blurb: 'Keepsakes your guests will treasure.',
    detail:
      'Personalised return gifts for weddings: photo magnets, mini acrylic frames and custom keepsakes with the couple names and date. Any quantity, delivered before your big day.',
    priceNote: 'Event bulk pricing, planned around your date.',
    art: 'returngift',
    featured: true,
  },
  {
    id: 'corporate-bulk-gifts',
    name: 'Corporate Bulk Gifts',
    line: 'corporate',
    blurb: 'Branded gifts at scale.',
    detail:
      'Logo engraved corporate gifts: desk name plates, metal mementos, acrylic trophies and festive hampers for teams and clients. Consistent branding across every piece, special bulk pricing.',
    priceNote: 'Corporate bulk pricing on request.',
    art: 'corporate',
  },
  {
    id: 'birthday-return-gifts',
    name: 'Birthday Return Gifts',
    line: 'return-gifts',
    blurb: 'Party favours kids and adults love.',
    detail:
      'Fun personalised return gifts for birthdays: photo magnets, mini frames and custom keepsakes with the birthday star name. Ordered in bulk, delivered on time for the party.',
    priceNote: 'Bulk party pricing available.',
    art: 'returngift',
  },
  {
    id: 'housewarming-gifts',
    name: 'Housewarming Return Gifts',
    line: 'return-gifts',
    blurb: 'Blessings your guests take home.',
    detail:
      'Elegant return gifts for housewarmings and pujas, including pieces from our Divine Collection. Thoughtful keepsakes that carry your good wishes into every home.',
    priceNote: 'Curated sets for traditional functions.',
    art: 'divine',
  },
];

export const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Just send us your photo, logo or design on WhatsApp at +91 85228 10360. We confirm the design, size and price with you, then start crafting. No advance complications, no confusing website checkout.',
  },
  {
    q: 'Are you the manufacturer or a reseller?',
    a: 'We are the manufacturer. Every piece is cut, printed, engraved and finished in our own unit. That is why our quality is consistent and our prices stay budget friendly, with no middleman margin.',
  },
  {
    q: 'What does the Rs 599 price cover?',
    a: 'Our premium acrylic logo mounts start from Rs 599. Final pricing depends on size and design complexity. Every quote is shared upfront on WhatsApp before we begin, with no hidden charges.',
  },
  {
    q: 'Do you take bulk or corporate orders?',
    a: 'Yes, bulk and corporate gifting is a big part of what we do. Return gifts, event mementos, office branding and festive hampers in any quantity, with special bulk pricing.',
  },
  {
    q: 'How long does an order take?',
    a: 'Most personalised gifts are crafted within 2 to 4 working days after design approval. Bulk orders take a little longer depending on quantity. Share your deadline on WhatsApp and we will plan around it.',
  },
  {
    q: 'Do you deliver across India?',
    a: 'Yes, we ship safely packed orders across India. Every piece is packed with protective layers so your acrylic and LED gifts reach you in perfect condition.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sneha R.',
    place: 'Hyderabad',
    text: 'Ordered cutout frames for my parents anniversary. The finishing is so premium, it looks straight out of a luxury store. They were thrilled.',
  },
  {
    name: 'Arun K.',
    place: 'Bengaluru',
    text: 'Got acrylic logo mounts made for my clinic. Patients keep asking where I got them done. Factory direct pricing saved me a lot compared to local vendors.',
  },
  {
    name: 'Divya M.',
    place: 'Chennai',
    text: '200 fridge magnets as return gifts for my daughters birthday. Perfect print, quick delivery, and the kids loved them. Highly recommended.',
  },
];
