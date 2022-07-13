import { Extension } from '@tiptap/core';

export default Extension.create({
  name: 'textfontsize',
  defaultOptions: {
    types: ['textStyle'],
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontsize: {
            default: null,
            renderHTML: (attributes) => {
              if (!attributes.fontsize) {
                return {};
              }
              return {
                style: `font-size: ${attributes.fontsize}px`,
              };
            },
            parseHTML: element => ({
              fontsize: element.style.fontSize,
            }),
          },
        },
      },
    ];
  },
  renderHTML({ HTMLAttributes }): any[] {
    return [this.type, HTMLAttributes, 0];
  },
  addCommands() {
    return {
      setFontsize: fontsize => ({ chain }) => chain()
        .setMark('textStyle', { fontsize })
        .run(),
      toggleFontsize: fontsize => ({ chain }) => chain().toggleMark('textStyle', { fontsize }),
      unsetFontsize: () => ({ chain }) => chain()
        .setMark('textStyle', { fontsize: null })
        .removeEmptyTextStyle()
        .run(),
    };
  },
});