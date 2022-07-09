import type { NextFetchEvent, NextRequest } from 'next/server'

const log = console.log

export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  log(`Log from global middleware, before accessing page: "${req.page.name}"`)
}
