import PageRouter,{pageMetadata} from "../PageRouter";
export function generateMetadata(){return pageMetadata("about")}
export default function AboutPage(){return <PageRouter pageKey="about"/>}
