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


export async function POST(request) {
    console.log('Request: 🚀');
    console.log(request);

    const { content, date } = await request.json();
    const data = {
        "records": [
            {
                "fields": {
                    "Content": content,
                    "date": date
                }
            }
        ]
    }

    console.log('Data that is being posted: 🚀');
    console.log(data);

    try {
        const response = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Posts`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        });
        const result = await response.json();
        return new Response(JSON.stringify(result), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.error('Error:', error);
    }

}