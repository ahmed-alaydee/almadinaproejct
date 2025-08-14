import BGfixed from "../Aboutpage/bgfixed";
import OurWorksditals from "../ourworks/ourworks2inhditals";
import OurWorksMopilapplication from "../ourworks/ourworksmopileapplication";

export default function OurWorksPage(){
    return (
      <>
        <div style={{ background: "#fff" }}>
          <BGfixed title="OUr Works " current="our works" />

          <div className="mb-16 h-full">
            <OurWorksditals />
          </div>
        </div>
      </>
    );
}   