const config = {
  serviceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  templateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  publicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
};

export default config;
