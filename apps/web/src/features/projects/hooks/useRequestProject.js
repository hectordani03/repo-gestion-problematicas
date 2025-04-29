import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useRequestProject() {
  const [form, setForm] = useState({
    name: '',            
    phone: '',             
    contactEmail: '',      
    company: '',        
    title: '',              
    shortDescription: '',    
    description: '',         
    projectType: '',        
    faculty: '',             
    problemType: '',      
    deadline: '',            
    image: null              
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proyecto solicitado:', form);
    navigate('/dashboard');
  };

  return { form, handleChange, handleSubmit };
}
