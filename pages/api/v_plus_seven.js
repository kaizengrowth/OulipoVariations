// pages/api/v_plus_seven.js

export default async function handler(req, res) {
  console.log('triggering api function');


  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Forward the request to the AWS Lambda function
    const lambdaResponse = await fetch('https://xmp8gz03sg.execute-api.us-east-1.amazonaws.com/prod/v_plus_seven', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    // If the request to Lambda failed
    if (!lambdaResponse.ok) {
      throw new Error('Failed to transform text');
    }

    // Parse the response from Lambda
    const data = await lambdaResponse.json();
    console.log(data);

    // Respond to the client with the transformed text
    res.status(200).json(data);
  } catch (error) {
    // Catch any errors and respond with an error message
    res.status(500).json({ message: error.message });
  }
}
