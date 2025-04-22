
interface FormData {
  name: string;
  email: string;
  phone: string;
  interesse: string;
  message: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzwygrj';
const EMAIL_BACKUP = 'mailto:kontakt@example.com';

export const submitForm = async (formData: FormData): Promise<void> => {
  // Create a form element
  const formElement = document.createElement('form');
  formElement.method = 'POST';
  formElement.action = FORMSPREE_ENDPOINT;
  formElement.target = '_blank';
  
  // Add form data
  for (const [key, value] of Object.entries(formData)) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value.toString();
    formElement.appendChild(input);
  }
  
  // Add special fields
  const subjectInput = document.createElement('input');
  subjectInput.type = 'hidden';
  subjectInput.name = '_subject';
  subjectInput.value = `Neue Anfrage: ${formData.interesse} von ${formData.name}`;
  formElement.appendChild(subjectInput);
  
  // Append to body
  document.body.appendChild(formElement);
  
  try {
    // Create and use a promise to handle the form submission
    await new Promise<void>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        console.log("Form submission assumed successful (timeout)");
        resolve();
      }, 2000);
      
      formElement.addEventListener('submit', () => {
        clearTimeout(timeoutId);
        setTimeout(() => {
          console.log("Form submitted via DOM");
          resolve();
        }, 500);
      });
      
      formElement.submit();
    });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  } finally {
    document.body.removeChild(formElement);
  }
};

export const getMailtoLink = (formData: FormData): string => {
  return `${EMAIL_BACKUP}?subject=Anfrage: ${formData.interesse}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0AInteresse: ${formData.interesse}%0D%0ANachricht: ${formData.message}`;
};
