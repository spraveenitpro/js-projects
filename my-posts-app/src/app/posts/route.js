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

// src/app/api/posts/route.js

/* export async function GET(request) {
    return new Response(JSON.stringify([
        { id: "rec1Xv8TkUFbgTtcc", Content: "I’m Working in figma designing a new website that shows all my tweets!.", date: "2024-06-28" },
        { id: "recLMS8DPLNYXhPbr", Content: "Obstacle is the path", date: "2024-06-29" },
        { id: "recYA7hoIhnML2Zqj", Content: "One day at a time, One step at a time", date: "2024-06-30" }
    ]), {
        headers: { 'Content-Type': 'application/json' },
    });
} */