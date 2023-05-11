import { getColorInfo } from '@/service/1200colors';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { samwha_code: string };
};

export async function GET(_: NextRequest, context: Context) {
  return await getColorInfo(context.params.samwha_code) //
    .then(NextResponse.json) //
    .catch(NextResponse.json);
}
