import { useNavigate } from "react-router-dom";

export function LandingPage(){
  const navigate =  useNavigate();
   return(
   <div className="flex flex-col md:flex-row bg-gradient-to-br from-slate-400 from-40% to-slate-800 h-screen text-slate-100 pt-10">
      <div className="max-w-screen-md">
        <div className="font-bold text-5xl text-white p-10">
          TaskMinder.
        </div>
        <div>
          <h1 className="font-bold px-10 text-2xl">Stay Organized. Boost Productivity.</h1>
          <p className="pl-10 pt-3">Tired of juggling between countless tasks and struggling to keep up with your busy life? Look no further! TaskMinder is here to revolutionize the way you manage your tasks and conquer your goals.<br/>
          <span className="pt-2 font-bold inline-block">Signup Today!</span>
          </p>
        </div>
        <div className="flex pl-10 pt-6 w-80 justify-between">
            <Button onclick={() => navigate("/login")}>Login</Button>
            <Button onclick={() => navigate("/login")}>Signup</Button>
        </div>
      </div>
      <div className=" h-96 w-96 pt-5 drop-shadow-xl  rounded-md pl-10">
        <img src="img.jpg" alt="" />
      </div>
    </div>
 );
}

function Button({children, onclick}){
  return(
      <button onClick={onclick} className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md font-bold active:bg-slate-500 active:ring-1">{children}</button>
  );
}
