// create an instance of express routers
const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    try {
        const apiURL = ``
        const foundData = await axios.get(apiURL)
        const data = foundData.data
        console.log(data)
      } catch(err) {
        console.error(err)
      }

    return(
      <p>this is songs list api?</p>
    )
})