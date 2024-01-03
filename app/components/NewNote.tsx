import { Form, useActionData, useNavigation } from '@remix-run/react';
import styles from './NewNote.css';

function NewNote() {
  // const data = useActionData();
  const data = useActionData<{ message: string }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"

  return (
    <Form method="post" action='/notes' id="note-form">
      {data?.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" required />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? "Addiing..." : "Add Note"}</button>
      </div>
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}