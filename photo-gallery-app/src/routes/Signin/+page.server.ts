import type { Actions } from './$types';
import { PASSWORD } from '$env/static/private';
import { redirect, fail } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = data.get('password');

    if (password === PASSWORD) {
      cookies.set('admin-session', password, {
        path: '/',
        maxAge: 60 * 60 * 24 // 1 day
      });
      throw redirect(303, '/Admin');
    }

    return fail(401, { incorrect: true });
  }
};

