import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  return (
    <div>
      <h1>MediLens 💊</h1>
      <p>Understand your medicines easily.</p>

      <label>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const selectedImage = event.target.files[0];
            setImage(selectedImage);
          }}
        />

        Upload Medicine Photo
    </label>

    {image && (
        <div>
          <h3>Selected Medicine:</h3>

          <img
            src={URL.createObjectURL(image)}
            alt="Selected medicine"
            width="300"
          />
        </div>
    )}

      <p>No medicine selected</p>
    </div>
  );
}

export default App;