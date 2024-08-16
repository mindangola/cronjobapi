 
type ResponseData = {
  message: string
}
 
export async function GET(request: Request, res: Response) {
  console.log('Cron run on', new Date())

  request.json()
}