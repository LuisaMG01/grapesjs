const exampleBlocks = (editor) => {
    editor.BlockManager.add('exampleBlock', {
      label: 'example Block',
      attributes: { class: 'gjs-fonts gjs-f-example' },
      content: `<div style="padding:50px; text-align:center; background-color:#e6e6e6">example Block</div>`,
    });
  };
  
export default exampleBlocks;
  