import { SignIn, SignUp, ForgotPassword, Otp } from "../screens/AuthScreen";

const AuthStack = [
  // AUTH : SIGNIN
  {
    name: "SignInScreen",
    component: SignIn,
    options: { headerShown: true, headerTransparent: true },
  },
  // AUTH : SIGNUP
  {
    name: "SignUpScreen",
    component: SignUp,
    options: { headerShown: true, headerTransparent: true },
  },
  {
    name: "ForgotPassword",
    component: ForgotPassword,
    options: { headerShown: true, headerTransparent: true },
  },
  {
    name: "Otp",
    component: Otp,
    options: { headerShown: true, headerTransparent: true },
  },
];

export default AuthStack;
