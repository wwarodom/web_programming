import seed from "@/utils/seed-blog" 

export default async function Seed() {
 
    await seed();

    return (<>
        Seeding complete!
    </>)
}