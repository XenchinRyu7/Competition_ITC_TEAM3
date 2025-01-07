import React, { ReactNode } from "react";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="">
        <main>
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
