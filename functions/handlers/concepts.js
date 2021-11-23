
const { db } = require('../utils/admin');

exports.getAllConcepts = (req, res) => {
    db.collection('concepts')
    .orderBy('createdAt','desc')
    .get()
    .then((data) => {
      let concepts = [];
      data.forEach(doc => {
        
        concepts.push({
          conceptId:doc.id,
          body: doc.data().body,
          userHandle:doc.data().userHandle,
          createdAt: doc.data().createdAt
  
        });
      })
      return res.json(concepts);
  
    })
    .catch((err) => console.error(err));
  }

  exports.postOneConcept = (req,res) => {
    if(req.body.body.trim() === ''){
      return res.status(400).json({body: 'Body must not be empty'})
    }
  
    const newConcept = {
      body: req.body.body,
      userHandle: req.user.handle,
      createdAt: new Date().toISOString()
    };
  
    db
    .collection('concepts')
    .add(newConcept)
    .then((doc) =>{
      res.json({message: `document ${doc.id} created successfully`});
    })
    .catch((err) => {
      res.status(500).json({ error:'something went wrong! We will get back to you on this, till then, smoke weed'});
      console.error(err);
    })
  }