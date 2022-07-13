import { Extension } from '@tiptap/core';

interface Attribute {
    color?: string;
}

export default Extension.create({
  name: 'textColor',
  defaultOptions: {
    types: ['textStyle'],
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            renderHTML: (attributes: Attribute):any => {
              if (!attributes.color) {
                return {};
              }
              return {
                style: `color: ${attributes.color}`,
              };
            },
            parseHTML: element => ({
              color: element.style.color,
            }),
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
      setColor: color => ({ chain }) => chain()
        .setMark('textStyle', { color })
        .run(),
      toggleColor: color => ({ chain }) => chain().toggleMark('textStyle', { color }),
      unsetColor: () => ({ chain }) => chain()
        .setMark('textStyle', { color: null })
        .removeEmptyTextStyle()
        .run(),
    };
  },
});