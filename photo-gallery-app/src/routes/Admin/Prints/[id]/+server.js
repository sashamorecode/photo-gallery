import * as db from "$lib/server/database.js"
import { json } from '@sveltejs/kit';

export async function DELETE({ params }) {
    db.deletePrint(params.id)
    return json({
        success: true,
    });
}
