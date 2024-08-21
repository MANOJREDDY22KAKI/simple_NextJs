import "./globals.css";
import Header from "./Headers";
import SubHeaders from "./SubHeaders";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-500 flex justify-between items-center">
        <h1 className="text-white font-bold text-3xl">Shopping App</h1>
        <Header></Header>
      </div>
      <div className="bg-gray-600 p-4 ">
        <SubHeaders></SubHeaders>
        
      </div>
     
    </div>
  );
}
