import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Download() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusType, setStatusType] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    setMessage(''); // Clear previous messages
    try {
      // Check if the API URL is defined
      if (!process.env.REACT_APP_API_URL) {
        setMessage('API URL is not defined.');
        setStatusType('error');
        return;
      }

      // Make a GET request to your backend to get the download URL
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-resume-url`);

      if (response.status === 200 && response.data.url) {
        // Download the resume
        const fileResponse = await axios.get(`${process.env.REACT_APP_API_URL}${response.data.url}`, {
          responseType: 'blob', // Expecting a binary file (PDF, etc.)
        });

        // Create a link and download the file
        const url = window.URL.createObjectURL(new Blob([fileResponse.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf'); // Specify the filename here
        document.body.appendChild(link);
        link.click();
        link.remove(); // Clean up the link element

        setMessage('Resume downloaded successfully!');
        setStatusType('success'); // Set status type to success
      } else {
        setMessage('Failed to get resume URL. Please try again.');
        setStatusType('error'); // Set status type to error
      }
    } catch (error) {
      console.error('Error fetching the resume:', error);
      setMessage('Error downloading the resume.');
      setStatusType('error'); // Set status type to error
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-3" fluid>
      {message && <Alert variant={statusType === 'error' ? 'danger' : 'info'}>{message}</Alert>}
      <Button variant="success" onClick={handleDownload} disabled={loading}>
        {loading ? 'Downloading...' : 'Download Resume'}
      </Button>
    </Container>
  );
}

export default Download;
