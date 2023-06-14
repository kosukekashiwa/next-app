const Loading: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-pink-600 h-2 w-2 animate-ping rounded-full"></div>
      <div className="bg-pink-600 mx-4 h-2 w-2 animate-ping rounded-full"></div>
      <div className="bg-pink-600 h-2 w-2 animate-ping rounded-full"></div>
    </div>
  );
};

export default Loading;
