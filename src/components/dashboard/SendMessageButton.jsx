import Image from 'next/image';

const SendMessageButton = ({ sendMessage }) => {
  return (
    <Image
      className="sendmessage-icon"
      src="/icons/SendMessageIcon.svg"
      alt={'Send Message'}
      onClick={sendMessage}
      width={10}
      height={10}
    />
  );
};

export default SendMessageButton;
