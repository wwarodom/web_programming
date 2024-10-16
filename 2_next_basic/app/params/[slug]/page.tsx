import CC from "@/components/cc";

export default function Params(
    { params, searchParams }:
        {
            params: { slug: string },
            searchParams: { [key: string]: string | string[] | undefined }
        }) {
    return (<>
        Params: {params.slug}
        <hr />
        CC: <CC />
        <hr />
        QueryString: <br />
        SearchParams: {JSON.stringify(searchParams)}
        <br />
        Guitar: {searchParams.guitar}
    </>)
}