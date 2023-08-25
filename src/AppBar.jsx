export function AppBar(){
    return(
        <div className="flex justify-between items-center px-4 h-14 w-full bg-slate-200 top-0 m-0">
            <div>
                Todos
            </div>
            <div className="space-x-2">
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
}

function Button({children}){
    return(
        <button className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md  active:bg-slate-500 active:ring-1">{children}</button>
    );
}

