import { Globe, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialGroup {
  name: string;
  links: SocialLink[];
}

const socialGroups: SocialGroup[] = [
  {
    name: "SKIOLO",
    links: [
      {
        platform: "Website",
        url: "https://www.skiolo.com",
        icon: <Globe className="w-4 h-4" />,
      },
     {
        platform: "You Tube",
        url: "https://www.youtube.com/@skiolo_career_academy",
        icon: <Youtube className="w-4 h-4" />,
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/share/1CfpeDmRHy/",
        icon: <Facebook className="w-4 h-4" />,
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/skiolo_career_academy?igsh=MWdpMnU2Ym1scnBiNw==",
        icon: <Instagram className="w-4 h-4" />,
      },
    ],
  },
 

  {
    name: "JAFAR SADIQ",
    links: [
      {
        platform: "You Tube",
        url: "https://www.youtube.com/@jafar_puliyakkode",
        icon: <Youtube className="w-4 h-4" />,
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/jafar-sadiq-14b8945a",
        icon: <Linkedin className="w-4 h-4" />,
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/share/18MDUUTXCw/",
        icon: <Facebook className="w-4 h-4" />,
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/jafarskiolo?igsh=MWthbG81bmR2bm03cA%3D%3D&utm_source=ig_contact_invite",
        icon: <Instagram className="w-4 h-4" />,
      },
    ],
  },
];

const  SocialMediaGroups = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      {socialGroups.map((group) => (
        <div
          key={group.name}
          className="flex items-center justify-between w-full px-4 py-3 bg-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Business Name */}
          <h3 className="text-sm font-bold text-gray-900 flex-1">
            {group.name}
          </h3>
          {/* Social Links Icons */}
          <div className="flex items-center gap-3">
            {group.links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors"
                title={link.platform}
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaGroups;
