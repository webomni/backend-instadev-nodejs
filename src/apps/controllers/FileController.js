class FileController {
  async upload(req, res) {
    const { filename } = req.file;

    return res.send({ url: `uploads/${filename}` });
  }
}

module.exports = new FileController();
