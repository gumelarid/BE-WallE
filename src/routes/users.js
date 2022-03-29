const router = require("express").Router();

const {
    getAllUser,
    getUserByName,
    getUserById,
    patchPassword,
    patchProfile,
    patchImage,
    deleteImage,
    isPinExist,
    checkPin,
    patchPin,
    deactivateUser,
    loginUser,
    registerUser,
    // activationEmail,
    // activationUser,
    // forgotPassword,
    // changePassword

} = require("../controller/users");
const { authorization } = require("../middleware/auth");
const uploadImage = require("../middleware/multer");

router.get("/user", authorization, getAllUser);
router.get("/user/name", authorization, getUserByName);
router.get("/:id", authorization, getUserById)
router.patch("/patch/password", authorization, patchPassword);
router.patch("/patch/profile", authorization, patchProfile);
router.patch("/patch/image", authorization, uploadImage, patchImage);
router.get("/delete/image", authorization, deleteImage);

router.get('/pin/exist', authorization, isPinExist)
router.get('/check/pin', authorization, checkPin)
router.patch("/patch/pin", authorization, patchPin);

router.patch("/deactivate/:user_id", authorization, deactivateUser);

router.post("/login", loginUser);
router.post("/register", registerUser);

// router.post('/email', activationEmail)
// router.patch('/activate', activationUser)

// router.post('/forgot', forgotPassword)
// router.patch('/change', changePassword)

module.exports = router;