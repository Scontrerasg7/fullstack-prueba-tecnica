import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons.jsx";

export function Portfolio () {
    return (
        <>
          <label className="cart-button">
            <CartIcon/>
          </label>

          <aside className="cart">
            <ul>
                <li>
                    <div>
                        <strong>Fondo 1</strong>
                    </div>

                    <footer>
                        <small>
                            500000
                        </small>
                    </footer>
                </li>
            </ul>
          </aside>
        </>
    )
}