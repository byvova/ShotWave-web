import Header from "@/components/Header";
import Image from "next/image";
import { Provider } from "react-redux";


export default function Home() {
  return (
    <Provider>
      <Header></Header>
    </Provider>
  );
}
