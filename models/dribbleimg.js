const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, ' Category is required']
  },
  description: {
    type: String,
    required: [true, ' Description is required']
  },
  artist: {
    type: String,
    required: [true, 'Name is required']
  },
  title: {
    type: String,
    required: [true, ' Title is required']
  },
  img: {
    type: Buffer, 
    contentType: String, 
    required: [true, 'Image File is required'] 
  },
  created_at: {
    type: Date,
    required: [true, 'Created date is required']
  }
})

const DribbleImg = module.exports = mongoose.model('DribbleImg', imgSchema)
//description,date,img,title,photographer