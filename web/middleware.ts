import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

const BLOCKED_COUNTRY = 'IL'

export function middleware(req: NextRequest) {
    const country = req?.geo?.country

    if (country === BLOCKED_COUNTRY) {
        return NextResponse.json({
            message: "Free Palestine: A Call for Justice!  Demanding Palestine&apos's Freedom & Global Support"
        },
        )
    }

}