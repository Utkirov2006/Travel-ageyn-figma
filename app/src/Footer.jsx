import Btns from "./components/Btns";

export default function Footer() {
    return (

        <ul className="footer">

            <div className="wrapper-one">
                <button style={{ width: "120px", height: "45px", background: "#FFC814", border: "1px", }}>HOTEL</button>
                <Btns name="Flight" />
                <Btns name="Car" />
                <Btns name="Ship" />

            </div>

            <div className="wrapper-two ">
                <ol>Your Destination <Btns name="Thailand" /></ol>
                <ol>Check In <Btns name="01-26-22" /></ol>
                <ol>Check Out <Btns name="01-30-22" /></ol>
                <ol>Child <Btns name="2" /></ol>
                <ol>Adult <Btns name="3" /></ol>



                <button style={{ width: "160px", height: "56px", background: "#FFC814", position: "relative", top: "20px", borderRadius: "5px", fontWeight: "600" }}>Book now</button>




            </div>


        </ul>
    )
}

