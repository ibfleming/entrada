import type { RequestHandler } from '@sveltejs/kit';
import { db, lead } from '$lib';
import { eq } from 'drizzle-orm';

export const DELETE: RequestHandler = async ({ params }) => {
	try {
		const id = String(params.id); // Convert param to number

		if (id === null || id === undefined) {
			return new Response(JSON.stringify({ success: false, error: 'invalid lead id' }), {
				status: 400
			});
		}

		// Execute DELETE operation and return affected row(s)
		const result = await db.delete(lead).where(eq(lead.id, id)).returning({ id: lead.id });

		if (result.length > 0) {
			return new Response(JSON.stringify({ success: true }), {
				status: 200
			});
		} else {
			return new Response(JSON.stringify({ success: false, error: 'lead not found' }), {
				status: 404
			});
		}
	} catch (error) {
		console.error('Error deleting lead:', error);
		return new Response(JSON.stringify({ success: false, error: 'internal server error' }), {
			status: 500
		});
	}
};
