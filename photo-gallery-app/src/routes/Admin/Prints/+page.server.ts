import { redirect } from '@sveltejs/kit';
import { PASSWORD } from '$env/static/private';

export async function load({ cookies }) {
    const session = cookies.get('admin-session');
    if (session !== PASSWORD) {
        throw redirect(303, '/Signin');
    }
};

