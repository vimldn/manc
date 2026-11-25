import MovingDirectory from "@/components/MovingDirectory";
import {movingDirectories} from "@/lib/movingDirectories";
import {pageMeta} from "@/lib/seo";
const hub=movingDirectories[0];
export const metadata=pageMeta({title:hub.name+" Manchester | Frank’s",description:hub.desc,path:"/"+hub.slug+"/"});
export default function Page(){return <MovingDirectory hub={hub}/>;}
