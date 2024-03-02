'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import FontSize from './TiptapFontSizeExtension';
import TiptapToolbar from './TiptapToolbar';
import ResizableImageExtension from './TiptapImageResize';

export default function TipTapPage() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: '글을 작성해보세요.',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({ multicolor: true }),
      FontSize,
      ResizableImageExtension,
    ],
  });

  if (!editor) {
    return null;
  }

  return (
    <div className='flex items-center justify-center w-full p-10'>
      <div className='prose max-w-none w-[50rem] tiptap'>
        <TiptapToolbar editor={editor} />
        <EditorContent
          className='prose-p:m-0 border-nutral-white-04 border h-[30rem] overflow-auto p-5 *:outline-none *:h-full'
          editor={editor}
        />
        <pre className='whitespace-normal'>{editor.getHTML()}</pre>
      </div>
    </div>
  );
}
