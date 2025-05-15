import BorderAniWithSvg from "./components/BorderAniWithSvg";

export default function App() {
    return (
        <div className="w-full h-screen pt-[10vw] pl-[10vw] bg-black">
            <BorderAniWithSvg widthVw={29} heightVw={4.1} duration={4} color="#D58300"/>
        </div>
    );
}
