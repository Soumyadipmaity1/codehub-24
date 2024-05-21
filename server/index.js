const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const groupRoutes = require("./routes/group");
const codeRoutes = require("./routes/code")
// const courseRoutes = require("./routes/Course");
// const paymentRoutes = require("./routes/Payments");
// const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");  //to entertain frontend and backend
// const { cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "https://codehub-24.vercel.app/", //frontend port number
		credentials: true,
	})
);
// app.use(
// 	fileUpload({
// 		useTempFiles: true,
// 		tempFileDir: "/tmp/",
// 	})
// );

// Connecting to cloudinary
// cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/group", groupRoutes);
app.use("/api/v1/code", codeRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.
