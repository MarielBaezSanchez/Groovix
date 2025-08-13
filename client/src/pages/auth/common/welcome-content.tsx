function WelcomeContent() {
  return (
    <div className="h-screen flex items-center justify-center bg-primary w-full">
      <div className="flex flex-col gap-2 justify-center items-center">
        <img src="./groovix.png" alt="logo" className="w-64 h-56 " />
        <h1 className="text-orange-500 text-6xl font-semibold">GROOVIX - EVENTS</h1>
        <p className="text-gray-300 text-sm text-center">
          Hazlo Groovix. Hazlo inolvidable
        </p>
      </div>
    </div>
  );
}

export default WelcomeContent;
