# 📧 Contact Form Email Setup Guide

Your contact form is now configured to send emails using **EmailJS**. Follow these steps to start receiving messages:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

### Step 2: Add Email Service
1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Click "Connect Account" and authorize
   - **Outlook/Yahoo**: Follow the setup instructions
4. Copy your **Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Set up your template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   From: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Click **"Save"**
5. Copy your **Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like: `AbC123XyZ456`)
3. Copy it

### Step 5: Update Your Code
Open `assets/js/enhancements.js` and find line 211-213:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

Replace with your actual credentials:
```javascript
const SERVICE_ID = 'service_abc123';       // Your actual Service ID
const TEMPLATE_ID = 'template_xyz789';     // Your actual Template ID
const PUBLIC_KEY = 'AbC123XyZ456';         // Your actual Public Key
```

### Step 6: Test It!
1. Save the file
2. Refresh your portfolio website
3. Fill out the contact form
4. Submit and check your email! 📬

---

## 🎯 Alternative Solutions

### Option 2: Formspree (Even Easier)
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up (free tier: 50 submissions/month)
3. Create a new form and get your endpoint URL
4. Update your form in `index.html` (line 3111):
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 3: Netlify Forms (If hosting on Netlify)
1. Add `netlify` attribute to your form:
   ```html
   <form id="contactForm" netlify>
   ```
2. Deploy to Netlify
3. Check your Netlify dashboard for submissions

### Option 4: Google Forms
1. Create a Google Form
2. Get the form action URL
3. Update your form to submit to Google Forms

---

## 📝 Email Template Variables

When setting up your EmailJS template, you can use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Hossam Sabry)

---

## 🔧 Troubleshooting

**Form shows success but no email received?**
- Check your spam/junk folder
- Verify your EmailJS credentials are correct
- Check EmailJS dashboard for error logs

**"EmailJS not loaded" warning in console?**
- Make sure you're connected to the internet
- Check if the EmailJS CDN script is loading (line 41 in index.html)

**Rate limit exceeded?**
- Free tier: 200 emails/month
- Upgrade to paid plan if needed

---

## 💡 Current Status

✅ EmailJS library added to your website  
✅ Contact form configured with EmailJS integration  
⚠️ **Action Required**: Add your EmailJS credentials (see Step 5)  

Once you add your credentials, messages will be sent to your email automatically!

---

## 📞 Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

Good luck! 🚀
