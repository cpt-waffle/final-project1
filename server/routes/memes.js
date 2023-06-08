const express = require('express');
const router = express.Router();

const memes = [
  {id: 1, img: 'https://s.yimg.com/ny/api/res/1.2/G8p4wkxH5maTasMLkHLFGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTYzOQ--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/5d4f3960-acc5-11eb-bbff-5305b55ded14'},
  {id: 2, img: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg'},
  {id: 3, img: 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg'},
  {id: 4, img: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg'},
]

router.get('/', (req,res) => {
  return res.json(memes);
})


module.exports = router;