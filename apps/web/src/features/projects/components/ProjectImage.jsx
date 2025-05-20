import projectImage from '@/assets/project2.webp'

export default function ProjectImage({ alt }) {
    return (
      <div className="w-9/12 h-auto rounded-xl overflow-hidden mb-5 shadow-md mt-5">
        <img
          src={projectImage}
          alt={alt || 'Imagen del proyecto'}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  