import Countdown from "./countdown";


export default function FuckMe() {
    const targetDate = new Date('2024-02-06T20:00:00+07:00');

    return (
        <>
            <div>
                <Countdown targetDate={targetDate} />
            </div>
        </>
    )
}