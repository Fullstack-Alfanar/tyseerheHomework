import './Changecol.css';

export default function ChangingColor() {
    return (
        <div>
            <label>choose an color</label>
            <input id="color"  type={"text"} onChange={() => {
                document.querySelector("#square").style.background = document.querySelector("#color").value;
            }} />
            <div id="square" className="square">

            </div>
        </div>
    );
}




