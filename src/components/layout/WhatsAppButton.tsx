import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "9779823405140";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'd like to inquire about your tax and accounting services.");

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
