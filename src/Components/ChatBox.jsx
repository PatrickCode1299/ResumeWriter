import { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const ChatBox = () => {
  const [userInput, setUserInput] = useState('');
  const [resume, setResume] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Generate the resume on form submission
  const generateResume = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = `Generate a professional resume for the following details:
    ${userInput}`; // Concatenate the user input to enhance the model prompt with details

    try {
      const apiKey = "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"; // Get your API key from Hugging Face
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2', // Endpoint for GPT-2 or GPT-Neo model
        { inputs: prompt },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`, // Include API key for authentication
          },
        }
      );

      // Get the response from Hugging Face API
      const resumeText = response.data[0]?.generated_text.trim();
      setResume(resumeText); // Store resume content in the state
    } catch (error) {
      console.error('Error generating resume:', error);
      setResume('Error generating resume, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Download the resume as PDF
  const downloadResumeAsPDF = () => {
    const doc = new jsPDF();
    doc.text(resume, 10, 10); // Adding resume text at position (10, 10) on the page.
    doc.save('resume.pdf'); // Save the PDF file as 'resume.pdf'
  };

  return (
    <div className="chat-box-container">
      <form onSubmit={generateResume}>
        <textarea
          onChange={handleInputChange}
          value={userInput}
          cols={60}
          rows={20}
          placeholder="Enter your information such as Full Name, Email, Experiences with Date.. | If you are entry-level and do not have experience, we got you covered! Enter a brief description about yourself (e.g., Your Interests, College Attended, Proposed Job Role)."
          className="chatbox"
          style={{ resize: 'none' }}
        ></textarea>
        <button className="resume-builder-btn" disabled={loading}>
          {loading ? 'Building...' : 'Build Resume'}
        </button>
      </form>
      {resume && (
        <div>
          <h3>Generated Resume:</h3>
          <pre>{resume}</pre>
          <button className="resume-builder-btn" onClick={downloadResumeAsPDF}>
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
