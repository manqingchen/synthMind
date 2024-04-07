import Image from "next/image";
import logo from "@/assets/logo.jpg";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/router";
import { useDisconnect } from "wagmi";
import { useEffect } from "react";

export default function Home() {
  const { open } = useWeb3Modal();
  const { walletInfo } = useWalletInfo();
  const { disconnect } = useDisconnect();
  console.log("walletInfo =================== ", walletInfo);
  const router = useRouter();
  useEffect(() => () => disconnect(), [disconnect]);
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Image src={logo} alt="logo" className="w-40 h-40" />
      <h1 className="font-blob text-[40px]">
        SynthMind: Earn tokens by talking with Al
      </h1>
      <span>
        Generate high quality synthetic data with the help of Al and earn #SYNTH
        tokens
      </span>
      <button
        onClick={() => {
          open({ view: "Connect" }).then((res) => {
            // @ts-ignore
            if (!!res) router.push("/chat");
          });
        }}
        className="bg-black px-8 py-4 text-[#fff] mt-4"
      >
        CONNECT WALLET
      </button>
    </main>
  );
}
