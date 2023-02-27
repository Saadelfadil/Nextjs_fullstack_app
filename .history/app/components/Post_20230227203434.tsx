"use client"

export default function app.post('/products', (req,res) => {
  console.info('body', req.body)
  res.json(req.body);
})