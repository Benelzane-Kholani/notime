import Image from "next/image"

export default function ChatRoom(){
  return(
      <div className="container-lg h-screen">
          <div className="">
              <div className="flex bg-stone-100 p-4">
                <div className="text-black">Abubakr</div>
                <div className="grow">
                <Image
                 src="/settings_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg"
                 width={30}
                 height={30}
                 alt="Picture of the author"
                 className="justify-self-end"
                 />
                </div>
              </div>
          </div>
          <div className="bottom-0 fixed  overflow-hidden w-screen">
              <div className="bg-stone-100 p-4">
              <form className="flex gap-2 justify-center">
                  <input className="p-2 border-2 border-indigo-200 text-slate-950 focus:outline-indigo-500 rounded grow" type="text" name="name" placeholder="send message" />
                  <button className="p-2 border-2 rounded border-indigo-200" type="submit">
                    <Image
                      src="/send_22dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                      className="justify-self-end"
                    />
                  </button>
                </form>
              </div>
          </div>
      </div>
  )
}