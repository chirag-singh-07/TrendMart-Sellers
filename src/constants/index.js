import { BarChart, ShoppingCart, Truck } from "lucide-react";

export const isLoggind = false;

export const user = {
  fullName: "Johan",
  email: "johan@gmail.com",
  profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
};

export const CartProductForTesting = [
  {
    productId: 1,
    name: "Product 1",
    size: "M",
    color: "Red",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=1",
  },
  {
    productId: 2,
    name: "Product 2",
    size: "L",
    color: "Blue",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=2",
  },
  {
    productId: 3,
    name: "Product 3",
    size: "L",
    color: "Blue",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=3",
  },
  {
    productId: 1,
    name: "Product 1",
    size: "M",
    color: "Red",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=1",
  },
  {
    productId: 2,
    name: "Product 2",
    size: "L",
    color: "Blue",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=2",
  },
  {
    productId: 3,
    name: "Product 3",
    size: "L",
    color: "Blue",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=3",
  },
  {
    productId: 1,
    name: "Product 1",
    size: "M",
    color: "Red",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=1",
  },
  {
    productId: 2,
    name: "Product 2",
    size: "L",
    color: "Blue",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=2",
  },
  {
    productId: 3,
    name: "Product 3",
    size: "L",
    color: "Blue",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200?random=3",
  },
];

export const landing_features = [
  {
    icon: ShoppingCart,
    title: "Product Management",
    description:
      "Easily add, edit, and organize your product catalog with our intuitive interface.",
  },
  {
    icon: Truck,
    title: "Order Tracking",
    description:
      "Monitor orders from placement to delivery, keeping your customers informed every step of the way.",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description:
      "Gain valuable insights into your sales performance with our comprehensive analytics tools.",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses starting out.",
    features: ["Up to 100 products", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$79",
    description: "For growing businesses that need advanced features.",
    features: [
      "Up to 1000 products",
      "Advanced analytics",
      "Priority support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large businesses with custom needs.",
    features: [
      "Unlimited products",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
    ],
  },
];

export const testimonials = [
  {
    name: "Alex Thompson",
    role: "E-commerce Entrepreneur",
    content:
      "TrackCommerce has revolutionized how I manage my online store. The product tracking feature is a game-changer!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Small Business Owner",
    content:
      "The analytics dashboard provides invaluable insights that have helped me make data-driven decisions for my business.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Dropshipping Expert",
    content:
      "As a dropshipper, the order tracking functionality has significantly reduced customer inquiries and improved satisfaction.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

export const steps = [
  {
    id: 1,
    title: "Add Your Product",
    text: "Register your product on our platform by adding images, descriptions, pricing, and stock availability. Ensure details are accurate for better visibility and customer engagement.",
  },
  {
    id: 2,
    title: "Receive Customer Orders",
    text: "Once a customer selects your product, an order is placed. You’ll get real-time notifications so you can process the request as quickly as possible.",
  },
  {
    id: 3,
    title: "Process & Prepare Shipment",
    text: "Verify stock availability and prepare the order for dispatch. Packaging should be secure and follow quality guidelines to prevent any damage during transit.",
  },
  {
    id: 4,
    title: "Ship the Product",
    text: "Once packed, schedule a shipment with a trusted courier. Tracking information will be shared with the customer for real-time updates.",
  },
  {
    id: 5,
    title: "Track & Deliver",
    text: "Monitor your shipment status until the product reaches the customer. Ensure timely delivery to maintain customer trust and satisfaction.",
  },
  {
    id: 6,
    title: "Update Inventory & Analyze Sales",
    text: "After the order is completed, inventory is automatically updated. Use sales analytics to track performance, identify trends, and optimize your business for future growth.",
  },
];
