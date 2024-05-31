import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import imageCompression from 'browser-image-compression';
import sampleProfile from '../../../../public/assets/icons/profile/blue-01.svg';
import { PencilIcon } from '../../../../public/assets/icons/edit';

interface WhProfileProps {
  profileImg?: string | null;
  isModalOpen: boolean;
}

const editBtnCss =
  'absolute top-1/3 right-1/3 mr-9 bg-nutral-white-01 rounded-full p-[11px] shadow-modal cursor-pointer';

function ImageUpload({ profileImg, isModalOpen }: WhProfileProps) {
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(
    profileImg || null
  );

  const pickedHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) {
      return;
    }

    const imageFile = event.currentTarget.files[0];
    console.log(imageFile);
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 120,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);

      const convert = new File([compressedFile], imageFile.name, {
        type: imageFile.type,
      });
      setFile(convert);

      const reader = new FileReader();
      reader.readAsDataURL(convert);
      reader.onloadend = () => setPreviewFile(reader.result as string);
    } catch (error) {
      console.log(error);
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current?.click();
  };

  return (
    <>
      <div>
        <div className='rounded-full w-[120px] h-[120px] overflow-hidden'>
          {previewFile ? (
            <Image
              src={previewFile}
              alt='프로필'
              onClick={pickImageHandler}
              width={120}
              height={120}
            />
          ) : (
            <Image src={sampleProfile} alt='기본' width={120} height={120} />
          )}
          <input
            ref={filePickerRef}
            type='file'
            accept='.jpg,.png,.jpeg'
            onChange={pickedHandler}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className={editBtnCss}>
          <PencilIcon onClick={pickImageHandler} />
        </div>
      )}
    </>
  );
}

export default ImageUpload;
