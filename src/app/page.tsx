import Personal_Information from "./components/Personal_Information";
import Tool_Display from "./components/Tool_Display";

export default function Home() {
  return (
    <div className="container">
      <Personal_Information/>
      <div className="tool_icon_holder">
        <Tool_Display/>
      </div>
    </div>
  );
}
