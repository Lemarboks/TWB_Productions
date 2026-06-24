export type EquipmentItem = {
  slug: string;
  name: string;
  category: "DJ equipment" | "Wireless audio" | "Lighting";
  image: string;
  alt: string;
  description: string;
  features: string[];
};

export const equipment: EquipmentItem[] = [
  { slug: "pioneer-xdj-rr", name: "Pioneer XDJ-RR", category: "DJ equipment", image: "/assets/equipment-dj-controller-1.png", alt: "Pioneer XDJ-RR DJ controller available for hire", description: "A compact all-in-one DJ system with professional performance controls, USB playback and Rekordbox support—ideal for mobile setups and private events.", features: ["All-in-one controller and mixer", "USB and Rekordbox playback", "Available with setup support"] },
  { slug: "pioneer-xdj-xz", name: "Pioneer XDJ-XZ", category: "DJ equipment", image: "/assets/equipment-dj-controller-2.png", alt: "Pioneer XDJ-XZ controller and mixer system", description: "An industry-standard all-in-one system offering the precision, familiar layout and reliability expected in professional booths and high-energy events.", features: ["Professional four-channel layout", "Club-standard performance controls", "Available with complete sound packages"] },
  { slug: "wireless-microphone-kit", name: "Wireless Microphone Kit", category: "Wireless audio", image: "/assets/equipment-wireless-mics-1.png", alt: "Wireless microphone system available for hire", description: "A dependable handheld wireless system for speeches, MCs, ceremonies, panels and event announcements.", features: ["Handheld microphone and receiver", "Suitable for corporate and private events", "Can be paired with PA hire"] },
  { slug: "dual-wireless-microphone-kit", name: "Dual Wireless Microphone Kit", category: "Wireless audio", image: "/assets/equipment-wireless-mics-2.png", alt: "Dual wireless microphone receiver and handheld microphones", description: "Two wireless handheld microphones with a shared receiver for interviews, panels, ceremonies and co-hosted events.", features: ["Two handheld transmitters", "Dual-channel receiver", "Event setup support available"] },
  { slug: "wireless-handheld-system", name: "Wireless Handheld System", category: "Wireless audio", image: "/assets/equipment-wireless-mics-3.png", alt: "Wireless handheld microphone kit with receiver", description: "A flexible wireless voice system that keeps stages and presentation areas clean while giving presenters room to move.", features: ["Clear wireless voice coverage", "Compact receiver system", "Short event rentals available"] },
  { slug: "moving-head-light", name: "Moving Head Light", category: "Lighting", image: "/assets/equipment-moving-head.png", alt: "Moving head lighting fixture available for hire", description: "A dynamic moving fixture for colour, movement and visual energy across stages, venues and dance floors.", features: ["Programmable movement and colour", "Ideal for stages and dance floors", "Standalone or packaged rental"] },
  { slug: "led-par-light", name: "LED Par Light", category: "Lighting", image: "/assets/equipment-par-light.png", alt: "LED par lighting fixture available for hire", description: "A versatile LED wash fixture for ambient colour, stage coverage and room transformations at private and public events.", features: ["Rich colour wash", "Low-profile and versatile", "Available in lighting packages"] },
];

export function getEquipment(slug: string) {
  return equipment.find((item) => item.slug === slug);
}
