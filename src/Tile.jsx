export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-16 w-16 md:h-32 md:w-32 bg-[#A8B4F7] rounded-md text-center"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-16 w-16 md:h-32 md:w-32 bg-[#6466E9] p-2 rounded-md">
          <Content
            className="text-white"
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "center",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-16 w-16 md:h-32 md:w-32 text-[#C9D2FB] rounded-md p-2">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "center",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>
      
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
