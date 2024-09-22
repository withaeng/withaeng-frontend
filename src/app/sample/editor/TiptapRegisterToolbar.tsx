import { Editor } from '@tiptap/react';
import { useCallback, useRef } from 'react';
import {
  RiAlignCenter,
  RiAlignJustify,
  RiAlignLeft,
  RiAlignRight,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiBold,
  RiFontColor,
  RiItalic,
  RiLink,
  RiListOrdered,
  RiListUnordered,
  RiQuoteText,
  RiSeparator,
  RiStrikethrough2,
  RiUnderline,
} from 'react-icons/ri';
import { Level } from '@tiptap/extension-heading';
import { MdFontDownload } from 'react-icons/md';

// custom class
const buttonClass =
  'p-1 rounded-sm transition-all duration-75 hover:bg-nutral-black-05/20 disabled:text-nutral-black-05/70 disabled:bg-nutral-black-05/10';
const isActive =
  'text-primary-main bg-primary-main/10 hover:bg-primary-main/30';
const iconClass = 'w-5 h-5';

// 툴바 구분선
function DivideLine() {
  return <span className='mx-2 border-l border-nutral-white-03' />;
}

const headings = [
  { value: 0, label: '본문' },
  { value: 1, label: '제목 1' },
  { value: 2, label: '제목 2' },
  { value: 3, label: '제목 3' },
  { value: 4, label: '제목 4' },
  { value: 5, label: '제목 5' },
  { value: 6, label: '제목 6' },
];

const fontSizes = [
  { value: '10', label: '10' },
  { value: '12', label: '12' },
  { value: '14', label: '14' },
  { value: '16', label: '16' },
  { value: '18', label: '18' },
  { value: '20', label: '20' },
  { value: '22', label: '22' },
];

export default function TiptapRegisterToolbar({ editor }: { editor: Editor }) {
  const imageRef = useRef<HTMLInputElement>(null);

  const addImage = () => {
    if (imageRef.current?.files) {
      const file = imageRef.current.files[0];
      editor.commands.setImage({ src: URL.createObjectURL(file) });
    }
  };

  // heading selecting
  const setSelectedHeading = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(e.target.value);
    editor.commands.unsetFontSize();
    if (selected === 0) {
      const selectedLevel = editor.getAttributes('heading').level;
      return editor
        .chain()
        .focus()
        .toggleHeading({ level: selectedLevel })
        .run();
    }
    return editor
      .chain()
      .focus()
      .setHeading({ level: selected as Level })
      .run();
  };

  // font-size selecting
  const setSelectedFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    return editor.commands.setFontSize(selected);
  };
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url === null) {
      return;
    }
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className='flex flex-col border-t border-x border-nutral-white-04 not-prose'>
      <div className='flex gap-1 p-2 border-b border-nutral-white-03'>
        <select
          className='w-20 outline-none'
          value={
            editor.isActive('heading')
              ? editor.getAttributes('heading').level
              : 0
          }
          onChange={setSelectedHeading}
        >
          {headings.map(({ value, label }) => (
            <option
              className=' checked:bg-primary-main/30'
              key={value}
              label={label}
              value={value}
            />
          ))}
        </select>
        <select
          className='w-20 outline-none disabled:text-nutral-black-05/70 disabled:bg-nutral-black-05/10'
          value={editor.getAttributes('textStyle').fontSize ?? '16'}
          disabled={editor.isActive('heading')}
          onChange={setSelectedFontSize}
        >
          {fontSizes.map(({ value, label }) => (
            <option
              className=' checked:bg-primary-main/30'
              key={value}
              label={label}
              value={value}
            />
          ))}
        </select>
        <DivideLine />
        <label
          htmlFor='txtColorInput'
          className={`relative cursor-pointer ${buttonClass}`}
        >
          <input
            className='absolute bottom-0 left-0 w-0 h-0 opacity-0'
            type='color'
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            value={editor.getAttributes('textStyle').color ?? '#000000'}
            data-testid='setColor'
            id='txtColorInput'
          />
          <RiFontColor className={iconClass} />
        </label>
        <label
          htmlFor='bgColorInput'
          className={`relative cursor-pointer ${buttonClass}`}
        >
          <input
            className='absolute bottom-0 left-0 w-0 h-0 opacity-0'
            type='color'
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              editor.commands.setHighlight({ color: event.target.value })
            }
            value={editor.getAttributes('highlight').color ?? '#000000'}
          />
          <MdFontDownload className={iconClass} />
        </label>
        <button
          type='button'
          aria-label='bold button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiBold className={iconClass} />
        </button>
        <button
          type='button'
          aria-label='italic button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiItalic className={iconClass} />
        </button>
        <button
          type='button'
          aria-label='underline button'
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={
            editor.isActive('underline')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiUnderline className={iconClass} />
        </button>
        <button
          type='button'
          aria-label='strike button'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive('strike')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiStrikethrough2 className={iconClass} />
        </button>
      </div>
      <div className='flex gap-1 p-2'>
        <button
          type='button'
          aria-label='text-align(left) button'
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={
            editor.isActive({ textAlign: 'left' })
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiAlignLeft className={iconClass} />
        </button>
        <button
          type='button'
          aria-label='text-align(center) button'
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={
            editor.isActive({ textAlign: 'center' })
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiAlignCenter className={iconClass} />
        </button>
        <button
          type='button'
          aria-label='text-align(right) button'
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={
            editor.isActive({ textAlign: 'right' })
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiAlignRight className={iconClass} />
        </button>
        <button
          type='button'
          aria-label='text-align(justify) button'
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={
            editor.isActive({ textAlign: 'justify' })
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiAlignJustify className={iconClass} />
        </button>
        <DivideLine />
        <button
          type='button'
          aria-label='bulletList button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiListUnordered className={iconClass} />
        </button>
        <button
          type='button'
          aria-label='orderedList button'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiListOrdered className={iconClass} />
        </button>

        <button
          type='button'
          aria-label='blockquote button'
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive('blockquote')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiQuoteText className={iconClass} />
        </button>
        <DivideLine />
        <button
          type='button'
          aria-label='separator line button'
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={buttonClass}
        >
          <RiSeparator className={iconClass} />
        </button>
        <input
          type='file'
          id='imageInput'
          accept='image/*'
          ref={imageRef}
          className='hidden'
          onChange={addImage}
        />

        <button
          type='button'
          aria-label='link button'
          onClick={setLink}
          className={
            editor.isActive('link')
              ? `${buttonClass} ${isActive}`
              : `${buttonClass}`
          }
        >
          <RiLink className={iconClass} />
        </button>

        <button
          type='button'
          aria-label='undo button'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={buttonClass}
        >
          <RiArrowGoBackLine className={iconClass} />
        </button>

        <button
          type='button'
          aria-label='redo button'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={buttonClass}
        >
          <RiArrowGoForwardLine className={iconClass} />
        </button>
      </div>
    </div>
  );
}
