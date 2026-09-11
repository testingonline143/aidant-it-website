import PageRouter,{pageMetadata} from "../../PageRouter";
export async function generateMetadata({params}){const{slug}=await params;return pageMetadata(`industry:${slug}`)}
export default async function IndustryPage({params}){const{slug}=await params;return <PageRouter pageKey={`industry:${slug}`}/>}
