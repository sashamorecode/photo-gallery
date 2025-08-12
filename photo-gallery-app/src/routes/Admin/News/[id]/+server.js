import * as db from "$lib/server/database.js"
import { json } from '@sveltejs/kit';

export async function DELETE({ params }) {
    db.deleteNews(params.id)
    const news = db.getNews()
    return json({
        success: true,
        newNews: news
    });
}
