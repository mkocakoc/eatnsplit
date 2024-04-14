
function Button({children, act}) {
  return <button className="button" onClick={act}> {children}</button>;
}

export default Button;