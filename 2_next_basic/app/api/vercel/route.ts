// http endpoint

export async function GET() {
    const response = await fetch('https://api.vercel.app/blog');
    const data = await response.json();
    return Response.json(data)
   }
   