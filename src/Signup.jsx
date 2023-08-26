export function Signup(){
    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col h-52 w-80 justify-around rounded-lg border-2 drop-shadow-lg">
                <h1 className="text-3xl font-bold text-center">Signup</h1>
                <Input>Username</Input>
                <Input>Password</Input>
                <div className="flex justify-center w-full">
                    <Button onlclick={handleSignup}>Signup</Button>
                </div>
            </div>
        </div>
    );
}

function Input({type, children}){
    return(
        <div className="flex w-72 justify-between border-slate-500 ">
            <label className="font-bold text-slate-800" for={children}>{children}</label>
            <input className="h-7 bg-slate-300 rounded-md focus:border-slate-400 focus:bg-white" type={type} id={children} />
        </div>
    )
}

function Button({children, onlclick}){
    return(
        <button onClick={onclick} className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md  active:bg-slate-500 active:ring-1">{children}</button>
    );
}


async function handleSignup(){
    try{
        const response = await axios.post("http://localhost:3000/todos/signup", {
        username : document.getElementById("Username").value,
        password : document.getElementById("Password").value
        });

        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        window.location = "/"
    }
    catch(err){
        console.log(err);
        alert("Error occured");
    }
}