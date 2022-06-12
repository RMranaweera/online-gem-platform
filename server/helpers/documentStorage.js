const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "documents");
  },
  filename: (req, file, cb) => {
    const mimeType = file.mimetype.split("/");
    const fileType = mimeType[1];
    const fileName = file.originalname + "." + fileType;
    cb(null, fileName);
  },
});
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["application/pdf"];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

const documentStorage = multer({
  storage: diskStorage,
  fileFilter: fileFilter,
}).single("document");

module.exports = documentStorage;
