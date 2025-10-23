export default function ErrorAlert({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-3 rounded-lg border border-red-300">
      {message}
    </div>
  );
}
