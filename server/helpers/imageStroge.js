const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "gems");
  },
  filename: (req, file, cb) => {
    console.log("hello");
    const mimeType = file.mimetype.split("/");
    const fileType = mimeType[1];
    const fileName = file.originalname + Date.now() + "." + fileType;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

const imageStorage = multer({
  storage: diskStorage,
  fileFilter: fileFilter,
}).single("gem");

module.exports = imageStorage;
