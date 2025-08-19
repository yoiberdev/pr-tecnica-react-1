const TextWrapper = () => {
  return (
    <div className="text-white flex flex-col font-bold absolute top-50 right-120">
      <div className={`data-title text-4xl`}>
        <span>Highlands</span>
      </div>
      <div className={`data-subtitle text-2xl`}>
        <span>Scotland</span>
      </div>
      <div className={`data-description text-base`}>
        <span>The mountains are calling</span>
      </div>
    </div>
  );
};

export default TextWrapper;
