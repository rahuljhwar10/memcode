import express from 'express';
const router = express.Router();

import { db } from '../../db/init.js';

import * as Course from './model';

router.get('/:id', (request, response) => {
  Course.getCourseWithProblems(request.params.id)
  .then((data) => {
    response.status(200).json(data);
  })
  .catch((data) => {
    response.status(500).json({ error: data.message });
  })
});

router.get('/', (request, response) => {
  const courses = db.any("select * from courses")
  .then((data) => {
    response.status(200).json(data);
  })
  .catch((data) => {
    response.status(500).json({ error: data.message });
  })
});



router.post('/', (request, response) => {
  const result = Course.createCourseWithProblems(request.body["course"], request.body["problems"]);

  result.then((aaa) => {
    response.status(200).json({ data: aaa.data });
  })

  // if (result.data) {
  //   response.status(200).json({ data: result.data });
  // } else if (result.error) {
  //   response.status(500).json({ error: result.error });
  // };
});


router.delete('/', (request, response) => {
  
});



export { router };