import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import FileProcessor from './pages/fileProcessor/fileProcessor';

function App() {
  const [content, setContent] = useState<string | null>(null);
  const [repeatedCount, setRepeatedCount] = useState<number | null>(null);

  useEffect(() => {
    if (content) {
        const words = content.split(' ');
        const wordCount = words.length;
        const repeatedWords = words.filter((word, index) => words.indexOf(word) !== index);
        setRepeatedCount(repeatedWords.length);
    }
}, [content]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
     const file = files[0];
     const reader = new FileReader();

     reader.onload = (e) => {
       const content = e.target?.result;
       setContent(content?.toString() ?? null);
     };

     reader.readAsText(file);
    }
  };
  return (
    <div className="App">
      <Header onReset={() => { setContent(null); setRepeatedCount(null) }} />
      <FileProcessor content={content} repeatedCount={repeatedCount} onFileChange={handleFileChange} />
    </div>
  );
}

export default App;
