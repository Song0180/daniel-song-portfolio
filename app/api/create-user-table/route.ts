import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(_: Request) {
  try {
    const result = await sql`
      CREATE TABLE "User" (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        github_username VARCHAR(255),
        name VARCHAR(255),
        designation VARCHAR(255),
        profile_img_url VARCHAR(255),
        email VARCHAR(255),
        address VARCHAR(255),
        location VARCHAR(255),
        country_region VARCHAR(255),
        city VARCHAR(255)
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
