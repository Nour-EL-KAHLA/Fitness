import { useEffect } from "react";
import { BsImage } from "react-icons/bs";
//@ts-ignore
function CloudinaryUploadWidget({ setProduct }) {
  useEffect(() => {
    const cloudName = "dsqt757nu";
    const uploadPreset = "c1ypbzwy";
    //@ts-ignore
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        clientAllowedFormats: ["png", "jpg", "jpeg"],
      },

      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          const { secure_url } = result.info;
          setProduct((oldValue: any) => ({
            ...oldValue,
            ...{ images: [...oldValue.images, secure_url] },
          }));
        }
      }
    );

    const uploadButton = document.getElementById("upload_widget");
    if (uploadButton) {
      uploadButton.addEventListener("click", function () {
        myWidget.open();
      });
    }

    return () => {
      if (uploadButton) {
        uploadButton.removeEventListener("click", function () {
          myWidget.open();
        });
      }
    };
  }, [setProduct]);

  return (
    <button
      id="upload_widget"
      className="w-full md:w-[300px] h-96 border cursor-pointer bg-transparent rounded-2xl  items-center text-2xl text-neutral-600 flex justify-center gap-3"
    >
      <div className="w-12 h-12 text-neutral-900">
        <BsImage /> Upload
      </div>
    </button>
  );
}

export default CloudinaryUploadWidget;
