import express from 'express';
const router = express.Router();

import {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} from './15-router-controller.js'; // controllers 파일 경로

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

export default router;

/**
 * localhost8080:api/people 이후의 라우팅에 대한 내용입니다.
 * localhost8080:api/people/postman, localhost8080:api/people/:id가 정의된 URL입니다
 * 15-router-controller.js에서 함수를 가져와서 사용합니다.
 * route에 대해서 해당 url에 get,post, put, delete에 대해서 어떤 함수를 실행하게 할 것 인지 정하는 부분입니다.
 */
