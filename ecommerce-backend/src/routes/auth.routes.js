import express from "express"
const router = express.Router();
import {User} from "./../models/user.model.js"
import dotenv from "dotenv"
import { OAuth2Client } from 'google-auth-library';
dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID; 
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET; 

const client = new OAuth2Client(GOOGLE_CLIENT_ID);
 
router.post('/google', async (req, res) => {
  const { idToken } = req.body; 

  try {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: GOOGLE_CLIENT_ID, 
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const email = payload['email'];
    const name = payload['name'];
    const picture = payload['picture'];

     let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        username: name, 
        profilePicture: picture,
        googleId: userid, 
      });
      await user.save();
    }

    const token = user.generateAuthToken(); 
    res.status(200).json({ message: 'Google login successful', token, user: { email, name, picture } });

  } catch (error) {
    console.error('Error verifying Google ID token:', error);
    res.status(401).json({ message: 'Google authentication failed' });
  }
});

export default router