const {Router} = require('express');
const router = Router();

/* GET users listing. */
router.get('/api/v1/users', function(req, res) {
  return res.status(200).json({a:5,b:7}).end();
});

/* GET users id */

router.get('/api/v1/users/:id', function(req, res) {
  const id = req.params.id;
  return res.status(200).json({user: id}).end();
});

/*POST users*/ 
router.post('/api/v1/users', function(req,res){
  return res.status(200).json({a:5}).end();
});

/*PUT users: id*/

router.put('/api/v1/users/:id', function(req, res) {
  const id = req.params.id;
  return res.status(200).json({a:10}).end();
});

/* DELETE user: id */
router.delete('/api/v1/users/:id', function(req, res) {
  const id = req.params.id;
  return res.status(200).json({a:10}).end();
})
module.exports = router;
