import CC from "@/components/cc";

export default function Params({params}: 
    {params: {slug: string}}) 
{
 return (<>
    Params: {params.slug}
    <hr />
    CC: <CC />
  </>)
}