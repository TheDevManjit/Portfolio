import React, { useState, useEffect } from 'react';

export default function TextEffect() {
    const [text, setText] = useState('');
    const fullText = "WEB DEVELOPER"; // Text to display
    const [index, setIndex] = useState(0);

    useEffect(() => {
        function updateText() {
            if (index < fullText.length) {
                setText((prevText) => prevText + fullText[index]);
                setIndex(index + 1);
            } else {
                setTimeout(() => {
                    // Restart the loop after a short delay
                    setText('');  // Clear the text
                    setIndex(0);  // Reset the index
                }, 1000);  // 1 second delay before restarting
            }
        }

        const timer = setTimeout(updateText, 500); // Update every 500ms

        return () => clearTimeout(timer); // Clean up the timer
    }, [index, fullText]);

    return (
        <div className='text_container '>
            <h1 className=''> {text}|</h1>
            
            
        </div>
    );
}
