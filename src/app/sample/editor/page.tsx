'use client';

import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import ResizableImageExtension from './TiptapImageResize';
import TiptapToolbar from './TiptapToolbar';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import style from './tiptap.module.scss';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import FontSize from './TiptapFontSizeExtension';

export default function TipTapPage() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Placeholder.configure({
        emptyEditorClass: 'is-editor-empty',
        placeholder: '글을 작성해보세요.',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({ multicolor: true }),
      FontSize,
      ResizableImageExtension,
    ],
    content: `
    <p><img src="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="583"></p>
    `,
  });

  if (!editor) {
    return null;
  }

  return (
    <div
      className={`flex justify-center items-center p-10 w-full ${style.tiptap}`}
    >
      <div className='prose max-w-none w-[50rem] tiptap'>
        <TiptapToolbar editor={editor} />
        <EditorContent
          className=' prose-p:m-0 border-nutral-white-04 border h-[30rem] overflow-auto p-5 *:outline-none *:h-full'
          editor={editor}
        />
        <EditorJSONPreview editor={editor} />
      </div>
    </div>
  );
}

function EditorJSONPreview({ editor }: { editor: Editor }) {
  return <pre className='whitespace-normal'>{editor.getHTML()}</pre>;
}
