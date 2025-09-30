# EmailJS Setup Guide

## Setting Up EmailJS for Your Contact Form

Follow these steps to make your contact form fully functional:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails per month free)

### Step 2: Add Email Service
1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - For Gmail: Select "Gmail"
   - Connect your account and authorize EmailJS

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Set the "To Email" field to: {{to_email}}
5. Save the template and note the Template ID

### Step 4: Get Your Public Key
1. Go to "Account" 
2. Find your Public Key under the API keys section
3. Copy this key

### Step 5: Update Your Code
In `src/components/Contact/Contact.js`, find the commented EmailJS section and replace with your actual credentials:

```javascript
// Replace these with your actual EmailJS credentials
await emailjs.send(
  'service_xxxxxx',  // Your Service ID from Step 2
  'template_xxxxxx', // Your Template ID from Step 3
  templateParams,
  'xxxxxxxxxxxxxxxxx' // Your Public Key from Step 4
);
```

### Step 6: Test
1. Fill out the contact form on your website
2. Check your email for the message
3. Check EmailJS dashboard for sent email logs

### Alternative: Environment Variables (Recommended)
For better security, use environment variables:

1. Create a `.env` file in your project root:
```
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

2. Update your code to use environment variables:
```javascript
await emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  templateParams,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);
```

3. Add `.env` to your `.gitignore` file

### Troubleshooting
- Make sure all IDs are correct
- Check EmailJS dashboard for error logs
- Ensure your email service is connected properly
- Test with different email addresses

### Current Setup
The contact form is currently set up to:
- Receive emails at: vishwa12550@gmail.com
- Show success/error messages using toast notifications
- Validate form inputs before sending
- Reset form after successful submission

Once you complete the EmailJS setup, uncomment the emailjs.send() code and your contact form will be fully functional!
