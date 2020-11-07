export default (req, res) => {
  // console.log(req.method);

  res.status(200).json({
    text: 'Hello'
  });
}