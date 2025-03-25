'use client'


import saveContent from '@/app/action/saveContent';
import emailPrompt from '@/prompts/emailPrompt';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const GenerateEmailTemplate = () => {
  const [userInput, setUserInput] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    
    const PROMPT = emailPrompt.EMAIL_PROMPT + '\n' + `-email_prompt: ${userInput}`
    console.log(PROMPT)

    try {
      // Send user input to the API
      const response = await fetch('/api/generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: PROMPT }),
      });

      const data = await response.json();
      if (response.ok) {
        setGeneratedContent(data.content);
        console.log(data.content);
        // save in the DB later
        const design = JSON.parse(data.content);
        console.log("Design", design)
        const system_prompt = PROMPT;
        const email_from = 'abc@gmail.com';
        const user_id = '21049031-da54-4b58-8b66-4409e85df8b9';
        const prompt = userInput;
        const res = await saveContentToDB(design, system_prompt, prompt, email_from, user_id);
        router.push(`/editor/${res[0]?.id}`);

      } else {
        setError(data.error || 'Failed to generate content');
      }
    } catch (error) {
      setError('An error occurred while generating the content');
    } finally {
      setLoading(false);
    }
  };

  const saveContentToDB = async(design, system_prompt, prompt, email_from, user_id) =>{
    try{
      const result = await saveContent(design, system_prompt, prompt, email_from, user_id);
      console.log(result)
      console.log(result[0]?.id)
      return result;
    } catch(error){
      console.log(error)
    }
  }

  const save = async() =>{
    const design = "data.content";
    const description = "generate an email template for my saas app";
    const email_from = 'abc@gmail.com';
    const user_id = '21049031-da54-4b58-8b66-4409e85df8b9';
    console.log(design, description, email_from, user_id)
    try{
      const result = await saveContent(design, description, email_from, user_id);
      console.log(result)
      console.log(result[0]?.id)
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Generate Email Template</h1>
      <p className="text-gray-600 mb-6 text-center">A paragraph about the email template generator.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your message or prompt here"
          rows="4"
          className="w-full p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 cursor-pointer bg-pink-700 text-white font-semibold rounded-lg hover:bg-pink-800 disabled:bg-gray-400 flex justify-center items-center"
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-t-4 border-pink-500 border-solid rounded-full animate-spin"></div>
          ) : (
            "Generate Template"
          )}
        </button>
      </form>
    </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {generatedContent && (
        <div>
          <h2>Generated Email Template</h2>
          <pre>{generatedContent}</pre>
        </div>
      )}
      <button onClick={save}>Save to Database</button>
    </div>
  );
};

export default GenerateEmailTemplate;
