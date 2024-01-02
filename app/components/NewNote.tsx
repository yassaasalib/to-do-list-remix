import { Form } from '@remix-run/react';
import styles from './NewNote.css';

function NewNote() {
  return (
    <Form method="post" action='/notes' id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </Form>
  );
} 

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}