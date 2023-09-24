import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})
export default router

/**
 * 12-router-app에서 사용되는 파일입니다.
 *  localhost:8080/login 이후의 routing 하는 URL에 대한 정의입니다.
 *  {
    "name" : "john"
    }
    john은 사전에 등록되어 있는 예제입니다.
 */
