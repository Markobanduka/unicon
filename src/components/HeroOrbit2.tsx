import { PropsWithChildren } from "react";

//-z-20; flex ic js ; 4:33

const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{
  size: number;
  rotation: number;
}>) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center ">
      <div className="">
        <div
          className="inline-flex"
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
