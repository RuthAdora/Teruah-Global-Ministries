import { FaYoutube, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

// WhatsApp number: international format, digits only (+254 111 755 539 -> 254111755539)
export const WHATSAPP_NUMBER = "254111755539";
export const WHATSAPP_MESSAGE = "Hello Teruah Global Ministries, I would like to connect.";

export const SOCIALS = [
  {
    name: "TikTok",
    handle: "@apostle_steve_",
    desc: "Short teachings and daily encouragement.",
    action: "Follow on TikTok",
    href: "https://www.tiktok.com/@apostle_steve_?is_from_webapp=1&sender_device=pc",
    Icon: FaTiktok,
  },
  {
    name: "WhatsApp",
    handle: "+254 111 755 539",
    desc: "Message us directly for prayer or questions.",
    action: "Chat on WhatsApp",
    href: `https://wa.me/${+254111755539}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    Icon: FaWhatsapp,
  },
  {
    name: "Email",
    handle: "stephenmuthusi001@gmail.com",
    desc: "Write to us for partnership and invitations.",
    action: "Send an email",
    href: "mailto:stephenmuthusi001@gmail.com",
    Icon: MdOutlineEmail,
  },
  {
    name: "Facebook",
    handle: "Teruah Global Ministries",
    desc: "Updates, events, and community.",
    action: "Follow on Facebook",
    href: "https://web.facebook.com/profile.php?id=61579206504792",
    Icon: FaFacebookF,
  },
  {
    name: "YouTube",
    handle: "Teruah Global",
    desc: "Full sermons, teachings, and live services.",
    action: "Subscribe on YouTube",
    href: "https://www.youtube.com/@Teruahglobalministries",
    Icon: FaYoutube,
  },
];
