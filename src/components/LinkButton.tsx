import { ExternalLink } from "lucide-react";

interface LinkButtonProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

const LinkButton = ({ title, url, icon }: LinkButtonProps) => {
  return (
    <a
      href={url}  
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-full px-6 py-4 bg-link border border-link-border rounded-2xl text-foreground font-medium text-sm hover:bg-link-hover transition-colors"
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{title}</span>
    </a>
  );
};

export default LinkButton;
