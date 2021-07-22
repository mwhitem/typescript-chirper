// const express = require('express');
// const chirpStore = require('./chirpstore');


import React from 'react';
import express from 'express'; 
import chirpStore from './chirpstore';
import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "./chirpstore";


let router = express.Router();

let Chirps = () => {


router.get('/:id?', (req, res) => {
    // let id = req.params.id
    // if (id) {
    //     res.json(chirpStore.GetChirp(id));
    // } else {

    //     res.send(chirpStore.GetChirps());
    // }
    const chirps = chirpStore.GetChirps()
let chirpArr: any[] = []
Object.keys(chirps).map(key => chirpArr.push({id: key, name: chirps[key].name, msg: chirps[key].msg}))
chirpArr.pop()
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const chirp = req.body
    res.send(chirpStore.UpdateChirp(id, chirp))
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(chirpStore.DeleteChirp(id))
});
}

module.exports = router;

export default Chirps