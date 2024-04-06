// Import the necessary module
import { exec } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    const scriptPath = './scripts/v_plus_seven.py';

    // Execute the Python script using the input text
    exec(`python3 ${scriptPath} "${text}"`, (error, stdout, stderr) => {
      console.log("Error:", error);
      console.log("STDOUT:", stdout);
      console.log("STDERR:", stderr);
      
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).json({ error: 'Error executing Python script' });
      }
      // Send the stdout (output of the Python script) as the response
      res.status(200).json({ transformed: stdout });
    });
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
