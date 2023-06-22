import { useRef, useState } from "react";
import "./style.css";

const App = () => {
  const [imgPreview, setImgPreview] = useState();
  const imgRef = useRef();

  console.log(imgRef.current);

  const handleImgUpload = (e) => {
    const files = e.target.files;
    const file = files[0];

    const fileReader = new FileReader();
    // parse file blob object into fileReader fxn
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setImgPreview(fileReader.result);
      // fileReader.result (base64 data url) can be used to make a post request asynchronously when updating user profile img on a db, or better still, sent to cloudinary.
    };
  };

  return (
    <div className="app">
      <input
        style={{
          display: "none",
        }}
        ref={imgRef}
        onChange={(e) => handleImgUpload(e)}
        type="file"
        accept=".png,.jpg"
      />

      {imgPreview && (
        <div className="img-wrapper">
          <img src={imgPreview} alt="preview" />
        </div>
      )}

      <button onClick={() => imgRef.current?.click()}>
        <h3>Click to Upload</h3>
      </button>
    </div>
  );
};

export default App;
