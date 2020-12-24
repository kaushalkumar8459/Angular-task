module.exports = function (Data,Contact) {
  // Add Contact
  Data.post('/create', (req, res, next) => {
    Contact.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

  // Get Contact
  Data.get('/get', (req, res) => {
    Contact.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });
};
