// create an instance of express routers
const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    try {
        const apiURL = `https://30-000-radio-stations-and-music-charts.p.rapidapi.com/rapidapi`
        const foundData = await axios.get(apiURL)
          console.log(foundData.drink)
          

        // res.render("suggested/show.ejs", {
        //   name: foundData.data
        // })
      } catch(err) {
        console.error(err)
      }
})