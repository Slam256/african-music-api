const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')

app.use(cors())

const music = {
    "some ka money":{"Genre": "Rap",
    "Muscian Name":"Adrenalyn Music",
    "Country":"Uganda",
    "Link to more":"https://www.youtube.com/channel/UCstaxaWvd3KhwaTEHhhes3Q"

    },
    "zinge":{"Genre": "Rap",
    "Muscian Name":"Adrenalyn Music",
    "Country":"Uganda",
    "Link to more":"https://www.youtube.com/channel/UCstaxaWvd3KhwaTEHhhes3Q"

    },
    "emergency":{
        "Genre": "RnB",
        "Muscian Name":"Spice Diana",
        "Country":"Uganda",
        "Link to more":"https://www.youtube.com/channel/UCT0LQjFFUr8yq1wI-EeGJSg"
    },
    "tujooge":{
        "Genre": "RnB",
        "Muscian Name":"Spice Diana",
        "Country":"Uganda",
        "Link to more":"https://www.youtube.com/channel/UCT0LQjFFUr8yq1wI-EeGJSg"
    },
    "my year":{
        "Genre": "RnB",
        "Muscian Name":"Azawi",
        "Country":"Uganda",
        "Link to more":"https://www.youtube.com/channel/UC8ZP6cKnFDw_cewhqxeKmaA"
    },
    "slow dancing":{
        "Genre": "RnB",
        "Muscian Name":"Azawi",
        "Country":"Uganda",
        "Link to more":"https://www.youtube.com/channel/UC8ZP6cKnFDw_cewhqxeKmaA"
    },
    "unknown":{
        "Genre": "TBA",
        "Muscian Name":"TBA",
        "Country":"TBA",
        "Link to more":"TBA"
    }

}
app.listen(PORT, () => {
    console.log(`Port id running on ${PORT} go and catch it`)
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const songName = req.params.name.toLowerCase()
    if(music[songName]){
        res.json(music[songName])
    }else if(songName === "all"){
        res.json(music)
    }else{
        res.json(music["unknown"])
    }

})