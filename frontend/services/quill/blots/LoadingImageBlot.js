import { Quill } from 'react-quill';

const BlockEmbed = Quill.import('blots/block/embed');
class LoadingImageBlot extends BlockEmbed {
  static create({ src, className, id }) {
    // node is a <section>
    const node = super.create();
    node.setAttribute('class', className);
    node.setAttribute('data-id', id);

    const img = document.createElement('img');
    img.setAttribute('src', src);
    node.appendChild(img);

    return node;
  }

  // That's for reinitialising it from html (from backend) -> into Quill again
  static value(node) {
    return {
      src: node.querySelector('img').getAttribute('src'),
      className: node.getAttribute('class'),
      id: node.getAttribute('data-id')
    };
  }
}
LoadingImageBlot.blotName = 'loadingImage';
LoadingImageBlot.tagName = 'section';

export default LoadingImageBlot;
