import { createRoot } from 'react-dom/client'
import { useState, useCallback } from "react";
import { FileText, Plus, Trash2, Download, Sparkles, CheckCircle, ArrowRight, Zap, Shield, Clock, Star } from "lucide-react";

// ─── THEME ────────────────────────────────────────────────────────────────────
const theme = {
  brand: "#0F4C75",
  accent: "#1B98E0",
  light: "#E8F4FD",
  dark: "#0A1628",
  gold: "#F5A623",
};

// ─── GOOGLE FONT ──────────────────────────────────────────────────────────────
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    * { font-family: 'Sora', sans-serif; box-sizing: border-box; }
    .mono { font-family: 'JetBrains Mono', monospace; }
    @keyframes fadeUp { from { opacity:0; transform:translateY(20px);} to { opacity:1; transform:translateY(0);} }
    @keyframes pulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.05);} }
    @keyframes shimmer { 0%{background-position:-200% 0;} 100%{background-position:200% 0;} }
    .fade-up { animation: fadeUp 0.5s ease forwards; }
    .shimmer-btn {
      background: linear-gradient(90deg, #1B98E0 0%, #0F4C75 40%, #1B98E0 100%);
      background-size: 200% 100%;
      animation: shimmer 2.5s infinite linear;
    }
    .card-hover { transition: all 0.2s ease; }
    .card-hover:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(15,76,117,0.15); }
  `}</style>
);

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────
const Landing = ({ onLaunch }) => (
  <div style={{ background: theme.dark, minHeight: "100vh", color: "white" }}>
    {/* NAV */}
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: theme.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FileText size={20} color="white" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: -0.5 }}>InvoiceForge</span>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>$19/mo</span>
        <button onClick={onLaunch} style={{ background: theme.accent, color: "white", border: "none", padding: "10px 24px", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 14 }}>
          Try Free →
        </button>
      </div>
    </nav>

    {/* HERO */}
    <div style={{ textAlign: "center", padding: "80px 24px 60px", maxWidth: 720, margin: "0 auto" }} className="fade-up">
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(27,152,224,0.15)", border: "1px solid rgba(27,152,224,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 28, fontSize: 13, color: theme.accent }}>
        <Sparkles size={14} /> AI-Powered · Instant · Professional
      </div>
      <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, margin: "0 0 20px" }}>
        Create invoices<br />
        <span style={{ color: theme.accent }}>in 30 seconds.</span>
      </h1>
      <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 40px" }}>
        Stop wasting time on paperwork. InvoiceForge generates professional invoices with AI,
        calculates taxes automatically, and exports to PDF — so you get paid faster.
      </p>
      <button onClick={onLaunch} className="shimmer-btn" style={{ color: "white", border: "none", padding: "16px 40px", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontSize: 16, display: "inline-flex", alignItems: "center", gap: 10 }}>
        Build Your First Invoice <ArrowRight size={18} />
      </button>
      <p style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>Free forever · No credit card required</p>
    </div>

    {/* FEATURES */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 960, margin: "0 auto 80px", padding: "0 24px" }}>
      {[
        { icon: <Zap size={22} color={theme.accent} />, title: "AI Line Items", desc: "Describe your work and AI fills in professional line item descriptions instantly." },
        { icon: <Shield size={22} color={theme.gold} />, title: "Auto Tax Calc", desc: "Set your tax rate once. InvoiceForge applies it correctly to every invoice." },
        { icon: <Clock size={22} color="#52c41a" />, title: "Instant PDF", desc: "Print-ready invoices with your branding. Export and send in one click." },
      ].map((f, i) => (
        <div key={i} className="card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28 }}>
          <div style={{ marginBottom: 16 }}>{f.icon}</div>
          <h3 style={{ fontWeight: 700, fontSize: 18, margin: "0 0 8px" }}>{f.title}</h3>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
        </div>
      ))}
    </div>

    {/* PRICING */}
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 8px", letterSpacing: -1 }}>Simple pricing</h2>
      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", margin: "0 0 40px" }}>Start free. Upgrade when you're ready.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        {[
          { name: "Free", price: "$0", period: "forever", color: "rgba(255,255,255,0.06)", features: ["5 invoices/month", "Basic PDF export", "Manual tax entry"] },
          { name: "Pro", price: "$19", period: "/month", color: "rgba(27,152,224,0.2)", border: theme.accent, badge: "Most Popular", features: ["Unlimited invoices", "AI line items", "Auto tax + subtotals", "Custom branding", "Priority support"] },
          { name: "Business", price: "$49", period: "/month", color: "rgba(255,255,255,0.04)", features: ["Everything in Pro", "Team seats (5)", "API access", "White-label", "CSV bulk export"] },
        ].map((tier, i) => (
          <div key={i} style={{ background: tier.color, border: `1px solid ${tier.border || "rgba(255,255,255,0.08)"}`, borderRadius: 16, padding: 24, position: "relative" }}>
            {tier.badge && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: theme.accent, color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100 }}>{tier.badge}</div>}
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "rgba(255,255,255,0.7)" }}>{tier.name}</div>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>{tier.price}<span style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.4)" }}>{tier.period}</span></div>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {tier.features.map((f, j) => (
                <div key={j} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                  <CheckCircle size={14} color={tier.border || "rgba(255,255,255,0.3)"} /> {f}
                </div>
              ))}
            </div>
            <button onClick={onLaunch} style={{ marginTop: 24, width: "100%", background: i === 1 ? theme.accent : "rgba(255,255,255,0.08)", color: "white", border: "none", padding: "12px", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 14 }}>
              {i === 0 ? "Get Started" : "Start Free Trial"}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── APP VIEW ─────────────────────────────────────────────────────────────────
const emptyItem = () => ({ id: Date.now(), desc: "", qty: 1, rate: 0 });

const InvoiceApp = ({ onBack }) => {
  const [from, setFrom] = useState({ name: "Your Business", email: "you@business.com", address: "123 Main St, City, State" });
  const [to, setTo] = useState({ name: "", email: "", address: "" });
  const [items, setItems] = useState([emptyItem()]);
  const [invoiceNum, setInvoiceNum] = useState("INV-001");
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 30);
    return d.toISOString().split("T")[0];
  });
  const [taxRate, setTaxRate] = useState(10);
  const [notes, setNotes] = useState("Thank you for your business!");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [toast, setToast] = useState(null);
  const [printed, setPrinted] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const subtotal = items.reduce((s, i) => s + (parseFloat(i.qty) || 0) * (parseFloat(i.rate) || 0), 0);
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;

  const updateItem = (id, field, val) => setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: val } : i));
  const addItem = () => setItems(prev => [...prev, emptyItem()]);
  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const generateAI = useCallback(async () => {
    if (!aiInput.trim()) return;
    setAiLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are an expert at creating professional invoice line items. Given a description of work, return ONLY a JSON array of line items like: [{\"desc\":\"Professional service description\",\"qty\":1,\"rate\":500}]. No explanation, no markdown, just the JSON array.",
          messages: [{ role: "user", content: `Create invoice line items for: ${aiInput}` }]
        })
      });
      const data = await res.json();
      const text = data.content[0].text.replace(/```json|```/g, "").trim();
      const newItems = JSON.parse(text).map(i => ({ ...i, id: Date.now() + Math.random() }));
      setItems(newItems);
      setAiInput("");
      showToast("✨ AI generated " + newItems.length + " line items!");
    } catch (e) {
      showToast("Could not generate items. Try again.", "error");
    }
    setAiLoading(false);
  }, [aiInput]);

  const printInvoice = () => {
    setPrinted(true);
    setTimeout(() => {
      window.print();
      setPrinted(false);
    }, 100);
    showToast("Opening print dialog...");
  };

  const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, width: "100%", outline: "none" };
  const labelStyle = { fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 };

  return (
    <div style={{ background: "#0D1B2A", minHeight: "100vh", color: "white" }}>
      {/* TOPBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: theme.dark }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 13 }}>← Back</button>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FileText size={18} color={theme.accent} />
            <span style={{ fontWeight: 700, letterSpacing: -0.3 }}>InvoiceForge</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={printInvoice} style={{ background: theme.accent, color: "white", border: "none", padding: "10px 22px", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
            <Download size={15} /> Export PDF
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 24 }}>
        {/* LEFT PANEL */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* AI ASSISTANT */}
          <div style={{ background: "linear-gradient(135deg, rgba(27,152,224,0.15), rgba(15,76,117,0.1))", border: "1px solid rgba(27,152,224,0.25)", borderRadius: 14, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Sparkles size={16} color={theme.accent} />
              <span style={{ fontWeight: 700, fontSize: 14 }}>AI Line Item Generator</span>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                value={aiInput}
                onChange={e => setAiInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && generateAI()}
                placeholder='e.g. "3 days of React frontend development, logo design, 2 revision rounds"'
                style={{ ...inputStyle, flex: 1 }}
              />
              <button onClick={generateAI} disabled={aiLoading} style={{ background: theme.accent, color: "white", border: "none", padding: "8px 18px", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 13, whiteSpace: "nowrap", opacity: aiLoading ? 0.7 : 1 }}>
                {aiLoading ? "..." : "Generate"}
              </button>
            </div>
          </div>

          {/* FROM / TO */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "From (Your Business)", data: from, setter: setFrom },
              { label: "Bill To (Client)", data: to, setter: setTo },
            ].map(({ label, data, setter }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 18 }}>
                <div style={{ ...labelStyle, marginBottom: 14, color: theme.accent, fontSize: 11 }}>{label}</div>
                {["name", "email", "address"].map(field => (
                  <div key={field} style={{ marginBottom: 10 }}>
                    <label style={labelStyle}>{field}</label>
                    <input value={data[field]} onChange={e => setter(p => ({ ...p, [field]: e.target.value }))} style={inputStyle} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* META */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Invoice #", val: invoiceNum, set: setInvoiceNum },
              { label: "Due Date", val: dueDate, set: setDueDate, type: "date" },
              { label: "Tax Rate (%)", val: taxRate, set: v => setTaxRate(parseFloat(v) || 0), type: "number" },
            ].map(({ label, val, set, type = "text" }) => (
              <div key={label}>
                <label style={labelStyle}>{label}</label>
                <input type={type} value={val} onChange={e => set(e.target.value)} style={{ ...inputStyle, textAlign: type === "number" ? "center" : "left" }} />
              </div>
            ))}
          </div>

          {/* LINE ITEMS */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontWeight: 700, fontSize: 14 }}>Line Items</span>
              <button onClick={addItem} style={{ background: "rgba(27,152,224,0.2)", color: theme.accent, border: "1px solid rgba(27,152,224,0.3)", padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                <Plus size={13} /> Add Item
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 100px 100px 36px", gap: 8, marginBottom: 10 }}>
              {["Description", "Qty", "Rate ($)", "Amount", ""].map(h => (
                <div key={h} style={{ ...labelStyle, margin: 0 }}>{h}</div>
              ))}
            </div>

            {items.map(item => (
              <div key={item.id} style={{ display: "grid", gridTemplateColumns: "1fr 80px 100px 100px 36px", gap: 8, marginBottom: 8, alignItems: "center" }}>
                <input value={item.desc} onChange={e => updateItem(item.id, "desc", e.target.value)} placeholder="Service description" style={inputStyle} />
                <input type="number" value={item.qty} onChange={e => updateItem(item.id, "qty", e.target.value)} style={{ ...inputStyle, textAlign: "center" }} />
                <input type="number" value={item.rate} onChange={e => updateItem(item.id, "rate", e.target.value)} style={{ ...inputStyle, textAlign: "right" }} />
                <div className="mono" style={{ textAlign: "right", fontSize: 13, color: "rgba(255,255,255,0.7)", padding: "8px 12px", background: "rgba(255,255,255,0.03)", borderRadius: 8 }}>
                  ${((parseFloat(item.qty) || 0) * (parseFloat(item.rate) || 0)).toFixed(2)}
                </div>
                <button onClick={() => removeItem(item.id)} style={{ background: "rgba(255,60,60,0.1)", border: "1px solid rgba(255,60,60,0.2)", borderRadius: 8, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Trash2 size={13} color="#ff6b6b" />
                </button>
              </div>
            ))}
          </div>

          {/* NOTES */}
          <div>
            <label style={labelStyle}>Notes / Payment Terms</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }} />
          </div>
        </div>

        {/* RIGHT PANEL — PREVIEW */}
        <div>
          <div style={{ background: "white", borderRadius: 16, padding: 28, color: theme.dark, position: "sticky", top: 24 }}>
            {/* Invoice preview header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, paddingBottom: 20, borderBottom: "2px solid " + theme.light }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: theme.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FileText size={15} color="white" />
                  </div>
                  <span style={{ fontWeight: 800, fontSize: 15, color: theme.brand }}>{from.name || "Your Business"}</span>
                </div>
                <div style={{ fontSize: 11, color: "#888", lineHeight: 1.6 }}>{from.email}<br />{from.address}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: theme.brand, letterSpacing: -0.5 }}>INVOICE</div>
                <div className="mono" style={{ fontSize: 12, color: theme.accent, fontWeight: 600 }}>{invoiceNum}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>Due {dueDate}</div>
              </div>
            </div>

            {/* Bill to */}
            {to.name && (
              <div style={{ marginBottom: 20, background: theme.light, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: theme.brand, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Bill To</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: theme.dark }}>{to.name}</div>
                <div style={{ fontSize: 11, color: "#666" }}>{to.email} · {to.address}</div>
              </div>
            )}

            {/* Items */}
            <div style={{ marginBottom: 16 }}>
              {items.filter(i => i.desc || i.rate).map((item, idx) => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: idx < items.length - 1 ? "1px solid " + theme.light : "none" }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: theme.dark }}>{item.desc || "Service"}</div>
                    <div style={{ fontSize: 11, color: "#999" }}>{item.qty} × ${parseFloat(item.rate || 0).toFixed(2)}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 12, fontWeight: 600, color: theme.brand }}>
                    ${((parseFloat(item.qty) || 0) * (parseFloat(item.rate) || 0)).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div style={{ background: theme.light, borderRadius: 10, padding: "14px 16px" }}>
              {[
                ["Subtotal", `$${subtotal.toFixed(2)}`],
                [`Tax (${taxRate}%)`, `$${tax.toFixed(2)}`],
              ].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#666", marginBottom: 8 }}>
                  <span>{l}</span><span className="mono">{v}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: 16, borderTop: "1px solid rgba(15,76,117,0.15)", paddingTop: 10, color: theme.brand }}>
                <span>Total</span>
                <span className="mono">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Notes */}
            {notes && <div style={{ marginTop: 14, fontSize: 11, color: "#888", lineHeight: 1.6, borderTop: "1px solid " + theme.light, paddingTop: 12 }}>{notes}</div>}

            {/* CTA */}
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "#bbb" }}>
                <Star size={11} fill="#F5A623" color="#F5A623" /> Made with InvoiceForge
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div style={{ position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)", background: toast.type === "error" ? "#ff4444" : "#1a1a2e", color: "white", padding: "12px 24px", borderRadius: 100, fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", zIndex: 9999 }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
};

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function InvoiceForge() {
  const [view, setView] = useState("landing");
  return (
    <>
      <FontLink />
      {view === "landing"
        ? <Landing onLaunch={() => setView("app")} />
        : <InvoiceApp onBack={() => setView("landing")} />
      }
    </>
  );
}
createRoot(document.getElementById('root')).render(<InvoiceForge />)