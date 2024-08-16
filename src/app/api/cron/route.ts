import { NextResponse } from "next/server"

 
type ResponseData = {
  message: string
}
 
export async function GET(request: Request) {
  console.log('Cron run on', new Date())

  return new NextResponse("Job is Running", {status: 200})
}