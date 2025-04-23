interface App {
  name: string;
  desc: string;
  logo: React.ReactNode;
  category: string;
  connected: boolean;
}

export const apps: App[] = [
  {
    name: "AI Assistant",
    desc: "An intelligent assistant that helps with various tasks",
    logo: "🤖",
    category: "ai",
    connected: false
  },
  {
    name: "Analytics Dashboard",
    desc: "Real-time analytics and reporting platform for business insights",
    logo: "📊",
    category: "analytics",
    connected: false
  },
  {
    name: "E-commerce Platform",
    desc: "Complete e-commerce solution with inventory and payment management",
    logo: "🛒",
    category: "commerce",
    connected: false
  },
  {
    name: "Content Management",
    desc: "Comprehensive system to manage and publish digital content",
    logo: "📝",
    category: "content",
    connected: false
  },
  {
    name: "Data Warehouse",
    desc: "Centralized data storage and processing for business intelligence",
    logo: "🗄️",
    category: "data",
    connected: false
  },
  {
    name: "Marketing Automation",
    desc: "Automate and optimize marketing campaigns across channels",
    logo: "📢",
    category: "marketing",
    connected: false
  },
  {
    name: "Customer Support",
    desc: "Streamlined customer support and ticket management system",
    logo: "💬",
    category: "customer-support",
    connected: false
  }
];
