import { useNavigate } from "react-router-dom";

export function AppBar({username, setUsername}){
    const navigate =  useNavigate();
    return(
        <div className="flex justify-between items-center px-4 h-14 w-full bg-slate-400 top-0 m-0">
            { username?
                (<div className="space-x-2">
                    <Button onclick={()=> navigate("/")} className="font-bold text-2xl text-white p-10">
                        TaskMinder.
                    </Button>                    
                    <Button onclick={() => navigate("/alltodos")}>Your Todos</Button>
                </div>):
                (<div>
                    <Button onclick={() => navigate("/")} className="font-bold text-2xl text-white p-10">
                        TaskMinder.
                    </Button>                
                </div>
                )
            }
            {
                (!username) ?
                (<div className="space-x-2">
                    <Button onclick={() => {navigate("/login")}}>Login</Button>
                    {username}
                    <Button onclick={() => navigate("/signup")}>Sign Up</Button>
                </div>) :
                (
                    <div className="flex space-x-2 items-center">
                        <div className="font-bold text-slate-500">
                            {username}
                        </div>
                        <div>
                            <Button onclick={() => {
                                setUsername("");
                                localStorage.removeItem("token");
                                navigate("/");
                            }}>Logout</Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

function Button({children, onclick}){
    return(
        <button onClick={onclick} className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md font-bold active:bg-slate-500 active:ring-1">{children}</button>
    );
}

