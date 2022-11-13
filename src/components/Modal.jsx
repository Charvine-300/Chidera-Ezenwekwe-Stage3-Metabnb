import '../assets/styles/modal.scss';
import Close from '../assets/images/modal_close.png';
import Mask from '../assets/images/wallet_mask.png';
import Connect from '../assets/images/wallet_connect.png';
import Arrow from '../assets/images/wallets_arrows.png';


const Modal = ({ modal, setModal }) => {

  return (  
    <>
      <div className="modal-wrapper" style={{'display': `${modal}`}}>
        <div className="wallet-options">
          <div className="wallet-info">
            <div className="wallet-flex">
              <p> Connect Wallet </p>
              <img 
                src={Close} 
                alt="Close wallet modal" 
                onClick={() => setModal('none')}
              />
            </div>
          </div>
          <div className="wallet-list">
            <p> Choose your preferred wallet: </p>
            <div className="wallets">
              <div className="wallet-logo">
                <img src={Mask} alt="Metamask Wallet" />
                <p> Metamask </p>
              </div>
              <img src={Arrow} alt="Link to wallet" />
            </div>
            <div className="wallets">
              <div className="wallet-logo">
                <img src={Connect} alt="WalletConnect Wallet" />
                <p> WalletConnect </p>
              </div>
              <img src={Arrow} alt="Link to wallet" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Modal;