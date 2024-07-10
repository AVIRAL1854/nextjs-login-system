"use client"
export default function Button({value,handler}){
    return (
      <>
        <div className="flex justify-center h-10 w-full mt-5">
          <input
            className="  flex border-2 rounded-xl w-1/2 bg-black text-white hover:text-black hover:bg-violet-400 hover:ring-2 hover:font-bold hover:ring-white border-black"
            type="button"
            value={value}
            onClick={handler}
          />
        </div>
      </>
    );
}