import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import WhInput from '@/components/elements/WhInput';
import { AccompanyData } from '@/types/accompany';

import { EditorContent, useEditor } from '@tiptap/react';
import FontSize from '@/app/sample/editor/TiptapFontSizeExtension';
import TiptapRegisterToolbar from '@/app/sample/editor/TiptapRegisterToolbar';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import ResizableImageExtension from '@/app/sample/editor/TiptapImageResize';
import '@/app/sample/editor/tiptap.css';
import { CameraIcon } from '../../../../public/assets/icons/edit';
import { CloseIcon } from '../../../../public/assets/icons/menu';

export default function Step3ModalContent({
  form,
  setForm,
}: {
  form: AccompanyData;
  setForm: React.Dispatch<React.SetStateAction<AccompanyData>>;
}) {
  const [newTag, setNewTag] = useState('');
  const [image, setImage] = useState('');
  const bannerImage = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Color,
      Placeholder.configure({
        placeholder: '내용을 입력해주세요.',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({ multicolor: true }),
      FontSize,
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
      ResizableImageExtension,
    ],
  });

  const addTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag !== '' && !form.tags.includes(newTag)) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, newTag] }));
      setNewTag('');
    }
  };

  const delTags = (delTag: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== delTag),
    }));
  };

  const handleOpenInput = () => {
    bannerImage.current?.click();
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const { files } = e.target;
    const uploadFile = files[0];
    console.log(uploadFile);
    if (!uploadFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setImage(reader.result?.toString() ?? '');
    };
  };

  const handleDeleteImage = () => {
    setImage('');
  };

  if (!editor) {
    return null;
  }
  return (
    <div className='flex grow flex-col overflow-hidden'>
      <h3 className='my-5 text-headline-04 xl:my-10 xl:text-headline-03'>
        마지막이에요! 힘내주세요!! ✈️
      </h3>
      <div className='flex flex-col gap-4 overflow-auto'>
        <div className='relative h-[216px] w-full'>
          {image ? (
            <div className='relative flex h-full w-full items-center justify-center overflow-hidden'>
              <Image
                width={533}
                height={216}
                className='object-contain'
                src={image}
                alt='배너 이미지'
              />
              <button
                type='button'
                aria-label='닫기 버튼'
                onClick={handleDeleteImage}
                className='absolute right-3 top-3'
              >
                <CloseIcon width={24} height={24} stroke='#FFFFFF' />
              </button>
            </div>
          ) : (
            <button
              type='button'
              className='flex w-full flex-col items-center justify-center gap-2.5 bg-nutral-white-02 py-15'
              onClick={handleOpenInput}
            >
              <CameraIcon />
              <p className='text-center text-caption-03 text-nutral-white-04'>
                사진을 업로드해주세요. <br />
                업로드하신 이미지가 없으면 기본이미지가 올라갑니다.
              </p>
              <p className='text-caption-03 text-nutral-white-04'>(1280x460)</p>
            </button>
          )}
        </div>
        <input
          ref={bannerImage}
          id='banner-image'
          type='file'
          accept='image/*'
          onChange={handleUploadImage}
        />
        <WhInput
          type='text'
          handleInputChange={(value) =>
            setForm((prev) => ({ ...prev, title: value }))
          }
          placeholder='오사카 3/15~3/16동안 같이 다닐 분 구해요!!🙌'
          value={form.title}
        />

        <div className='tiptap prose max-w-none'>
          <TiptapRegisterToolbar editor={editor} />
          <EditorContent
            className='h-[30rem] w-full overflow-auto border border-nutral-white-04 p-5 *:h-full *:outline-none prose-p:m-0'
            editor={editor}
          />
        </div>
        <div className='mb-2 flex gap-2 border-b border-nutral-white-03 p-2'>
          <ul className='flex gap-3'>
            {form.tags.length > 0 &&
              form.tags.map((tag) => (
                <li key={tag}>
                  <button
                    type='button'
                    className='shrink-0 rounded-full bg-primary-main px-4 py-2 text-caption-01 text-nutral-white-01 hover:bg-primary-light'
                    onClick={() => delTags(tag)}
                  >
                    {tag}
                  </button>
                </li>
              ))}
          </ul>
          {form.tags.length < 3 && (
            <input
              type='text'
              className='grow py-1 outline-none'
              value={newTag}
              maxLength={10}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyUp={addTags}
              placeholder='태그를 입력해주세요. (최대 3개)'
            />
          )}
        </div>
      </div>
    </div>
  );
}
