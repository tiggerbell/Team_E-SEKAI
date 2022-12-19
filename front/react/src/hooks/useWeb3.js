import { useEffect, useState } from 'react'
import Web3 from "web3/dist/web3.min";

const useWeb3 = () => {
    // 메타마스크에서 사용하고 있는 계정 
    const [account, setAccount] = useState(null);
    // 클라이언트랑 메타마스크를 통신 시켜줄 web3
    const [web3, setWeb3] = useState(null);

    useEffect(()=>{
        // 화살표 async 즉시 실행 함수
        (async ()=>{
            if(!window.ethereum) return;
            // 메타마스크에 연결되어있는 계정을 가져오고
            const [address] = await window.ethereum.request({
                method : "eth_requestAccounts",
            })
            // 계정 값으로 state 값 변경.
            setAccount(address)
            const web3 = new Web3(window.ethereum);
            setWeb3(web3);
        })()

    },[])

  return [web3, account];
}

export default useWeb3
