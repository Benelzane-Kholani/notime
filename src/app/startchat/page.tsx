import Link from "next/link";

export default function StartChat(){
    return(
        <>
        <div className="container border-2">
            <div className="">
            <div className="text-slate-900 text-2xl font-mono">
                No Time
            </div>
            </div>
            <div>
                <form className="flex gap-2 justify-center mt-6">
                    <input className="p-2 border-2 text-slate-950 focus:outline-indigo-500 rounded" type="text" name="name" placeholder="enter chat code" />
                    <button className="bg-indigo-500 p-2 border-2 rounded" type="submit">Enter Chat</button>
                </form>
                <div className="text-center mt-2">
                <Link className="text-indigo-500 underline decoration-indigo-500 text-center" href="/createchat">dont have a code yet, create chat.</Link>
                </div>
             </div>
        </div>
        </>
    )
}