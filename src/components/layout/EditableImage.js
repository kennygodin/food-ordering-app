import Image from 'next/image';
import { toast } from 'react-hot-toast';

export default function EditableImage({ link, setLink }) {
  async function handleFileChange(evt) {
    const image = evt.target.files[0];
    const formData = new FormData();

    formData.append('file', image);
    formData.append('upload_preset', 'food-ordering');

    const uploadPromise = new Promise(async (resolve, reject) => {
      const uploadResponse = await fetch(
        'https://api.cloudinary.com/v1_1/kencodin/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      ).then((r) => r.json());

      const imageUrl = uploadResponse.secure_url;
      if (imageUrl) {
        setLink(imageUrl);
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(uploadPromise, {
      loading: 'Uploading...',
      success: 'Uploading completed!',
      error: 'Upload error',
    });
  }

  return (
    <>
      {link && (
        <Image
          className="rounded-lg h-full w-full mb-1"
          src={link}
          alt="avatar"
          width={250}
          height={250}
        />
      )}

      {!link && (
        <div className="bg-gray-200 text-center text-gray-500 rounded-lg mb-1 p-4">
          No image
        </div>
      )}

      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
          Edit image
        </span>
      </label>
    </>
  );
}
