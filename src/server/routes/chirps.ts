// // const express = require('express');
// // const chirpStore = require('./chirpstore');


// // import React from 'react';
// import express from 'express'; 
// // import chirpStore from './chirpstore';
// import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "./chirpstore";


// let router = express.Router();

// let Chirps = () => {


// router.get('/:id?', (req, res) => {
//     let id = req.params.id
//     if (id) {
//         res.json(GetChirp(id));
//     } else {

//         // res.send(GetChirps());
//         const chirps = GetChirps()
//     let chirpArr: any[] = []
//     Object.keys(chirps).map(key => chirpArr.push({id: key, name: chirps[key].name, msg: chirps[key].msg}))
//     chirpArr.pop()
//     }
// });

// router.post('/', (req, res) => {
//     CreateChirp(req.body);
//     res.sendStatus(200);
// });

// router.put('/:id', (req, res) => {
//     const id = req.params.id
//     const chirp = req.body
//     res.send(UpdateChirp(id, chirp))
//     res.sendStatus(200);
// });

// router.delete('/:id', (req, res) => {
//     const id = req.params.id
//     res.send(DeleteChirp(id))
// });
// }

// module.exports = router;

// export default Chirps


import * as express from "express";
import { GetChirp, GetChirps, UpdateChirp, DeleteChirp, CreateChirp } from "../chirpstore";

const router = express.Router();

router.get('/:id?', (req, res) => { // /api/chirps/3
  const id: string = req.params.id;

  if (id) {
    res.json(GetChirp(id));
  } else {
    const chirps = GetChirps();
    let chirpArr: chirp[] = []

    Object.keys(chirps).map(key => chirpArr.push(
      {
        id: key,
        name: chirps[key].name,
        message: chirps[key].message
      }
    ));

    chirpArr.pop(); // eliminate nextid property 

    res.json(chirpArr);
  }
});

router.post('/', (req, res) => {
  const chirpObj: chirp = req.body;

  CreateChirp(chirpObj);

  res.send("success");
});

//mandatory id param to tell the server which chirp to update
router.put('/:id', (req, res) => {
  const id: string = req.params.id;
  const chirpObj: chirp = req.body;

  UpdateChirp(id, chirpObj);

  res.send("edited successfully");
});

router.delete('/:id', (req, res) => {
  const id: string = req.params.id;

  DeleteChirp(id);

  res.send("deleted successfully");
});

interface chirp {
  id?: string,
  name: string,
  message: string
}

export default router