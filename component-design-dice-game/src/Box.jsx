import "./Box.css";
export default function Box({toggle, isActive}) {
  return (
    <div
      className="Box"
      onClick={toggle}
      style={{ backgroundColor: isActive ? "red" : "green" }}
    >
    </div>
  );
}

// function Box({ isActive, toggle }) {
//   return (
//     <div
//       onClick={toggle}
//       className="Box"
//       style={{ backgroundColor: isActive ? "red" : "black" }}
//     ></div>
//   );
// }

// export default Box;
