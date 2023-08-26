export function AppBar({username}){
    return(
        <div className="flex justify-between items-center px-4 h-14 w-full bg-slate-200 top-0 m-0">
            <div>
                <Button onclick={() => window.location = "/allTodos"}>Your Todos</Button>
            </div>
            {!username? 
            (<div className="space-x-2">
                <Button onclick={() => {window.location = "/login"}}>Login</Button>
                <Button onclick={() => window.location = "/signup"}>Sign Up</Button>
            </div>):
            (
                <div className="flex space-x-2">
                    <div>
                        {username}
                    </div>
                    <div>
                        <Button onclick={() => {}}>Logout</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Button({children, onclick}){
    return(
        <button onClick={onclick} className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md  active:bg-slate-500 active:ring-1">{children}</button>
    );
}

