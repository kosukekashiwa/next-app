const Loading: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="h-2 w-2 animate-ping rounded-full bg-red-60"></div>
      <div className="mx-4 h-2 w-2 animate-ping rounded-full bg-red-60"></div>
      <div className="h-2 w-2 animate-ping rounded-full bg-red-60"></div>
    </div>
  );
};

export default Loading;
