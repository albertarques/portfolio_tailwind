export function Box({children, className}) {

  return (
        <div className = {`col-span-12 col-start-1 md:px-0 ${className}`}> 
          {children}
        </div>
  );
}
