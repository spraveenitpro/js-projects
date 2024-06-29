export async function GET(request) {

    const response = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/posts`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
        }
    });
    const { records } = await response.json();
    const posts = records.map(record => {
        return {
            id: record.id,
            ...record.fields
        }
    })
    return new Response(JSON.stringify(posts), {
        headers: { 'Content-Type': 'application/json' },
    });
}


