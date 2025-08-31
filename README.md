# React Typeflux

A lightweight, easy-to-use rich text editor and viewer for React applications.

## ✨ Features

- 📝 Rich text editing
- 👀 Built-in viewer
- 🎨 Pre-styled with TailwindCSS (no extra setup needed)
- 📋 Supports rich paste (copy-paste formatted text)

## 📦 Installation

```bash
npm install react-typeflux
```

or with yarn:

```bash
yarn add react-typeflux
```

## 🚀 Usage

```jsx
import React, { useState } from "react";
import { RichTextEditor, RichTextViewer } from "react-typeflux";
import "react-typeflux/dist/react-typeflux.css";

const MyEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <RichTextEditor
        value={content}
        onChange={setContent}
        placeholder="Write your blog content…"
        allowRichPaste
      />

      <h2 className="mt-4 font-bold">Preview</h2>
      <RichTextViewer value={content} />
    </div>
  );
};

export default MyEditor;
```

## ⚙️ Props

### `<RichTextEditor />`

| Prop            | Type       | Default   | Description |
|-----------------|------------|-----------|-------------|
| `value`         | `string`   | `""`      | The editor's current content |
| `onChange`      | `function` | `() => {}`| Callback when content changes |
| `placeholder`   | `string`   | `""`      | Placeholder text |
| `allowRichPaste`| `boolean`  | `false`   | Whether to allow pasting rich text |

### `<RichTextViewer />`

| Prop     | Type     | Default | Description |
|----------|----------|---------|-------------|
| `value`  | `string` | `""`    | The content to render |

## 🛠 Development

To build locally:

```bash
git clone https://github.com/haryomidey/react-typeflux.git
cd react-typeflux
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Ayotech** – [Portfolio](https://portfolio-six-flax-15.vercel.app/)
