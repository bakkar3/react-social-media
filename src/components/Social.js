import React from "react";

function Social() {
  return (
    <ul className="list-group">

      <li className="list-group-item">
	      <input type="checkbox" id="facebook" />
	      <label for="facebook">Facebook</label>
      </li>

      <li className="list-group-item">
	      <input type="checkbox" id="Youtube" />
	      <label for="Youtube">Youtube</label>
      </li>

      <li className="list-group-item">
	      <input type="checkbox" id="Instagram" />
	      <label for="Instagram">Instagram</label>
      </li>
      
    </ul>
  );
}
export default Social;
