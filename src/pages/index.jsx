import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('audio', file);

    try {
      setLoading(true);
      const uploadRes = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const transcribeRes = await axios.post('/api/transcribe', {
        filePath: uploadRes.data.filePath,
      });

      setText(transcribeRes.data.text);
    } catch (error) {
      console.error('Error uploading or transcribing audio:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Upload your audio file</h1>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file || loading}>
        {loading ? 'Transcribing...' : 'Upload and Transcribe'}
      </button>
      {text && (
        <div style={{ marginTop: '20px' }}>
          <h2>Transcription</h2>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
