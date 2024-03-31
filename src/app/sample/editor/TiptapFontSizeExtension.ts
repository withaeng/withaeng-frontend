import TextStyle from '@tiptap/extension-text-style';

/**
 * FontSize - Custom Extension
 * editor.commands.setFontSize(e.target.value) :set the font-size.
 * https://stackoverflow.com/questions/70564092/tiptap-font-size-react
 */

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font size
       */
      setFontSize: (size: string) => ReturnType;
      /**
       * Unset the font size
       */
      unsetFontSize: () => ReturnType;
    };
  }
}

const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize.replace('px', ''),
        renderHTML: (attributes) => {
          if (!attributes.fontSize) {
            return {};
          }
          return {
            style: `font-size: ${attributes.fontSize}px`,
          };
        },
      },
    };
  },

  addCommands() {
    return {
      ...this.parent?.(),
      setFontSize:
        (fontSize) =>
        ({ commands }) =>
          commands.setMark(this.name, { fontSize }),
      unsetFontSize:
        () =>
        ({ chain }) =>
          chain()
            .setMark(this.name, { fontSize: null })
            .removeEmptyTextStyle()
            .run(),
    };
  },
});

export default FontSize;
