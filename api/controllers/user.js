import User from "../models/user.js";

export const register = async (req, res) => {
  const { name, email, dob } = req.body;

  try {
    if (!name || !email || !dob) {
      return res.status(400).json({ msg: "Data missing " });
    }

    const existingUser = User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ msg: "User already exits " });
    }

    const user = await User.create({
      name,
      email,
      dob,
    });

    return res.status(200).json({ msg: "Register successfully ", user });
  } catch (error) {
    return res.status(404).json({ msg: "error ", error });
  }
};

export const getAllUser = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;

  console.log({limit,page})

  try {
    const result = await User.find({})
      .limit(10)
      .skip((page-1)*limit);

    // const total= await User.find({}).count();

    const totalUsers= await User.countDocuments();

    return res.status(200).json({ result, totalUsers });
  } catch (error) {
    res.json(error);
  }
};

export const insertUserBulk = async (req, res) => {
  try {
    const users = req.body;
    const result = await User.insertMany(users);
    res.status(201).json({
      message: "Users inserted successfully",
      count: result.length,
    });
  } catch (error) {
    res.status(400).json({
      message: "Insertion failed",
      error: error.message,
    });
  }
};
