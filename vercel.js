{
  "version":2,
  "builds": [

    { "src": "*.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
// {
//   "version": 2,
//   "builds": [
//     { "src": "/", "use": "@vercel/node" }
//   ],
//   "routes": [
//     { "src": "/(.*)", "dest": "/" }
//   ]
// }
{
  "version": 2,
  "builds": [
    { "src": "/", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
