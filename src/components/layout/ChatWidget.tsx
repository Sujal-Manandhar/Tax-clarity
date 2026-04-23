import { useState, useRef, useEffect } from "react";
import { X, MessageSquare, Send, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

// Types

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
}

interface Reply {
  label: string;
  action: string;
}

type InputMode = "none" | "name" | "email" | "phone" | "message";

interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

// Conversation menus

const MAIN_MENU: Reply[] = [
  { label: "📄 File My Taxes", action: "FILE_TAXES" },
  { label: "🏢 Business Tax Services", action: "BUSINESS_TAX" },
  { label: "📅 Tax Deadlines", action: "DEADLINES" },
  { label: "💬 Speak to an Expert", action: "LEAD_START" },
  { label: "❓ General FAQ", action: "FAQ_MENU" },
];

const BUSINESS_MENU: Reply[] = [
  { label: "🏛️ Corporate Tax", action: "CORP_TAX" },
  { label: "🧾 VAT Consulting", action: "VAT_SERVICE" },
  { label: "📊 Audit & Compliance", action: "AUDIT_SERVICE" },
  { label: "👥 Payroll Management", action: "PAYROLL_SERVICE" },
  { label: "📋 PAN / VAT Registration", action: "REG_SERVICE" },
  { label: "← Main menu", action: "MAIN_MENU" },
];

const FAQ_REPLIES: Reply[] = [
  { label: "🪪 Do I need a PAN?", action: "FAQ_PAN" },
  { label: "🧾 What is VAT?", action: "FAQ_VAT" },
  { label: "💰 How much tax do I pay?", action: "FAQ_HOW_MUCH" },
  { label: "📅 What is advance tax?", action: "FAQ_ADVANCE" },
  { label: "🏛️ NGO / INGO tax rules?", action: "FAQ_NGO" },
  { label: "← Main menu", action: "MAIN_MENU" },
];

const SERVICE_CHOICES: Reply[] = [
  { label: "Personal Tax Filing", action: "LEAD_SVC_PERSONAL" },
  { label: "Corporate Tax", action: "LEAD_SVC_CORP" },
  { label: "VAT / GST", action: "LEAD_SVC_VAT" },
  { label: "Audit & Compliance", action: "LEAD_SVC_AUDIT" },
  { label: "Payroll", action: "LEAD_SVC_PAYROLL" },
  { label: "Other / Not Sure", action: "LEAD_SVC_OTHER" },
];

const BACK_TO_MAIN: Reply[] = [
  { label: "💬 Speak to an Expert", action: "LEAD_START" },
  { label: "← Main menu", action: "MAIN_MENU" },
];

const AFTER_FAQ: Reply[] = [
  { label: "❓ More questions", action: "FAQ_MENU" },
  { label: "💬 Speak to an Expert", action: "LEAD_START" },
  { label: "← Main menu", action: "MAIN_MENU" },
];

// Main component

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [inputMode, setInputMode] = useState<InputMode>("none");
  const [inputValue, setInputValue] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("Type here…");

  const panelRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const generationRef = useRef(0);
  const leadRef = useRef<LeadData>({});
  const initialized = useRef(false);

  // Auto-scroll messages into view
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when capture mode changes
  useEffect(() => {
    if (inputMode !== "none") {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [inputMode]);

  // Initialize on first open
  useEffect(() => {
    if (open && !initialized.current) {
      initialized.current = true;
      handleAction("GREETING");
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Dismiss on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Message queue with typing delay

  /** Queue bot messages with a typing delay between each one. */
  const sendMessages = (botMsgs: string[], onComplete?: () => void) => {
    const gen = generationRef.current;
    setReplies([]);
    setInputMode("none");

    let delay = 0;

    botMsgs.forEach((text, i) => {
      const typingDur = 500 + Math.min(text.length * 2, 300);

      setTimeout(() => {
        if (generationRef.current !== gen) return;
        setTyping(true);
      }, delay);

      delay += typingDur;
      const msgAt = delay;

      setTimeout(() => {
        if (generationRef.current !== gen) return;
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: `${gen}-${i}-${Date.now()}`, from: "bot", text },
        ]);
        if (i === botMsgs.length - 1) onComplete?.();
      }, msgAt);

      delay += 120;
    });
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, from: "user", text },
    ]);
  };

  const reset = () => {
    generationRef.current++;
    leadRef.current = {};
    setMessages([]);
    setReplies([]);
    setTyping(false);
    setInputMode("none");
    setInputValue("");
    setTimeout(() => handleAction("GREETING"), 80);
  };

  // Conversation action handler

  const handleAction = (action: string, userMsg?: string) => {
    if (userMsg) addUserMessage(userMsg);

    switch (action) {

      case "GREETING":
        sendMessages(
          [
            "👋 Hello! I'm TC, the TaxCare Nepal virtual assistant.",
            "I can help with tax filing, deadlines, service information, and Nepal-specific tax questions. What can I help you with today?",
          ],
          () => setReplies(MAIN_MENU)
        );
        break;

      case "MAIN_MENU":
        sendMessages(
          ["Sure! Here's what I can help you with."],
          () => setReplies(MAIN_MENU)
        );
        break;

      case "FILE_TAXES":
        sendMessages(
          [
            "Tax filing in Nepal is straightforward with the right guidance. 📄",
            "Individual income tax returns are due by Asar 15 (mid-July). Company tax returns are due by Ashwin 15 (mid-October) each fiscal year.",
            "What would you like to know more about?",
          ],
          () =>
            setReplies([
              { label: "📁 Documents needed", action: "FILE_TAXES_DOCS" },
              { label: "💰 Tax rates", action: "FILE_TAXES_RATES" },
              { label: "🗓️ Book a consultation", action: "LEAD_START" },
              { label: "← Main menu", action: "MAIN_MENU" },
            ])
        );
        break;

      case "FILE_TAXES_DOCS":
        sendMessages(
          [
            "For a standard personal income tax return you will typically need:",
            "• PAN card\n• Salary slips or income proof\n• Bank statements (all accounts)\n• Investment details (insurance, mutual funds, retirement fund)\n• Rental income records (if any)\n• Foreign income details (if applicable)",
            "Our team can guide you through exactly what applies to your situation.",
          ],
          () => setReplies(BACK_TO_MAIN)
        );
        break;

      case "FILE_TAXES_RATES":
        sendMessages(
          [
            "Nepal individual income tax rates for FY 2080/81:",
            "• Up to NPR 6,00,000 — 1%\n• NPR 6,00,001 – 8,00,000 — 10%\n• NPR 8,00,001 – 11,00,000 — 20%\n• Above NPR 11,00,000 — 30%",
            "Married couples enjoy a higher threshold. An additional 10% tax applies to foreign employment income. Our tax planning service can help you minimise your liability legally.",
          ],
          () => setReplies(BACK_TO_MAIN)
        );
        break;

      case "BUSINESS_TAX":
        sendMessages(
          [
            "We offer comprehensive business tax services for companies, NGOs, and startups across Nepal. 🏢",
            "Which area are you interested in?",
          ],
          () => setReplies(BUSINESS_MENU)
        );
        break;

      case "CORP_TAX":
        sendMessages(
          [
            "Corporate tax in Nepal applies at the following rates:",
            "• Standard companies: 25%\n• Manufacturing companies: 20%\n• Special industries (IT, hydropower, tourism): 15%\n• Banks & financial institutions: 30%",
            "Corporate tax returns are due by Ashwin 15. Advance tax is payable in two installments — Poush 15 and Chaitra 15. We handle full compliance from computation to IRD filing.",
          ],
          () =>
            setReplies([
              { label: "💬 Get a quote", action: "LEAD_START" },
              { label: "← Business services", action: "BUSINESS_TAX" },
              { label: "← Main menu", action: "MAIN_MENU" },
            ])
        );
        break;

      case "VAT_SERVICE":
        sendMessages(
          [
            "VAT (Value Added Tax) in Nepal is charged at 13% on the supply of goods and services. 🧾",
            "Businesses with annual turnover above NPR 50 lakh must register for VAT. Monthly VAT returns are due within 25 days of month end.",
            "We provide complete VAT registration, return filing, reconciliation, and IRD representation services.",
          ],
          () =>
            setReplies([
              { label: "💬 Get a quote", action: "LEAD_START" },
              { label: "← Business services", action: "BUSINESS_TAX" },
              { label: "← Main menu", action: "MAIN_MENU" },
            ])
        );
        break;

      case "AUDIT_SERVICE":
        sendMessages(
          [
            "Audit & compliance services ensure your business meets all statutory requirements under the Nepal Companies Act and income tax law. ✅",
            "We provide statutory audit, tax audit, internal audit, and IRD dispute representation. Audit reports must be submitted by Poush 15.",
            "We are an ICAN member firm and authorised to sign audit reports for companies, NGOs, and INGOs.",
          ],
          () =>
            setReplies([
              { label: "💬 Get a quote", action: "LEAD_START" },
              { label: "← Business services", action: "BUSINESS_TAX" },
              { label: "← Main menu", action: "MAIN_MENU" },
            ])
        );
        break;

      case "PAYROLL_SERVICE":
        sendMessages(
          [
            "Our payroll compliance service covers salary computation, TDS deduction and deposit, PF / CIT registration, and monthly payroll reporting. 👥",
            "TDS on salary must be deposited within 25 days of month end. We guarantee 100% on-time compliance and handle all Inland Revenue Department (IRD) correspondence.",
          ],
          () =>
            setReplies([
              { label: "💬 Get a quote", action: "LEAD_START" },
              { label: "← Business services", action: "BUSINESS_TAX" },
              { label: "← Main menu", action: "MAIN_MENU" },
            ])
        );
        break;

      case "REG_SERVICE":
        sendMessages(
          [
            "We handle PAN & VAT registration, business registration, and company incorporation with the Office of Company Registrar (OCR). 📋",
            "We manage all paperwork and government office visits so you can focus on launching your business — usually completed within 7–14 business days.",
          ],
          () =>
            setReplies([
              { label: "💬 Get a quote", action: "LEAD_START" },
              { label: "← Business services", action: "BUSINESS_TAX" },
              { label: "← Main menu", action: "MAIN_MENU" },
            ])
        );
        break;

      case "DEADLINES":
        sendMessages(
          [
            "Here are the key Nepal tax deadlines (Nepali FY starts Shrawan 1): 📅",
            "• Individual income tax: Asar 15 (mid-July)\n• Corporate income tax: Ashwin 15 (mid-Oct)\n• Advance tax — 1st: Poush 15 (mid-Jan)\n• Advance tax — 2nd: Chaitra 15 (late March)\n• Monthly VAT return: 25 days after month end\n• TDS deposit: 25 days after month end\n• Audit report: Poush 15\n• PAN registration: required before starting any business — no fixed annual deadline, but must be obtained prior to first transaction",
            "Missing deadlines incurs penalties and interest. Our team ensures you never miss a date — would you like us to set up a compliance calendar for your business?",
          ],
          () =>
            setReplies([
              { label: "✅ Set up compliance tracking", action: "LEAD_START" },
              { label: "← Main menu", action: "MAIN_MENU" },
            ])
        );
        break;

      case "FAQ_MENU":
        sendMessages(
          ["Here are some common tax questions. Select one for an answer: ❓"],
          () => setReplies(FAQ_REPLIES)
        );
        break;

      case "FAQ_PAN":
        sendMessages(
          [
            "PAN (Permanent Account Number) is mandatory in Nepal for anyone with taxable income, all business owners, and those opening bank accounts. 🪪",
            "Individuals can apply online via the IRD e-filing portal (ird.gov.np) or visit any IRD office. For businesses, PAN must be obtained before starting operations.",
            "We assist with PAN registration and any corrections to existing PAN records.",
          ],
          () => setReplies(AFTER_FAQ)
        );
        break;

      case "FAQ_VAT":
        sendMessages(
          [
            "VAT (Value Added Tax) is a 13% consumption tax levied on goods and services in Nepal. It replaced Sales Tax in 1997. 🧾",
            "Businesses with annual turnover above NPR 50 lakh (NPR 5 million) must register for VAT. Some items are VAT exempt — including basic food, education, health services, and agriculture.",
            "Voluntary registration is also allowed for businesses below the threshold.",
          ],
          () => setReplies(AFTER_FAQ)
        );
        break;

      case "FAQ_HOW_MUCH":
        sendMessages(
          [
            "Your tax amount depends on your total income and its type. Nepal uses a progressive income tax system. 💰",
            "Individual tax rates (FY 2080/81):\n• Up to NPR 6L — 1%\n• NPR 6L–8L — 10%\n• NPR 8L–11L — 20%\n• Above NPR 11L — 30%\n\nCorporate standard rate: 25%.",
            "Our tax planning service can legally minimise your liability through investments, deductions, and timing strategies.",
          ],
          () => setReplies(AFTER_FAQ)
        );
        break;

      case "FAQ_ADVANCE":
        sendMessages(
          [
            "Advance tax (Peshgi Kar) is paid in installments before your annual return, and applies when your estimated annual tax liability exceeds NPR 7,500. 📅",
            "Installment schedule:\n• 1st installment (Poush 15): 40% of estimated annual tax\n• 2nd installment (Chaitra 15): 70% cumulative\n• Final (Asar 15 for individuals / Ashwin 15 for companies): 100%",
            "Missing installments attracts 15% annual interest. We calculate and file all advance tax payments on your behalf.",
          ],
          () => setReplies(AFTER_FAQ)
        );
        break;

      case "FAQ_NGO":
        sendMessages(
          [
            "NGOs and INGOs in Nepal have specific tax obligations. While they may be exempt from income tax on grants and donations, they must register with SWC, file annual tax returns, and comply fully with TDS and payroll rules. 🏛️",
            "INGOs must additionally comply with FCGO (Financial Comptroller General's Office) reporting and MOFA registration requirements.",
            "We are an SWC-authorised auditor and work with 50+ NGOs/INGOs across Nepal.",
          ],
          () => setReplies(AFTER_FAQ)
        );
        break;

      case "LEAD_START":
        leadRef.current = {};
        sendMessages(
          [
            "Connecting you with our team — we'll reach out shortly. 🤝",
            "Let me take a few quick details so we can follow up. First — what is your full name?",
          ],
          () => {
            setInputMode("name");
            setInputPlaceholder("Your full name…");
          }
        );
        break;

      // Service choices after phone captured
      case "LEAD_SVC_PERSONAL":
      case "LEAD_SVC_CORP":
      case "LEAD_SVC_VAT":
      case "LEAD_SVC_AUDIT":
      case "LEAD_SVC_PAYROLL":
      case "LEAD_SVC_OTHER": {
        const svcMap: Record<string, string> = {
          LEAD_SVC_PERSONAL: "Personal Tax Filing",
          LEAD_SVC_CORP: "Corporate Tax",
          LEAD_SVC_VAT: "VAT / GST",
          LEAD_SVC_AUDIT: "Audit & Compliance",
          LEAD_SVC_PAYROLL: "Payroll",
          LEAD_SVC_OTHER: "General / Other",
        };
        const svcLabel = svcMap[action] || "General";
        addUserMessage(svcLabel);
        leadRef.current.service = svcLabel;
        sendMessages(
          [
            `Got it — ${svcLabel}. 👍`,
            "Almost done! Briefly describe your situation or question (or press Skip).",
          ],
          () => {
            setInputMode("message");
            setInputPlaceholder("Brief description (optional)…");
            setReplies([{ label: "⏭️ Skip — send my details", action: "LEAD_SKIP_MSG" }]);
          }
        );
        break;
      }

      case "LEAD_SKIP_MSG":
        leadRef.current.message = "";
        completeLead();
        break;

      case "CALL_NOW":
        window.location.href = "tel:+9779823405140";
        break;

      default:
        sendMessages(
          ["I'm not sure I understand. Let me take you back to the main menu."],
          () => setReplies(MAIN_MENU)
        );
    }
  };

  const completeLead = () => {
    const data = leadRef.current;
    const subject = encodeURIComponent(
      `Chatbot Enquiry from ${data.name || "Visitor"} — ${data.service || "General"}`
    );
    const body = encodeURIComponent(
      `New consultation request via TaxCare Nepal chatbot:\n\n` +
        `Name: ${data.name || "Not provided"}\n` +
        `Email: ${data.email || "Not provided"}\n` +
        `Phone: ${data.phone || "Not provided"}\n` +
        `Service: ${data.service || "Not specified"}\n\n` +
        `Message:\n${data.message || "No message provided"}`
    );

    sendMessages(
      [
        `Thank you, ${data.name}! 🎉 We have your details and will reach out within 24 business hours.`,
        "Your email client will open now to confirm — please hit Send to complete your enquiry.",
        "📞 For urgent help: +977 9823405140 | info@TaxCare.com.np",
      ],
      () => {
        window.open(
          `mailto:info@TaxCare.com.np?subject=${subject}&body=${body}`
        );
        setReplies([
          { label: "← Back to main menu", action: "MAIN_MENU" },
          { label: "📞 Call us now", action: "CALL_NOW" },
        ]);
        leadRef.current = {};
      }
    );
  };

  const handleTextSubmit = () => {
    const text = inputValue.trim();
    if (!text && inputMode !== "message") return;
    setInputValue("");

    switch (inputMode) {
      case "name":
        leadRef.current.name = text || "Guest";
        addUserMessage(text || "Guest");
        sendMessages(
          [`Nice to meet you, ${text || "there"}! 😊 What is your email address so we can follow up?`],
          () => {
            setInputMode("email");
            setInputPlaceholder("your@email.com");
          }
        );
        break;

      case "email":
        leadRef.current.email = text;
        addUserMessage(text);
        sendMessages(
          ["Perfect! And your phone number?"],
          () => {
            setInputMode("phone");
            setInputPlaceholder("+977 98XXXXXXXX");
          }
        );
        break;

      case "phone":
        leadRef.current.phone = text;
        addUserMessage(text);
        sendMessages(
          ["Which service are you most interested in?"],
          () => setReplies(SERVICE_CHOICES)
        );
        break;

      case "message":
        leadRef.current.message = text;
        addUserMessage(text || "(No message)");
        completeLead();
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleTextSubmit();
  };

  const handleReplyClick = (reply: Reply) => {
    // Service choice replies are handled in handleAction with their own addUserMessage
    const selfLabeled = reply.action.startsWith("LEAD_SVC_");
    if (!selfLabeled) {
      handleAction(reply.action, reply.label);
    } else {
      handleAction(reply.action);
    }
    setReplies([]);
  };

  return (
    <div ref={panelRef} className="fixed bottom-6 left-6 z-50">
      {/* Chat panel */}
      <div
        className={`mb-3 flex w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[520px] opacity-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-center justify-between gradient-hero px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/30">
              <span className="text-sm font-bold text-white">TC</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">TaxCare Nepal</div>
              <div className="flex items-center gap-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Assistant · Sun–Fri 10AM–6PM
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={reset}
              aria-label="Start over"
              title="Start over"
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Privacy notice — shown once before first message */}
        {messages.length === 0 && !typing && (
          <div className="flex flex-shrink-0 items-center gap-1.5 border-b border-border bg-muted/50 px-3 py-1.5">
            <span className="text-xs text-muted-foreground">
              🔒 Your information is kept confidential.{" "}
              <Link to="/privacy-policy" className="underline hover:text-foreground" onClick={() => setOpen(false)}>
                Privacy Policy
              </Link>
            </span>
          </div>
        )}

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-3 py-4" style={{ maxHeight: "310px" }}>
          {messages.map((msg) =>
            msg.from === "bot" ? (
              <div key={msg.id} className="mb-3 flex items-end gap-2">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  TC
                </div>
                <div className="max-w-[82%]">
                  <div className="rounded-2xl rounded-bl-sm bg-muted/70 px-3.5 py-2.5 text-sm text-foreground leading-relaxed whitespace-pre-line">
                    {msg.text}
                  </div>
                  <p className="mt-0.5 px-1 text-[10px] text-muted-foreground/60">
                    ℹ️ For informational use only
                  </p>
                </div>
              </div>
            ) : (
              <div key={msg.id} className="mb-3 flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground leading-relaxed">
                  {msg.text}
                </div>
              </div>
            )
          )}

          {/* Typing indicator */}
          {typing && (
            <div className="mb-3 flex items-end gap-2">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                TC
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-muted/70 px-4 py-3">
                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50"
                  style={{ animationDelay: "160ms" }}
                />
                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50"
                  style={{ animationDelay: "320ms" }}
                />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick reply chips */}
        {replies.length > 0 && (
          <div className="flex flex-shrink-0 flex-wrap gap-1.5 border-t border-border px-3 py-2.5">
            {replies.map((reply) => (
              <button
                key={reply.label}
                onClick={() => handleReplyClick(reply)}
                aria-label={reply.label}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                {reply.label}
              </button>
            ))}
          </div>
        )}

        {/* Text input */}
        {inputMode !== "none" && (
          <div className="flex flex-shrink-0 items-center gap-2 border-t border-border bg-background px-3 py-2.5">
            <input
              ref={inputRef}
              type={inputMode === "email" ? "email" : inputMode === "phone" ? "tel" : "text"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={inputPlaceholder}
              className="flex-1 rounded-xl border border-border bg-muted/40 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
              aria-label={`Enter your ${inputMode}`}
            />
            <button
              onClick={handleTextSubmit}
              aria-label="Send message"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              disabled={inputMode !== "message" && !inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="flex-shrink-0 border-t border-border bg-muted/30 px-3 py-1.5">
          <p className="text-center text-[10px] text-muted-foreground">
            ℹ️ Responses are informational only — not professional tax advice.
          </p>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open TaxCare Nepal chat assistant"}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 active:scale-95 ${
          open ? "rotate-90" : ""
        }`}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageSquare className="h-6 w-6" />
            <span className="absolute h-14 w-14 animate-ping rounded-full bg-primary/30" />
          </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
