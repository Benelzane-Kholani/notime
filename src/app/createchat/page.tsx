import Link from "next/link";

export default function CreateChat(){
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
                    <button className="bg-indigo-500 p-2 border-2 rounded" type="submit">Create Chat</button>
                </form>
                <div className="text-center mt-2">
                <Link className="text-indigo-500 underline decoration-indigo-500 text-center" href="/startchat">Already have a code, enter chat.</Link>
                </div>
             </div>
        </div>
        </>
    )
}