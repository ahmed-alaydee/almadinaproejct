import BGfixed from "../../Aboutpage/bgfixed";
import SirvicesIndexDesignDevelop from "../../Services/sirvicesindexdesigndevelop";

export default  function DesignDevelop(){
    return (
      <>
        <div style={{ background: "#fff" }}>
          <BGfixed
            title="Design & Development Website "
            current="Design & Development Website"
          />

          <div className="mt-24 mb-40">
            <SirvicesIndexDesignDevelop />
          </div>
        </div>
      </>
    );
}
