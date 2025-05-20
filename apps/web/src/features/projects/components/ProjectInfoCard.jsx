export default function ProjectInfoCard({ items = [] }) {
    return (
      <div className="bg-gray-100 rounded-xl p-6 shadow-md mb-6 w-11/12">
        <ul className="space-y-2 text-md">
          {items.map(({ label, value }, idx) => (
            <li key={idx}>
              <strong>{label}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  