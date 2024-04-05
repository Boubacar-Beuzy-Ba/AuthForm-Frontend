import googleLogo from "../assets/icons/google-logo.png";
import facebookLogo from "../assets/icons/facebook-logo.png";
export const FormInput = () => {
  return (
    <div className="w-full mx-4 sm:w-8/12 sm:mx-auto">
      <h1 className="text-3xl my-6 hidden sm:block">Create Account</h1>
      <h1 className="text-3xl my-6 block sm:hidden">Sign up</h1>
      <form className="w-full">
        <div className="flex flex-col gap-6 text-sm">
          <input
            type="text"
            placeholder="Full Name"
            className="shadow rounded-md border pt-3 pr-5 pb-3 pl-10 bg-[url('/src/assets/icons/icons8-person-24.png')] bg-no-repeat bg-[10px]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="shadow rounded-md border pt-3 pr-5 pb-3 pl-10 bg-[url('/src/assets/icons/icons8-email-24.png')] bg-no-repeat bg-[10px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="shadow rounded-md border pt-3 pr-5 pb-3 pl-10 bg-[url('/src/assets/icons/icons8-password-24.png')] bg-no-repeat bg-[10px]"
          />
        </div>
        <div className="flex gap-1 mt-4 mx-2">
          <input type="checkbox" name="Terms" id="term" />
          <span className="text-xs text-gray-400">
            I agree with the <span className="text-green-300">Terms</span> and{" "}
            <span className="text-green-300">Privacy</span>
          </span>
        </div>
        <div className="my-12">
          <button className="btn uppercase bg-green-400 w-full rounded-md p-3 text-sm text-white shadow-sm shadow-green-950">
            Sign up
          </button>
          <button className="mt-5 bg-white w-full rounded-md p-3 shadow-2xl text-gray-400 shadow-white border text-sm flex justify-center gap-2 items-center">
            <img src={googleLogo} alt="Google" className="w-6" />
            Sign up with Google
          </button>
          <button className="mt-2 bg-white w-full rounded-md p-3 shadow-2xl text-gray-400 shadow-white border text-sm flex justify-center gap-2 items-center">
            <img src={facebookLogo} alt="facebook" className="w-6" />
            Sign up with Facebook
          </button>
        </div>
        <div className="mx-auto text-center">
          <p className="text-base text-gray-500">
            Already have an account?
            <button className="text-green-500 ml-1"> Log In</button>
          </p>
        </div>
      </form>
    </div>
  );
};
