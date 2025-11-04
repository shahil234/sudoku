const Key = ({ item, onClick }) => {
  return <button onClick={onClick} className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-xl active:bg-gray-200 font-medium">{item}</button>;
};

export default Key;
