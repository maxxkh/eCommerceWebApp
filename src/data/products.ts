import { Product, Category } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Quantum Resonance Headphones',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Audio',
    description: 'Experience sound beyond reality with quantum-enhanced audio processing and neural synchronization technology.',
    features: ['Quantum Audio Processing', 'Neural Sync Technology', '72-hour Battery Life', 'Holographic Controls'],
    inStock: true,
    rating: 4.9,
    reviews: 847
  },
  {
    id: '2',
    name: 'Infinity Display Watch',
    price: 3899,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wearables',
    description: 'A timepiece that transcends dimensions with holographic display and temporal synchronization.',
    features: ['Holographic Display', 'Temporal Sync', 'Biometric Scanning', 'Wireless Charging'],
    inStock: true,
    rating: 4.8,
    reviews: 623
  },
  {
    id: '3',
    name: 'Cyber Vision Glasses',
    price: 4299,
    originalPrice: 4799,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Vision',
    description: 'Augmented reality glasses that overlay digital information seamlessly onto your world.',
    features: ['AR Display', 'Eye Tracking', 'Voice Commands', 'AI Assistant'],
    inStock: true,
    rating: 4.7,
    reviews: 412
  },
  {
    id: '4',
    name: 'Neural Interface Keyboard',
    price: 1899,
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Computing',
    description: 'Mind-controlled typing with haptic feedback and predictive text algorithms.',
    features: ['Neural Input', 'Haptic Feedback', 'Predictive AI', 'Wireless Connection'],
    inStock: false,
    rating: 4.6,
    reviews: 289
  },
  {
    id: '5',
    name: 'Holographic Projector',
    price: 8999,
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Display',
    description: 'Create stunning 3D holograms that float in mid-air with photon manipulation technology.',
    features: ['3D Holography', 'Photon Manipulation', '360° Viewing', 'Touch Interaction'],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '6',
    name: 'Quantum Smartphone',
    price: 5499,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile',
    description: 'The ultimate communication device with quantum encryption and AI consciousness.',
    features: ['Quantum Encryption', 'AI Consciousness', 'Wireless Charging', 'Biometric Lock'],
    inStock: true,
    rating: 4.8,
    reviews: 934
  }
];

export const categories: Category[] = [
  {
    id: 'audio',
    name: 'Quantum Audio',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 24
  },
  {
    id: 'wearables',
    name: 'Neural Wearables',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 18
  },
  {
    id: 'vision',
    name: 'Cyber Vision',
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 12
  },
  {
    id: 'computing',
    name: 'Quantum Computing',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 31
  }
];