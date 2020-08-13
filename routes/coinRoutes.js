const express = require('express')
const router = express.Router()
const Coin = require('../models/coinModel')

// Get all 
router.get('/', async(req, res) => {
      try {
        const coinCollection = await Coin.find()
        res.json(coinCollection)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

// Get one 
router.get('/:id', getCoin ,(req, res) => {
    res.json(res.coin)
})

// Create one s - add document to collection
router.post('/', async(req, res) => {
    const coin = new Coin({
        owner: req.body.owner,
        coin: req.body.coin,
        quantity:req.body.quantity
      })
    
      try {
        const newCoin = await coin.save()
        res.status(201).json(newCoin)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

// Update one document
router.patch('/:id',getCoin, async(req, res) => {
    if (req.body.owner != null) {
        res.coin.owner = req.body.owner
      }
    
    if (req.body.coin != null) {
        res.coin.coin = req.body.coin
    }

    if (req.body.quantity != null) {
        res.coin.quantity = req.body.quantity
    }

    try {
    const updateCoin = await res.coin.save()
        res.json(updateCoin)
    } catch {
        res.status(400).json({ message: err.message })
    }
})

// Delete one document
router.delete('/:id',getCoin, async(req, res) => {
    try {
        await res.coin.remove()
        res.json({ message: 'Document deleted' })
      } catch(err) {
        res.status(500).json({ message: err.message })
      }
})

// middleware per selezionare un solo documento
async function getCoin(req, res, next) {
    try {
      coin = await Coin.findById(req.params.id)
      if (coin == null) {
        return res.status(404).json({ message: 'Cant find document'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.coin = coin
    next()
  }

module.exports = router