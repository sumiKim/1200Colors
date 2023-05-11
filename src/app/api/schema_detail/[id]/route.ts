import { getSchemaDetail } from '@/service/1200colorschemas';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  return await getSchemaDetail(context.params.id) //
    .then(NextResponse.json) //
    .catch(NextResponse.json);
}
