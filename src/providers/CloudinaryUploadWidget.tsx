import React, { useEffect } from "react";
import { BsImage } from "react-icons/bs";

function CloudinaryUploadWidget({ setUrlImage }: { setUrlImage: any }) {
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
          setUrlImage(secure_url);
          // setProduct((oldValue) => ({
          //   ...oldValue,
          //   ...{ images: [...oldValue.images, secure_url] },
          // }));
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
  }, []);

  return (
    <button
      id="upload_widget"
      className="w-full  h-32 border cursor-pointer bg-transparent rounded-2xl  items-center text-2xl text-neutral-600 flex justify-center gap-3"
    >
      <BsImage /> Image
    </button>
  );
}

export default CloudinaryUploadWidget;
