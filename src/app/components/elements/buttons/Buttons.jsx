const styles = {
  // Base button styles
  def : "rounded-lg font-bold align-middle items-center cursor-pointer px-2 py-1 shadow shadow-gray-900",
  hover : "hover:border-gray-700 hover:text-gray-700",
  active : "active:shadow-none",
  md : "md:px-4 md:py-2",
  lg : "lg:px-4 lg:py-2",

  // Button variants
  outlined : "border-2 border-gray-900 flex flex rounded-lg text-gray-900 font-bold align-middle items-center cursor-pointer px-2 py-1",
  outlinedHover : "hover:border-gray-600 hover:text-gray-600 hover:mix-blend-color-burn",

  filled : "rounded-lg bg-gray-800 border-gray-800 text-gray-200 font-bold align-middle items-center cursor-pointer px-2 py-1 mix-blend-color-burn ",
  filledHover : "hover:text-gray-200 hover:golden-animation hover:golden-animation hover:bg-clip-",
  filledActive: "active:border-gray-950 border-2"

}

export function OutlinedBtn({children, onClick}) {
  return (
    <button onClick={onClick} className={`${styles.def} ${styles.md} ${styles.lg} ${styles.outlined} ${styles.outlinedHover} ${styles.active}`}>
      {children}
    </button>
  );
}

export function FilledBtn({children, onClick}) {

  return (
    <button onClick={onClick} className={`${styles.def} ${styles.md} ${styles.lg} ${styles.filled} ${styles.filledHover} ${styles.filledActive} ${styles.active}`}>
      {children}
    </button>
  );
}