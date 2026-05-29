function el(tag, { classes, id, attributes, text } = {}) {
  const node = document.createElement(tag);

  if (id) node.id = id;

  if (classes) {
    const list = Array.isArray(classes) ? classes : [classes];
    node.classList.add(...list);
  }

  if (text !== undefined) {
    node.textContent = text;
  }

  if (attributes) {
    Object.entries(attributes).forEach(([k, v]) => {
      node.setAttribute(k, v);
    });
  }

  return node;
}

function append(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
  return parent;
}

function field({ labelFor, labelText, fieldClass, input }) {
  const wrapper = el('div', {
    classes: fieldClass,
  });

  const label = el('label', {
    attributes: {
      for: labelFor,
    },
    text: labelText,
  });

  return append(wrapper, label, input);
}
