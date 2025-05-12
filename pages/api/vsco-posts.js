

export default async function handler(req, res) {
    const VSCO_TOKEN = process.env.TOKEN_VS;
    const USER_ID = process.env.USER_ID;

    try {
        const response = await fetch(`https://vsco.co/api/3.0/medias/profile?site_id=${USER_ID}&limit=11`, {
            headers: {
                'Authorization': `Bearer ${VSCO_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch VSCO data' });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
