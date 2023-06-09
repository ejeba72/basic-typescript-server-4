import { Schema, Document, model } from "mongoose";

function validateEmail(email: string) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}
function validatePhoneNo(phoneNo: string) {
  const regex = /^(0|\+\d{1,3}0?)\d{10}$/;
  return regex.test(phoneNo);
}
interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
}
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  phoneNo: string;
  sex: "male" | "female" | "other";
  age: number;
  address: IAddress;
}
const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
    // required: true,
    max: [ 200, "Sorry, we can only afford a maximum of 200 characters for your street name." ]
  },
  city: {
    type: String,
    // required: true,
    max: [ 100, "Sorry, we can only afford a maximum of 100 characters for your city's name" ]
  },
  state: {
    type: String,
    // required: true,
    max: [ 100, "Sorry, we can only afford a maximum of 100 characters for the name of your state" ]
  },
  country: {
    type: String,
    // required: true,
    max: [ 100, "Sorry, we can only afford a maximum of 100 characters for your country's name" ]
  },
})
const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      // required: true,
      max: [ 200, "Sorry, we can only afford a maximum of 200 characters for your first name." ]
    },
    lastName: {
      type: String,
      // required: true,
      max: [ 200, "Sorry, we can only afford a maximum of 200 characters for your last name."]
    },
    email: {
      type: String,
      // required: true,
      lowercase: true,
      trim: true,
      unique: true,
      validate: [validateEmail, "Please enter a valid email."],
      max: [ 200, "Sorry, we can only afford a maximum of 200 characters for your email address."]
    },
    password: {
      type: String,
      // required: true,
      min: [ 8, "Heads up! Your password is too short. It must have at least 8 characters." ],
      max: [ 500, "Wow, your effort to have a secured password is very impressive! Alas, we can only afford a maximum of 500 characters for your password."]
    },
    username: {
      type: String,
      // required: true,
      lowercase: true,
      trim: true,
      // unique: [ true, "Ouch! Sorry, that user name has already been taken." ], // wrong approach for the unique field's error message.
      unique: true,
      max: [ 200, "Sorry, we can only afford a maximum of 200 characters for your first name." ]
    },
    phoneNo: {
      type: String,
      validate: [validatePhoneNo, "Please enter a valid phone number"]
    },
    sex: {
      type: String,
      // required: true,
      enum: [ "male", "female", "other" ]
    },
    age: {
      type: Number,
      integer: true,
      min: [ 1, "Common on! Give us your real age."],
      max: [ 150, "Hey, are you sure that is your actual age? Please, provide us with your actual age."]
    },
    address: addressSchema
  },
  {timestamps: true}
)
const userModel = model("user", userSchema);

export default { userModel }