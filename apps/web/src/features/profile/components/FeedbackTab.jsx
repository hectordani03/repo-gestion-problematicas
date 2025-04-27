import React from 'react';

const feedbacks = [
  { user: 'Juan', comment: 'Excelente plataforma, muy intuitiva.' },
  { user: 'María', comment: 'El seguimiento de proyectos es muy útil.' },
];

const FeedbackTab = () => (
  <div className="space-y-4">
    {feedbacks.map((fb, i) => (
      <div key={i} className="bg-white p-4 rounded-xl shadow">
        <p className="font-medium">{fb.user}</p>
        <p className="text-gray-600 mt-1 leading-snug">{fb.comment}</p>
      </div>
    ))}
  </div>
);

export default FeedbackTab;