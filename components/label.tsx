"use client"
export default function Label({value,type,placeholder,setvar}){

    return (
      <>
        <div className=" flex-cols justify-center place-content-center w-full  ">
          <div className="flex justify-center w-full mt-5 ">
            <label className="flex   w-3/5  text-xl font-bold">
              {value}
            </label>
          </div>
          <div className="flex justify-center w-full mt-2">
            <input
              className=" flex-cols text-black w-3/5 justify-center  border-2 border-black rounded-xl h-10 hover:ring-4 hover:ring-white hover:bg-emerald-200 hover:text-white"
              type={type}
              placeholder={placeholder}
              onChange={(e) => {
                setvar(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </>
    );
}