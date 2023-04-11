import logo from './logo.svg';
import './App.css';
//==================================  Import all dependencies  ============================

import { BrowserRouter, Routes, Route } from "react-router-dom";
import config from './coreFiles/config'
import Home from './component/home'
import Txs from './component/txs'
import Tx from './component/tx'
import Block from './component/block'
import TxsInternal from './component/txsInternal'
import Blocks from './component/blocks'
import Address from './component/address'
import Busy from './component/busy'
import Accounts from './component/accounts'
import ContractsVerified from './component/contractsVerified'
import Tokens from './component/tokens'
import Tokentxns from './component/tokentxns'
import Tokensnft from './component/tokens-nft'
import Tokentxnsnft from './component/tokentxns-nft'
import Tokensnft1155 from './component/tokens-nft1155'
import Tokentxnsnft1155 from './component/tokentxns-nft1155'
import Charts from './component/charts'
import Apis from './component/apis'
import VerifyContract from './component/verifyContract'
import Opcodetool from './component/opcode-tool'
import PushTx from './component/pushtx'
import Vyper from './component/vyper'
import Contractdiffchecker from './component/contractdiffchecker'
import Labelcloud from './component/labelcloud'
import VerifiedSignatures from './component/verifiedSignatures'
import Tokenapprovalchecker from './component/tokenapprovalchecker'
import Unitconverter from './component/unitconverter'
import Login from './component/login'
import Forgetpassword from './component/forgetpassword'
import Register from './component/register'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={`${config.baseUrl}`} element={<Home />} />
          <Route path={`${config.baseUrl}txs`} element={<Txs />} />

          <Route path={`${config.baseUrl}tx`} element={<Tx />} />
          <Route path={`${config.baseUrl}busy`} element={<Busy />} />
          <Route path={`${config.baseUrl}block`} element={<Block />} />

          <Route path={`${config.baseUrl}txsInternal`} element={<TxsInternal />} />
          <Route path={`${config.baseUrl}address`} element={<Address />} />
          <Route path={`${config.baseUrl}blocks`} element={<Blocks />} />
          <Route path={`${config.baseUrl}accounts`} element={<Accounts />} />
          <Route path={`${config.baseUrl}contractsVerified`} element={<ContractsVerified />} />
          <Route path={`${config.baseUrl}tokens`} element={<Tokens />} />
          <Route path={`${config.baseUrl}tokentxns`} element={<Tokentxns />} />
          <Route path={`${config.baseUrl}token-nfts`} element={<Tokensnft />} />
          <Route path={`${config.baseUrl}tokentxns-nft`} element={<Tokentxnsnft />} />
          <Route path={`${config.baseUrl}tokens-nft1155`} element={<Tokensnft1155 />} />
          <Route path={`${config.baseUrl}tokentxns-nft1155`} element={<Tokentxnsnft1155 />} />
          <Route path={`${config.baseUrl}charts`} element={<Charts />} />
          <Route path={`${config.baseUrl}apis`} element={<Apis />} />
          <Route path={`${config.baseUrl}verifyContract`} element={<VerifyContract />} />
          <Route path={`${config.baseUrl}vyper`} element={<Vyper />} />
          <Route path={`${config.baseUrl}opcode-tool`} element={<Opcodetool />} />
          <Route path={`${config.baseUrl}pushtx`} element={<PushTx />} />
          <Route path={`${config.baseUrl}contractdiffchecker`} element={<Contractdiffchecker />} />
          <Route path={`${config.baseUrl}labelcloud`} element={<Labelcloud />} />
          <Route path={`${config.baseUrl}verifiedSignatures`} element={<VerifiedSignatures />} />
          <Route path={`${config.baseUrl}tokenapprovalchecker`} element={<Tokenapprovalchecker />} />
          <Route path={`${config.baseUrl}unitconverter`} element={<Unitconverter />} />
          <Route path={`${config.baseUrl}login`} element={<Login />} />
          <Route path={`${config.baseUrl}forgetpassword`} element={<Forgetpassword />} />
          <Route path={`${config.baseUrl}register`} element={<Register />} />
          
        </Routes>
  </div>
    </BrowserRouter>

  );
}

export default App;
