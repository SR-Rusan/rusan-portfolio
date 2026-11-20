export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI Automation",
    description:
      "Building intelligent automations that connect tools, eliminate repetitive work, and help businesses operate more efficiently.",
  },
  {
    id: "workflow-automation",
    number: "02",
    title: "Workflow Automation",
    description:
      "Designing automated workflows that handle repetitive processes, move information between platforms, and reduce unnecessary manual work.",
  },
  {
    id: "ai-consultancy",
    number: "03",
    title: "AI Consultancy",
    description:
      "Helping businesses identify practical AI opportunities, choose the right tools, and implement intelligent solutions that improve efficiency, automate processes, and support growth.",
  },
  {
    id: "ai-powered-websites",
    number: "04",
    title: "AI-Powered Websites",
    description:
      "Creating modern websites enhanced with AI-powered features, integrations, and interactive experiences tailored to specific business needs.",
  },
  {
    id: "digital-solutions",
    number: "05",
    title: "Digital Solutions",
    description:
      "Turning business ideas into practical digital systems by combining websites, automations, APIs, and modern AI tools.",
  },
];
