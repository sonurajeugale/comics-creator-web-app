// Component to create comic strips with individual panels.
import React, { useState } from 'react';
import { query } from './api';
import './App.css';

const ComicForm: React.FC = () => {
    // State for user inputs for each comic panel.
    const [inputs, setInputs] = useState<string[]>(Array(10).fill(''));
    // State for storing generated comic images.
    const [comicImages, setComicImages] = useState<string[]>(Array(10).fill(''));
    // Loading state for each panel to manage UI feedback during image generation.
    const [loadingStates, setLoadingStates] = useState<boolean[]>(Array(10).fill(false));
    // Error messages for each panel.
    const [errorMessages, setErrorMessages] = useState<string[]>(Array(10).fill(''));

    // Function to handle image generation for each panel.
    const handleGenerateImage = async (index: number) => {
        setLoadingStates(prev => prev.map((state, idx) => idx === index ? true : state));
        setErrorMessages(prev => prev.map((msg, idx) => idx === index ? '' : msg));

        try {
            const imageBlob: Blob = await query({ inputs: inputs[index] });
            const imageObjectURL: string = URL.createObjectURL(imageBlob);
            setComicImages(prev => prev.map((img, idx) => idx === index ? imageObjectURL : img));
        } catch (error) {
            console.error('Error fetching image:', error);
            setErrorMessages(prev => prev.map((msg, idx) => idx === index ? "Failed to generate image. Please try again." : msg));
        } finally {
            setLoadingStates(prev => prev.map((state, idx) => idx === index ? false : state));
        }
    };

    return (
        <div className="image-generator">
            {inputs.map((input, index) => (
                <div key={index} className="panel">
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInputs(prev => prev.map((inp, idx) => idx === index ? e.target.value : inp))}
                        placeholder={`Enter text for panel ${index + 1}`}
                        className="panel-input"
                    />
                    <button 
                        onClick={() => handleGenerateImage(index)} 
                        disabled={loadingStates[index]}
                        className="generate-button"
                    >
                        {loadingStates[index] ? 'Generating...' : 'Generate Panel'}
                    </button>
                    {errorMessages[index] && <div className="error-message">{errorMessages[index]}</div>}
                    {comicImages[index] && <img src={comicImages[index]} alt={`Comic panel ${index + 1}`} className="comic-image" />}
                </div>
            ))}
        </div>
    );
};

export default ComicForm;
