import React from "react";

function Links() {
  return (
    <div className="flex flex-col justify-center h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
      <div className="flex flex-col items-center min-h-screen">
        <div className="text-lg mb-4">
          <p>Here are some useful links:</p>
        </div>
        <div className="flex flex-col space-y-4">
          <a
            href="https://mytime-lite.aka.corp.amazon.com/wfcstatic/applications/navigator/html5/dist/container/index.html?version=8.1.7.1380#/"
            className="text-blue-500 hover:underline"
          >
            Kronos
          </a>
          <a
            href="https://argus.aka.amazon.com/#!/tracker/track"
            className="text-blue-500 hover:underline"
          >
            Argus
          </a>
          <a
            href="https://mytimeoff.corp.amazon.com/time_off"
            className="text-blue-500 hover:underline"
          >
            Time-Off
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
