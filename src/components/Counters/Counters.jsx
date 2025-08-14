import counterIcon from "../images/counterIcon1_1.webp";


export default function Counters() {

    const stats = [
        { number: "6561+", label: "Satisfied Clients" },
        { number: "2800+", label: "Completed Projects" },
        { number: "1200+", label: "Team Members" },
        { number: "1500+", label: "Years Experience" },
      ];
return (
  <>
    {/* Floating Counter Section */}
    <div className="  mt-10 m-auto  w-full max-w-[900px] -px-3 bg-[#fafafa] mb-7 ">
      <div
        className="stylefloating bg-gradient-to-r from-[#d6a73d] via-[#5e8d6b] to-[#0f3d2b] rounded-[120px]   shadow-xl py-10 pb-3 px-6
      max-w-[900px] mx-auto 
      md:px-10 md:py-12 
      max-[700px]:w-[50%] 
      max-[580px]:w-[66%] 
  
      max-[700px]:rounded-t-[100px] 
      max-[700px]:rounded-b-[0px] 

      transition-all duration-500"
      >
        <div className="flex flex-wrap gap-7 justify-center items-center text-center sm:text-left ">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-3 min-w-[10px] pt-3
              w-auto max-[580px]:w-[72px]
            
             

                  "
            >
              <img src={counterIcon} alt="icon" className="w-12 h-12" />
              <div className="text-white">
                <h3 className="mb-1 text-xl font-bold">{item.number}</h3>
                <p className="text-sm text-white/90">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);


}