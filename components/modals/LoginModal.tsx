import useLoginModal from "@/Hooks/useLoginModal";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/Hooks/useRegisterModal";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onOpen();
    loginModal.onClose();
}, [loginModal, registerModal, isLoading]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      //TODO add login
      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
      <div className="flex flex-col gap-4">
        <Input placeholder="Email" onChange={(e) =>setEmail(e.target.value)} value={email} disabled={isLoading}/>
        <Input placeholder="Mot de passe" onChange={(e) =>setPassword(e.target.value)} value={password} disabled={isLoading}/>

      </div>
  )
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Pas de compte ?
          <span onClick={onToggle} className="cursor-pointer hover:underline text-white"> Inscription</span>
      </p>
    </div>
)

  return (
    <Modal disabled={isLoading} isOpen={loginModal.isOpen} title="Connexion" actionLabel="Connexion" onSubmit={onSubmit} body={bodyContent} onClose={loginModal.onClose} footer={footerContent}/>
  );
};

export default LoginModal;
