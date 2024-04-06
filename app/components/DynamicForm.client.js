'use client';
import { useState } from 'react';

// Client-side component for form
export default function DynamicForm() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  
    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true); // Disable the button

        try {
            const response = await fetch('/api/v_plus_seven', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: inputText }),
            });

            if (!response.ok) {
                throw new Error('Failed to transform text');
            }

            const data = await response.json();
            setOutputText(data.transformed);
        } catch (error) {
            console.error(error);
            // Handle error (show error message to user, etc.)
        } finally {
            setIsSubmitting(false); // Re-enable the button
        }
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text"
          rows="20" // Sets the minimum number of lines the textarea will display
          className="w-full max-w-lg" // Adjust width as necessary; using Tailwind CSS classes for example
          style={{ resize: 'vertical' }} // Allows vertical resizing, you can also use 'none' to disable resizing
        ></textarea>
        <br/>
        <button type="submit" className="border border-gray-300 bg-white text-black py-2 px-4 rounded hover:border-gray-500 hover:bg-gray-100">V + 7</button>
      </form>
      {outputText && <div><br/><br/> <p>{outputText}</p></div>}
    </div>
  );
}
