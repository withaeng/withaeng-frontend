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
  RiImageLine,
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
const BUTTON_CLASS =
  'p-1 rounded-sm transition-all duration-75 hover:bg-nutral-black-05/20 disabled:text-nutral-black-05/70 disabled:bg-nutral-black-05/10';
const IS_ACTIVE =
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
  { value: '10', label: '10px' },
  { value: '12', label: '12px' },
  { value: '14', label: '14px' },
  { value: '16', label: '16px' },
  { value: '18', label: '18px' },
  { value: '20', label: '20px' },
  { value: '22', label: '22px' },
];

export default function TiptapToolbar({ editor }: { editor: Editor }) {
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
    <div className='flex gap-1 p-2 border-t border-x border-nutral-white-04 not-prose'>
      <select
        className='w-20 outline-none'
        value={
          editor.isActive('heading') ? editor.getAttributes('heading').level : 0
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
        id='txtColorLabel'
        htmlFor='txtColorInput'
        className={`relative cursor-pointer ${BUTTON_CLASS}`}
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
        id='bgColorLabel'
        htmlFor='bgColorInput'
        className={`relative cursor-pointer ${BUTTON_CLASS}`}
      >
        <input
          className='absolute bottom-0 left-0 w-0 h-0 opacity-0'
          type='color'
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            editor.commands.setHighlight({ color: event.target.value })
          }
          value={editor.getAttributes('highlight').color ?? '#000000'}
          id='bgColorInput'
        />
        <MdFontDownload className={iconClass} />
      </label>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive('bold')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiBold className={iconClass} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive('italic')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiItalic className={iconClass} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={
          editor.isActive('underline')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiUnderline className={iconClass} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive('strike')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiStrikethrough2 className={iconClass} />
      </button>
      <DivideLine />
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={
          editor.isActive({ textAlign: 'left' })
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiAlignLeft className={iconClass} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={
          editor.isActive({ textAlign: 'center' })
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiAlignCenter className={iconClass} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={
          editor.isActive({ textAlign: 'right' })
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiAlignRight className={iconClass} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={
          editor.isActive({ textAlign: 'justify' })
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiAlignJustify className={iconClass} />
      </button>
      <DivideLine />
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiListUnordered className={iconClass} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive('orderedList')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiListOrdered className={iconClass} />
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive('blockquote')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiQuoteText className={iconClass} />
      </button>
      <DivideLine />
      <button
        type='button'
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={BUTTON_CLASS}
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
        className={
          editor.isActive('image')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <label htmlFor='imageInput'>
          <RiImageLine className={iconClass} />
        </label>
      </button>

      <button
        type='button'
        onClick={setLink}
        className={
          editor.isActive('link')
            ? `${BUTTON_CLASS} ${IS_ACTIVE}`
            : `${BUTTON_CLASS}`
        }
      >
        <RiLink className={iconClass} />
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={BUTTON_CLASS}
      >
        <RiArrowGoBackLine className={iconClass} />
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={BUTTON_CLASS}
      >
        <RiArrowGoForwardLine className={iconClass} />
      </button>
    </div>
  );
}
