import Image from "next/image";
import logo from "@/assets/logo.jpg";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/router";

export default function Home() {
  const { open, close } = useWeb3Modal();
  const { walletInfo } = useWalletInfo();
  const router = useRouter();
  // console.log('walletInfo =================== ', walletInfo);
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
          router.push("/chat");
          // open({ view: "Connect" }).then((res) => {
          //   console.log("res =================== ", res);
          // });
        }}
        className="bg-black px-8 py-4 text-[#fff] mt-4"
      >
        CONNECT WALLET
      </button>
    </main>
  );
}

