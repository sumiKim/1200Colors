import { getAll1200Colors } from '@/service/1200colors';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest) {
  return await getAll1200Colors() //
    .then(NextResponse.json) //
    .catch(NextResponse.json);
}
