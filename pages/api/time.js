// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const now = new Date();
  res.status(200).json({
    iso: now.toISOString(), 
    utc: now.toUTCString(), 
    timestamp: now.getTime() 
  })
}
