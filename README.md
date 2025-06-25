# Week-3-Code-Challenge
#  Blog Post

A simple, fully interactive blog post application built with **HTML**, **CSS**, and **JavaScript**, and powered by **JSON Server** for mock backend API functionality.

Users can:
- View a list of blog post titles
- See post details
- Add new posts
- Edit or delete existing posts

This project was developed as part of the **Phase 1 Code Challenge**.

---

##  Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Live Server](https://www.npmjs.com/package/live-server) (or Live Server extension for VS Code)
- [JSON Server](https://www.npmjs.com/package/json-server)

---

##  Project Structure

```
blog-post-app/
├── index.html
├── css/
│   └── styles.css
├── src/
│   └── index.js
└── db.json
```

---

##  Installation & Setup

1. **Clone or Create the Project Folder**:

   ```bash
   mkdir blog-post-app && cd blog-post-app
   ```

2. **Create Required Files**:

   - `index.html`
   - `src/index.js`
   - `css/styles.css`
   - `db.json`

3. **Install JSON Server**:

   ```bash
   npm install -g json-server@0.17.4
   ```

4. **Start the JSON Server**:

   ```bash
   json-server db.json
   ```

   This will run your mock API at: `http://localhost:3000`

5. **Start the Frontend Server**:

   Use Live Server to open `index.html` in your browser:

   ```bash
   live-server

---

##  Features

###  Core Deliverables

- View all blog post titles in a list on page load
- Click a post title to view its details (title, content, author)
- Add new posts via a form (`#new-post-form`)
- Function `main()` starts the app on `DOMContentLoaded`

###  Advanced Deliverables

- Automatically display the **first post's details** on page load
- Edit a post with an "Edit" form (`#edit-post-form`)
- Delete a post with a "Delete" button
- All changes are **persisted to the backend API**

---

##  Technical Breakdown

- **JavaScript**: Fetch API, DOM manipulation, event listeners, form handling
- **HTML/CSS**: Semantic HTML, responsive layout, basic styling
- **JSON Server**: Mock RESTful API to simulate backend interactions
- **Structure**:
  - Modular, well-named functions (`displayPosts`, `handlePostClick`, etc.)
  - Event-driven architecture
  - Clean separation of concerns

---

##  Rubric Coverage

| Category               | Status                                       |
|------------------------|----------------------------------------------|
| DOM Manipulation       |  Fully functional rendering and updates     |
| Event Handling         |  Cleanly handled with proper delegation     |
| Server Communication   |  Full REST actions (GET, POST, PATCH, DELETE) |
| Bonus Features         |  Edit, delete, and initial load handling    |

---

##  Author

**AMOS KIPKORIR**

---

##  License

MIT License

Copyright (c) 2025 Amos Kipkorir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
