import PageRouter,{pageMetadata} from "../../PageRouter";
export async function generateMetadata({params}){const{slug}=await params;return pageMetadata(`resource:${slug}`)}
export default async function ResourcePage({params}){const{slug}=await params;return <PageRouter pageKey={`resource:${slug}`}/>}
