import express from 'express';
import { generateArticle, generateBlogTitle, generateImage, removeImageBackgroud, removeImageObject, resumeReview } from '../controllers/aiController.js';
import { auth } from '../middleware/auth.js';
import { upload } from '../configs/multer.js';

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle )
aiRouter.post('/generate-blog-title', auth, generateBlogTitle )
aiRouter.post('/generate-image', auth, generateImage )
aiRouter.post('/generate-image-background', upload.single('image') , auth,removeImageBackgroud )
aiRouter.post('/remove-image-object', upload.single('image') , auth,removeImageObject )
aiRouter.post('/remove-image-background', upload.single('image') , auth,removeImageBackgroud )
aiRouter.post('/resume-review', upload.single('resume') , auth, resumeReview )

export default aiRouter