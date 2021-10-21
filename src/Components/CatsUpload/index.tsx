import { useRef } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { uploadCatsApi } from "../../services/api";

function CatsUpload() {
  const inputRef: any = useRef();
  const history = useHistory();
  return (
    <div className="container mt-3">
      <h1 className="mb-3">Upload your Cat's Image here 🐈</h1>

      <input
        className="d-none"
        ref={inputRef}
        type="file"
        onChange={(e) => {
          if (e.target.files?.length === 0) {
            return;
          }
          const formData = new FormData();
          formData.append(
            "file",
            e.target.files?.length ? e.target.files[0] : ""
          );
          uploadCatsApi(formData)
            .then(() => {
              toast.info("Image has been uploaded!");
              history.push("/");
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            });
        }}
      />
      <div className="mx-auto w300">
        <button
          className="btn btn-primary"
          onClick={() => {
            inputRef.current.click();
          }}
        >
          Browse & Upload
        </button>
      </div>
    </div>
  );
}

export default CatsUpload;
