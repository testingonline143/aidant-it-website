import PageRouter,{pageMetadata} from "../../PageRouter";
export async function generateMetadata({params}){const{slug}=await params;return pageMetadata(`solution:${slug}`)}
export default async function SolutionPage({params}){const{slug}=await params;return <PageRouter pageKey={`solution:${slug}`}/>}
