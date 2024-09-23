import axios from 'axios';
import fs from 'fs';

export default async function transcribeAudio(filePath) {
  try {
    const audioData = fs.readFileSync(filePath);

    const response = await axios.post(
      'https://api.assemblyai.com/v2/upload',
      audioData,
      {
        headers: {
          authorization: '2739659c7853429894530543cdfd2271',
          'content-type': 'application/octet-stream',
        },
      },
    );

    const { upload_url } = response.data;

    const transcriptResponse = await axios.post(
      'https://api.assemblyai.com/v2/transcript',
      {
        audio_url: upload_url,
      },
      {
        headers: {
          authorization: '2739659c7853429894530543cdfd2271',
        },
      },
    );

    const transcriptId = transcriptResponse.data.id;

    let transcriptionData;
    let isComplete = false;
    while (!isComplete) {
      const statusResponse = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
        {
          headers: {
            authorization: '2739659c7853429894530543cdfd2271',
          },
        },
      );

      transcriptionData = statusResponse.data;
      if (transcriptionData.status === 'completed') {
        isComplete = true;
      } else if (transcriptionData.status === 'failed') {
        throw new Error('Transcription failed');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }

    return transcriptionData.text;
  } catch (error) {
    console.error('Error during transcription:', error);
    throw error;
  }
}
