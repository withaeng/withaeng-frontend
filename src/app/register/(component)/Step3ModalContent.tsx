import { useState } from 'react';
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

export default function Step3ModalContent({
  form,
  setForm,
}: {
  form: AccompanyData;
  setForm: React.Dispatch<React.SetStateAction<AccompanyData>>;
}) {
  const [newTag, setNewTag] = useState('');
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

  if (!editor) {
    return null;
  }
  return (
    <div className='grow flex flex-col overflow-hidden'>
      <h3 className='text-headline-03 my-10'>마지막이에요! 힘내주세요!! ✈️</h3>
      <div className='flex flex-col gap-4 overflow-auto'>
        <div className='w-full h-[216px] bg-nutral-white-02 flex flex-col justify-center items-center gap-2.5 py-15'>
          <CameraIcon />
          <p className='text-center text-caption-03 text-nutral-white-04'>
            사진을 업로드해주세요. <br />
            업로드하신 이미지가 없으면 기본이미지가 올라갑니다.
          </p>
          <p className='text-caption-03 text-nutral-white-04'>(1280x460)</p>
        </div>
        <input id='banner-image' type='file' accept='image/png, image/jpeg' />
        <WhInput
          type='text'
          handleInputChange={(value) =>
            setForm((prev) => ({ ...prev, title: value }))
          }
          placeholder='오사카 3/15~3/16동안 같이 다닐 분 구해요!!🙌'
          value={form.title}
        />

        <div className='prose max-w-none tiptap'>
          <TiptapRegisterToolbar editor={editor} />
          <EditorContent
            className='w-full prose-p:m-0 border-nutral-white-04 border h-[30rem] overflow-auto p-5 *:outline-none *:h-full'
            editor={editor}
          />
        </div>
        <div className='border-b border-nutral-white-03 p-2 flex gap-2 mb-2'>
          <ul className='flex gap-3'>
            {form.tags.length > 0 &&
              form.tags.map((tag) => (
                <li>
                  <button
                    type='button'
                    className='shrink-0 px-4 py-2 rounded-full bg-primary-main text-nutral-white-01 hover:bg-primary-light text-caption-01'
                    key={tag}
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
              className='outline-none grow py-1'
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
