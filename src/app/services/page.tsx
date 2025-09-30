export const metadata = { title: "Services — PRIKRITI GROUP", description: "GST, Import-Export Licensing, Business Setup, DGFT services and more." };

export default function Services() {
  const services = [
    {
      title: "Foreign Trade And Export Promotion",
      items: [
        "GST Registration & Returns Filing",
        "Annual Returns & GST Audits",
        "GST Consultancy & Health Checks",
        "Handling Notices & Appeals",
        "E-Invoicing & Compliance Automation",
      ],
    },
    {
      title: "Import-Export Licensing",
      items: [
        "IEC Registration",
        "AD Code Registration & Port Activation",
        "RCMC Certification from Export Promotion Councils",
        "EPCG, Advance License & DFIA",
        "Assistance with Export Incentives (RoDTEP, RoSCTL)",
      ],
    },
    {
      title: "Business Setup & Compliance",
      items: [
        "Company Incorporation (Pvt Ltd, LLP, OPC)",
        "MSME/Udyam Registration",
        "FSSAI, Trade License & Other Approvals",
        "PAN, TAN, DIN, DSC & Digital Compliance",
        "Start-Up India & DPIIT Recognition",
      ],
    },
    {
      title: "DGFT & Foreign Trade Support",
      items: [
        "Advance Authorisation & Duty Drawback Claims",
        "MEIS/SEIS Incentives Application",
        "Redemption, Closure & Monitoring of Licenses",
        "DGFT Policy Clarifications & Representation",
        "Assistance with Trade Compliance Reports",
      ],
    },
  ];

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="border rounded-2xl p-6 shadow-sm bg-white">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700 text-sm">
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
