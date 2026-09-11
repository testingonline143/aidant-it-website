import { partners } from "./siteData";
export default function PartnerStrip(){const doubled=[...partners,...partners];return <div className="partner-strip"><div className="partner-track">{doubled.map((p,i)=><span key={`${p}-${i}`}>{p}</span>)}</div></div>}
