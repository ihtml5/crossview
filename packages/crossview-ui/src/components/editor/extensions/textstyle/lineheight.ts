import { Extension } from '@tiptap/core';

interface Attribute {
    lineHeight?: number,
}

export default Extension.create({
  name: 'lineHeight',
  defaultOptions: {
    types: ['textStyle'],
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            renderHTML: (attributes: Attribute): Record<string, string> => {
              if (!attributes.lineHeight) {
                return {};
              }

              return {
                style: `line-height: ${attributes.lineHeight}`,
              };
            },
            parseHTML: (element: readonly<HTMLElement>): number => {
                return element.style.lineHeight;
            }
          },
        },
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [this.type, HTMLAttributes, 0];
  },
  addCommands() {
    return {
      setLineHeight: (lineHeight: number) => ({ chain }) => chain()
        .setMark('textStyle', { lineHeight })
        .run(),
      toggleLineHeight: (lineHeight: number) => ({ chain }) => chain().toggleMark('textStyle', { lineHeight }),
      unsetLineHeight: () => ({ chain }) => chain()
        .setMark('textStyle', { lineHeight: null })
        .removeEmptyTextStyle()
        .run(),
    };
  },
});