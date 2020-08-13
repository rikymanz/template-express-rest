const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

// Get all 
router.get('/', async(req, res) => {
      try {
        const users = await User.find()
        res.json(users)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

// Get one 
router.get('/:id', getUser ,(req, res) => {
    res.json(res.user)
})

// Create one s - add document to collection
router.post('/', async(req, res) => {
    const user = new User({
        name: req.body.name
      })
    
      try {
        const newUser = await user.save()
        res.status(201).json(newUser)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

// Update one document
router.patch('/:id',getUser, async(req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
      }

    try {
    const updateUser = await res.user.save()
        res.json(updateUser)
    } catch {
        res.status(400).json({ message: err.message })
    }
})

// Delete one document
router.delete('/:id',getUser, async(req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Document deleted' })
      } catch(err) {
        res.status(500).json({ message: err.message })
      }
})

// middleware per selezionare un solo documento
async function getUser(req, res, next) {
    try {
      user = await User.findById(req.params.id)
      if (user == null) {
        return res.status(404).json({ message: 'Cant find document'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.user = user
    next()
  }

module.exports = router