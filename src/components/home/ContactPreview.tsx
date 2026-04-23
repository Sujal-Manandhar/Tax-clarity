import { useState } from "react";
import { Send, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Tax Filing & Returns",
  "VAT Registration & Compliance",
  "Accounting & Bookkeeping",
  "Company Registration",
  "PAN / VAT Registration",
  "Audit & Financial Advisory",
  "Payroll & Compliance",
  "Other",
];

const ContactPreview = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Enquiry from ${formData.name} — ${formData.service}`,
    );
    const body = encodeURIComponent(
      `Hello TaxCare Nepal,\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service Needed: ${formData.service}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:info@TaxCare.com.np?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client",
      description: "Your message is ready to send to info@TaxCare.com.np",
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl text-center font-bold text-foreground">
          Send Us a Message
        </h2>
        <p className="text-muted-foreground text-center">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-border bg-card p-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Full Name *
            </label>
            <Input
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email *
            </label>
            <Input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Phone Number *
            </label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="+977 98XXXXXXXX"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Service Needed *
            </label>
            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData({ ...formData, service: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your needs..."
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <Button type="submit" size="lg" className="w-full gap-2">
          <Send className="h-4 w-4" />
          Send Message
        </Button>

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Lock className="h-4 w-4" />
          Your information stays confidential.
        </p>
      </form>
    </div>
  );
};

export default ContactPreview;
