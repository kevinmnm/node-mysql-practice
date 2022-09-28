export { }
const express = require('express');
const router = express.Router();

router.get('/', (req: any, res: any) => {
   console.log('hi');
});

module.exports = router;